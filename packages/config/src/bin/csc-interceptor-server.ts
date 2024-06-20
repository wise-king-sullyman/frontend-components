const path = require('path');
const axios = require('axios');
const fs = require('fs');
const jsyaml = require('js-yaml');

import express from 'express';
import { jsVarName } from '@ausuliv/frontend-components-config-utilities';

const cwd = process.cwd();
const pgk = require(path.resolve(cwd, './package.json'));

const appname = jsVarName(pgk.insights.appname);
const moduleName = jsVarName(appname);

const frontendDeployConfig = jsyaml.load(fs.readFileSync(path.resolve(cwd, './deploy/frontend.yaml')));
const frontendSpec = frontendDeployConfig.objects[0];
const navItems = frontendSpec.spec.navItems;
const fecModules: {
  modules: {
    routes: { pathname: string }[];
  }[];
} = frontendSpec.spec.module;
const bundles = Array.from(
  new Set(
    fecModules.modules
      .map(({ routes }) => routes)
      .flat()
      .map(({ pathname }) => pathname.split('/')[1])
  )
);

const app = express();
const port = 9999;

const BASE_URL = 'https://raw.githubusercontent.com/RedHatInsights/chrome-service-backend/main';

function getRequestBundle(requestUrl: string) {
  const bundle = requestUrl.split('/').pop()?.split('-').shift();
  return bundle === 'rhel' ? 'insights' : bundle;
}

app.get('*', async (req, res, next) => {
  try {
    const reqUrl = BASE_URL + req.url.replace('/api/chrome-service/v1', '');
    const schema = await axios.get(reqUrl);
    if (req.url.includes('-navigation.json') && bundles.some((bundle) => req.url.includes(bundle))) {
      const requestBundle = getRequestBundle(req.url);
      /** handle nav json */
      const payload = schema.data;
      payload.navItems = [...payload.navItems, ...navItems.filter(({ href }: { href: string }) => requestBundle && href.includes(requestBundle))];
      res.json(payload);
      res.end();
      return;
    } else if (req.url.includes('fed-modules.json')) {
      /** handle fed-modules */
      const payload = schema.data;
      payload[moduleName] = fecModules;
      res.json(payload);
      res.end();
      return;
    }
    res.json(schema.data);
    res.end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.listen(port, () => {
  console.log('csc-intercept-server is running on port ' + port);
});
