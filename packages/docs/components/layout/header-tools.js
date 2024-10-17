import React, { Fragment, useState } from 'react';
import { ApplicationLauncher, ApplicationLauncherItem, PageHeaderTools } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import SearchInput from '../search/search-input';
import sections from '../sections/sections-definition';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
  search: {
    maxWidth: 400,
    margin: 'auto',
    '& .pf-v6-c-search-input__icon': {
      color: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--palette--black-600 */,
    },
  },
});

const HeaderTools = () => {
  const [isLauncherOpen, setLanucherOpen] = useState(false);
  const { pathname } = useRouter();
  const classes = useStyles();

  return (
    <Fragment>
      {pathname !== '/' && <SearchInput className={classes.search} />}
      <PageHeaderTools>
        <ApplicationLauncher
          position="right"
          onSelect={() => setLanucherOpen(false)}
          onToggle={() => setLanucherOpen((prev) => !prev)}
          isOpen={isLauncherOpen}
          items={sections.map(({ title, href }) => (
            <ApplicationLauncherItem
              key={title}
              component={
                <Link href={href || '#'}>
                  <a className="pf-v6-c-app-launcher__menu-item" href={href || '#'}>
                    {title}
                  </a>
                </Link>
              }
            />
          ))}
        />
        <a href="https://github.com/RedHatInsights/frontend-components" rel="noopener noreferrer" target="_blank">
          <img src="/github-logo.svg" alt="Github logo" />
        </a>
      </PageHeaderTools>
    </Fragment>
  );
};

export default HeaderTools;
