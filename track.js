
let myTableEl = document.getElementById("myTable")
//let myTableEl = document.insertRow("td")

function expense(){
    let nameEl = document.getElementById("name-el").value;
    let dateEl = document.getElementById("date-el").value;
    let amountEl = document.getElementById("amount-el").value;

    let trEl = document.createElement("tr");

    let td1El = trEl.appendChild(document.createElement("td"))
    let td2El = trEl.appendChild(document.createElement("td"))
    let td3El = trEl.appendChild(document.createElement("td"))

    td1El.innerHTML = nameEl;
    td2El.innerHTML = dateEl;
    td3El.innerHTML = amountEl;

    document.getElementById("myTable").appendChild(trEl);



}