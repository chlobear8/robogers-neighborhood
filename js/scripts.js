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
  }
	return outputArray;

  }

