import "./styles.css";

const bill = document.querySelector("#billAmt");
const cash = document.querySelector("#recivedAmt");
const checkBtn = document.querySelector("#calNotes");
const msg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (bill.value > 0) {
    if (cash.value >= bill.value) {
      const amountToBeReturned = cash.value - bill.value;
      calChanges(amountToBeReturned);
    } else {
      showMessage(
        "the cash provided should atleast be equal to the bill amount!"
      );
    }
  } else {
    showMessage("Invalid Bill Amount!");
  }
});

function calChanges(amountToBeReturned) {
  // console.log(amountToBeReturned);
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(message) {
  msg.style.display = "block";
  msg.innerText = message;
}

function hideMessage() {
  msg.style.display = "none";
}
