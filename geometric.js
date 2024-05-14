// let tabla = `
// <table>
//     <thead>
//         <tr>
//             <th>Numero del triangulo</th>
//             <th>ancho</th>
//             <th>altura</th>
//             <th>Perimetro</th>
//             <th>Area</th>
//         </tr>
//     </thead>
//     <tbody id = "table-body"></tbody>
// </table>
// `

// let mainContainer = document.getElementById("main-container");

// mainContainer.innerHTML = tabla;

// let tableBody = document.getElementById("table-body");

// // Definir 3 objetos que representen rectangulos (altura y ancho)
// alert("Vamos a definir 3 rectangulos con sus respectivos valores de ancho y altura: ");

// for (let i = 0; i < 3; i++) {
//     alert(`Rectangulo numero ${i + 1}`);
//     let ancho = Number(prompt(`Valor del ancho del rectangulo ${i + 1}:`));
//     let altura = Number(prompt(`Valor de la altura del rectangulo ${i + 1}:`));
//     let valorDeSuPerimetro = perimetro(altura, ancho);
//     let valorDeSuArea = area(altura, ancho);
//     let tableRow = document.createElement("tr");
//     let dataNumero = document.createElement("td");
//     let dataAncho = document.createElement("td");
//     let dataAltura = document.createElement("td");
//     let dataPerimetro = document.createElement("td");
//     let dataArea = document.createElement("td");
//     dataNumero.innerText = i + 1;
//     dataAncho.innerText = ancho;
//     dataAltura.innerText = altura;
//     dataPerimetro.innerText = valorDeSuPerimetro;
//     dataArea.innerText = valorDeSuArea;
//     tableRow.appendChild(dataNumero);
//     tableRow.appendChild(dataAncho);
//     tableRow.appendChild(dataAltura);
//     tableRow.appendChild(dataPerimetro);
//     tableRow.appendChild(dataArea);
//     tableBody.appendChild(tableRow);
// }

// function perimetro(altura, ancho) {
//     return (altura * 2) + (ancho * 2);
// }

// function area(altura, ancho) {
//     return altura * ancho;
// }


// let tabla = `
// <table>
//     <thead>
//         <tr>
//             <th>Numero del triangulo</th>
//             <th>ancho</th>
//             <th>altura</th>
//             <th>Perimetro</th>
//             <th>Area</th>
//         </tr>
//     </thead>
//     <tbody id = "table-body"></tbody>
// </table>
// `

// let mainContainer = document.getElementById("main-container");

// mainContainer.innerHTML = tabla;

// let tableBody = document.getElementById("table-body");

// // Definir 3 objetos que representen rectangulos (altura y ancho)
// alert("Vamos a definir 3 rectangulos con sus respectivos valores de ancho y altura: ");

// for (let i = 0; i < 3; i++) {
//     alert(`Rectangulo numero ${i + 1}`);
//     let ancho = Number(prompt(`Valor del ancho del rectangulo ${i + 1}:`));
//     let altura = Number(prompt(`Valor de la altura del rectangulo ${i + 1}:`));
//     let tableRow = document.createElement("tr");
//     let dataNumero = document.createElement("td");
//     let dataAncho = document.createElement("td");
//     dataAncho.id = `dato-ancho${i + 1}`;
//     let dataAltura = document.createElement("td");
//     dataAltura.id = `dato-altura${i + 1}`;
//     let dataPerimetro = document.createElement("td");
//     let dataArea = document.createElement("td");
//     dataNumero.innerText = i + 1;
//     dataAncho.innerText = ancho;
//     dataAltura.innerText = altura;
//     dataPerimetro.id = `perimetro${i + 1}`;
//     dataArea.id = `area${i + 1}`;
//     tableRow.appendChild(dataNumero);
//     tableRow.appendChild(dataAncho);
//     tableRow.appendChild(dataAltura);
//     tableRow.appendChild(dataPerimetro);
//     tableRow.appendChild(dataArea);
//     tableBody.appendChild(tableRow);
// }

// export function perimetro(altura, ancho) {
//     return (altura * 2) + (ancho * 2);
// }

// export function area(altura, ancho) {
//     return altura * ancho;
// }

let tabla = `
<table>
    <thead>
        <tr>
            <th>Numero del triangulo</th>
            <th>ancho</th>
            <th>altura</th>
            <th>Perimetro</th>
            <th>Area</th>
        </tr>
    </thead>
    <tbody id = "table-body"></tbody>
</table>
`

let mainContainer = document.getElementById("main-container");

mainContainer.innerHTML = tabla;

// Definiendo el array que almacenara los datos de los rectangulos
export let datosTriangulo = [];

let tableBody = document.getElementById("table-body");

// Definir 3 objetos que representen rectangulos (altura y ancho)
alert("Vamos a definir 3 rectangulos con sus respectivos valores de ancho y altura: ");

for (let i = 0; i < 3; i++) {
    alert(`Rectangulo numero ${i + 1}`);
    let ancho = Number(prompt(`Valor del ancho del rectangulo ${i + 1}:`));
    let altura = Number(prompt(`Valor de la altura del rectangulo ${i + 1}:`));
    let tableRow = document.createElement("tr");
    let dataNumero = document.createElement("td");
    let dataAncho = document.createElement("td");
    dataAncho.id = `dato-ancho${i + 1}`;
    let dataAltura = document.createElement("td");
    dataAltura.id = `dato-altura${i + 1}`;
    let dataPerimetro = document.createElement("td");
    let dataArea = document.createElement("td");
    dataNumero.innerText = i + 1;
    dataAncho.innerText = ancho;
    dataAltura.innerText = altura;
    dataPerimetro.id = `perimetro${i + 1}`;
    dataArea.id = `area${i + 1}`;
    tableRow.appendChild(dataNumero);
    tableRow.appendChild(dataAncho);
    tableRow.appendChild(dataAltura);
    tableRow.appendChild(dataPerimetro);
    tableRow.appendChild(dataArea);
    tableBody.appendChild(tableRow);
}

export function perimetro(altura, ancho) {
    return (altura * 2) + (ancho * 2);
}

export function area(altura, ancho) {
    return altura * ancho;
}


