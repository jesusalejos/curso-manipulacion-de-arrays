const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3); //Between parentheis the level.
console.log('for', newArray);
console.log('flat', rta);

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2],[3,4]],
    [7,8,9]
  ];

  

  function aplanarMatriz(list) {
  let newList = []  ;

    list.forEach(item=> {
        
        if (Array.isArray(item)) {
            newList = newList.concat(aplanarMatriz(item));
        }
        else {
            newList.push(item);
                }     
    })
    return newList;

  }

  console.log(aplanarMatriz(matriz2));