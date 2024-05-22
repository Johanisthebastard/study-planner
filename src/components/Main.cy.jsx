import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  it('renders', () => {

    cy.mount(<Main />)
	
  })

  it('should display all days of the week', () => {
	cy.mount(<Main />)
	const dayNames = [
	  'Måndag',
	  'Tisdag',
	  'Onsdag',
	  'Torsdag',
	  'Fredag',
	  'Lördag',
	  'Söndag',
	];

	
	dayNames.forEach((dayName) => {
		cy.mount(<Main />)
		cy.get('.day-view').should('exist')
	  cy.contains(dayName).should('exist');
	});
  });

})




