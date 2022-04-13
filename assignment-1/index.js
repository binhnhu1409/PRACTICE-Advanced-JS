// Write Javascript code that prints out (using `console.log`) 
//a sequence of numbers from 1 to 1,000,000 (one million) without blocking the interactions with the browser. 
//For example, while that piece of Javascript is running, mouse, keyboard events etc should work fine and browser doesn't hang.

let counter = 0;

count();

function count() {
    if (counter < 1000000) {
        counter++
        console.log(counter)
        document.getElementById("counter").innerHTML = counter;
        setTimeout(count, 0);
    }
}


