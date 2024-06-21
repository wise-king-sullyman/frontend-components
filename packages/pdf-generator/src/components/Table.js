/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import color_gray_10 from '@patternfly/react-tokens/dist/js/color_gray_10';
import color_gray_50 from '@patternfly/react-tokens/dist/js/color_gray_50';
import { styleProps } from '../utils/propTypes';
import styles from '../utils/styles';

const appliedStyles = styles();

const Table = ({ rows, withHeader, headerStyles, rowsStyle, style, ...props }) => {
  const [header, ...cells] = rows;
  return (
    <View
      {...props}
      style={{
        ...appliedStyles.flexColum,
        ...style,
      }}
    >
      {withHeader && (
        <View
          style={{
            ...appliedStyles.flexRow,
            ...appliedStyles.compactCellPadding,
            ...headerStyles,
          }}
        >
          {header.map((cell, key) =>
            typeof cell === 'string' || cell instanceof String ? (
              <Text
                key={key}
                style={{
                  ...appliedStyles.secondTitle,
                  ...appliedStyles.compactCellPadding,
                  flex: 1,
                }}
              >
                {cell}
              </Text>
            ) : (
              cell
            )
          )}
        </View>
      )}
      <View
        style={{
          borderTopStyle: 'solid',
          borderTopColor: color_gray_50.value,
          borderTopWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: color_gray_50.value,
          borderBottomWidth: 1,
        }}
      >
        {(!withHeader ? [header, ...cells] : cells).map((row, key) => (
          <View
            key={key}
            style={{
              ...appliedStyles.flexRow,
              ...appliedStyles.compactCellPadding,
              ...(key % 2 && { backgroundColor: color_gray_10.value }),
              ...rowsStyle,
            }}
          >
            {row.map((cell, cellKey) =>
              typeof cell === 'string' || cell instanceof String ? (
                <Text
                  key={cellKey}
                  style={{
                    ...appliedStyles.text,
                    ...appliedStyles.compactCellPadding,
                    flex: 1,
                  }}
                >
                  {cell}
                </Text>
              ) : (
                cell
              )
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

Table.propTypes = {
  style: styleProps,
  rowsStyle: styleProps,
  withHeader: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
  headerStyles: styleProps,
};

Table.defaultProps = {
  style: {},
  headerStyles: {},
  rowsStyle: {},
};

export default Table;
