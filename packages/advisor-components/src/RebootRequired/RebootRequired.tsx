import './RebootRequired.scss';

import React from 'react';
import { Icon, Content, ContentVariants } from '@patternfly/react-core';
import { PowerOffIcon } from '@patternfly/react-icons';

import { RuleDetailsMessages } from '../RuleDetails/RuleDetails';

interface RebootRequiredProps {
  rebootRequired: boolean;
  messages: RuleDetailsMessages;
}

const RebootRequired: React.FC<RebootRequiredProps> = ({ messages, rebootRequired }) => (
  <span className="system-reboot-message">
    <Icon>
      <PowerOffIcon className={rebootRequired ? 'reboot-required-icon' : 'no-reboot-required-icon'} />
    </Icon>
    <Content className="system-reboot-message__content">
      <Content component={ContentVariants.p}>{messages.systemReboot}</Content>
    </Content>
  </span>
);

export default RebootRequired;
