function generatePythagoreanTable() {
    const size = 10;  // Define the size of the table
    let table = document.getElementById('multiplyTable');
    for (let i = 1; i <= size; i++) {
        let row = document.createElement('tr');
        if (i === 1) {
            row.className = 'firstRow';
        }
        for (let j = 1; j <= size; j++) {
            let cell = document.createElement('td');
            if (j === 1) {
                cell.className = 'firstColumn'
            }
            cell.innerText = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row)
    }
}
generatePythagoreanTable();


