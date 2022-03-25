"use strict";
function merge(oA, oB) {
    return Object.assign(oA, oB);
}
const mergedObject = merge({ name: 'phil', hobbies: ['sports'] }, { age: 54 });
function countAndDescribe(element) {
    let descText = 'Got no value';
    if (element.length > 0) {
        descText = `Got ${element.length} element(s)`;
    }
    return [element, descText];
}
console.info(countAndDescribe('Hi there'));
console.info(countAndDescribe(['Sports', 'Cooking']));
//# sourceMappingURL=app.js.map