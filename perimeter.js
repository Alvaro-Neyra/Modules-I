import { perimetro } from "./geometric.js";
import { datosTriangulo } from "./geometric.js";

let arrayPerimetros = [];

for (let i = 0; i < 3; i++) {
    // let rowPerimetro = document.getElementById(`perimetro${i + 1}`);
    let dataAncho = document.getElementById(`dato-ancho${i + 1}`);
    let dataAltura = document.getElementById(`dato-altura${i + 1}`);
    let resultadoPerimetro = perimetro(parseInt(dataAltura.textContent), parseInt(dataAncho.textContent));
    arrayPerimetros.push(resultadoPerimetro);
}

datosTriangulo.unshift(arrayPerimetros);

