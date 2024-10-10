import t_global_breakpoint_xs from "@patternfly/react-tokens/dist/js/t_global_breakpoint_xs";
import t_global_breakpoint_sm from "@patternfly/react-tokens/dist/js/t_global_breakpoint_sm";
import t_global_breakpoint_md from "@patternfly/react-tokens/dist/js/t_global_breakpoint_md";
import t_global_breakpoint_lg from "@patternfly/react-tokens/dist/js/t_global_breakpoint_lg";
import t_global_breakpoint_xl from "@patternfly/react-tokens/dist/js/t_global_breakpoint_xl";
import t_global_breakpoint_2xl from "@patternfly/react-tokens/dist/js/t_global_breakpoint_2xl";

const breakPoints = {
  xs: parseInt(t_global_breakpoint_xs.value.replace('px', '')),
  sm: parseInt(t_global_breakpoint_sm.value.replace('px', '')),
  md: parseInt(t_global_breakpoint_md.value.replace('px', '')),
  lg: parseInt(t_global_breakpoint_lg.value.replace('px', '')),
  xl: parseInt(t_global_breakpoint_xl.value.replace('px', '')),
  '2xl': parseInt(t_global_breakpoint_2xl.value.replace('px', '')),
};

export default breakPoints;
