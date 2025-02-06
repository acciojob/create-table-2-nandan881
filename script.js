describe('Dynamic Table Creation', () => {
  it('should create a table with specified rows and columns', () => {
    cy.visit(baseUrl); // Visit the page

    // Stub the prompt function to return 2 for both rows and columns
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('2'); // For 2 rows and 2 columns
    });

    // Ensure the button is visible and then click it
    cy.get('button').should('be.visible').click();

    // Validate that the table is created and has 1 table element
    cy.get('table#myTable').should('have.length', 1);

    // Validate the number of rows (should be 2)
    cy.get('table#myTable tr').should('have.length', 2);

    // Validate the number of columns in the first row (should be 2)
    cy.get('table#myTable tr:first-child td').should('have.length', 2);
  });
});
