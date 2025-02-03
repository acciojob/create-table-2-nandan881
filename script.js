function createTable() {
    // Get the number of rows and columns from the user
    const rows = prompt("Input number of rows:");
    const cols = prompt("Input number of columns:");

    // Convert the input values to integers
    const numRows = parseInt(rows);
    const numCols = parseInt(cols);

    // Get the table element
    const table = document.getElementById('myTable');
    
    // Clear the table if there's any pre-existing content
    table.innerHTML = '';

    // Create the rows and columns dynamically
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = document.createElement('tr');
        
        for (let j = 0; j < numCols; j++) {
            // Create a new cell for the row
            const cell = document.createElement('td');
            
            // Set the text of the cell as specified
            cell.textContent = `Row-${i} Column-${j}`;
            
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table
        table.appendChild(row);
    }
}
