quotes=[`"Be yourself; everyone else is already taken."`,
    `--  Oscar Wilde`,`"I'm selfish, impatient and a little insecure. I make mistakes,
     I am out of control and at times hard to handle. But if you can't handle me at my worst,
      then you sure as hell don't deserve me at my best."`
,`- - Marilyn Monroe`,
`"So many books, so little time."`,`- - Frank Zappa`];
localStorage.setItem('myQuotes',JSON.stringify(quotes));
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let x = -1
function quoteOut(){
     let i =getRandomInt(quotes.length-1);
     while(i===x || i%2!==0){
        i =getRandomInt(quotes.length-1);
    }
  
       document.getElementById("quote").innerHTML=
        `${JSON.parse(localStorage.getItem('myQuotes'))[i]}`;
    document.getElementById("person").innerHTML=
        `${JSON.parse(localStorage.getItem('myQuotes'))[i+1]}`;
        x= i;
console.log(i);
}