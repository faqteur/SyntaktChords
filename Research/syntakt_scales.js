var scales = [
];

var scalesOK = [ 
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
[0, 2, 4, 5, 7, 9, 11], 
[0, 2, 3, 5, 7, 9, 10], 
[0, 1, 3, 5, 7, 8, 10], 
[0, 2, 4, 6, 7, 9, 11], 
[0, 2, 4, 5, 7, 9, 10], 
[0, 2, 3, 5, 7, 8, 10], 
[0, 1, 3, 5, 6, 8, 10], 
[0, 3, 5, 7, 10], 
[0, 2, 4, 7, 9], 
[0, 2, 3, 5, 7, 9, 11], 
[0, 2, 3, 5, 7, 8, 11], 
[0, 2, 4, 6, 8, 10], 
[0, 3, 5, 6, 7, 10], 
[0, 2, 3, 5, 7, 8, 10, 11], 
[0, 1, 4, 5, 6, 8, 11], 
[0, 1, 5, 6, 10], 
[0, 1, 5, 7, 10], 
[0, 2, 3, 7, 8], 
[0, 1, 3, 7, 8], 
[0, 1, 4, 5, 7, 8, 10], 
[0, 2, 3, 5, 6, 8, 9, 11], 
[0, 1, 3, 4, 6, 7, 9, 10], 
[0, 1, 3, 4, 5, 6, 8, 10], 
[0, 2, 4, 5, 6, 8, 10], 
[0, 1, 3, 4, 6, 8, 10], 
[0, 1, 3, 5, 7, 9, 10], 
[0, 2, 4, 6, 8, 9, 11], 
[0, 2, 4, 6, 7, 9, 10], 
[0, 1, 4, 5, 7, 8, 11], 
[0, 3, 4, 6, 7, 10, 11], 
[0, 1, 3, 4, 7, 8, 9], 
[0, 2, 3, 6, 7, 8, 11], 
[0, 1, 4, 5, 6, 9, 10], 
[0, 3, 4, 5, 8, 9, 11], 
[0, 1, 2, 5, 6, 8, 9] 
]; 

function list() {
	scales.push(arrayfromargs(arguments));
}

function bang() {
	post("var scales = [\n" + scales.map(function(a) { return "[" + a.join(", ") + "]"; }).join(",\n") + "\n];\n");
}