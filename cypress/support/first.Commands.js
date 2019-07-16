Cypress.Commands.add("fillBio", (text) => {
    cy.get(".UserBio")
      .click()
      .find("textarea").clear()
      .type(text)
      .blur();
  });
  Cypress.Commands.add("checkPostedBio", (text) => {
    cy.get(".UserBio-content")
      .find("p")
      .should("have.text", text);
  });