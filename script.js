"use strict";
let errormsg = document.body.querySelector(".error");
let tweetfield = document.body.querySelector('.tweet');
function showMessages() {
    let maxlength = document.body.querySelector('#nums').value;
    if (tweetfield.value.length < maxlength)
        addMessage(tweetfield.value, maxlength)
    else
    {
        let words = tweetfield.value.split(' ');
        const isBad = (elem) => elem.length > +maxlength;
        if (words.some(isBad))
        {
            errormsg.style.display = "block";
            for (let word of words)
            {
                addMessage(word, maxlength);
            }
        }
        else
        {
            errormsg.style.display = "none";
            let lastmsg = words.reduce((prev, curr, index, words) => 
            {
                if (prev.length + curr.length + 1 > maxlength)
                {
                    addMessage(prev, maxlength);
                    return curr;
                }
                else
                    return (prev + ' ' + curr);
            })
                addMessage(lastmsg, maxlength);
        }
    }
}
function addMessage(word, maxlength)
{
    let messageblock = document.querySelector('#messages');
    let message = document.createElement("div");
    message.innerText = (word);
    message.classList.add('message');
    if (word.length > maxlength) 
        message.classList.add('badword');
    messageblock.appendChild(message);
}