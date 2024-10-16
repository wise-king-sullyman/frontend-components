/* eslint-disable camelcase */
import { Font, StyleSheet } from '@react-pdf/renderer';
import c_table_m_compact_cell_PaddingBlockStart from '@patternfly/react-tokens/dist/js/c_table_m_compact_cell_PaddingBlockStart';
import c_table_m_compact_cell_PaddingBlockEnd from '@patternfly/react-tokens/dist/js/c_table_m_compact_cell_PaddingBlockEnd';
import t_chart_global_Fill_Color_700 from '@patternfly/react-tokens/dist/js/t_chart_global_fill_color_700';
import t_chart_global_warning_Color_200 from '@patternfly/react-tokens/dist/js/t_chart_global_warning_color_200';
import t_chart_global_warning_Color_100 from '@patternfly/react-tokens/dist/js/t_chart_global_warning_color_100';
import t_global_text_color_regular from '@patternfly/react-tokens/dist/js/t_global_text_color_regular';
import t_global_text_color_brand_default from '@patternfly/react-tokens/dist/js/t_global_text_color_brand_default';
import chart_color_red_100 from '@patternfly/react-tokens/dist/js/t_chart_color_red_orange_100';
import chart_color_red_200 from '@patternfly/react-tokens/dist/js/t_chart_color_red_orange_200';
import chart_color_red_300 from '@patternfly/react-tokens/dist/js/t_chart_color_red_orange_300';
import t_global_icon_color_status_info_default from '@patternfly/react-tokens/dist/js/t_global_icon_color_status_info_default';
import t_global_color_status_info_default from '@patternfly/react-tokens/dist/js/t_global_color_status_info_default';
import t_global_text_color_status_info_default from '@patternfly/react-tokens/dist/js/t_global_text_color_status_info_default';
import t_global_color_status_warning_default from '@patternfly/react-tokens/dist/js/t_global_color_status_warning_default';
import t_global_text_color_status_warning_default from '@patternfly/react-tokens/dist/js/t_global_text_color_status_warning_default';
import t_global_icon_color_status_warning_default from '@patternfly/react-tokens/dist/js/t_global_icon_color_status_warning_default';
import t_color_orange_60 from '@patternfly/react-tokens/dist/js/t_color_orange_60';
import t_global_color_status_danger_default from '@patternfly/react-tokens/dist/js/t_global_color_status_danger_default';

import { fontTypes, generateFonts, redhatFont } from './fonts';

Font.register({ family: 'Overpass', fonts: generateFonts(fontTypes) });

const { RedHatDisplay, RedHatText } = redhatFont();

Font.register({ family: 'RedHatDisplay', fonts: Object.values(RedHatDisplay) });
Font.register({ family: 'RedHatText', fonts: Object.values(RedHatText) });

export default (style = {}) =>
  StyleSheet.create({
    ...style,
    page: {
      fontWeight: 500,
      height: '100%',
      padding: '20 50',
      lineHeight: 1.5,
    },
    displayFont: {},
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    currDate: {
      alignSelf: 'flex-end',
      marginLeft: 'auto',
      fontSize: 9,
      fontStyle: 'italic',
      color: '#6e6b6c',
    },
    reportNameWrapper: {
      margin: '30, 0, 15',
    },
    reportName: {
      fontSize: 28,
      color: chart_color_red_100.value,
    },
    groupName: {
      fontSize: 16,
      color: chart_color_red_100.value,
    },
    largeSpacing: {
      margin: '30 0',
    },
    mediumSpacing: {
      margin: '15 0',
    },
    smallSpacing: {
      margin: '7 0',
    },
    text: {
      fontSize: 9,
      color: t_global_text_color_regular.value,
    },
    firstTitle: {
      fontSize: 9,
      fontWeight: 700,
      color: chart_color_red_100.value,
    },
    secondTitle: {
      fontWeight: 700,
      fontSize: 9,
      color: t_chart_global_Fill_Color_700.value,
    },
    thirdTitle: {
      fontSize: 9,
      color: t_global_text_color_brand_default.value,
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    panelLabels: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    colorCrit: {
      color: chart_color_red_100.value,
    },
    colorHigh: {
      color: t_chart_global_warning_Color_100.value,
    },
    colorMedium: {
      color: t_chart_global_warning_Color_200.value,
    },
    defaultColor: {
      color: t_global_text_color_regular.value,
    },
    labelColorsLow: {
      bgColor: t_global_color_status_info_default.value,
      textColor: t_global_text_color_status_info_default.value,
      iconColor: t_global_icon_color_status_info_default.value,
    },
    labelColorsModerate: {
      bgColor: t_global_color_status_warning_default.value,
      textColor: t_global_text_color_status_warning_default.value,
      iconColor: t_global_icon_color_status_warning_default.value,
    },
    labelColorsImportant: {
      bgColor: '#fff5ec',
      textColor: t_color_orange_60.value,
      iconColor: t_chart_global_warning_Color_100.value,
    },
    labelColorsCrit: {
      bgColor: t_global_color_status_danger_default.value,
      textColor: chart_color_red_300.value,
      iconColor: chart_color_red_200.value,
    },
    compactCellPadding: {
      paddingLeft: c_table_m_compact_cell_PaddingBlockStart.value,
      paddingBottom: c_table_m_compact_cell_PaddingBlockEnd.value,
      paddingTop: c_table_m_compact_cell_PaddingBlockStart.value,
    },
    dl: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    dt: {
      flexGrow: 1,
      flexShrink: 1,
      width: '30%',
    },
    dd: {
      flexGrow: 1,
      flexShrink: 1,
      width: '70%',
    },
  });
