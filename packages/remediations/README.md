# RedHat Cloud Services frontend components - remediations

[![npm version](https://badge.fury.io/js/%40redhat-cloud-services%2Ffrontend-components-remediations.svg)](https://badge.fury.io/js/%40redhat-cloud-services%2Ffrontend-components-remediations)


This package exports components to show remediations dialog, button and also export API to be used directly trough this package.

## Installation
With NPM
```bash
npm i -S @redhat-cloud-services/frontend-components-remediations
```

With yarn
```bash
yarn add @redhat-cloud-services/frontend-components-remediations
```

This package is dependent on [@ausuliv/frontend-components-utilities](https://www.npmjs.com/package/@ausuliv/frontend-components-utilities) and [@redhat-cloud-services/frontend-components](https://www.npmjs.com/package/@redhat-cloud-services/frontend-components) it will automatically install them trough direct dependencies.

## Migration guide v2 -> v3

### Import paths

Absolute import paths have changed. Do not reference CJS or EMS or the file extensions in your import paths

```diff
-import RemediationButton from '@redhat-cloud-services/frontend-components-remediations/esm/RemediationButton';
-import RemediationButton from '@redhat-cloud-services/frontend-components-remediations/esm/RemediationButton.js';
+import RemediationButton from '@redhat-cloud-services/frontend-components-remediations/RemediationButton';
```

### CSS imports
It is no longer required to import styles. CSS is import automatically with the javascript

```diff
-import '@redhat-cloud-services/frontend-components-remediations/index.css';
```

## Documentation Links

* Usage
    * [Remediations](doc/remediations.md)
