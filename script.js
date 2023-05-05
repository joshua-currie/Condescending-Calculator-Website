let ioElement = document.querySelector('p');
ioElement.innerHTML = '';

let authorText = document.querySelector('.comment-author');
authorText.innerHTML = '';

let commentText = document.querySelector('.comment-itself');
commentText.innerHTML = '';

let webColor = document.querySelector('body');

let total = 0;
let helperNum = 0;
let opPressed = false;
let theOp = '';
twoDigitChecker = 0;

function pressedButton(buttonValue, isNum, isOp)
{
    let authorText = document.querySelector('.comment-author');
    authorText.innerHTML = '';

    let commentText = document.querySelector('.comment-itself');
    commentText.innerHTML = '';

    if (buttonValue !== 'color' && buttonValue !== 'P' && buttonValue !== 'D')
    {
        ioElement.innerHTML = buttonValue;
    }

    if (isNum && !opPressed)
    {
        total = buttonValue;
        twoDigitChecker++;
    }

    else if (isOp)
    {
        theOp = buttonValue;
        opPressed = true;
        twoDigitChecker = 0;
    }

    else if (isNum && opPressed)
    {
        twoDigitChecker++;
        if (theOp === '+')
        {
            total += buttonValue;
            opPressed = false;
        }

        else if (theOp === '-')
        {
            total -= buttonValue;
            opPressed = false;
        }

        else if (theOp === 'X')
        {
            total = total * buttonValue;
            opPressed = false;
        }

        else if (theOp === '/')
        {
            total = total / buttonValue;
            opPressed = false;
        }
    }

    else if (buttonValue === 'N')
    {
        total = total * -1;
        ioElement.innerHTML = total;
    }

    else if (buttonValue === 'P')
    {
        total = total * 0.01;
        ioElement.innerHTML = total;
    }

    else if (buttonValue === '=')
    {
        ioElement.innerHTML = total;
        twoDigitChecker = 0;
        calculatorInsult();
    }

    else if (buttonValue === 'C')
    {
        total = 0;
        opPressed = false;
        ioElement.innerHTML = 0;
        twoDigitChecker = 0;
    }

    else if (buttonValue === 'D')
    {
        authorText.innerHTML = 'Calculator says:';
        commentText.innerHTML = '"Nope"';
    }

    if (twoDigitChecker >= 2)
    {
        authorText.innerHTML = 'Calculator says:';
        commentText.innerHTML = `"You don\'t deserve to work with ${twoDigitChecker}-digit numbers"`;
    }

    if (buttonValue === 'color')
    {
        let newRandomColor = getRandomColor();
        webColor.style.backgroundColor = newRandomColor;
        authorText.innerHTML = 'Calculator says:';
        commentText.innerHTML = '"Wow you figured out how to change the background color."';
    }
}

function calculatorInsult()
{
    authorText.innerHTML = 'Calculator says:';

    let quoteSelector = Math.random();
    console.log(quoteSelector);

    if (quoteSelector < 0.05)
    {
        commentText.innerHTML = '"You really needed a calculator to solve that?"';
    }

    else if (quoteSelector >= 0.05 && quoteSelector < 0.1)
    {
        commentText.innerHTML = '"Wow we have a genius over here."';
    }

    else if (quoteSelector >= 0.1 && quoteSelector < 0.15)
    {
        commentText.innerHTML = '"You are as smart as you look."';
    }

    else if (quoteSelector >= 0.15 && quoteSelector < 0.2)
    {
        commentText.innerHTML = '"What would you do without me."';
    }

    else if (quoteSelector >= 0.2 && quoteSelector < 0.25)
    {
        commentText.innerHTML = '"This is pathetic."';
    }

    else if (quoteSelector >= 0.25 && quoteSelector < 0.3)
    {
        commentText.innerHTML = '"I expected nothing, but I am still disappointed.”';
    }

    else if (quoteSelector >= 0.3 && quoteSelector < 0.35)
    {
        commentText.innerHTML = '“You are about as sharp as a sack full of soup.”';
    }

    else if (quoteSelector >= 0.35 && quoteSelector < 0.4)
    {
        commentText.innerHTML = '"Your IQ is probably around room temperature."';
    }

    else if (quoteSelector >= 0.4 && quoteSelector < 0.45)
    {
        commentText.innerHTML = '"Not the sharpest tool in the shed are ya?"';
    }

    else if (quoteSelector >= 0.45 && quoteSelector < 0.5)
    {
        commentText.innerHTML = '"Suprised you can even work a calculator."';
    }

    else if (quoteSelector >= 0.5 && quoteSelector < 0.55)
    {
        commentText.innerHTML = '"Have you passed third grade yet?';
    }

    else if (quoteSelector >= 0.55 && quoteSelector < 0.6)
    {
        commentText.innerHTML = '"Math is definitely not your strong suit."';
    }

    else if (quoteSelector >= 0.6 && quoteSelector < 0.65)
    {
        commentText.innerHTML = '"Goo goo gaa gaa."';
    }

    else if (quoteSelector >= 0.65 && quoteSelector < 0.7)
    {
        commentText.innerHTML = '"Are you done yet?"';
    }

    else if (quoteSelector >= 0.7 && quoteSelector < 0.75)
    {
        commentText.innerHTML = '"You do not deserve internet access."';
    }

    else if (quoteSelector >= 0.75 && quoteSelector < 0.8)
    {
        commentText.innerHTML = '"I can not believe you needed me to solve that."';
    }

    else if (quoteSelector >= 0.8 && quoteSelector < 0.85)
    {
        commentText.innerHTML = '"were you born yesterday?"';
    }

    else if (quoteSelector >= 0.85 && quoteSelector < 0.9)
    {
        commentText.innerHTML = '"Are your parents proud of you?"';
    }

    else if (quoteSelector >= 0.9 && quoteSelector < 0.95)
    {
        commentText.innerHTML = '"Wow."';
    }

    else if (quoteSelector >= 0.95 && quoteSelector < 1)
    {
        commentText.innerHTML = '"I feel sorry for you."';
    }
}

function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  