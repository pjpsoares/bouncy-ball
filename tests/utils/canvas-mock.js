var canvasContext = jasmine.createSpyObj('context', ['beginPath', 'clearRect', 'arc', 'closePath', 'fill']);
var canvas = jasmine.createSpyObj('canvas', ['getContext']);

canvas.getContext.and.returnValue(canvasContext);