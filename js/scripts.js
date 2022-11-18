function beepBoop(number) {
	let outputArray = []; 
	for (let i = 0; i <= number; i++) {
    let digits=Array.from(String(i), Number) 
    outputArray[i]=i;
    if (digits.includes(1)) {
      outputArray[i]="Beep!";
    }
    if (digits.includes(2)) {
      outputArray[i]="Boop!";
    }
    if (digits.includes(3)) {
      outputArray[i]="Won't you be my neighbor?";
    }
  }
	return outputArray;
  }

function handleFormSubmission(event) {
  event.preventDefault();
  const userInput=document.getElementById("num-con").value;
  const number=document.getElementById("number").value;
  let outputArray=document.getElementById("output-string").innerText;
  }
  window.addEventListener("load", function() {
      document.querySelector("form#word-converter").addEventListener("submit", handleFormSubmission);
});
  

