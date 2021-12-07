const initialPrice = document.querySelector("#initial-price");
const numberShare = document.querySelector("#number-of-shares");
const currentPrice = document.querySelector("#current-price");
const btnResult = document.querySelector("#btn-result");
const result = document.querySelector("#result")

function profitOrLoss(){
    const initial = Number(initialPrice.value).toFixed(2);
    const current = Number(currentPrice.value).toFixed(2);

    if(initial === "" || current === "" || numberShare.value === ""){
        alert("Please do not leave any field empty.");
    }
    else if(initial > current){
        const loss = (initial-current)*numberShare.value;
        const lossPercent = (initial - current) * 100/initial;
        result.innerText = "Absolute loss is " + loss + " and percentage loss is " + lossPercent; 
        console.log("ladcwm");
    }
    else if(initial < current){
        const profit = (current-initial)*numberShare.value;
        const profitPercent = (current-initial)*100/initial;
        result.innerText = "Absolute profit is " + profit + " and percentage profit is " + profitPercent;
    }
    else{
        result.innerText = "no pain, no gain and no gain, no pain";
    }
    }

btnResult.addEventListener("click", profitOrLoss);