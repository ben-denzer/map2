// IE 11 had a problem on my last app when I used sets

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
