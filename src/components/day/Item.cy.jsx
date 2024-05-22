import React from "react";
import Item from "./Item";
import { useStore } from "../../data/store";

describe("<Item />", () => {
  beforeEach(() => {
    // Mounts Item component with a test item
    cy.mount(<Item item={{ id: 1, done: false, late: false, text: "Test item" }} />);
  });

  it("should find the first div", () => {
    cy.get(".item").should("exist");
  });

  it("should be possible to check and uncheck the checkbox", () => {
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.get('[type="checkbox"]').uncheck().should("not.be.checked");
  });

  it("should show span with title 'Ändra' and 'Ta bort'", () => {
    cy.get("[title='Ändra']").should("exist");
    cy.get("[title='Ta bort']").should("exist");
  });

  it("should show span with title 'Ändra' and span with title 'Ta bort'", () => {
    cy.get("[title='Ändra']").should("exist");
    cy.get("[title='Ta bort']").should("exist");
  });

  it("should be possible to change text when span with title 'Ändra' is clicked", () => {
    const newText = "Updated item text";
    cy.get("span[title='Ändra']").click();
    cy.get('input[type="text"]').clear().type(newText);
  });

  it("should show a save button when in edit mode", () => {
    cy.get("span[title='Ändra']").click();
    cy.get("span[title='Spara']").should("exist");
  });

  it("should save when 'Spara' is clicked", () => {
    cy.get("span[title='Ändra']").click();
    cy.get("span[title='Spara']").click();
  });

  describe("toggleTodo and lille lille Zustand", () => {
    it("should toggle todo done status", () => {
      useStore.setState({
        todos: [
          { id: 1, text: "Test item 1", done: false, late: false },
          { id: 2, text: "Test item 2", done: true, late: false },
        ],
      });

      expect(useStore.getState().todos[0].done).to.be.false;
      expect(useStore.getState().todos[1].done).to.be.true;

      useStore.getState().toggleTodo(1);
      expect(useStore.getState().todos[0].done).to.be.true;

      useStore.getState().toggleTodo(2);
      expect(useStore.getState().todos[1].done).to.be.false;

      useStore.getState().toggleTodo(1);
      expect(useStore.getState().todos[0].done).to.be.false;

      useStore.getState().toggleTodo(2);
      expect(useStore.getState().todos[1].done).to.be.true;
    });
  });

  it("should be possible to delete a task with the trash can icon", () => {
	//e2e
	
  
	cy.get("[title='Ta bort']").click();
	cy.get(".item").should("have.length", initialNumberOfTodos - 0);
  });
// DAVID HILFE!!
  
});
