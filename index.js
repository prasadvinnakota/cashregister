const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const message = document.querySelector("#message")
const balanceButton = document.querySelector("#balance-amount")
const notes = document.querySelectorAll("#notes")
console.log(notes)
const notesDenomination = [2000,500,100,20,10,5,1]

balanceButton.addEventListener("click", function validateCashGivenAndBillAmount()
{
    message.style.display = "none";

    if(billAmount.value <=0)
    {
        showMessage("Invalid Amount")

    }

    else
    {
        if((cashGiven.value-billAmount.value)<0)
        {
            showMessage("Ready to wash plates?")
        }
        else
        {
            calculateBalanceAmountInNotes((cashGiven.value-billAmount.value))
        }

    }
})

function showMessage(msg)
{
  message.style.display = "block";
  message.innerHTML=msg

}


function calculateBalanceAmountInNotes(balanceAmount)
{
    for(var i=0; i<=notesDenomination.length-1; i++)
    {
        
        notes[i].innerHTML = Math.trunc(balanceAmount/notesDenomination[i])
        
        balanceAmount = balanceAmount%notesDenomination[i]
    }



}

