const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; //The importance of the spread operator for avoid momory reference.
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements); //here it'wasn't necesary casuse concat it's inmutable.
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random']; //attention concat+spread operator must be an array. 
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements); //push + spread operator = with just we want the elements. 
console.log('elements', elements);