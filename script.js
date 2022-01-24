let display = document.getElementById("display");

let button = document.getElementsByClassName("button");

const displayText = (number) => {
    display.innerText += number;
}

const calculate = () => {
    try{
        display.innerText=eval(display.innerText);
    }
    catch{
        display.innterText="You can't do that"
    }
}

const clearText = () => {
    display.innerText="";
}

const deleteText = () => {
    display.innerText=display.innerText.slice(0,-1);
}