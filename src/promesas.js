/*
let promesa= new Promise(function(resolve,reject){
setTimeout(()=>{
	resolve(10);

},1000);
});

promesa.then(response=>{
	console.log(response+10);
});
*/

let promesa= new Promise(function(resolve,reject){
setTimeout(()=>{
	resolve({
		nombre: 'Edgar',
		apellidos: 'Tallados'
	});

},1000);
reject('HYA UN EROOR');
});

promesa.then(response=>{
	console.log(response.nombre);
	console.log(response.apellidos);
})
  .catch(error =>{
  	console.log(error);
  });