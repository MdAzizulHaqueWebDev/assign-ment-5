// all btn access
const allButton = document.getElementsByClassName('ticket');
// selected seat
const selectedSeatText = document.getElementById('selected-seat');
const selectedSeatTextValue = selectedSeatText.innerText;
const selectedSeat = parseInt(selectedSeatTextValue);
// total seat
const totalSeatText = document.getElementById('total-seat');
const totalSeatTextValue =totalSeatText.innerText;
const totalSeat = parseInt(totalSeatTextValue)
// total price
const totalPriceElement = document.getElementById('total-price');
const totalPriceValue = totalPriceElement.innerText;
const totalPrice = parseInt(totalPriceValue)
// grand price
const grandPriceElement = document.getElementById('grand-price');
const grandPriceValue = grandPriceElement.innerText;
const grandPrice = parseInt(grandPriceValue)

let sum = 0;
let seatAccess = 0;
for(const button of allButton){
button.addEventListener('click',function(e){
seatAccess = seatAccess + 1;
totalSeatText.innerText = totalSeat-seatAccess;
selectedSeatText.innerText = selectedSeat + seatAccess;
button.classList.add('bg-green-400');
button.setAttribute('disabled',true)

sum = sum + 550;
totalPriceElement.innerText = sum;
grandPriceElement.innerText =sum;

const selectedSeats = document.getElementById('selected-seat').innerText
if( selectedSeats >= 4){
alert('Not Allowed select more than 4');
button.setAttribute('disabled',true)
}


})}

