import { userCredentials } from "../requirements.json";

Cypress.Commands.add("login", () => {
  return cy.window().then(win => {
    const csrf = win.flarum.core.app.session.csrfToken;
    const request = {
      identification: userCredentials.login,
      password: userCredentials.password,
      remember: false
    };
    cy.request({
      url: "/login",
      method: "POST",
      headers: {
        "x-csrf-token": csrf,
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      body: request
    }).then(res => {
      Cypress.config("userId", res.body.userId);
      Cypress.config("csrf", csrf);
    });
  });
});

Cypress.Commands.add("openProfilePage", () => {
  cy.visit(`https://discuss.flarum.org/u/${userCredentials.login}`);
});

Cypress.Commands.add("openHomePage", () => {
  cy.visit(`https://discuss.flarum.org/`);
});
Cypress.Commands.add("openSandboxPage", () => {
  cy.visit(`https://discuss.flarum.org/t/sandbox`);
});
Cypress.Commands.add("openDiscussion", (title) => {
  cy.visit("https://discuss.flarum.org/t/sandbox");
  cy.get("a.DiscussionListItem-main")
    .contains(title)
    .click();
});

