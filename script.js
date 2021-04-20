const newForEach = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
   }
}

const newMap = (arr, callback) => {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
   }
   return newArr;
}

const newSome = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i]) === true) {
         return true;
      }
   }

   return false;
}

const newFind = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i]) === true) {
         return arr[i];
      }
   }

   return undefined;
}

const newFindIndex = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
         return i;
      }
   }

   return -1;
}

const newEvery = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
         return false;
      }
   }

   return true;
}

const newFilter = (arr, callback) => {
   let arrReturn = [];
   for (let i = 0; i < arr.length; i ++) {
      if (callback(arr[i])) {
         arrReturn.push(arr[i]);
      }
   }

   return arrReturn;
}


function loop (arrRecebe, arrPushado) {
   for (let i = 0; i < arrPushado.length; i++) {
      arrRecebe.push(arrPushado[i])
   }

}
const newConcat = (arr1, arr2) => {
   let arrReturn = [];
   loop(arrReturn, arr1);
   loop(arrReturn, arr2);
   return arrReturn;
}

const newIncludes = () => {

}

const newIndexOf = () => {

}

const newJoin = () => {

}

const newSlice = () => {

}

const newFlat = () => {

}

const newFlatMap = () => {

}

const newArrayOf = () => {

}