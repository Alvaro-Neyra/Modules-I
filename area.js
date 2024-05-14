import { area } from "./geometric.js";
import { datosTriangulo } from "./geometric.js";

let arrayAreas = [];

for (let i = 0; i < 3; i++) {
    // let rowArea = document.getElementById(`area${i + 1}`);
    let dataAncho = document.getElementById(`dato-ancho${i + 1}`);
    let dataAltura = document.getElementById(`dato-altura${i + 1}`);
    let resultadoArea = area(parseInt(dataAltura.textContent), parseInt(dataAncho.textContent));
    arrayAreas.push(resultadoArea);
}
    
datosTriangulo.unshift(arrayAreas);