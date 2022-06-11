function askName() {

    let namesArr = [];

    while(true){
        let name = prompt('Enter your name');

        if(name === null || name === '') break;

        name = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;

        namesArr.push(name);

        namesArr.sort((firstName, secondName) => { 
            return firstName.length - secondName.length;
        });
    }

    console.log(namesArr);
    
    return namesArr;
}

askName();
