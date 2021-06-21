
function myrob(){
    let cache={};
    return function myrobDP(nums,i){
        
        if(i in cache){
            return cache[i];
        }
        else{
             if(i<0) return 0;
             else{
                 cache[i]=Math.max(myrobDP(nums,i-2)+nums[i],myrobDP(nums,i-1));
                 return cache[i];
             }
        }
       
         
    }
}


let price = [1,2,3,1];

const myrobObj = myrob();

console.log(myrobObj(price,price.length -1))
// console.log(rob(price))