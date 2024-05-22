import React from 'react'
import PrioList from './PrioList'

describe('<PrioList />', () => {
  beforeEach(() => {
   
    cy.mount(<PrioList />);
	
  });
  
  it('renders', () => {
    
    cy.get('.prio-list').should('exist');

  });
  
  it('should display matching items', () => {
    
    cy.get('input[type="search"]').type('Övning 1');
  
    cy.get('.prio-items').contains( 'Övning 1').should('be.visible');

	cy.get('input[type="search"]').type('Repetera lektionen');

	cy.get('.prio-items').contains('Repetera lektionen').should('be.visible');
    
    
    
  });

  it('should not display items that does not match', () => {
    
    cy.get('input[type="search"]').type('kratos');
  
    cy.get('.prio-items').should('have.length', 0);

	
    
    
    
  });
});