balanceParens = (str) =>
{
    let splitted = str.split("")
    let stack = []

    for (let i = 0; i < str.length; i++) {
        if (splitted[i] === "("){
            stack.push(i)
        } else if ( splitted[i] === ")"){
            if (stack.length == 0){
                splitted[i] = ""
            } else{
                stack.pop()
            }
        }
    }
    for (j of stack) {
        splitted[j] = ""
    }
    // console.log(splitted)
    return splitted.join("")
}

module.exports = { balanceParens }