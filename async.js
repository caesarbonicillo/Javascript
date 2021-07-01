//use this for functions that are cleaner and reusable. it's more clearer 

const delay = (seconds) => // this function creates a delay takes seconds as a parameter
    new Promise ((resolves) => //keyword Promise
    setTimeout(resolves, seconds * 1000)
    );

const countToFive = async () => { // async is a keyword
    console.log("zero seconds");
    await delay (1); //AWAIT is used with ASYNC
    console.log("one seconds");
    await delay (2);
    console.log("two seconds");
    await delay (2);
};

countToFive(); //call the function