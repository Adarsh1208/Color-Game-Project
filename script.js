window.onload = function(){
    var noOfSquares = 6 
    var colors = generateRandomColors(noOfSquares);
    var squares = document.querySelectorAll(".square")
    var pickedColor = pickColor()
    var colorDisplay = document.getElementById("colorDisplay")
    var messageDisplay = document.getElementById("message")
    var h1 = document.querySelector("h1")
    var resetButton = document.querySelector("#reset")
    var modeButtons = document.querySelectorAll(".mode")

    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? noOfSquares = 3: noOfSquares = 6
            reset()

            //figure out how many squares to show 
            //pick a new colors
            //pick a new pickedColor
            //update page to reflect changes
        })
    }

    function reset (){
        colors = generateRandomColors(noOfSquares)
        //pick new random color form array
        pickedColor = pickColor()
        //change color display to match new picked color
        colorDisplay.textContent = pickedColor
        this.textContent = "New Colors"
        messageDisplay.textContent = ""
        //change colors of square
        for (var i = 0; i  < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block"
                squares[i].style.backgroundColor = colors[i]
            }else{
                squares[i].style.display = "none"
            }
           
        }
        h1.style.background = "steelblue"
    }
    

    // easyBtn.addEventListener("click", function(){
    //     easyBtn.classList.add("selected")
    //     hardBtn.classList.remove("selected")
    //     noOfSquares = 3
    //     colors = generateRandomColors(noOfSquares)
    //     pickedColor = pickColor()
    //     colorDisplay.textContent = pickedColor

    //     for (var i = 0 ; i < squares.length ; i++){
    //         if(colors[i]){
    //             squares[i].style.backgroundColor = colors[i]
    //         }else {
    //             squares[i].style.display = "none"
    //         }
    //     }
    // })

    // hardBtn.addEventListener("click", function(){
    //     hardBtn.classList.add("selected")
    //     easyBtn.classList.remove("selected")
    //     noOfSquares = 6
    //     colors = generateRandomColors(noOfSquares)
    //     pickedColor = pickColor()
    //     colorDisplay.textContent = pickedColor

    //     for (var i = 0 ; i < squares.length ; i++){
    //             squares[i].style.backgroundColor = colors[i]
    //             squares[i].style.display = "block"
        
    //     }
    // })

    resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(noOfSquares)
    //pick new random color form array
    pickedColor = pickColor()
    //change color display to match new picked color
    colorDisplay.textContent = pickedColor
    this.textContent = "New Colors"
    messageDisplay.textContent = ""
    //change colors of square
    for (var i = 0; i  < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.background = "steelblue"

    
})

colorDisplay.textContent = pickedColor


for (var i = 0; i < squares.length ; i++){

    //add initial colors to square
    squares[i].style.backgroundColor = colors[i]

    //add click Listener to square
    squares[i].addEventListener("click", function(){
        //grab color of clicked quare
        var clickedColor = this.style.backgroundColor

        //compare color to pickedColor 
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor)
            h1.style.background = clickedColor
        }else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColors (color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each background color to match given color
        squares[i].style.backgroundColor = color
    }
}

function pickColor (){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors
    for(var i = 0; i  < num ; i++){ 
        //get random color and push it into arr
        arr.push(randomColor())
    }

    return arr
}

function randomColor(){
    var red = Math.floor(Math.random() * 256) 
    var green = Math.floor(Math.random() * 256) 
    var blue = Math.floor(Math.random() * 256)  
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

}

