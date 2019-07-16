Cypress.Commands.add("fillBio", (text) => {
    cy.get(".UserBio")
      .click()
      .find("textarea")
      .type(text)
      .blur();
  });