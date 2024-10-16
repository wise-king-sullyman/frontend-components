import React from 'react';
import { Bullseye, Card, CardBody, CardTitle, Gallery, GalleryItem, Content, ContentVariants, Title } from '@patternfly/react-core';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import truncate from 'lodash/truncate';
import sections from './sections-definition';

const useStyles = createUseStyles({
  description: {
    color: 'black',
    fontSize: "var(--pf-t--global--font--size--sm)",
  },
  cardBody: {
    overflow: 'hidden',
    height: 130,
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    height: 210,
    textDecoration: 'none',
    letterSpacing: 2,
    '& .pf-v6-c-card__title': {
      background: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--BackgroundColor--dark-400 */,
      color: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--Color--light-200 */,
      height: 80,
    },
    '&:hover': {
      '& .pf-v6-c-card__title': {
        background: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--BackgroundColor--dark-200 */,
      },
    },
  },
});

const Sections = () => {
  const classes = useStyles();

  return (
    <Gallery hasGutter className="pf-v6-u-my-2xl">
      {sections.map(({ title, href = '#', description = '' }) => (
        <GalleryItem key={title}>
          <Link href={href}>
            <a className={classes.link}>
              <Card id={title} className={classes.card} isSelectable>
                <CardTitle className={classnames('pf-v6-u-pb-lg')}>
                  <Bullseye>
                    <Title headingLevel="h3">{title}</Title>
                  </Bullseye>
                </CardTitle>
                <CardBody className={classes.cardBody}>
                  <Content className={classnames('pf-v6-u-py-md', classes.description)} component={ContentVariants.p}>
                    {typeof description === 'object' ? description : truncate(description, { length: '135' })}
                  </Content>
                </CardBody>
              </Card>
            </a>
          </Link>
        </GalleryItem>
      ))}
    </Gallery>
  );
};

export default Sections;
