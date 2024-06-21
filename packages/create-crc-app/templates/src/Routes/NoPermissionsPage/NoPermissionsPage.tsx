import React, { useEffect } from 'react';

import { Main } from '@ausuliv/frontend-components/Main';
import { NotAuthorized } from '@ausuliv/frontend-components/NotAuthorized';

const NoPermissionsPage = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('no-permissions');
  }, []);

  return (
    <Main>
      <NotAuthorized serviceName="Sample app" />
    </Main>
  );
};

export default NoPermissionsPage;
