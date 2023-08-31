console.log("Welcome to Tic Tac Toe")

let audioTurn = new Audio("sound.mp3")
let turn = "O"
let isgameover = false;

const changeTurn = () => {
    return turn === "O" ? "X" : "O";
}

const defence = () => 
{
    let boxtext = document.getElementsByClassName('boxtext');
    let randomIndex = -1
    
    if(boxtext[0].innerText === 'X' && boxtext[1].innerText === 'X' && boxtext[2].innerText === '')
    {
        randomIndex = 2
    }
    else if(boxtext[0].innerText === 'X' && boxtext[2].innerText === 'X' && boxtext[1].innerText === '')
    {
        randomIndex = 1
    }
    else if(boxtext[1].innerText === 'X' && boxtext[2].innerText === 'X' && boxtext[0].innerText === '')
    {
        randomIndex = 0
    }
    else if(boxtext[3].innerText === 'X' && boxtext[4].innerText === 'X' && boxtext[5].innerText === '')
    {
        randomIndex = 5
    }
    else if(boxtext[3].innerText === 'X' && boxtext[5].innerText === 'X' && boxtext[4].innerText === '')
    {
        randomIndex = 4
    }
    else if(boxtext[4].innerText === 'X' && boxtext[5].innerText === 'X' && boxtext[3].innerText === '')
    {
        randomIndex = 3
    }
    else if(boxtext[6].innerText === 'X' && boxtext[7].innerText === 'X' && boxtext[8].innerText === '')
    {
        randomIndex = 8
    }
    else if(boxtext[6].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[7].innerText === '')
    {
        randomIndex = 7
    }
    else if(boxtext[7].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[6].innerText === '')
    {
        randomIndex = 6
    }
    else if(boxtext[0].innerText === 'X' && boxtext[6].innerText === 'X' && boxtext[3].innerText === '')
    {
        randomIndex = 3
    }
    else if(boxtext[0].innerText === 'X' && boxtext[3].innerText === 'X' && boxtext[6].innerText === '')
    {
        randomIndex = 6
    }
    else if(boxtext[3].innerText === 'X' && boxtext[6].innerText === 'X' && boxtext[0].innerText === '')
    {
        randomIndex = 0
    }
    else if(boxtext[1].innerText === 'X' && boxtext[4].innerText === 'X' && boxtext[7].innerText === '')
    {
        randomIndex = 7
    }
    else if(boxtext[1].innerText === 'X' && boxtext[7].innerText === 'X' && boxtext[4].innerText === '')
    {
        randomIndex = 4
    }
    else if(boxtext[4].innerText === 'X' && boxtext[7].innerText === 'X' && boxtext[1].innerText === '')
    {
        randomIndex = 1
    }
    else if(boxtext[2].innerText === 'X' && boxtext[5].innerText === 'X' && boxtext[8].innerText === '')
    {
        randomIndex = 8
    }
    else if(boxtext[2].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[5].innerText === '')
    {
        randomIndex = 5
    }
    else if(boxtext[5].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[2].innerText === '')
    {
        randomIndex = 2
    }
    else if(boxtext[0].innerText === 'X' && boxtext[4].innerText === 'X' && boxtext[8].innerText === '')
    {
        randomIndex = 8
    }
    else if(boxtext[0].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[4].innerText === '')
    {
        randomIndex = 4
    }
    else if(boxtext[4].innerText === 'X' && boxtext[8].innerText === 'X' && boxtext[0].innerText === '')
    {
        randomIndex = 0
    }
    else if(boxtext[2].innerText === 'X' && boxtext[4].innerText === 'X' && boxtext[6].innerText === '')
    {
        randomIndex = 6
    }
    else if(boxtext[2].innerText === 'X' && boxtext[6].innerText === 'X' && boxtext[4].innerText === '')
    {
        randomIndex = 4
    }
    else if(boxtext[4].innerText === 'X' && boxtext[6].innerText === 'X' && boxtext[2].innerText === '')
    {
        randomIndex = 2
    }
    else if(boxtext[0].innerText === 'X' && boxtext[8].innerText === '')
    {
        randomIndex = 8;
    }
    else if(boxtext[2].innerText === 'X' && boxtext[6].innerText === '')
    {
        randomIndex = 6;
    }
    else if(boxtext[6].innerText === 'X' && boxtext[2].innerText === '')
    {
        randomIndex = 2;
    }
    else if(boxtext[8].innerText === 'X' && boxtext[0].innerText === '')
    {
        randomIndex = 0;
    }
    return randomIndex
   
}
const computerPlay = () => {
    let emptyBoxes = [];
    let boxtext = document.getElementsByClassName('boxtext');
    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === '') {
            emptyBoxes.push(i);
        }
    }
    let moveMade = false;
    for (let i = 0; i < emptyBoxes.length; i++) {
        let tempText = boxtext[emptyBoxes[i]].innerText;
        boxtext[emptyBoxes[i]].innerText = "O";
        
        if (checkWin()) {
            moveMade = true;
            boxtext[emptyBoxes[i]].innerText = "O";
            turn = changeTurn();
            audioTurn.play();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            isgameover = true;
            break;
        }
        
        boxtext[emptyBoxes[i]].innerText = tempText;
    }
    let store_defence = defence();
    console.log("The value defence is returning is:",store_defence)
    if(store_defence != -1)
    {
        moveMade = true;
        boxtext[store_defence].innerText = "O";
        turn = changeTurn();
        audioTurn.play();
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
    if (!moveMade && emptyBoxes.length > 0 && !isgameover) 
    {
        let randomIndex = 2;
        if(boxtext[0].innerText == '')
        randomIndex = 0
        else if(boxtext[8].innerText == '')
        randomIndex = 8
        else if(boxtext[6].innerText == '')
        randomIndex = 6
        else if(boxtext[2].innerText == '')
        randomIndex = 2
        else if(boxtext[4].innerText == '')
        randomIndex = 4
        else if(boxtext[1].innerText == '')
        randomIndex = 1
        else if(boxtext[3].innerText == '')
        randomIndex = 3
        else if(boxtext[5].innerText == '')
        randomIndex = 5
        else if(boxtext[7].innerText == '')
        randomIndex = 7
        boxtext[randomIndex].innerText = "O"
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if (!isgameover) {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
};

// computerPlay();

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>
    {
        
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            if(boxtext[e[0]].innerText === 'X')
            {
                computer_audio.play();
                document.querySelector('.imgboxplayer').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector('.info').innerText ="Player Wins"
            }
            else if(boxtext[e[0]].innerText === 'O')
            {
                document.querySelector('.imgboxcom').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector('.info').innerText ="Computer Wins"
            }
            isgameover = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
let flag = 0;
if(flag === 0)
{
    computerPlay();
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
         
        element.addEventListener('click', () => 
        {
            if(turn === 'X' && boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover)
                {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;         
                    computerPlay();
                }
            }
        });
    });
    flag = 1;
}
else
{
    // computerPlay();
    turn = changeTurn();
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
         
        element.addEventListener('click', () => 
        {
            if(turn === 'X' && boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover)
                {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;         
                    computerPlay();
                }
            }
        });
    });
    flag = 0;
}

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => 
    {
        element.innerText = ''
    });
    turn = "O"
    isgameover = false
    computerPlay();
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgboxplayer').getElementsByTagName('img')[0].style.width = "0px"
});
