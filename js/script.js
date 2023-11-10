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


var DC = ["http://drive.google.com/uc?export=view&id=1hUHMJ4_6fo1HfIryxfnYW6eJVLC7pL2a","http://drive.google.com/uc?export=view&id=19RomzO1cfFGlhA8KRpdpLn57cee5BtDb",
"http://drive.google.com/uc?export=view&id=1QUf_NlqbkMbDqMTILSlpIIwfhuyoVj4e","http://drive.google.com/uc?export=view&id=1fDsQ98SjNbNipp8wHClNjmcQjVkrHi0n",
"http://drive.google.com/uc?export=view&id=1tNiv3W77i0nZeXKkrTyUugVsjjHWZimL","http://drive.google.com/uc?export=view&id=10R6Ep1FoKV_z8u-m_MCOSxYwvYZmju3F",
"http://drive.google.com/uc?export=view&id=1tU1jzBqgm-A_1nZZDqwERZxhhdvCWpKY","http://drive.google.com/uc?export=view&id=14Ge32qjUb1ooEhMIsMQ-ud-BGkEmDqAB",
"http://drive.google.com/uc?export=view&id=1A-_wqRNLLxTnshNTXWwK92UdOSb4sL_h","http://drive.google.com/uc?export=view&id=1tqY8OYwTLLIwIiWViJmCdX9K32Lnng6z"];


var DB = ["http://drive.google.com/uc?export=view&id=1AAfDRpZlV7WBEm9ecPQlUK6OSAv80XYO","http://drive.google.com/uc?export=view&id=1q2s-OdiXjL6TRu-Qjt1RpuV2NB00nu9Z",
"http://drive.google.com/uc?export=view&id=1MD3ZYEjtw6A-NYCON-lrJw67h1hOuhR5","http://drive.google.com/uc?export=view&id=1ytK_Eg7uoxHqTAQWlYkZ5lU16IiJPd55",
"http://drive.google.com/uc?export=view&id=1HV1_b18a1TLlXG8sLoldNoTDbxJTjjAc","http://drive.google.com/uc?export=view&id=1pT9RtPTrC5MKtrvaHZBs2wmWCSHSVpEs",
"http://drive.google.com/uc?export=view&id=1TWJENEVaXx8v8hcLsj03jKq14seDiPkr","http://drive.google.com/uc?export=view&id=1T_v6PjNQM-hNwvg0-flsEa2LK_j8GuHp",
"http://drive.google.com/uc?export=view&id=1M4s4qu97_tobOm0jHqtW9ssZ_0AQgcm_","http://drive.google.com/uc?export=view&id=1M6KBiNzlQeb0h303IArMwrkIyVvlaGwb"];

var EP = ["http://drive.google.com/uc?export=view&id=1kq9LUbqQP-LvJveJD8gT1GV8gFavV62P","http://drive.google.com/uc?export=view&id=1qT8X9UJFSZZA6pZWNDdlpcJaKXncjfT4",
"http://drive.google.com/uc?export=view&id=1XZsmnpqdxIaKxRxNGOyCKaMkn7uYDYLC","http://drive.google.com/uc?export=view&id=1lLQsfjwv7Yy-F6wnj9QA19xpJamXFSDx",
"http://drive.google.com/uc?export=view&id=11xW2ZNUx5feSyrlKfE9OVzxYelaGzhcR","http://drive.google.com/uc?export=view&id=1KGT2qMbPsgbVVyAHD0_EJUhttXf-wxRF",
"http://drive.google.com/uc?export=view&id=1nRJRmvXUcHTDnf0arWNKOARsaH6Yq7tq","http://drive.google.com/uc?export=view&id=13rOGRobhKVqVLzzfjxFdTqMQIjLejB7S",
"http://drive.google.com/uc?export=view&id=14ZCwux9qTnD_VW2dtLaLP8xIeh7cxKFX","http://drive.google.com/uc?export=view&id=1J3xeLlj7TKuZxubnRFW4lJmIPdolRdly"];





// https://drive.google.com/file/d/1GWVEwQ_dDCA1y0_Ovb98eMuVljVF587D/view?usp=drive_link
// https://drive.google.com/file/d//view?usp=drive_link




month=11;
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
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DC[i]);
}else if ( (month == 2 && day > 12) && (month == 2 && day < 16)  ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DAA[i]);
    RemoverEscudo();
}else if ( (month == 2 && day > 22) && (month == 2 && day < 26)  ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DB[i]);
}else if ( (month == 3 && day > 19) && (month == 3 && day < 22)  ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", EP[i]);
    RemoverEscudo();
}//podrian faltar el 30 de abril, 1 de mayo y 10 de mayo
else if( (month == 9 && day >0) && (month == 9 && day < 31) ){
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", DC[i]);
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
