'use strict'

var userName = prompt("Welcome! Please enter your name.");
confirm("Hello " + userName + ". Please answer all questions with y/n or yes/no." +
" Several questions will be asked to find more about me.");

//Question 1
var resultOlympian = prompt("Have you met an Olympian before?").toLowerCase();
if(resultOlympian === 'y' || resultOlympian === 'yes')
{
    confirm("You said you have met an Olympican before." +
    " I am a member of Pueget Sound Ice Skating Club and" +
    " Several famous Olympians have trained in our club" +
    "including J. R. Celski and Apolo Ohno.");
}
else
{
    confirm("You said no. I have been training everyweekends for" +
    " 2 hours on ice and 2 hours on dryland. Our ice skating club" +
    " has produced two former/current Olympian: J. R. Celski and Apolo Ohno");
}

//Question 2
var resultInterest = prompt("Are you looking for a programmer who has" +
" science background?").toLowerCase();
if(resultInterest === 'y' || resultInterest === 'yes')
{
    confirm("You said yes. I have background in science and I am very interested in" +
    " how to interpretate data using python language.");
}
else
{
    confirm("You said no. I have background in science, but I am also a full stack developer" +
    " specializing in C# and Python languages.");
}

//Question 3
var resultProject = prompt("Are you looking for a programmer who knows" +
" several languages?").toLowerCase();
if(resultProject === 'y' || resultProject === 'yes')
{
    confirm("You said yes. I have completed several full stack web projects using Python" +
    " Django and C# Entity Framework.");
}
else
{
    //Question 3_1
    var resultSpecificLanguage = prompt("You said no. Could you tell me if you're looking for a programmer specializing" +
    " in other than C# or python? Please answer y/n or yes/no.").toLowerCase();
    if(resultSpecificLanguage === 'y' || resultSpecificLanguage === 'yes')
    {
        confirm("You said yes. Currently my language skills are limited only to C# and python.");
    }
    else
    {
        confirm("You said no. Great. I am a full stack web programmer in C# and Python.");
    }
}

//Question 4
var resultYears = prompt("Are you looking for a programmer with more than" +
"3 years of experience?").toLowerCase();
if(resultYears === 'y' || resultYears === 'yes')
{
    confirm("I am sorry to hear that. I am looking for a junior programmer position.");

}
else
{
    confirm("Great. I am looking for a junior programmer level position.");

}

//Question 5
var resultIntership = prompt("Does your company has an internship program?").toLowerCase();
if(resultIntership === 'y' || resultIntership === 'yes')
{
    confirm("Great. Thank you for the information. I am also looking for an intership" +
    " opportunity as well.");
}
else
{
    confirm("I have less than 2 years of experience in coding. Maybe an intership" +
    " is a great opportunity to prove my ability if you're looking for" +
    " more experienced programmers.");
}
