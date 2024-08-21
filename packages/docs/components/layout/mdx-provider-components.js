/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  Content,
  TextListItemVariants,
  TextListVariants,
  ContentVariants,
  Title,
} from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { LinkIcon } from '@patternfly/react-icons';
import Link from 'next/link';
import CodeHighlight from '../example-component/code-highlight';

const useAnchorStyles = createUseStyles({
  anchorIcon: {
    display: 'none !important',
    padding: '0px !important',
    margin: '0px !important',
    marginLeft: '4px !important',
  },
  anchor: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover $anchorIcon': {
      display: 'inline-block !important',
    },
  },
});

function addLinkAnchor(Component) {
  return ({ className, ...props }) => {
    const classes = useAnchorStyles();
    if (typeof props?.children !== 'undefined') {
      /**
       * We know the title is always either a string or a element with a string child.
       */
      const text = typeof props?.children === 'string' ? props.children : props?.children?.props?.children || '';
      const anchor = text.replace(/\s/gm, '');
      return (
        <Component className={classnames(className, 'docs-content-link')} {...props}>
          <a id={anchor} className={classes.anchor} href={`#${anchor}`}>
            {props.children}
            <Button icon={<LinkIcon />} className={classes.anchorIcon} component="span" variant="plain"></Button>
          </a>
        </Component>
      );
    }

    return <Component {...props} />;
  };
}

const useTableStyles = createUseStyles({
  card: {
    overflowY: 'auto',
  },
});

const A = ({ children, target, ...props }) => (
  <Link {...props}>
    <a target={target}>{children}</a>
  </Link>
);

export const H1 = addLinkAnchor(({ className, ...props }) => <Title className={classnames(className, 'pf-v6-u-mb-lg')} headingLevel="h1" {...props} />);

export const H2 = addLinkAnchor(({ className, ...props }) => (
  <Title className={classnames(className, 'pf-v6-u-mb-md pf-v6-u-mt-md')} headingLevel="h2" {...props} />
));

export const H3 = addLinkAnchor(({ className, ...props }) => (
  <Title className={classnames(className, 'pf-v6-u-mb-md pf-v6-u-mt-md')} headingLevel="h3" {...props} />
));
export const H4 = addLinkAnchor(({ className, ...props }) => (
  <Title className={classnames(className, 'pf-v6-u-mb-md pf-v6-u-mt-md')} headingLevel="h4" {...props} />
));
export const Table = (props) => {
  const classes = useTableStyles();
  return (
    <Card className={classnames('pf-v6-u-mb-lg', classes.card)}>
      <CardBody>
        <table className="pf-v6-c-table pf-m-grid-md" {...props} />
      </CardBody>
    </Card>
  );
};

const Code = ({ children, className }) =>
  /language-(\w+)/.exec(className || '') ? (
    <CodeHighlight language={className ? className.split('-').pop() : ''} sourceCode={children} />
  ) : (
    <code>{children}</code>
  );

const Li = ({ children }) => <Content component={TextListItemVariants.li}>{children}</Content>;

const OrderedList = ({ children }) => (
  <Content>
    <Content component={TextListVariants.ol}>{children}</Content>
  </Content>
);

export const UnorderedList = ({ children }) => (
  <Content>
    <Content component={TextListVariants.ul}>{children}</Content>
  </Content>
);

export const Paragraph = ({ children, className }) => (
  <Content className={className}>
    <Content component={ContentVariants.p}>{children}</Content>
  </Content>
);

const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  table: Table,
  code: Code,
  li: Li,
  ol: OrderedList,
  ul: UnorderedList,
  p: Paragraph,
};

export default components;
