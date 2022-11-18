Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: beepBoop(5);
Expected Ouput: [0,1,2,3,4,5]

Test: "It should return 'Beep!' instead of 1."
Code: beepBoop(5);
Expected Output: [0,"Beep!",2,3,4,5]

Test: "It should return only one 'Beep!' per 1 i.e '11'"
Code: beepBoop(11);
Expected Output: [0,"Beep!", 2,3,4,5,6,7,8,9,"Beep!","Beep!"]

Test: "It should return 'Boop!' instead of 2."
Code: beepBoop(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: "It should return the higher number when double digits."
Code: beepBoop(12);
Expected Output: [0, "Beep!", "Boop!",3,4,5,6,7,8,9,"Beep!", "Boop!"]

Test: "It should return 'Won't you be my neighbor?' instead of 3."
Code: beepBoop(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]