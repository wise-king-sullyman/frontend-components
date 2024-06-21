import React from 'react';
import { DownloadButton } from '@ausuliv/frontend-components/DownloadButton';
import { DropdownItem } from '@patternfly/react-core';

const extraItems = [<DropdownItem key="extra-1" component="button"></DropdownItem>];

const Example = () => {
  return (
    <div>
      <DownloadButton extraItems={extraItems} />
    </div>
  );
};

export default Example;
