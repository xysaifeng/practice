import { create, createReportList } from './modules/canvas.mjs';
import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';
// import randomSquare from './modules/square.mjs';
import { default as randomSquare } from './modules/square.mjs' // ok

let myCanvas = create('myCanvas', document.body, 480, 320);
console.log('myCanvas: ', myCanvas);

let reportList = createReportList(myCanvas.id);
console.log('reportList: ', reportList);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
console.log('square1: ', square1);
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// // Use the default
let square2 = randomSquare(myCanvas.ctx);
console.log('square2: ', square2);