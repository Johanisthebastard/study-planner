describe('Todo item functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8888/');
	});

	it('should toggle todo item status when checkbox is clicked, Mr Tom Bombadil', () => {
		cy.get('.item input[type="checkbox"]').each(($checkbox) => {
			cy.wrap($checkbox).click();
		});
		cy.get('.item input[type="checkbox"]').should('be.checked');
	});

	it('should allow editing todo item text, Mr Frodo', () => {
		cy.get('.item span[title="Ändra"]').each(($editButton) => {
			cy.wrap($editButton).click();
		});
		cy.get('.item input[type="text"]').each(($input, index) => {
			cy.wrap($input).clear().type(`Ny redigerad text ${index}`);
		});
		cy.get('.item span[title="Spara"]').each(($saveButton) => {
			cy.wrap($saveButton).click();
		});
		cy.get('.item label').each(($label, index) => {
			cy.wrap($label).should('have.text', `Ny redigerad text ${index}`);
		});
	});

	it('should delete todo item when delete icon is clicked', () => {
		cy.get('.item span[title="Ta bort"]').each(($deleteIcon) => {
			cy.wrap($deleteIcon).click();
		});
		cy.get('.item').should('not.exist');
	});

	it('should search for a specific text in todo item', () => {

		cy.get('.item').should('have.length.greaterThan', 0);

		const searchTextNotFound = 'kratos';
		cy.get('.search-input').type(searchTextNotFound);
		cy.wait(500);
		cy.get('.prio-items').then(($items) => {

			expect($items.find('.item').length).to.equal(0);
		});


		cy.get('.search-input').clear();
		const searchText = 'Övning 1';
		cy.get('.search-input').type(searchText);

	});
});
