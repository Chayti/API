console.log('hello api');
const person = { id: 123, name: 'Chayti' };
console.log(person);

const applyJson = JSON.stringify(person);
console.log(applyJson);

const shop = {
    name: 'Kyosk', address: 'DIU knowledge Tower',
    products: ['laptop', 'mobile', 'watch'], profit: 1500, isexpansive: true, owner: {
        name: 'ABC', profession: 'Shop supervisor'
    }
};

console.log(shop);
const stringifiedvalue = JSON.stringify(shop);
console.log(stringifiedvalue);
console.log(`hello ${stringifiedvalue.owner}`);
const convert = JSON.parse(stringifiedvalue);
console.log(convert);
console.log(convert.owner);