Cypress.Commands.add("replyInDiscussion", (text) => {
    cy.get(".PostStream-item .Post.ReplyPlaceholder").click();
    cy.get(".ComposerBody-editor textarea").type(text);
    cy.get("button[title='Post Reply']").click();
  });

Cypress.Commands.add("checkLastPostedReply", (text) => {
    cy.get(".CommentPost")
      .last()
      .find("p")
      .should("have.text", text);
  });