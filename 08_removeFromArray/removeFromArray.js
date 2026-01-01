const removeFromArray = function(array, ...args) {
    const newArr = [];
    array.forEach((item) =>{
        if (!args.includes(item))
        newArr.push(item);
    })
   return newArr;
};

module.exports = removeFromArray;
