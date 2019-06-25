/**
 *  STACK
 */
function createStack(size = null) {
    let stack = [];

    const isEmpty = () => stack.length === 0;
    const isFull = () => size ? stack.length >= size : null;
    const push = (x) => {
        if (isFull()) {
            return Error('Stack is full!');
        } else {
            stack.push(x);
            return x;
        }
    };
    const pop = () => {
        if (isEmpty()) {
            return Error('Stack is empty!');
        } else {
            return stack.pop();
        }
    };
    const peek = () => {
        if (!isEmpty()) {
            return stack[stack.length - 1];

        } else {
            return Error('Stack is empty!');
        }
    };
    const deleteStack = () => {
        stack = []
    };

    return {
        isEmpty,
        isFull,
        push,
        pop,
        peek,
        delete: deleteStack,
    };
}

module.exports = { createStack };
