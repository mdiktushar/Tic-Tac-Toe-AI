// Test 
console.log("Connected");

// alert("afasd",location.replace('index.htm'));
// restart Game Button
var restart = document.querySelector("#resetId");

// Grabs all the squares
var squares = document.querySelectorAll('td');

squares[Math.floor(Math.random() * 9)].textContent = 'O';


// Clear all the sequares
restart.addEventListener('click', function clearBoard(){
    for(var i = 0; i<squares.length; i++){
            squares[i].textContent = '';

    }
    squares[Math.floor(Math.random() * 9)].textContent = 'O';
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

    }else if((squares[2].textContent !== '' && squares[4].textContent !== '' && squares[6].textContent !== '') 
    && (squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent)){

        if(squares[2].textContent === 'O')
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


function attact(){
    if(squares[2].textContent === squares[4].textContent && squares[2].textContent === 'O' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[4].textContent && squares[4].textContent === 'O' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[6].textContent && squares[2].textContent === 'O' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[1].textContent && squares[1].textContent === 'O' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }
    else if(squares[3].textContent === squares[4].textContent && squares[3].textContent === 'O' && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[7].textContent && squares[7].textContent === 'O' && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[2].textContent && squares[0].textContent === 'O' && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        return false;
    }
    else if(squares[3].textContent === squares[5].textContent && squares[5].textContent === 'O' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[8].textContent && squares[8].textContent === 'O' && squares[7].textContent === ''){
        squares[7].textContent = 'O';
        return false;
    }

    else if(squares[1].textContent === squares[2].textContent && squares[1].textContent === 'O' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else if(squares[4].textContent === squares[5].textContent && squares[5].textContent === 'O' && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        return false;
    }
    else if(squares[7].textContent === squares[8].textContent && squares[8].textContent === 'O' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[3].textContent && squares[0].textContent === 'O' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }
    else if(squares[1].textContent === squares[4].textContent && squares[4].textContent === 'O' && squares[7].textContent === ''){
        squares[3].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[5].textContent && squares[5].textContent === 'O' && squares[8].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[6].textContent && squares[0].textContent === 'O' && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        return false;
    }
    else if(squares[1].textContent === squares[7].textContent && squares[7].textContent === 'O' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[8].textContent && squares[8].textContent === 'O' && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        return false;
    }

    else if(squares[3].textContent === squares[6].textContent && squares[3].textContent === 'O' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else if(squares[4].textContent === squares[7].textContent && squares[7].textContent === 'O' && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        return false;
    }
    else if(squares[5].textContent === squares[8].textContent && squares[8].textContent === 'O' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[4].textContent && squares[0].textContent === 'O' && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        return false;
    }
    else if(squares[0].textContent === squares[8].textContent && squares[0].textContent === 'O' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[8].textContent === squares[4].textContent && squares[8].textContent === 'O' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else
        return true;

}

function defence(){

    if(squares[2].textContent === squares[4].textContent && squares[2].textContent === 'X' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[4].textContent && squares[4].textContent === 'X' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[6].textContent && squares[2].textContent === 'X' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[1].textContent && squares[1].textContent === 'X' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }
    else if(squares[3].textContent === squares[4].textContent && squares[3].textContent === 'X' && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[7].textContent && squares[7].textContent === 'X' && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[2].textContent && squares[0].textContent === 'X' && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        return false;
    }
    else if(squares[3].textContent === squares[5].textContent && squares[5].textContent === 'X' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[6].textContent === squares[8].textContent && squares[8].textContent === 'X' && squares[7].textContent === ''){
        squares[7].textContent = 'O';
        return false;
    }

    else if(squares[1].textContent === squares[2].textContent && squares[1].textContent === 'X' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else if(squares[4].textContent === squares[5].textContent && squares[5].textContent === 'X' && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        return false;
    }
    else if(squares[7].textContent === squares[8].textContent && squares[8].textContent === 'X' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[3].textContent && squares[0].textContent === 'X' && squares[6].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }
    else if(squares[1].textContent === squares[4].textContent && squares[4].textContent === 'X' && squares[7].textContent === ''){
        squares[7].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[5].textContent && squares[5].textContent === 'X' && squares[8].textContent === ''){
        squares[6].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[6].textContent && squares[0].textContent === 'X' && squares[3].textContent === ''){
        squares[3].textContent = 'O';
        return false;
    }
    else if(squares[1].textContent === squares[7].textContent && squares[7].textContent === 'X' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[2].textContent === squares[8].textContent && squares[8].textContent === 'X' && squares[5].textContent === ''){
        squares[5].textContent = 'O';
        return false;
    }

    else if(squares[3].textContent === squares[6].textContent && squares[3].textContent === 'X' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else if(squares[4].textContent === squares[7].textContent && squares[7].textContent === 'X' && squares[1].textContent === ''){
        squares[1].textContent = 'O';
        return false;
    }
    else if(squares[5].textContent === squares[8].textContent && squares[8].textContent === 'X' && squares[2].textContent === ''){
        squares[2].textContent = 'O';
        return false;
    }

    else if(squares[0].textContent === squares[4].textContent && squares[0].textContent === 'X' && squares[8].textContent === ''){
        squares[8].textContent = 'O';
        return false;
    }
    else if(squares[0].textContent === squares[8].textContent && squares[0].textContent === 'X' && squares[4].textContent === ''){
        squares[4].textContent = 'O';
        return false;
    }
    else if(squares[8].textContent === squares[4].textContent && squares[8].textContent === 'X' && squares[0].textContent === ''){
        squares[0].textContent = 'O';
        return false;
    }
    else
        return true;
}


function pcMove(){

    var f  = true;
    f = attact();
    console.log(f,"attact");

    if (f === true){
        f = defence();
    }
    console.log(f,"defence");
    if(f === true){
        for (i=0; i<squares.length; i++){
            if(squares[i].textContent === ''){
                squares[i].textContent = 'O';
                break;
            }
        }
    }    

}


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




// For loop to add event listeners to all the squares
