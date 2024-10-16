import React from 'react';
import NotAuthorizedPF, { UnauthorizedAccessProps } from '@patternfly/react-component-groups/dist/dynamic/UnauthorizedAccess';

/**
 * @deprecated Do not use deprecated NotAuthorized import, the component has been moved to @patternfly/react-component-groups
 */
const NotAuthorized: React.FunctionComponent<UnauthorizedAccessProps> = ({
  bodyText = (
    <>
      Contact your organization administrator(s) for more information or visit&nbsp;<a href={`./iam/my-user-access`}>My User Access</a>&nbsp;to learn
      more about your permissions.
    </>
  ),
  ...props
}) => <NotAuthorizedPF {...props} bodyText={bodyText} />;

export default NotAuthorized;
