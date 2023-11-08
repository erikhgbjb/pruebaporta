const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

var xmas = ["http://drive.google.com/uc?export=view&id=1VeLZ06TbnzJt77ZLy6CHiQLEQW2gHN56","http://drive.google.com/uc?export=view&id=12Vy-3O_Y3Yoz9bkWDNDolTv6U8P6j1SA",
"http://drive.google.com/uc?export=view&id=1slEoYgEpxOajT5vmsgC5lkYixP9ijqPO","http://drive.google.com/uc?export=view&id=1NKtkzRRRgmV--_5xRBQ3I_qrppgglqlq",
"http://drive.google.com/uc?export=view&id=1GxdNf72-yCZbjOCrUNQ4c_0Fxrt-_6Sd","http://drive.google.com/uc?export=view&id=1mDHF4rNWkg-H0gurdj3pmKXPk6J8VB3y",
"http://drive.google.com/uc?export=view&id=1_9lTsbERKW6DX3yy5H9WhjD-NU0rgxRc","http://drive.google.com/uc?export=view&id=1WmTU1yKJ1I89slR9DldsPvtjKuClWc6P",
"http://drive.google.com/uc?export=view&id=110Kc-54Hej7JMIirjGglmz8nqQ6dGi6J","http://drive.google.com/uc?export=view&id=1wm6JzArZnCIy16Xs3BUcd_GfhaABCF3T"];

var DM = ["http://drive.google.com/uc?export=view&id=1L1f77fhC06j9Dv6zR-qVi0k5ErTvFMMe","http://drive.google.com/uc?export=view&id=1ID7dfnf8DPBITPHjHYAbkVavvFSRDQrO",
"http://drive.google.com/uc?export=view&id=1dMmN3rsJdvR4zqV2q3fKN2jDgPLGhPa2","http://drive.google.com/uc?export=view&id=1XPWQtNhRv_2m3pUwpXLnp4F0yf6RgY5X",
"http://drive.google.com/uc?export=view&id=1V9zXWG97nD6NJvFLURmg3zpV1UcMragT","http://drive.google.com/uc?export=view&id=1m__-owhCYrR_Y_YyyIn4_hQKZq7Ofmzg",
"http://drive.google.com/uc?export=view&id=16d90-qoBypMJDoBFa96mS3cL_9kj5oeT","http://drive.google.com/uc?export=view&id=1p8_lUeLSOIolk5csz6AbBn7GrynCB7_d",
"http://drive.google.com/uc?export=view&id=1UTPZqoWMDltbGgu0GLmvYX91-OqO3ta0","http://drive.google.com/uc?export=view&id=1QK3HD7Z6q1uYuXINA8NR6uSBzKHimD6B"];

var Rev = ["http://drive.google.com/uc?export=view&id=1oDZHsdSOPHe9aHDreDKrg3fNYWgclg-E","http://drive.google.com/uc?export=view&id=1I08dk7VbnD3xx1gDWM1F1EfmSqcehMly",
"http://drive.google.com/uc?export=view&id=1Bivj4JEIzyTomoiPF3FtEWlseT3eiN5R","http://drive.google.com/uc?export=view&id=17NfArYr1v23S_C-PrdOCPNvCfMLD8V_S",
"http://drive.google.com/uc?export=view&id=1JgoQrF4T-86cMm1POK8tv8PLIT_H7GGZ","http://drive.google.com/uc?export=view&id=12qUW6TNbjQumm29g63TRsAlfdZZ-GfZJ",
"http://drive.google.com/uc?export=view&id=1aG5imr2GsMIe2MKBaFFfxie8EHOQXnly","http://drive.google.com/uc?export=view&id=1MqZFY8f0AUB70QhvX7eaSghS3Gz3R1vG",
"http://drive.google.com/uc?export=view&id=1MydxCo0lV6Fz5eEXk8ZjLizj141-QchC","http://drive.google.com/uc?export=view&id=1I5BhOI7ZM1gj40PHoYzepqaRCnFfuptM"];

var DAA = ["http://drive.google.com/uc?export=view&id=1PMAMmsCW5o5tH5fMe74z2K104uNE-ovK","http://drive.google.com/uc?export=view&id=1qfu-OB_FExY8KjhWJkRMgPhOtsNbkuJ2",
"http://drive.google.com/uc?export=view&id=1-XVSpMYXyt-tvUo47ajPWKRd26bemjk1","http://drive.google.com/uc?export=view&id=1QgmAxhpiNZ9vRUuP5khxk9MHirIUpGDk",
"http://drive.google.com/uc?export=view&id=1fSjNEi_Aka1fVK8InNBQkXCHEABjhvQa","http://drive.google.com/uc?export=view&id=1U6jQOZAp64ssdBsd80exIle82Na35h-p",
"http://drive.google.com/uc?export=view&id=1SRoJmBroxZcZnCzJKQGK4dRjG3kb92QR","http://drive.google.com/uc?export=view&id=16n9JLvRMSiN15H0UOf_bNLXroulXSFgF",
"http://drive.google.com/uc?export=view&id=1g1kNPDxjM1xgbmp-WrOBKVkqUFH4RO0W","http://drive.google.com/uc?export=view&id=1djXpkoJ3Igo2OdOrJp5M5XhNVXkPd0mq"];


// https://drive.google.com/file/d/1GWVEwQ_dDCA1y0_Ovb98eMuVljVF587D/view?usp=drive_link
// https://drive.google.com/file/d//view?usp=drive_link



month=12;
day=18;
var i = Math.floor(Math.random() * 10);
let text = document.getElementById("estilo").innerHTML; 
//i=0;

if ((month == 10 && day > 20) || (month == 11 && day < 8) ) {
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DM[i]);
    RemoverEscudo();
}else if ( (month == 11 && day > 16) || (month == 11 && day < 22) ) {
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", Rev[i]);
}else if ( (month == 12 && day > 16) || (month == 1 && day < 12) ) {
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", xmas[i]);
    RemoverEscudo();
}else if( (month == 2 && day >3) && (month == 2 && day < 7) ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DAA[i]);
}else if ( (month == 2 && day >10) && (month == 2 && day < 16) ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DAA[i]);
    RemoverEscudo();
}


function RemoverEscudo(){
    const element = document.getElementById("esc");
    element.remove();
}

// var DM = ["","",
// "","",
// "","",
// "","",
// "",""];

// http://drive.google.com/uc?export=view&id=FILEID


// const element = document.getElementById("FBF");
// element.remove();
// codigo para remover los agradecimientos en caso de ser necesario


// https://api.generadordni.es/v2/holidays/holidays?country=ES&year=2025

// http://drive.google.com/uc?export=view&id=FILEID