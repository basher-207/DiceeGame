function doMath() {
    let firstNumber = Math.floor((Math.random()*6)+1);
    let secondNumber = Math.floor((Math.random()*6)+1);

    let firstImg = document.getElementById("FIRST");
    let secondImg = document.getElementById("SECOND");
    firstImg.src="images/dice" + firstNumber + ".png";
    secondImg.src="images/dice" + secondNumber + ".png"

    let title = document.getElementById("TITLE");

    if(firstNumber > secondNumber){
        title.innerHTML = "🎉 Player 1 WIN"
    }else if(firstNumber < secondNumber){
        title.innerHTML = "Player 2 WIN 🎉"
    }else{
        title.innerHTML = "DRAW..."
    }
}

