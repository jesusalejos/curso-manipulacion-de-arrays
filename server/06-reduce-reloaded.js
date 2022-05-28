const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {});

console.log(rta1);

const range = [1, 3, 12,13,14,20,15,16,17,15,19,11,18, 2, 3,4,7,9,6,10,12,13,14,20,15,16,17,15,19,11,18];



const rta2 = range.reduce ((obj,item) =>{
  
  if (item <= 5) {
    obj.primerR = obj.primerR+1;
  }

  else if (item > 5 && item <=10) {
    obj.segundoR = obj.segundoR+1;
  }

  else if (item > 10 && item <=15) {
    obj.tercerR = obj.tercerR+1;
  }

  else if (item > 15 && item <=20) {
    obj.cuartoR = obj.cuartoR+1;
  }

  return obj

},{primerR:0,segundoR:0,tercerR:0,cuartoR:0});

console.log(rta2);