let arreglo=[1,2,3,4,5,6];

console.log(arreglo.map(element => {
	return element *element;
}));
console.log(arreglo);

console.log(arreglo.filter(element=> {
	return element<3;
}));

console.log(arreglo);

for (let index in arreglo){
	console.log(index);

}

for (let element of arreglo){
	console.log(element);
}