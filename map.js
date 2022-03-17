function map(arr,mapFn){
  const mapArr=[];
  for(let i=0;i<arr.length;i++){
    const result=mapFn(arr[i]);
    mapArr.push(result);
  }
  return mapArr;
}

let arr=[1,2,3,4];
arr=map(arr,(num)=>num**2);
console.log(arr);
