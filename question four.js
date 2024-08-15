function matches(str){
    let reg=/[0-9]/
    const matchesOfString = str.match(reg);
    if(matchesOfString){
        console.log("It matches");
    }else{
        console.log("didn't match");
    }
    return matchesOfString
}
let date=new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayNumber=date.getDay()
const nameOfDay=days[dayNumber]
console.log("Date:",date.getDate(),"\n","Month:",date.getMonth(),"\n","Year:",date.getFullYear(),"\n","Day:",nameOfDay);


matches("Good morning folks... Have a great day.. today the date is 15 and month is 7 and year is 2024 and day is thursday")