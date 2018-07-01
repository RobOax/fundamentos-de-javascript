//import
console.log('hola mundo');
function suma(a,b){
	return a+b
}

let sumaDos= function (a,b){
	return a+b
}

sumaDos(12,13);

let sumaTres = (a,b)=>{
	return a+b
};
let sumaCuatro = (a,b)=>a+b

let sumaCinco= (a,b)=>(
	a+b
	);
//todas la anteriores funcionan

console.log(sumaDos(12,13));
console.log(sumaTres(12,13));
console.log(sumaCuatro(12,13));
console.log(sumaCinco(12,13));