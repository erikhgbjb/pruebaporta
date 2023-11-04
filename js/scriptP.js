function stilys(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    month=11;
    day=18;

    if ((month == 10 && day > 20) || (month == 11 && day < 8) ) {
        document.write('<link rel="stylesheet" href="style/styleDM.css" id="inc">');
    }else if ( (month == 11 && day > 16) || (month == 11 && day < 22) ) {
        document.write('<link rel="stylesheet" href="style/styleMEX.css" id="inc">');
    } else if ( (month == 12 && day > 16) || (month == 1 && day < 12) ){
        document.write('<link rel="stylesheet" href="style/styleXmas.css" id="inc">');
    }else{
        
    }
    
}


