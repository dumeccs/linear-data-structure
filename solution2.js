let set1 = [2,4,1,9,3]
let set2 = [3,1,7,9]
let sum = 0
let sum2 = 0

//sum of overlapping element
for (i=0; i<set1.length;i++) {
    for (j=0;j<set2.length;j++){
      if (set1[i] === set2[j] ){
        sum+=(set1[i]+set2[j])
      }
  
    }
  } 
  console.log('sum of overlapping element is: ', sum)
  
  //sum of distinct element
  for (i=0; i<set1.length;i++){
    if (set2.includes(set1[i])===false){
       sum2 += set1[i]
    }
  
  }
  for (j=0;j<set2.length;j++){
    if (set1.includes(set2[j])===false){
      sum2+=set2[j]
    }
  }
  console.log('sum of distinct element is: ',sum2)