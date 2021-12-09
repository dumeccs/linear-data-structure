let set1 = [2,4,1,9,3]
let set2 = [3,1,7,9]
let newArray = set1.concat(set2)
let obj = {}
let count = 1
let sum = 0
let sum2 = 0



//for loop to automate injection of all sets into an object
for (i=0; i<newArray.length;i++){
  let count = 1
  if (newArray[i] in obj === false){
    obj[newArray[i]] = count
  }
  else if (newArray[i] in obj){
    obj[newArray[i]] = obj[newArray[i]]+1

  }

}

//sum of overlapping elements
for (key in obj){
  if(obj[key] === 2){
    sum += parseInt(key * obj[key]) 
  }
}
console.log('sum of overlapping element: ',sum)

//sum of distinct elements
 for (key in obj) {
   if (obj[key] === 1){
     sum2 += parseInt(key)
   }
 }
 console.log('sum of distinct element: ',sum2)