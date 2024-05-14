type treeObjectToStringType = (obj: Object, indexes: number[]) => string;

export const treeObjectToString: treeObjectToStringType = (
  obj: Object,
  indexes: number[],
) => {
  if (indexes.length == 0) {
    return '';
  }

  let currentValue: Object | string = obj;

  for (let i = 0; i < indexes.length; i++) {
    // The number in the index variable itself points to the key
    //  within an object which we can get from the objKeys array.

    // The position of that index within the indexes array
    // points to the level we are at, within the bigger object.

    // Which index we are at. To point to what "level" in the object we're at
    let parentObj = currentValue;
    let parentObjKeys = Object.keys(parentObj);

    const index = indexes[i];
    let parentObjectKeys = Object.keys(currentValue);

    let currentKey = parentObjectKeys[index];
    currentValue = currentValue[currentKey];

    if (!currentKey && index + 1 >= parentObjKeys.length) {
      if (index + 1 >= parentObjKeys.length) {
        indexes.pop();
      }

      // Increases the last array's item's value by 1
      indexes = indexes.map((val, i) =>
        i + 1 == indexes.length ? val + 1 : val,
      );
      return treeObjectToString(obj, indexes);
    }

    // currentObject = currentObject[objKeys[index]];

    if (i == indexes.length - 1) {
      //   // object variable now has the desired object
      //   console.log(parentObjectLength, objKeys, currentObject);

      if (typeof currentValue == 'string') {
        if (index + 1 >= parentObjKeys.length) {
          indexes.pop();
        }

        // Increases the last array's item's value by 1
        indexes = indexes.map((val, i) =>
          i + 1 == indexes.length ? val + 1 : val,
        );

        return currentValue + ' ' + treeObjectToString(obj, indexes);
      } else if (typeof currentValue == 'object') {
        // if (index + 1 >= parentObjKeys.length) {
        //   indexes = indexes.map((val, i) =>
        //     i + 1 == indexes.length ? val + 1 : val,
        //   );
        // }
        indexes = [...indexes, 0];

        return treeObjectToString(obj, indexes);
      }
    }
  }
};
