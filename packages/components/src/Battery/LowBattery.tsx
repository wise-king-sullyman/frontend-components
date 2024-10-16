import React from 'react';
import Battery, { SeverityProps } from '@patternfly/react-component-groups/dist/dynamic/Severity';

/**
 * @deprecated Do not use deprecated LowBattery import, the component has been moved to @patternfly/react-component-groups
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LowBattery: React.FunctionComponent<SeverityProps> = (props) => <Battery {...props} severity="minor" />;

export default LowBattery;
