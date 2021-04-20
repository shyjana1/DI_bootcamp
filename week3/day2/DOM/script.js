let table = document.getElementById('sampleTable');

function insert_Row() {
    let tr = document.createElement('tr');
    tr.innerHTML = "<td>Row2 cell1</td> <td> Row2 cell2 </td>";
    table.append(tr);
}


function insert_Column() {
    let tr = document.getElementsByTagName("tr")[0];
    let td = document.createElement('td');
    td.innerHTML = "SHY";
    tr.append(td);
}