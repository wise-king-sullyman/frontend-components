import React from 'react';
import ConditionalFilter from '@ausuliv/frontend-components/ConditionalFilter';
import { Title } from '@patternfly/react-core';

export const checkboxFilterConfig = {
  label: 'name',
  type: 'checkbox',
  value: 'checkbox-filter', // optional identifier when activating filter
  filterValues: {
    // If no items are passed the component defaults to text input
    items: [
      {
        label: <div>Some value</div>, // value can be React.node
        value: 1,
      },
      {
        label: 'Other',
        value: 2,
      },
    ],
  },
  // id: 'some-id', // optional ID
};

const RadioFilter = () => {
  return (
    <div>
      <Title headingLevel="h3" size="lg">
        Selection is controlled by ConditionalFilter itself!
      </Title>
      <ConditionalFilter items={[checkboxFilterConfig]} />
    </div>
  );
};

export default RadioFilter;
