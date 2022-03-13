
const myArray = [];

for (let i = 0; i <= 5; i++) {
  myArray.push(i);
  for (let j = 21; j <= 25; j++) {
    myArray.unshift(i + j)
  }
}

const filteredArray = arrayCounter(myArray);
console.log(filteredArray)

function arrayCounter(array) {

  return array.map(value => {

    let occurrence = array.filter(a => a === value).length;

    return { value, occurrence }
  })
}







