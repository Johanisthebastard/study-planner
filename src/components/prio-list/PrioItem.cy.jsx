import React from 'react';
import PrioItem from './PrioItem';

describe('PrioItem Component', () => {
  let item;
  let num;


//   beforeEach(() => {
//     item = { id: 1, text: 'Default task', late: false };
//     num = 1;

//     cy.mount(<PrioItem item={item} num={num} />);
//   });

  it('renders item text and number', () => {
    item = { id: 1, text: 'Test task', late: false };
    num = 1;

    cy.mount(<PrioItem item={item} num={num} />);

    cy.get('.item').should('contain.text', '1. Test task');
  });

  it('applies "due" class when item is late', () => {
    item = { id: 2, text: 'Late task', late: true };
    num = 2;

    cy.mount(<PrioItem item={item} num={num} />);

    cy.get('.item').should('have.class', 'due');
  });

  it('does not apply "due" class when item is not late', () => {
    item = { id: 3, text: 'On time task', late: false };
    num = 3;

    cy.mount(<PrioItem item={item} num={num} />);

    cy.get('.item').should('not.have.class', 'due');
  });
});