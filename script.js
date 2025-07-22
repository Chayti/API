console.log('hello api');
const person = { id: 123, name: 'Chayti' };
console.log(person);

const applyJson = JSON.stringify(person);
console.log(applyJson);

const shop = {
    name: 'alia store', address: 'ranbir road',
    products: ['laptop', 'mobile', 'watch'], profit: 1500, isexpansive: true, owner: {
        name: 'alia', profession: 'actor'
    }
};

console.log(shop);
const stringifiedvalue = JSON.stringify(shop);
console.log(stringifiedvalue);
console.log(stringifiedvalue.owner);
const convert = JSON.parse(stringifiedvalue);
console.log(convert);
console.log(convert.owner);