/**
 * This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
 */

function isBalanced(string) {
    if(!string.length) {
        return true;
    }
    const stack = [string[0]];
    let i = 1;
    while(stack.length) {
        let last = stack[stack.length - 1];
        if((last === "(" && string[i] === ")")
        || (last === "{" && string[i] === "}")
        || (last === "[" && string[i] === "]")
        ) {
            stack.pop();
        } else if(string[i]==="(" || string[i]==="{" || string[i]==="[") {
            stack.push(string[i]);
        } else {
            return false;
        }
        i++;
    }

    return stack.length === 0;
}

console.log(isBalanced("{{{"))
console.log(isBalanced("{{{}}}"))
console.log(isBalanced("{()}[]"))