function regTester() {
    //Result for lowercase letters
    const result = "The data which we feed into the computer is input, the work CPU do is process and the result which the computer give is output.";
    let regex = /[a-z]/g;
    let matches = result.match(regex);
    console.log("Lowercase Letters:", matches);
    //Result for uppercase letters
    const resultForCapitalLetters = "The data which we feed into the computer is input, the work CPU do is process and the result which the computer give is output.";
    let regexOne = /[A-Z]/g;
    let matchesForCapital = resultForCapitalLetters.match(regexOne);
    console.log("Uppercase Letters:", matchesForCapital);
    //result for digits
    const digits = "The data which we feed into the 123 computer is input,456 the work CPU do is process and the result which the computer give is output.1562316";
    let resultForDigits = /[1-9]/g;
    let matchesFordigits = digits.match(resultForDigits);
    console.log("Digits:", matchesFordigits);
    //Result for special letters
    const resultForCharacters = "The data which we feed into the computer is input, the work CPU do is process and the result which the computer give is output.@#$[]{}";
    let answer = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/g;
    let matchesForChar = resultForCharacters.match(answer);
    console.log("Special Letters:", matchesForChar);
}
regTester()