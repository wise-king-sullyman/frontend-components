/* eslint-disable camelcase */
import chart_color_yellow_100 from '@patternfly/react-tokens/dist/js/chart_color_yellow_100';
import chart_color_yellow_200 from '@patternfly/react-tokens/dist/js/chart_color_yellow_200';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/js/chart_color_yellow_300';
import chart_color_yellow_400 from '@patternfly/react-tokens/dist/js/chart_color_yellow_400';
import chart_color_yellow_500 from '@patternfly/react-tokens/dist/js/chart_color_yellow_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_yellow_300.value,
  chart_color_yellow_100.value,
  chart_color_yellow_500.value,
  chart_color_yellow_200.value,
  chart_color_yellow_400.value,
];

export const LightGoldColorTheme = ColorTheme({
  COLOR_SCALE,
});
