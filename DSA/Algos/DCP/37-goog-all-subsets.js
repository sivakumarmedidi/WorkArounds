function allSubsets(array) {
    const result = [[]];
    array.forEach(element => {
        const resultCopy = JSON.parse(JSON.stringify(result));
        resultCopy.forEach(elem => {
            elem.push(element);
            result.push(elem);
        })
    });
    console.log(result);
}

console.log(allSubsets([1,2,3,4,5]))

function allSubsRec(array) {
    if(!array.length) {
        return [[]];
    }

    let res = allSubsRec(array.slice(1));
    return [...(res.map(elem => [array[0], ...elem])), ...res];
}

console.log(allSubsRec([1,2,3]));