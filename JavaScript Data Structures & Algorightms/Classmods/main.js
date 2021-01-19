

class main {
    constructor(name, email){
        this.name = name;
        this.email =email;

    }

    courseList = [];

    getinfo(){
        return {name: this.name, email: this.email};
    }


    enroll(name){
        this.courseList.push(name);
    }

    getCourse(){
        return this.courseList;
    }
}





class next {
  

    getinfoNow(){
        return "hi new class";
    }

    getMoreinfoNow(){
        return "give it now";
    }

}

module.exports = { main }; // older

// you can only export one default