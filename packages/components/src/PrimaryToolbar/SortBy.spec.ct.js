import React from 'react';

import { SortBy } from '..';

describe('SortBy component', () => {
  it('renders empty component', () => {
    cy.mount(<SortBy />);
    cy.get('.pf-v6-c-button');
  });

  it('renders with direction set', () => {
    cy.mount(<SortBy direction="desc" />);
    cy.get('.pf-v6-c-button');
  });

  it('onSortChange is called', () => {
    const sortSpy = cy.spy().as('sortSpy');
    cy.mount(<SortBy direction="desc" onSortChange={sortSpy} />);
    cy.get('.pf-v6-c-button').click();
    cy.get('@sortSpy').should('have.been.called');
  });
});
