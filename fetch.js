//same as loading from remote data except using FETCH alot cleaner

let getSpacePeople = () =>
    fetch (
        "http://api.open-notify.org/astros.json"
    ).then((res) => res.json()); //this gets the api from the http://api.....

let spaceNames = () => 
    getSpacePeople() // gets the json file 
        .then((json) => json.people) //takes the names
        .then((people) => people.map((p) => p.name)) //maps the names
        .then((names) => names.join(", ")); // joins the map with a , 

spaceNames().then(console.log); // console.logs 
