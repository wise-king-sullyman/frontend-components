import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateFooter,  } from '@patternfly/react-core';
import { DisconnectedIcon } from '@patternfly/react-icons';

export interface NotConnectedProps {
  titleText?: React.ReactNode;
  bodyText?: React.ReactNode;
  buttonText?: React.ReactNode;
}

const NotConnected: React.FC<NotConnectedProps> = ({
  titleText = 'This system isn’t connected to Insights yet',
  bodyText = 'To get started, activate the Insights client for this system.',
  buttonText = 'Learn how to activate the Insights client',
}) => (
  <EmptyState  headingLevel="h5" icon={DisconnectedIcon}  titleText={titleText}>
    <EmptyStateBody>{bodyText}</EmptyStateBody>
    <EmptyStateFooter>
      <Button
        variant="primary"
        component="a"
        href="https://access.redhat.com/products/red-hat-insights/"
        target="_blank"
        rel="noopener noreferrer"
        className="pf-v6-u-mt-lg"
      >
        {buttonText}
      </Button>
    </EmptyStateFooter>
  </EmptyState>
);

export default NotConnected;
