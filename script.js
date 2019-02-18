// FUNCTION

function readNumber(){
    var myNumber = prompt('Scrivi un numero:');
    myNumber = parseInt(myNumber);
    return myNumber;
}

function printMessage(message){
    var myMessage = message;
    alert(myMessage);
    return;
}

function isEqualToTen(myNumber){
    const COMPARABLE_NUMBER = 10;
    return myNumber == COMPARABLE_NUMBER;
}

//IF

function simpleCheck(){
    var myNumber = readNumber();
    var isThatNumberEqualToTen = isEqualToTen(myNumber);
    if(isThatNumberEqualToTen){
        printMessage('Sì, il numero è proprio uguale a 10.');
    }
}

//IF - ELSE

function binaryCheck(){
    var myNumber = readNumber();
    var isThatNumberEqualToTen = isEqualToTen(myNumber);
    if(isThatNumberEqualToTen){
        printMessage('Sì, il numero è proprio uguale a 10.');
    }else{
        printMessage('No, non è 10.');
    }
}

// 2, 5, 7, 13 --> Primo
// 10 --> Base
// 8,64 --> Octal

function ifPie(myNumber){
    if(myNumber == 2 || myNumber == 5 || myNumber == 7 || myNumber == 13){
        return 'Primo';
    }else if(myNumber == 10){
        return 'Base';
    }else if(myNumber == 8 || myNumber == 64){
        return 'Octal';
    }else{
        return 'None';
    }
}

function switchPie(myNumber){
    var returnedMessage = '';
    switch(myNumber){
        case 2:
        case 5:
        case 7:
        case 13:
            returnedMessage = 'Primo';
            break;
        case 10:
            returnedMessage = 'Base';
            break;
        case 8:
        case 64:
            returnedMessage = 'Octal';
            break;
        default:
            returnedMessage = 'None';
            break;
    }
    return returnedMessage;
}

// switch caller

function callSwitch(){
    var aNumber = readNumber();
    var message = switchPie(aNumber);
    printMessage(message);
}

//MAIN

// mostra il menu in un alert
// leggi l'operazione da effettuare
// leggi gli operandi
// esegui lo switch per l'operazione corretta (e salva il risultato)
// scrivi il risultato