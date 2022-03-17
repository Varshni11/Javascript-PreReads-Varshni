function forEach(arr,funct){
  for(let i=0;i<arr.length;i++){
    funct(arr[i]);
  }
}

let arr=[1,2,3,4];
forEach(arr,(num)=>{console.log(num);});
