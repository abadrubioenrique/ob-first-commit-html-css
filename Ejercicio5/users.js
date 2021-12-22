// Funcion para ordenar la tabla A-Z y Z-A
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("students");
    switching = true;
    dir = "asc"; 

    while (switching) {
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

// Filtro de búsqueda por nombre, email o etiqueta
  function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#students tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        //Name Column
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[4].textContent.toUpperCase();
        //Email Column
        var thirdCol = rows[i].cells[5].textContent.toUpperCase();
        //Tag Column
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

document.querySelector('#search').addEventListener('keyup', filterTable, false);
