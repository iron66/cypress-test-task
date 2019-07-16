**Assignment:**
*	Automate 2 test cases for discuss.flarum.org provided bellow using Cypress.io 
*	Upload final project to GitHub 

*Style requirements:*
* JS strict mode
* Assume there will be more profile and discussion test cases, implement various techniques to make their implementation and maintenance easier (using Cypress best practices)
* Configurable values like login/password should be placed in a separate file
* Follow test automation and Cypress best practices

**Test 1 Change user profile on frontend only:**

*Use stubs to avoid changing profile on the actual live forum*

	Open discuss.flarum.org as a logged in user (using relevant Cypress functions)
	Open user profile
	Change information about yourself. Verify new information is actually present in the relevant request.
	Open forum home page
	Open user profile
	Verify new information is displayed


**Test 2 Post a reply**

	Open discuss.flarum.org as a logged in user (using relevant Cypress functions)
	Open discuss.flarum.org/t/sandbox
	Open a discussion with a certain title (should be configurable)
	Reply
	Refresh page
	Verify the reply is displayed