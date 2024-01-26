enteredPin = '';

function enterPin(number) {
  if (enteredPin.length < 4) {
    enteredPin += number;
    document.getElementById('pinInput').value = '*'.repeat(enteredPin.length);
  }

}

function clearPin() {
  enteredPin = '';
  document.getElementById('pinInput').value = '';
}

function checkPin() {
  const correctPin = '5581';
  if (enteredPin === correctPin) {
    // Replace this alert with your desired action
    alert('Correct PIN entered! You Have Survived Congratulations!');
    clearPin();
  } else {
      if (enteredPin.length < 4){
          alert("*BOOM* Your PIN Was Not 4 Digits,You have blown up and died");
          clearPin();
      }else{
        alert('*BOOM* Incorrect PIN, You have blown up and died');
        clearPin();
      }
  }
}