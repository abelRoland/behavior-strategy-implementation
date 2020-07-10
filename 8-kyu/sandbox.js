function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result;
  }

  console.log(findMultiples(2, 6)); //[2, 4, 6]
  console.log(findMultiples(3, 10)); //[3, 6, 9]
  console.log(findMultiples(7, 12)); //[7]