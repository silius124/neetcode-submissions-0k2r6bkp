class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (!Number.isNaN(Number(tokens[i]))) {
                stack.push(Number(tokens[i]));
            } else {
                let y = stack.pop();
                let x = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(x + y);
                        break
                    case "-":
                        stack.push(x - y);
                        break
                    case "*":
                        stack.push(x * y);
                        break
                    case "/":
                        stack.push(Math.trunc(x / y));
                        break
                }
            }
        }
        return Math.trunc(stack[stack.length - 1])  
    }
}
