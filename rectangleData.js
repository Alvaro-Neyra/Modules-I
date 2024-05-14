import { datosTriangulo } from "./geometric.js";

for (let i = 0; i < 3; i++ ) {
    let rowPerimetro = document.getElementById(`perimetro${i + 1}`);
    let rowArea = document.getElementById(`area${i + 1}`);

    let datoPerimetro = datosTriangulo[0][i];
    let datoArea = datosTriangulo[1][i];

    console.log(datoPerimetro);
    console.log(datoArea);
    rowPerimetro.innerText = datoPerimetro;
    rowArea.innerText = datoArea;
}