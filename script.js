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



const newConcat = (...arguments) => {
   let arrReturn = [];
   for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
         for (let j = 0; j < arguments[i].length; j++) {
            arrReturn.push(arguments[i][j]);
         }
      } else {
         arrReturn.push(arguments[i]);
      }
   }

   return arrReturn;
}

const newIncludes = (arr, element) => {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
         return true;
      }
   }

   return false;
}

const newIndexOf = (arr, element, index = 0) => {
   for(let i = index; i < arr.length; i++) {
      if (arr[i] === element) {
         return i;
      }
   }

   return -1;
}

const newJoin = (arr, separator = '') => {
   let strReturn = '';
   for(let i = 0; i < arr.length; i++) {
      if(i === 0) {
         strReturn += arr[i].toString();
      } else {
         strReturn += separator + arr[i].toString();
      }
   }

   return strReturn;
}

const newSlice = (arr, start, finish = (arr.length - 1)) => {
   let arrReturn = []
   for (let i = start; i < finish; i++) {
      arrReturn.push(arr[i])      
   }

   return arrReturn;
}

const newFlat = (arr) => {
   let arrReturn = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].isArray()) {
         for (let j = 0; j < arr[i].length; j++) {
            arrReturn.push(arr[i][j]);
         }
      }

      arrReturn.push(arr[i]);
   }

   return arrReturn;
}

const newFlatMap = () => {

}

const newArrayOf = (...arguments) => {
   let arrReturn = [];
   for (let i = 0; i < arguments.length; i++) {
      arrReturn.push(arguments[i]);
   }

   return arrReturn;
}