import { firstTest } from "../requirements.json";

Cypress.Commands.add("fillBio", text => {
  cy.get(".UserBio")
    .click()
    .find("textarea")
    .clear()
    .type(text)
    .blur();
});
Cypress.Commands.add("checkPostedBio", text => {
  cy.get(".UserBio-content")
    .find("p")
    .should("have.text", text);
});
Cypress.Commands.add("stubPostBio", () => {

  cy.fixture("user").then(user => {
    user.data.attributes.bio = firstTest.bioText;
    cy.route("POST", `/api/users/*`, user).as("postBio");
  });
});
Cypress.Commands.add("stubGetBio", text => {
  cy.fixture("posts").then(posts => {
    posts.included[0].attributes.bio = firstTest.bioText;
    cy.route("GET", `/api/posts*`, posts);
  });
});
