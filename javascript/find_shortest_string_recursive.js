function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  let result = findShortestStringRecursive(arr.slice(1))

  return arr[0].length <= result.length ? arr[0] : result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// We first must write the base case when the array length is 1.
// Then we can recursivly slice the array into pieces, each of which will be stored in a variable
// Once we have each piece stored, we will return the shortest of each comparison until the base case is the only return left

// if array length === 1
//   return that element

// result = array sliced by 1 with the function recursivly called
// return (the first element of the array's length <= the result ? first element : result)

