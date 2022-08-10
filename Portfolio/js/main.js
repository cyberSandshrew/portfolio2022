let randomBK = ['darkgreen','navy','maroon','black'];//globally

function createTable(){
    let myTable=document.createElement('table');
    document.body.appendChild(myTable);
    document.body.style.backgroundColor=randomBK[Math.floor(Math.random()* randomBK.length)];
   
    
    myTable.id="tbl";


    for (let i=2;i<=100;i++){
        let currentRow=myTable.insertRow(-1);//sets up insert for the row
        let firstCell=currentRow.insertCell(0);

        i = i*Math.floor(Math.random()*3 + 1); //set i to a random number(2* 1to4)
        firstCell.innerHTML=i.toString();

        let secondCell=currentRow.insertCell(1);
        secondCell.innerHTML=(i*i).toString();

        let thirdCell=currentRow.insertCell(2);
        thirdCell.innerHTML=(i*i*i).toString();

        var a = document.getElementById("tbl");
        var rows = a.rows.length;
        let cells = rows*3;

        document.getElementById("label").innerHTML = "Number of Values Generated " + cells;

    }
}

function regenerate(){
    let myTable=document.getElementsByTagName("table");
    document.body.removeChild(myTable[0]);//removes the table
    createTable();
}

                        //grades generator
//print total
function Total(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
  
 
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}
  
  
	else {
    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = "Quiz 1: "+sub1+"<br> Quiz 2: "+sub2+"<br> Quiz 3: "+sub3+"<br> Quiz 4: "+sub4+"<br> Quiz 5: "+sub5+"<br> Total Marks: "+total;  
	}
}
						//average
function Average(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
    
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}
	else {
    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    var avg=total/5;
    document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
	}
}
						//grade mark
  
function Grade(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
    
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}else {
     var total= sub1 + sub2 + sub3 + sub4 + sub5;
     var avg=total/5;
    
     if(avg>=89.6 )
     {
       document.getElementById("grade").innerHTML="You Got an A Grade";
     }
     
    
	 else if(avg>=79.6 && avg<=89.5)
     {
       document.getElementById("grade").innerHTML="You Got a B Grade";
     }
     
	 else if(avg>=69.6 && avg<=79.5)
     {
       document.getElementById("grade").innerHTML="You Got a C Grade";
     }
     
	 else if(avg>=60 && avg<=69.5)
     {
       document.getElementById("grade").innerHTML="You Got a D Grade";
     }
    
     else {
       document.getElementById("grade").innerHTML="You Got a F Grade";
     }
    
    
  }
 
 
}

                    //dice roller
// Player name
var player1 = "Player 1";
var player2 = "Player 2";

let total1 = 0;
let total2 = 0;

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
    
    //getting dice numbers
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        var randomNumber4 = Math.floor(Math.random() * 6) + 1;
        
        //printing dice image
        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
            
        document.querySelector(".img3").setAttribute("src",
            "dice" + randomNumber3 + ".png");

        document.querySelector(".img4").setAttribute("src",
            "dice" + randomNumber4 + ".png");
            
        // getting the total score for 1 round	
        let score1 = randomNumber1 + randomNumber2;
        let score2 = randomNumber3 + randomNumber4;
        
        //checking for doubles
        if(randomNumber1 == randomNumber2 && score1 > score2){
            document.getElementById("doubles").innerHTML= "DOUBLES";
            score1 = score1 *2;
        
        }else{
            document.getElementById("doubles").innerHTML= "Keep Going";
        }	
        
        if(randomNumber3 == randomNumber4 && score2 > score1){
            document.getElementById("doubles").innerHTML= "DOUBLES";
            score2 = score2 *2;
        
        }else{
            document.getElementById("doubles").innerHTML= "Keep Going";
        }
        
        if(score1 == score2){
        
            score1 = 0;
            score2 = 0
        
        }
        
        //adding up totals
        
            total1 += score1;
        
            total2 += score2;
        
        
        //printing elements
        document.getElementById("score1").innerHTML= "Score " + score1;
        document.getElementById("score2").innerHTML= "Score " + score2;
        
        document.getElementById("Total1").innerHTML= "Total " + total1;
        document.getElementById("Total2").innerHTML= "Total " + total2;
        

        if (randomNumber1 + randomNumber2 === randomNumber3 + randomNumber4 ) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 + randomNumber2 < randomNumber3 + randomNumber4) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
                            
        }
        //end game at 100 point
        if(total1 >= 100 || total2 >= 100){
            alert("Game Over");
            score1 = 0;
            score2 = 0;

            total1 = 0;
            total2 = 0;
        }
    }, 2500);
    
    
}

//reset the game
function resetGame() {
score1 = 0;
score2 = 0;

total1 = 0;
total2 = 0;

document.getElementById("score1").innerHTML= "Score " + score1;
document.getElementById("score2").innerHTML= "Score " + score2;
        
document.getElementById("Total1").innerHTML= "total " + total1;
document.getElementById("Total2").innerHTML= "total " + total2;

}


                            //timer
// Select Countdown container
const countContainer = document.getElementById("countdown-number");

// Select action buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Select timeout Audio element
const timeoutAudio = document.getElementById("timeout_audio");

// variable to store count
var remainingTime = 30;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
};

// Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = 30;
  countContainer.innerHTML = remainingTime;
};

// Initialize timeout sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startButton.onclick = startTimer;
resetButton.onclick = resetTimer;
stopButton.onclick = stopTimer;

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    // Play audio on timeout
    timeoutAudio.play();
	document.getElementById("blastOff").innerHTML= "BLASTOFF! ";
    remainingTime = 30;
	
  }
};