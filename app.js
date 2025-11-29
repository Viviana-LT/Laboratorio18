import { sumar, restar } from './sumaResta.js';
import multiplicar, { dividir } from './multiplicacionDivision.js';

const numAInput = document.getElementById('numA');
const numBInput = document.getElementById('numB');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsDiv = document.getElementById('results');

const operationsMap = {
    sumar: { func: sumar, symbol: '+' },
    restar: { func: restar, symbol: '-' },
    multiplicar: { func: multiplicar, symbol: '*' },
    dividir: { func: dividir, symbol: '/' },
};

const manejarCalculo = () => {
    const a = parseFloat(numAInput.value);
    const b = parseFloat(numBInput.value);
    const selectedOp = operationSelect.value;
    const { func, symbol } = operationsMap[selectedOp];
    
    resultsDiv.textContent = 'Calculando...';

    if (isNaN(a) || isNaN(b)) {
        resultsDiv.textContent = 'Error: Ingrese números válidos';
        return;
    }

    try {
        const result = func(a, b);
        const expression = `${a} ${symbol} ${b} = ${result}`;
        resultsDiv.textContent = expression;

    } catch (error) {
        resultsDiv.textContent = `Error en división: "${error.message}"`;
    }
};

const manejarReinicio = () => {
    numAInput.value = '0';
    numBInput.value = '0';
    operationSelect.value = 'sumar';
    resultsDiv.textContent = 'Esperando cálculo...';
};

calculateBtn.addEventListener('click', manejarCalculo);
clearBtn.addEventListener('click', manejarReinicio);

document.addEventListener('DOMContentLoaded', () => {
    manejarCalculo();
});
