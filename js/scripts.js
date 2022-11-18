function beepBoop(number) {
	let outputArray = []; 
	for (let i = 0; i <= number; i++) {
    let digits=Array.from(String(i), Number) 
    outputArray[i]=i;
    if (digits.includes(1)) {
      outputArray[i]="Beep!"
    }
  }
	return outputArray;

  }

