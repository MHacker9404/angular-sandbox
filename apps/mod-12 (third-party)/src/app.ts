import 'reflect-metadata';
import _ from 'lodash';
import { Product } from './product.model';
import { plainToClass } from 'class-transformer';

console.log(_.shuffle([1,2,3]));

let product = new Product('product', 100);
console.info(product.getInformation());

const jsonData = [
    { title: 'product 1', price: 10.99 },
    { title: 'product 2', price: 15.99 },
];
const products = plainToClass(Product, jsonData);
console.info(products);