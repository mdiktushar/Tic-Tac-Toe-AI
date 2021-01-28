// Test 
console.log("Connected");

// restart Game Button
var restart = document.querySelector("#resetId");

// Grabs all the squares
var squares = document.querySelectorAll('td');

// Clear all the sequares
restart.addEventListener('click', function clearBoard(){
    for(var i = 0; i<squares.length; i++){
        if(i == 4)
            squares[i].textContent = 'O';
        else
            squares[i].textContent = '';

    }
});

// if(squares[0].textContent === squares[1].textContent)
//     alert("hello");

function result(){

    if((squares[0].textContent !== '' && squares[1].textContent !== '' && squares[2].textContent !== '') 
    && (squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent )){
        
        if(squares[0].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[3].textContent !== '' && squares[4].textContent !== '' && squares[5].textContent !== '') 
    && (squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent)){

        if(squares[3].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[6].textContent !== '' && squares[7].textContent !== '' && squares[8].textContent !== '') 
    && (squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent)){

        if(squares[6].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[0].textContent !== '' && squares[3].textContent !== '' && squares[4].textContent !== '') 
    && (squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent )){

        if(squares[0].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[7].textContent !== '' && squares[4].textContent !== '' && squares[1].textContent !== '') 
    && (squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent)){

        if(squares[1].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[8].textContent !== '' && squares[5].textContent !== '' && squares[2].textContent !== '') 
    && (squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent)){

        if(squares[2].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }else if((squares[0].textContent !== '' && squares[4].textContent !== '' && squares[8].textContent !== '') 
    && (squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent)){

        if(squares[0].textContent === 'O')
            console.log("PC")
        else
            console.log("YOU")

    }
    else if(squares[0].textContent !== '' && squares[1].textContent !== '' && squares[2].textContent !== '' 
    && squares[3].textContent !== '' && squares[4].textContent !== '' && squares[5].textContent !== '' 
    && squares[6].textContent !== ''&& squares[7].textContent !== '' && squares[8].textContent !== ''){
        console.log("Drow")
    }


    // console.log("NO");
}

function pcMove(){
    console.log("Tushar");
}


function clickListener(){
    
    if(this.textContent === ''){
        this.textContent = 'X';
    }
    result();
    pcMove();
    result();

    
}


for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',  clickListener);
}




// For loop to add event listeners to all the squares
