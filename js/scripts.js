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

