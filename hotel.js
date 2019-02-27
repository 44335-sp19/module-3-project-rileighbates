/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  
function genRand()

  {
                var num = (Math.random() * 300) + 100;
                var numRound = Math.round(num);
        
                    return numRound;
                
        }


  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date

function offerExpires (dateobj)
{
     switch(dateobj.getMonth())
    {
        case 0: month = "January"; break;
        case 1: month = "February"; break;
        case 2: month = "March"; break;
        case 3: month = "April"; break;
        case 4: month = "May"; break;
        case 5: month = "June"; break;
        case 6: month = "July"; break;
        case 7: month = "August"; break;
        case 8: month = "September"; break;
        case 9: month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
            
    }
    
    
    switch(dateobj.getMonth())
    {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
    
   return "OFFER EXPIRES NEXT \n" + day + "<br>" + " (" + (dateobj.getDate() + 7) + " " + month + " " + dateobj.getFullYear() + ") "
}

  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage

var room = genRand();

document.getElementById("specialRate").innerHTML = room;


//create a new Date object

var i = new Date();


//Call the function passing the date object to it and write it to the offer ends section on the webpage

var ends = offerExpires(i);

document.getElementById("offerEnds").innerHTML = ends;



