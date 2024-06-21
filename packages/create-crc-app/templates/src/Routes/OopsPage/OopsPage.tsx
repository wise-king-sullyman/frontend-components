import React, { useEffect } from 'react';

import { Main } from '@ausuliv/frontend-components/Main';
import { Unavailable } from '@ausuliv/frontend-components/Unavailable';

const OopsPage = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('oops-page');
  }, []);
  return (
    <Main>
      <Unavailable />
    </Main>
  );
};

export default OopsPage;
