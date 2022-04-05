for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function writeCards(array, event) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(positiveInt) {
    let counter = positiveInt;
    while (counter >= 0) {
        console.log(counter);
        counter --;
    }
}