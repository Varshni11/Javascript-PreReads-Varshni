function filter(arr,filterFn){
  const filteredArr=[];
  for(let i=0;i<arr.length;i++){
    if(filterFn(arr[i])){
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let arr=[1,2,3,4];
arr=filter(arr,(num)=>{return num<3;});
console.log(arr);
