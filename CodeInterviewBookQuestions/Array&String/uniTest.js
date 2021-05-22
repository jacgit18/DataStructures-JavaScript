let theString = "sbfksbfkf fbefj 32v%$#@&/? "


const isUnique = (TheSringParam) =>{

    if (TheSringParam.length > 128){
        return false;
    }
    let Ray = [128];


    for (let i = 0; i < TheSringParam.length; i++) {
         let val = TheSringParam.charAt(i);

         if (Ray[val]) {
         return false;
         }
         Ray[val] = true;
         }

         return true;
}

isUnique(theString);