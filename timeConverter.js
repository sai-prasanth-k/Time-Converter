let hoursInputElement = document.getElementById("hoursInput");
let minutesInputElement = document.getElementById("minutesInput");
let convertBtnElement = document.getElementById('convertBtn');
let errorMsgElement = document.getElementById("errorMsg");
let timeInSecondsElement = document.getElementById("timeInSeconds");
let timerContainerElement = document.getElementById("timerContainer");
const errorMessage = "please enter a valid number of hours";
let timesInSecondsValue;

function timeConverter() {
    let hoursInputValue = hoursInputElement.value;
    let minutesInputValue = minutesInputElement.value;
    
    if (minutesInputValue === "") {
        errorMsgElement.textContent = errorMessage;
        return;
    } else if (hoursInputValue === ""){
        errorMsgElement.textContent = errorMessage;
        return;
    }else {
        let hoursValue = parseInt(hoursInputValue);
        let minutesValue = parseInt(minutesInputValue);
        timesInSecondsValue = hoursValue * 3600 + minutesValue * 60;
        
        timeInSecondsElement.textContent = timesInSecondsValue + "s";
    }
    errorMsgElement.textContent = "";
    hoursInputElement.value = "";
    minutesInputElement.value = "";
    // console.log(typeof hoursValue);
}


convertBtnElement.addEventListener("click", timeConverter);