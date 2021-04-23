let arrTest = [1, 2, 3, 4, 5];
function testSome(element) {
   return element + 2;
}


// console.log(newMap(arrTest, testSome));
console.assert(JSON.stringify(arrTest.map(testSome)) === JSON.stringify(newMap(arrTest, testSome)), `Não funcionou`);


function testNegative(element) {
   if (element < 0) {
      return true;
   }
}

console.assert(newSome(arrTest, testNegative) === false, `Possui números negativos`);


function greaterThanNine(element) {
   if (element > 9) {
      return true;
   }

   return false;
}

console.assert(newFind(arrTest, greaterThanNine) === undefined, `Possui números maiores que 9`);


function testEquals(element) {
   if (element === 9) {
      return true;
   }

   return false;
}

console.assert(newFindIndex(arrTest, testEquals) === arrTest.findIndex(testEquals), `Deu erro!`);


console.assert(newEvery(arrTest, testEquals) === arrTest.every(testEquals), `Deu erro!`);


function testOdds(element) {
   if (element % 2 !== 0 && element > 0) {
      return true;
   }
}


console.assert(JSON.stringify(arrTest.filter(testOdds)) === JSON.stringify(newFilter(arrTest, testOdds)), `Apresenta erro!`);


let arr90 = [1, 2, 4, 4, 5];
let arr91 = [9, 8, 7, 6, 5, 5];

console.assert(JSON.stringify(newConcat(arr90, arr91, 'abc', {a: 1, b: 2})) === JSON.stringify(arr90.concat(arr91, 'abc', {a: 1, b: 2})), `Apresenta erro!`);


console.assert(arr90.includes(9) === newIncludes(arr90, 9), `Apresenta erro!`);


console.log(newJoin(arr90, ' '));

console.assert(JSON.stringify(arr91.slice(2, 4)) === JSON.stringify(newSlice(arr91, 2, 4)), `Apresenta erro!`);

