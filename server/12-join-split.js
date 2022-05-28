const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


function solution(title) {
	const rta = title.split(" ").join("-").toLowerCase();

	 return rta
}; 

solution("La forma de correr Python");
solution("La API para nunca parar de aprender");
solution("Curso de arrays");