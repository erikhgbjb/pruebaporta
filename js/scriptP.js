function stilys(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    month=3;
    day=20;

    if ((month == 10 && day > 20) || (month == 11 && day < 8) ) {
        document.write('<link rel="stylesheet" href="style/styleDM.css" id="inc">');
    }else if ( (month == 11 && day > 16) || (month == 11 && day < 22) ) {
        document.write('<link rel="stylesheet" href="style/styleMEX.css" id="inc">');
    }else if ( (month == 12 && day > 16) || (month == 1 && day < 12) ){
        document.write('<link rel="stylesheet" href="style/styleXmas.css" id="inc">');
    }else if( (month == 2 && day > 3) && (month == 2 && day < 7) ){
        document.write('<link rel="stylesheet" href="style/styleMEX.css" id="inc">');
    }else if( (month == 2 && day > 12) && (month == 2 && day < 16) ){
        document.write('<link rel="stylesheet" href="style/styleDAA.css" id="inc">');
    }else if( (month == 2 && day > 22) && (month == 2 && day < 26) ){
        document.write('<link rel="stylesheet" href="style/styleMEX.css" id="inc">');
    }else if( (month == 3 && day > 19) && (month == 3 && day < 22) ){
        document.write('<link rel="stylesheet" href="style/styleEP.css" id="inc">');
    }//podrian faltar el 30 de abril, 1 de mayo y 10 de mayo
    else if( (month == 9 && day >0) && (month == 9 && day < 31) ){
        document.write('<link rel="stylesheet" href="style/styleMEX.css" id="inc">');
    }
}


