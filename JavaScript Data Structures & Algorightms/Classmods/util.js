// import main from './main'; // newer some npm packages are going to this 


const main = require('./main');

    const mainobj = new main('josh', 'jac@mail.com' );
    
    console.log(mainobj.getinfo());


class util{


    caller = () =>{

    const main = require('./main');

    const mainobj = new main('josh', 'jac@mail.com' );
    
    console.log(mainobj.getinfo());

    }


    caller2 = () =>{

        const next = require('./next');
    
        const nxt = new next();
        
        console.log(nxt.getinfoNow());
    
        }
    



}

let testCall = new util();
testCall.caller();

// testCall.caller2();