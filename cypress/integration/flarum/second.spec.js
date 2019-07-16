import { secondTest } from "../../requirements.json";
describe("", async () => {
  it('Visits the site, open a certain discussion, post and check reply"', async () => {
    cy.server()
    cy.route("POST", `/api/posts`).as("postReply");
    cy.visit("https://discuss.flarum.org");
    cy.login();
    cy.openProfilePage();

    cy.openSandboxPage();
    cy.openDiscussion(secondTest.discussionTitle)
    cy.replyInDiscussion(secondTest.replyText)
    cy.wait("@postReply")
    cy.reload();

    cy.checkLastPostedReply(secondTest.replyText);
  });
});
