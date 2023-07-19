function createTable(rows, columns){
  const table = document.getElementById('table')
  let num = 1;
  for(let i = 0; i<rows; i++){
    const row = document.createElement('tr')
    for(let j = 0; j<columns; j++){
      const column = document.createElement('td')
      column.textContent = num++
      row.appendChild(column)
    }
    table.appendChild(row)
  }
}

createTable(10, 10)