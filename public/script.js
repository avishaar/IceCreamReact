const numArray = [437, 10, 30, 582];

const newArray = numArray.map((num, index) => {
    console.log('Index: ${index + 1}');
    return num + 1;

});

console.log(newArray);