function regexPattern(str){
let reg=/[a-zA-Z]/
if(reg.test(str)){
    return(true);    
}
else{
    return false;
}
}
console.log(regexPattern('Hello World'));
console.log(regexPattern(123));
console.log(regexPattern('good Morning'));
console.log(regexPattern(0));
