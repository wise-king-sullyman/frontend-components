import React from 'react';
import BatteryPF, { SeverityProps } from '@patternfly/react-component-groups/dist/dynamic/Severity';

/**
 * @deprecated Do not use deprecated Battery import, the component has been moved to @patternfly/react-component-groups
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Battery: React.FunctionComponent<SeverityProps> = BatteryPF;

export default Battery;
