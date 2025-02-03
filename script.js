it('should create a table with specified rows and columns', () => {
  cy.visit(baseUrl);

  // Stubbing the prompt method for two calls
  cy.window().then(win => {
    cy.stub(win, 'prompt').onCall(0).returns('2').onCall(1).returns('3');
  });

  // Trigger the button click that invokes the createTable function
  cy.get('input[type="button"]').click();

  // Now, check if the prompt was called with the correct text for both rows and columns
  cy.window().then(win => {
    expect(win.prompt.getCall(0)).to.have.been.calledWith('Input number of rows');
    expect(win.prompt.getCall(1)).to.have.been.calledWith('Input number of columns');
  });

  // Optionally, check if the table is created with the correct number of rows and columns
  cy.get('#myTable tr').should('have.length', 2);  // Number of rows
  cy.get('#myTable td').should('have.length', 6);  // Number of cells = rows * columns (2 * 3)
});
