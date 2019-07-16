import { firstTest } from "../../requirements.json";
describe("discuss.flarum test", async () => {
  it('Visits the site, fill bio and check submit request"', async () => {
    cy.server();
    cy.route("POST", `/api/users/*`, "fixture:user.json").as("postBio");

    cy.openHomePage("https://discuss.flarum.org");
    cy.login();
    cy.openProfilePage();
    cy.fillBio(firstTest.bioText)

    cy.wait("@postBio").then(xhr => {
      expect(xhr.request.body.data.attributes).to.have.property("bio", firstTest.bioText);
    });

    cy.openHomePage();
    cy.openProfilePage();
  });
});
