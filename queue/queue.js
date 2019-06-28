/**
 *  QUEUE
 *
 *  - FIFO: First In First Out
 *  - No Random Access
 *  - Not Iterable
 */
function createQueue(size = null) {
    let queue = [];

    const isEmpty = () => queue.length === 0;
    const isFull = () => size ? queue.length >= size : null;
    const enQueue = (x) => {
        if (isFull()) {
            return Error('Queue is full!');
        } else {
            queue.push(x);
            return x;
        }
    };
    const deQueue = () => {
        if (isEmpty()) {
            return Error('Queue is empty!');
        } else {
            return queue.shift();
        }
    };
    const peekInQueue = () => {
        if (!isEmpty()) {
            return queue[0];
        } else {
            return Error('Queue is empty!');
        }
    };
    const deleteQueue = () => {
        queue = []
    };

    return {
        isEmpty,
        isFull,
        enQueue,
        deQueue,
        peekInQueue,
        deleteQueue,
    };
}

module.exports = { createQueue };
