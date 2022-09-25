var body = document.querySelector('body');
var calcHeading = document.querySelector('h2');
var resultSection = document.querySelector('.resSection');
var resultOutput = document.querySelector('#result');
var keyPad = document.querySelector('.keyPad');
var button = document.querySelectorAll('.button');
var del = document.querySelector('.del');
var cal = document.querySelector('.cal');
var reset = document.querySelector('.reset');

// var theme = document.querySelector('theme');
var theme = 3;

if(theme === 1){
    body.style.backgroundColor = "hsl(222, 26%, 31%)";

    calcHeading.style.color = "white";

    resultSection.style.backgroundColor = "hsl(224, 36%, 15%)";
    resultOutput.style.backgroundColor = "hsl(224, 36%, 15%)";
    resultOutput.style.color = "white";

    keyPad.style.backgroundColor = "hsl(223, 31%, 20%)";

    button.forEach(button => {
        button.style.backgroundColor = "hsl(30, 25%, 89%)";
        button.style.color = "hsl(221, 14%, 31%)";
        button.style.boxShadow = "0px 3px hsl(28, 16%, 65%)";

        button.onmouseover = ()=>{
            button.style.backgroundColor = "hsl(30, 100%, 100%)";
        }

        button.onmouseout = ()=>{
            button.style.backgroundColor = "hsl(30, 25%, 89%)";
        }
    });

    del.style.backgroundColor = "hsl(225, 21%, 49%)";
    del.style.color = "white";
    del.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";

    del.onmouseover = ()=>{
        del.style.backgroundColor = "hsl(223, 48%, 75%)";
    }

    del.onmouseout = ()=>{
        del.style.backgroundColor = "hsl(225, 21%, 49%)";
    }

    reset.style.backgroundColor = "hsl(225, 21%, 49%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";

    reset.onmouseover = ()=>{
        reset.style.backgroundColor = "hsl(223, 48%, 75%)";
    }

    reset.onmouseout = ()=>{
        reset.style.backgroundColor = "hsl(225, 21%, 49%)";
    }

    cal.style.backgroundColor = "hsl(6, 63%, 50%)";
    cal.style.color = "white";
    cal.style.boxShadow = "0px 3px hsl(6, 70%, 34%)";

    cal.onmouseover = ()=>{
        cal.style.backgroundColor = "hsl(6, 71%, 61%)";
    }

    cal.onmouseout = ()=>{
        cal.style.backgroundColor = "hsl(6, 63%, 50%)";
    }
}

if(theme === 2){
    body.style.backgroundColor = "hsl(0, 0%, 90%)";

    calcHeading.style.color = "black";

    resultSection.style.backgroundColor = "hsl(0, 0%, 93%)";
    resultOutput.style.backgroundColor = "hsl(0, 0%, 93%)";
    resultOutput.style.color = "black";

    keyPad.style.backgroundColor = "hsl(0, 5%, 81%)";

    button.forEach(button => {
        button.style.backgroundColor = "hsl(45, 7%, 89%)";
        button.style.color = "hsl(221, 14%, 31%)";
        button.style.boxShadow = "0px 3px hsl(35, 11%, 61%)";

        button.onmouseover = ()=>{
            button.style.backgroundColor = "hsl(30, 100%, 100%)";
        }

        button.onmouseout = ()=>{
            button.style.backgroundColor = "hsl(45, 7%, 89%)";
        }
    });

    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    del.style.color = "white";
    del.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";

    del.onmouseover = ()=>{
        del.style.backgroundColor = "hsl(185, 38%, 57%)";
    }

    del.onmouseout = ()=>{
        del.style.backgroundColor = "hsl(185, 42%, 37%)";
    }

    reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";

    reset.onmouseover = ()=>{
        reset.style.backgroundColor = "hsl(185, 38%, 57%)";
    }

    reset.onmouseout = ()=>{
        reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    }

    cal.style.backgroundColor = "hsl(25, 98%, 40%)";
    cal.style.color = "white";
    cal.style.boxShadow = "0px 3px hsl(25, 99%, 27%)";

    cal.onmouseover = ()=>{
        cal.style.backgroundColor = "hsl(25, 98%, 63%)";
    }

    cal.onmouseout = ()=>{
        cal.style.backgroundColor = "hsl(25, 98%, 40%)";
    }
}

if(theme === 3){
    body.style.backgroundColor = "hsl(268, 75%, 9%)";

    calcHeading.style.color = "hsl(52, 100%, 62%)";

    resultSection.style.backgroundColor = "hsl(268, 71%, 12%)";
    resultOutput.style.backgroundColor = "hsl(268, 71%, 12%)";
    resultOutput.style.color = "hsl(52, 100%, 62%)";

    keyPad.style.backgroundColor = "hsl(268, 71%, 12%)";

    button.forEach(button => {
        button.style.backgroundColor = "hsl(268, 47%, 21%)";
        button.style.color = "hsl(52, 100%, 62%)";
        button.style.boxShadow = "0px 3px hsl(290, 70%, 36%)";

        button.onmouseover = ()=>{
            button.style.backgroundColor = "hsl(268, 52%, 46%)";
        }

        button.onmouseout = ()=>{
            button.style.backgroundColor = "hsl(268, 47%, 21%)";
        }
    });

    del.style.backgroundColor = "hsl(281, 89%, 26%)";
    del.style.color = "white";
    del.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";

    del.onmouseover = ()=>{
        del.style.backgroundColor = "hsl(281, 64%, 44%)";
    }

    del.onmouseout = ()=>{
        del.style.backgroundColor = "hsl(281, 89%, 26%)";
    }

    reset.style.backgroundColor = "hsl(281, 89%, 26%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";

    reset.onmouseover = ()=>{
        reset.style.backgroundColor = "hsl(281, 64%, 44%)";
    }

    reset.onmouseout = ()=>{
        reset.style.backgroundColor = "hsl(281, 89%, 26%)";
    }

    cal.style.backgroundColor = "hsl(176, 100%, 44%)";
    cal.style.color = "black";
    cal.style.boxShadow = "0px 3px hsl(177, 92%, 70%)";

    cal.onmouseover = ()=>{
        cal.style.backgroundColor = "hsl(177, 81%, 79%)";
    }

    cal.onmouseout = ()=>{
        cal.style.backgroundColor = "hsl(176, 100%, 44%)";
    }
}
