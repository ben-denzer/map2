// IE 11 had a problem on my last app when I used sets

function makeSet(arr) {
    const tempArr = [];
    for (const i of arr) {
        if (tempArr.indexOf(i) === -1) {
            tempArr.push(i);
        }
    }
    return tempArr;
}

export default makeSet;
