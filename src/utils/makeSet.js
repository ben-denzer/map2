// IE 11 has a problem with sets, check polyfills

function makeSet(arr) {
    const tempArr = [];
    for (let i in arr) {
        if (tempArr.indexOf(arr[i]) === -1) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

export default makeSet;
