// Class that will enable the Tic-Tac-Toe Game
class TicTacToe 
{
   
    constructor() 
    {
        //Enumeration to represent the value in each cell in the array
        this.boardValue = 
        {
            X: 'X',
            O: 'O',
            Empty: ''
        };

        // Creating 2 human players
        this.playerOne = this.boardValue.X;
        this.playerTwo = this.boardValue.O;
  
        //3x3 2 dimensional array for the board
        // Initializing the board to empty
        this.board = 
        [
            [this.boardValue.Empty,this.boardValue.Empty,this.boardValue.Empty],
            [this.boardValue.Empty,this.boardValue.Empty,this.boardValue.Empty],
            [this.boardValue.Empty,this.boardValue.Empty,this.boardValue.Empty]
        ]
      
    };


    // Inserts the values into each block
    createBoard() 
    {
       document.getElementById("block1").innerHTML = this.boardValue.Empty;
       document.getElementById("block2").innerHTML = this.boardValue.Empty;
       document.getElementById("block3").innerHTML = this.boardValue.Empty;
       document.getElementById("block4").innerHTML = this.boardValue.Empty;
       document.getElementById("block5").innerHTML = this.boardValue.Empty;
       document.getElementById("block6").innerHTML = this.boardValue.Empty;
       document.getElementById("block7").innerHTML = this.boardValue.Empty;
       document.getElementById("block8").innerHTML = this.boardValue.Empty;
       document.getElementById("block9").innerHTML = this.boardValue.Empty;       
    }


    // Runs the game
    startGame() 
    {   
        this.currentPlayer;
        this.playerName;
        this.counter = 0;
        this.winner = null;
        this.createBoard();
        this.showBoard();
        this.askPlayer();
    }


    //Asks the player if they would like to go first or second 
    askPlayer()
    { 
        let playerChoice = prompt("Please enter 1 for player 1 or 2 for player 2");

        if (playerChoice == "1") 
        {
            this.currentPlayer = this.playerOne;
            document.getElementById('message').style.color = "black";
            this.setMessage("Player " + this.currentPlayer + " turn to go.");
        } 
        else if (playerChoice == "2") 
        {
            this.currentPlayer = this.playerTwo
            document.getElementById('message').style.color = "black";
            this.setMessage("Player " + this.currentPlayer + " turn to go.");
        }
        else 
        {
            document.getElementById('message').style.color = "red";
            this.setMessage("You have entered an incorrect value, please enter either 1 or 2");
        }       
    }


    // Only show the board when the game starts
    showBoard() 
    {    
        document.getElementById("board").style.display = "inline-block";
    }

   
    // Handles the messages displayed to the user
    setMessage(msg) 
    {
        document.getElementById('message').innerHTML = msg;
    }


    // Checks the next move
    // Stops the player from entering a value into a block that has already been used
    nextMove(square) 
    {
        if (this.winner != null) 
        {
            document.getElementById('message').style.color = "red";
            this.setMessage(this.winner + " already won the game.");
        } 
        else if (square.innerHTML == "")
        {
            document.getElementById('message').style.color = "black";
            square.innerHTML = this.currentPlayer;
            this.switchTurn();
        } 
        else 
        {
            document.getElementById('message').style.color = "red";
            this.setMessage("Sorry that square is already used.")
        }
        
    }


    // Hanldes the players turns
    // Outputs if there is a winner or if the game is a draw 
    switchTurn() 
    {       

        if (this.checkWinner(this.currentPlayer) && this.currentPlayer == "X")
        {
            this.playerName = "Player One";
            document.getElementById('message').style.color = "green";
            this.setMessage("Well done " + this.playerName + ", you are the winner.")
            this.winner = this.currentPlayer;
            this.winner = this.playerName;
        } 

        else if (this.checkWinner(this.currentPlayer) && this.currentPlayer == "O")
        {
            this.playerName = "Player Two";
            document.getElementById('message').style.color = "green";
            this.setMessage("Well done " + this.playerName + ", you are the winner.");
            this.winner = this.currentPlayer;
            this.winner = this.playerName;
        }

        else if (this.currentPlayer == this.playerOne && this.counter < 9) 
        {
            this.currentPlayer = this.playerTwo;
            this.setMessage("It's " + this.currentPlayer + " move next.");
            this.counter += 1;  
        } 

        else 
        {
            this.currentPlayer = this.playerOne;
            this.setMessage("It's " + this.currentPlayer + " move next.")
            this.counter += 1;
        }
        
        // Checks to see if the game is a draw
        this.checkDraw();
    }


    // Check userInput
    checkRow(a, b, c, move) 
    {
        let result = false;
        if (this.getBlock(a) == move && this.getBlock(b) == move && this.getBlock(c) == move)
        {
            result = true;
        }

        return result;
    }


    // Returns each box
    getBlock(number) 
    {
        return document.getElementById("block" + number).innerHTML;
    }


    // The winning combinations of the game
    // Returns a result depending on the players move 
    checkWinner(move) 
    {
        let result = false;
        if (this.checkRow(1, 2, 3, move) || 
            this.checkRow(4, 5, 6, move) ||
            this.checkRow(7, 8, 9, move) ||
            this.checkRow(1, 4, 7, move) ||
            this.checkRow(2, 5, 8, move) ||
            this.checkRow(3, 6, 9, move) ||
            this.checkRow(1, 5, 9, move) ||
            this.checkRow(3, 5, 7, move)) 
        {
            result = true;
        }

        return result;
    }


    // Determines if the game is a draw
    checkDraw()
    {      
        if (this.counter == 9) 
        {
            document.getElementById('message').style.color = "red";
            this.setMessage("Sorry, the game has ended in a draw.");
        }
    }  
    
}

// Creating an instance of TicTacToe
let game = new TicTacToe();






