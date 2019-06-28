const { createQueue } = require('./queue');

describe('Queue', () => {
    it('should create a queue with all of its methods', () => {
        const queue = createQueue();

        expect(queue !== null && typeof queue == 'object').toBe(true);
        expect(queue.hasOwnProperty('isEmpty')).toBe(true);
        expect(queue.hasOwnProperty('isFull')).toBe(true);
        expect(queue.hasOwnProperty('enQueue')).toBe(true);
        expect(queue.hasOwnProperty('deQueue')).toBe(true);
        expect(queue.hasOwnProperty('peekInQueue')).toBe(true);
        expect(queue.hasOwnProperty('deleteQueue')).toBe(true);
    });
    it('should create a queue with all of its methods with fixed size', () => {
        const queue = createQueue(10);

        expect(queue !== null && typeof queue == 'object').toBe(true);
        expect(queue.hasOwnProperty('isEmpty')).toBe(true);
        expect(queue.hasOwnProperty('isFull')).toBe(true);
        expect(queue.hasOwnProperty('enQueue')).toBe(true);
        expect(queue.hasOwnProperty('deQueue')).toBe(true);
        expect(queue.hasOwnProperty('peekInQueue')).toBe(true);
        expect(queue.hasOwnProperty('deleteQueue')).toBe(true);
    });
    it('should be able to check if its empty and to enQueue elements', () => {
        const queue = createQueue();

        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
    it('should be able to check if its empty and to enQueue elements for fixed size', () => {
        const queue = createQueue(10);

        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
    it('should be able to check if its full', () => {
        const queue = createQueue();
        expect(queue.isFull()).toBe(null);
    });
    it('should be able to check if its full for fixed size', () => {
        const queueFixed = createQueue(1);

        expect(queueFixed.isFull()).toBe(false);
        queueFixed.enQueue(1);
        expect(queueFixed.isFull()).toBe(true);
    });
    it('should return null when checking isFull for fixed sized queue and passing 0', () => {
        const queueFixed = createQueue(0);
        expect(queueFixed.isFull()).toBe(null);
    });
    it('should be able to enQueue elements', () => {
        const queue = createQueue();

        expect(queue.isEmpty()).toBe(true);
        expect(queue.enQueue(1)).toBe(1);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.enQueue(2)).toBe(2);
    });
    it('should be able to enQueue elements for fixed size', () => {
        const queue = createQueue(1);

        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(1);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.peekInQueue()).toBe(1);
        expect(queue.enQueue(1)).toEqual(Error('Queue is full!'));
    });
    it('should be able to deQueue elements', () => {
        const queue = createQueue();

        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(1);
        expect(queue.isEmpty()).toBe(false);
        queue.deQueue();
        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(1);
        queue.enQueue(2);
        expect(queue.isEmpty()).toBe(false);
        queue.deQueue();
        expect(queue.isEmpty()).toBe(false);
        queue.deQueue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.deQueue()).toEqual(Error('Queue is empty!'));
    });
    it('should be able to peek elements', () => {
        const queue = createQueue();

        queue.enQueue(1);
        expect(queue.peekInQueue()).toBe(1);
        queue.enQueue(2);
        expect(queue.peekInQueue()).toBe(1);
        queue.deQueue();
        expect(queue.peekInQueue()).toBe(2);
        queue.deleteQueue();
        expect(queue.peekInQueue()).toEqual(Error('Queue is empty!'));
    });
    it('should be able to delete queue (clear)', () => {
        const queue = createQueue();

        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        expect(queue.peekInQueue()).toBe(1);
        expect(queue.isEmpty()).toBe(false);
        queue.deleteQueue();
        expect(queue.isEmpty()).toBe(true);
    });
});
