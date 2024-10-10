import React, { useState } from 'react';
import ConditionalFilter from '@ausuliv/frontend-components/ConditionalFilter';
import { Content, ContentVariants,  } from '@patternfly/react-core';

const groups = [
  {
    label: 'First group',
    value: 1,
    items: [
      {
        label: 'Option 1',
        type: 'checkbox',
        value: 1,
      },
      {
        label: 'Option 2',
        type: 'checkbox',
        value: 2,
      },
      {
        label: 'Option 3',
        type: 'checkbox',
        value: 4,
      },
    ],
  },
  {
    label: 'Second group',
    type: 'checkbox',
    groupSelectable: true,
    value: 'second',
    items: [
      {
        label: 'Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        value: 2,
      },
      {
        label: 'Option 3',
        value: 4,
      },
    ],
  },
];

const treeViewGroups = [
  {
    value: 11,
    type: 'treeView',
    label: 'Some',
    items: [
      {
        value: 1,
        label: 'First',
        children: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 4,
          },
        ],
      },
      {
        value: 22,
        label: 'Shallow',
      },
    ],
  },
];

const checkbox = [
  {
    label: <div>Some value</div>, // value can be React.node
    value: 1,
  },
  {
    label: 'Other',
    value: 2,
  },
];

const CFExample = () => {
  const [groupsSelected, setGroupsSelected] = useState({});
  const [treeViewSelected, setTreeViewSelected] = useState({});
  const [checkboxSelected, setCheckboxSelected] = useState([]);
  const [radioSelected, setRadioSelected] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [filterBy, setFilterBy] = useState('');
  return (
    <div>
      <Content>
        <Content component={ContentVariants.dl}>
          <Content component={ContentVariants.dt}>Selected groups</Content>
          <Content component={ContentVariants.dd}>
            <code>{JSON.stringify(groupsSelected || {}, null, 2)}</code>
          </Content>
        </Content>
        <Content component={ContentVariants.dl}>
          <Content component={ContentVariants.dt}>Selected TreeView</Content>
          <Content component={ContentVariants.dd}>
            <code>{JSON.stringify(treeViewSelected || {}, null, 2)}</code>
          </Content>
        </Content>
        <Content component={ContentVariants.dl}>
          <Content component={ContentVariants.dt}>Selected checkbox</Content>
          <Content component={ContentVariants.dd}>
            <code>{JSON.stringify(checkboxSelected || {}, null, 2)}</code>
          </Content>
        </Content>
        <Content component={ContentVariants.dl}>
          <Content component={ContentVariants.dt}>Selected radio</Content>
          <Content component={ContentVariants.dd}>
            <code>{JSON.stringify(radioSelected || [], null, 2)}</code>
          </Content>
        </Content>
        <Content component={ContentVariants.dl}>
          <Content component={ContentVariants.dt}>Text filter</Content>
          <Content component={ContentVariants.dd}>
            <code>{textValue}</code>
          </Content>
        </Content>
      </Content>
      <ConditionalFilter
        items={[
          {
            type: 'group',
            label: 'Group',
            value: 'group-filter',
            filterValues: {
              groups,
              selected: groupsSelected,
              onChange: (_event, newSelection) => setGroupsSelected(newSelection),
              placeholder: 'Group filter demo',
            },
          },
          {
            type: 'group',
            label: 'Group searchable',
            value: 'group-searchable-filter',
            filterValues: {
              groups: groups
                .map((group) => {
                  const searched = group.items.filter(({ label }) => label?.includes(filterBy));
                  if (searched.length === 0) {
                    return undefined;
                  }
                  return {
                    ...group,
                    items: searched,
                  };
                })
                .filter(Boolean),
              selected: groupsSelected,
              onChange: (_event, newSelection) => setGroupsSelected(newSelection),
              placeholder: 'Group searchable filter demo',
              filterBy,
              onFilter: (filterBy) => setFilterBy(filterBy),
            },
          },
          {
            type: 'group',
            label: 'TreeView',
            value: 'tree-view-filter',
            filterValues: {
              groups: treeViewGroups,
              selected: treeViewSelected,
              onChange: (_event, newSelection) => setTreeViewSelected(newSelection),
              placeholder: 'TreeView filter demo',
            },
          },
          {
            type: 'checkbox',
            value: 'checkbox-filter',
            label: 'Checkbox',
            filterValues: { items: checkbox, value: checkboxSelected, onChange: (_e, val) => setCheckboxSelected(val) },
          },
          {
            type: 'radio',
            value: 'radio-filter',
            label: 'Radio',
            filterValues: { items: checkbox, value: radioSelected, onChange: (_e, val) => setRadioSelected(val) },
          },
          {
            type: 'text', // for text filter this is optional
            value: 'text-filter', // optional identifier when activating filter
            label: 'Text',
            filterValues: { value: textValue, onChange: (_e, val) => setTextValue(val) },
          },
        ]}
      />
    </div>
  );
};

export default CFExample;
