import React from 'react';
import { ScalprumComponent, ScalprumComponentProps } from '@scalprum/react-core';
import { Bullseye, Spinner } from '@patternfly/react-core';
import classNames from 'classnames';
import { ChromeAPI } from '@redhat-cloud-services/types';

export type ExcludeModulesKeys = 'appName' | 'module' | 'scope';

export interface AsyncComponentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  /** Name of the app from which module will be loaded. */
  appName: string;
  /** Loaded module, it has to start with `./`. */
  module: string;
  /** Optional scope, if not passed appName is used. */
  scope?: string;
  /** React Suspense fallback component. <a href="https://reactjs.org/docs/code-splitting.html#reactlazy" target="_blank">Learn more</a>. */
  fallback: React.ReactElement;
  /** Optional wrapper component */
  component: keyof JSX.IntrinsicElements;
  /** Other props passed to the AsyncComponent */
  [key: string]: any;
}

interface BaseAsyncComponentProps extends AsyncComponentProps {
  innerRef: React.MutableRefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void) | null;
}

const BaseAsyncComponent: React.FunctionComponent<BaseAsyncComponentProps> = ({
  appName,
  scope,
  module,
  fallback = (
    <Bullseye>
      <Spinner size="xl" />
    </Bullseye>
  ),
  innerRef,
  className,
  component: Cmp = 'section',
  ...props
}) => {
  const SCProps: ScalprumComponentProps<ChromeAPI, Omit<AsyncComponentProps, 'component'>> = {
    className,
    appName,
    module,
    scope: scope ?? appName,
    ref: innerRef,
    fallback,
    ...props,
  };
  return (
    <Cmp className={classNames(className, appName)}>
      <ScalprumComponent {...SCProps} />
    </Cmp>
  );
};

/**
 * Async component that wraps ScalprumComponent for easier manipulation.
 *
 * This component uses fallback as ErrorComponent, if you want to show different
 * component for error pass it as ErrorComponent prop.
 */
export const AsyncComponent = React.forwardRef<HTMLElement, AsyncComponentProps>((props, ref) => {
  const { appName, module, fallback, component, ...rest } = props;
  return <BaseAsyncComponent innerRef={ref} appName={appName} module={module} fallback={fallback} component={component} {...rest} />;
});

export default AsyncComponent;
