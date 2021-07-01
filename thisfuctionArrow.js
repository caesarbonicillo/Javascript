//thisFunction create OBJECT

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        let _this = this; // this is a work around to get name from person property
        this.hobbies.forEach(function (hobby) {
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });
    }

};

person.printHobbies();

//better way keeping THIS in SCOPE

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        this.hobbies.forEach( (hobby) => { //removed _this and FUNCTION
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });
    }

};
