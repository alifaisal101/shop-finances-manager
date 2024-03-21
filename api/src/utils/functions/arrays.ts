type ArrayToMatch = string[] | number[];

export const matchArrays = (arr1: ArrayToMatch, arr2: ArrayToMatch) :boolean => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    if (arr1.join() === arr2.join()) {
        return true;
    } else {
        return false;
    }

};


