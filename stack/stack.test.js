const { createStack } = require('./stack');

describe('Stack', () => {
    it('should create a stack with all of its methods', () => {
        const stack = createStack();

        expect(stack !== null && typeof stack == 'object').toBe(true);
        expect(stack.hasOwnProperty('isEmpty')).toBe(true);
        expect(stack.hasOwnProperty('isFull')).toBe(true);
        expect(stack.hasOwnProperty('push')).toBe(true);
        expect(stack.hasOwnProperty('pop')).toBe(true);
        expect(stack.hasOwnProperty('peek')).toBe(true);
        expect(stack.hasOwnProperty('delete')).toBe(true);
    });
    it('should create a stack with all of its methods with fixed size', () => {
        const stack = createStack(10);

        expect(stack !== null && typeof stack == 'object').toBe(true);
        expect(stack.hasOwnProperty('isEmpty')).toBe(true);
        expect(stack.hasOwnProperty('isFull')).toBe(true);
        expect(stack.hasOwnProperty('push')).toBe(true);
        expect(stack.hasOwnProperty('pop')).toBe(true);
        expect(stack.hasOwnProperty('peek')).toBe(true);
        expect(stack.hasOwnProperty('delete')).toBe(true);
    });
    it('should be able to check if its empty and to push elements', () => {
        const stack = createStack();

        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
    it('should be able to check if its empty and to push elements for fixed size', () => {
        const stack = createStack(10);

        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
    it('should be able to check if its full', () => {
        const stack = createStack();
        expect(stack.isFull()).toBe(null);
    });
    it('should be able to check if its full for fixed size', () => {
        const stackFixed = createStack(1);

        expect(stackFixed.isFull()).toBe(false);
        stackFixed.push(1);
        expect(stackFixed.isFull()).toBe(true);
    });
    it('should return null when checking isFull for fixed sized stack and passing 0', () => {
        const stackFixed = createStack(0);
        expect(stackFixed.isFull()).toBe(null);
    });
    it('should be able to push elements', () => {
        const stack = createStack();

        expect(stack.isEmpty()).toBe(true);
        expect(stack.push(1)).toBe(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.push(2)).toBe(2);
    });
    it('should be able to push elements for fixed size', () => {
        const stack = createStack(1);

        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(1);
        expect(stack.push(1)).toEqual(Error('Stack is full!'));
    });
    it('should be able to pop elements', () => {
        const stack = createStack();

        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.pop()).toEqual(Error('Stack is empty!'));
    });
    it('should be able to peek elements', () => {
        const stack = createStack();

        stack.push(1);
        expect(stack.peek()).toBe(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
        stack.delete();
        expect(stack.peek()).toEqual(Error('Stack is empty!'));
    });
    it('should be able to delete stack (clear)', () => {
        const stack = createStack();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
        expect(stack.isEmpty()).toBe(false);
        stack.delete();
        expect(stack.isEmpty()).toBe(true);
    });
});
