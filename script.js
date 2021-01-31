// Test 
console.log("Connected");

// restart Game Button
var restart = document.querySelector("#resetId");

// Grabs all the squares
var squares = document.querySelectorAll('td');

//Result variable
var res = document.querySelector('h5');
var Tag = document.querySelector('p');
var f = true;



// Random Selsction for 1st move in Pc 
squares[Math.floor(Math.random() * 9)].textContent = 'O';


// Clear all the sequares
restart.addEventListener('click', function clearBoard(){
    for(var i = 0; i<squares.length; i++){
            squares[i].textContent = '';

    }
    squares[Math.floor(Math.random() * 9)].textContent = 'O';
    res.textContent = '';
    Tag.textContent = 'Get ready to play!';
});

// Showing Result Function
function pcWinn(){
    console.log("PC")
    Tag.textContent = '';
    res.textContent = "........................................PC Win........................................";
    f = false;
    fill();
}
function youWinn(){
    console.log("YOU")
    Tag.textContent = '';
    res.textContent = "........................................You Win........................................";
    f = false;
    fill();
}
// .............................

// Filling the empty Block
function fill(){
    for(var i = 0; i<squares.length; i++){
        if(squares[i].textContent === '')
        squares[i].textContent = ' ';

    }
}

// Result Desision Function
function result(){

    if((squares[0].textContent !== '' && squares[1].textContent !== '' && squares[2].textContent !== '') 
    && (squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent )){
        
        if(squares[0].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }
            

    }else if((squares[3].textContent !== '' && squares[4].textContent !== '' && squares[5].textContent !== '') 
    && (squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent)){

        if(squares[3].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[6].textContent !== '' && squares[7].textContent !== '' && squares[8].textContent !== '') 
    && (squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent)){

        if(squares[6].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[0].textContent !== '' && squares[3].textContent !== '' && squares[4].textContent !== '') 
    && (squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent )){

        if(squares[0].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[7].textContent !== '' && squares[4].textContent !== '' && squares[1].textContent !== '') 
    && (squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent)){

        if(squares[1].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[8].textContent !== '' && squares[5].textContent !== '' && squares[2].textContent !== '') 
    && (squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent)){

        if(squares[2].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[0].textContent !== '' && squares[4].textContent !== '' && squares[8].textContent !== '') 
    && (squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent)){

        if(squares[0].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }else if((squares[2].textContent !== '' && squares[4].textContent !== '' && squares[6].textContent !== '') 
    && (squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent)){

        if(squares[2].textContent === 'O'){
            pcWinn()
        }  
        else{
            youWinn()
        }

    }
    else if(squares[0].textContent !== '' && squares[1].textContent !== '' && squares[2].textContent !== '' 
    && squares[3].textContent !== '' && squares[4].textContent !== '' && squares[5].textContent !== '' 
    && squares[6].textContent !== ''&& squares[7].textContent !== '' && squares[8].textContent !== ''){
        console.log("Drow");
        Tag.textContent = '';
        res.textContent = "........................................Match Drow........................................";
        f = false;
    }

}
// ..................................................................

// AI Function
function attact(v){
    if(squares[2].textContent === squares[4].textContent && squares[2].textContent === v && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        console.log("1");
        return false;
    }
    else if(squares[6].textContent === squares[4].textContent && squares[4].textContent === v && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        console.log("2");
        return false;
    }
    else if(squares[2].textContent === squares[6].textContent && squares[2].textContent === v && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        console.log("3");
        return false;
    }

    else if(squares[0].textContent === squares[1].textContent && squares[1].textContent === v && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        console.log("4");
        return false;
    }
    else if(squares[3].textContent === squares[4].textContent && squares[3].textContent === v && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        console.log("5");
        return false;
    }
    else if(squares[6].textContent === squares[7].textContent && squares[7].textContent === v && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        console.log("6");
        return false;
    }

    else if(squares[0].textContent === squares[2].textContent && squares[0].textContent === v && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        console.log("7");
        return false;
    }
    else if(squares[3].textContent === squares[5].textContent && squares[5].textContent === v && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        console.log("8");
        return false;
    }
    else if(squares[6].textContent === squares[8].textContent && squares[8].textContent === v && squares[7].textContent === ''){
        squares[7].textContent = 'O';
        console.log("9");
        return false;
    }

    else if(squares[1].textContent === squares[2].textContent && squares[1].textContent === v && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        console.log("10");
        return false;
    }
    else if(squares[4].textContent === squares[5].textContent && squares[5].textContent === v && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        console.log("11");
        return false;
    }
    else if(squares[7].textContent === squares[8].textContent && squares[8].textContent === v && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        console.log("12");
        return false;
    }

    else if(squares[0].textContent === squares[3].textContent && squares[0].textContent === v && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        console.log("13");
        return false;
    }
    else if(squares[1].textContent === squares[4].textContent && squares[4].textContent === v && squares[7].textContent === ''){
        squares[7].textContent = 'O';
        console.log("14");
        return false;
    }
    else if(squares[2].textContent === squares[5].textContent && squares[5].textContent === v && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        console.log("15");
        return false;
    }

    else if(squares[0].textContent === squares[6].textContent && squares[0].textContent === v && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        console.log("16");
        return false;
    }
    else if(squares[1].textContent === squares[7].textContent && squares[7].textContent === v && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        console.log("17");
        return false;
    }
    else if(squares[2].textContent === squares[8].textContent && squares[8].textContent === v && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        console.log("18");
        return false;
    }

    else if(squares[3].textContent === squares[6].textContent && squares[3].textContent === v && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        console.log("19");
        return false;
    }
    else if(squares[4].textContent === squares[7].textContent && squares[7].textContent === v && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        console.log("20");
        return false;
    }
    else if(squares[5].textContent === squares[8].textContent && squares[8].textContent === v && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        console.log("21");
        return false;
    }

    else if(squares[0].textContent === squares[4].textContent && squares[0].textContent === v && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        console.log("22");
        return false;
    }
    else if(squares[0].textContent === squares[8].textContent && squares[0].textContent === v && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        console.log("23");
        return false;
    }
    else if(squares[8].textContent === squares[4].textContent && squares[8].textContent === v && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        console.log("24");
        return false;
    }
    else{
        console.log("25");
        return true;    
    }
}
// .....................................................................................................


// PC move Function 
function pcMove(){

    f = true;
    console.log(f);
    f = attact('O');
    console.log(f,"attact");

    if (f === true){
        f = attact('X');
        console.log(f,"defence");
    }
    
    if(f === true){
        for (i=0; i<squares.length; i++){
            if(squares[i].textContent === ''){
                squares[i].textContent = 'O';
                break;
            }
        }
        console.log("Normal Short")
    }    

}
// ....................................................................................



// Bord Click Function 
function clickListener(){
    
    if(this.textContent === ''){
        this.textContent = 'X';
        result();
        pcMove();
        result();
    }

    
}


for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',  clickListener);
}

// ................................................................

