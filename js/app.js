//Make history, or better yet...make the World Events page interactive with events or event listeners for each exercise below.

// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in the h3 element and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.

function italics(){
    bread.style.color = 'cornflowerblue';
    bread.style.fontStyle = 'italic';
}

// 2. The Birth of the Internet
// Find the onmouseover event in the h3 element and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

function changeContent(){
    webby.innerHTML = webContents;
}

// 3. The Boxer Rebellion
// Find the onclick event in div id of 'fightDaPower' and create a function that will convert the Chinese text in the same div element into English (the English content is provided below).

var revolution = 'Boxer Uprising or Yihetuan Movement was an anti-imperialist uprising which took place in China towards the end of the Qing dynasty between 1899 and 1901. It was initiated by the Militia United in Righteousness, known in English as the "Boxers," and was motivated by proto-nationalist sentiments and opposition to foreign imperialism and associated Christian missionary activity.';

function translation(){
    fightDaPower.innerHTML = revolution;
}

// 4. The Great Depression
// Add an event listener to the h3 element id of 'hardTimes' and create a function to display the contents in the div element of 'depress'.

hardTimes.addEventListener('click', desc);

function desc(){
    depress.style.display = 'block';
}

// 5. Apollo 11
// Add an event listener to the h3 element id of 'blastOff' and create a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener('click', show);

function show(){
    if(moonWalk.style.display === 'block'){
        moonWalk.style.display = 'none';
    }else{
        moonWalk.style.display = 'block';
    }
}

// 6. The American Civil War
// Add an event listener to the div element id of 'freedom' and create a function to remove all instances of 'corn' in the content.

freedom.addEventListener('click', noCorn);

function noCorn(){
    freedom.innerHTML = freedom.innerHTML.replace('corn', ' ');
}

// 7. The Renaissance
// Add an event listener to the div element id of 'rebirth' and create a function to remove all the lowercase and uppercase z's in the content. 

rebirth.addEventListener('click', noZ);

function noZ(){
    var wordArr = rebirth.innerHTML;
    var splitArr = wordArr.split('');
    var deadArr = [];
    var newArr = [];
    for(i=0; i<splitArr.length; i++){
        if(splitArr[i] === 'z' || splitArr[i] === 'Z'){
            deadArr.push(splitArr[i]);
        }else{
            newArr.push(splitArr[i]);
        }
    }
    var toString = newArr.join('');
    rebirth.innerHTML = toString;
}

// My first attempt at the answer that kind of worked
// function noZ(){
//     rebirth.innerHTML = rebirth.innerHTML.replace('z', ' ');
//     rebirth.innerHTML = rebirth.innerHTML.replace('Z', ' ');
// }

// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element id of 'showBooks' and create a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];

showBooks.addEventListener('click', displayBook);

function displayBook(){
    var randomNo = Math.floor(Math.random()*classics.length);
    var bookElem = document.createElement('div');
    bookElem.innerHTML = classics[randomNo];
    mustRead.appendChild(bookElem);
}

// 9. World War II
// Add an event listener to the image element and create a function that will toggle between images when hovering (mouseover) on the image.

// use the following image reference:
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73

var imgLoc = document.getElementsByTagName('img')[9];
imgLoc.addEventListener('mouseover', showPic);

function showPic(){
    if(imgLoc.src === 'https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg'){
        imgLoc.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73';
    }else{
        imgLoc.src = 'https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg';
    }
}

// 10. The Industrial Revolution
// Add an event listener to the h3 element and create a function that will reverse the contents in the div element id of 'gameChanger'

var titleLoc = document.getElementsByClassName('title')[9];
titleLoc.addEventListener('click', reverse);

function reverse(){
    var step1 = gameChanger.innerHTML;
    var step2 = step1.split('');
    var step3 = step2.reverse();
    var step4 = step3.join('');
    gameChanger.innerHTML = step4;
}

// Final Boss
// Add event listeners for the thumbs up and thumbs down images that will count the number of times the thumb has been clicked on. 

