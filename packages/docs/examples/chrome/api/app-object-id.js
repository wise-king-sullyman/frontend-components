import React from 'react';
import useChrome from '@ausuliv/frontend-components/useChrome';

const MyComponent = () => {
  const { appAction, appObjectId } = useChrome();
  const handleClick = () => {
    appAction('edit-entity');
    appObjectId(5);
  };

  return <button onClick={handleClick}>Open create dialong</button>;
};

export default MyComponent;
