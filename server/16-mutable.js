// const products = [
//   { title: "Pizza", price: 121, id: "🍕" },
//   { title: "Burger", price: 121, id: "🍔" },
//   { title: "Hot cakes", price: 121, id: "🥞" },
// ];
// const myProducts = [];
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// const productIndex = products.findIndex(item => item.id === '🍔');
// if (productIndex !== -1) {
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// Challenge 1


const myProducts = [];
let product_without_modified;
const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

//   const product_modified = products.map(item=> item);
//   console.log("modified", product_modified);

  
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  const productIndex = products.findIndex(item => item.id === '🍔');
  
  if (productIndex !== -1) {
        myProducts.push(products[productIndex]);
        product_without_modified = products.map(item=> item);
        products.splice(productIndex, 1);
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("Without_modified", product_without_modified);
  console.log("-".repeat(10));

// Update

// const productsV2 = [
//     { title: "Pizza", price: 121, id: "🍕" },
//     { title: "Burger", price: 121, id: "🍔" },
//     { title: "Hot cakes", price: 121, id: "🥞" },
//   ];
// const update = {
//     id: "🥞",
//     changes: {
//         price: 200,
//         description: 'delicioso'
//     }
// }

// const productsV2M = productsV2.map(item => item);

// // console.log(productsV2M);

// const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[productIndexV2] = {
//     ...productsV2[productIndexV2],
//     ...update.changes,
// };
// console.log(productsV2);

// Challenge 2

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productsV2M = productsV2.map(item => item);

// console.log(productsV2M);

const productIndexV2 = productsV2M.findIndex(item => item.id === update.id);

productsV2M[productIndexV2] = {
    ...productsV2M[productIndexV2],
    ...update.changes,
};
console.log(productsV2);
console.log(productsV2M);