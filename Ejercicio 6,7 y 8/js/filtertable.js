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
