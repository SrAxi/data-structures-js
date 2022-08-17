const { LinkedList } = require('./linked-list');


describe('Linked List', () => {
    const ll = LinkedList();

    it('should create a Linked List with all of its methods', () => {
        expect(ll !== null && typeof ll == 'object').toBe(true);
        expect(ll.hasOwnProperty('insertFirst')).toBe(true);
        expect(ll.hasOwnProperty('insertLast')).toBe(true);
        expect(ll.hasOwnProperty('insertAt')).toBe(true);
        expect(ll.hasOwnProperty('getAt')).toBe(true);
        expect(ll.hasOwnProperty('removeAt')).toBe(true);
        expect(ll.hasOwnProperty('printListData')).toBe(true);
        expect(ll.hasOwnProperty('clearList')).toBe(true);
        expect(ll.hasOwnProperty('size')).toBe(true);
    });
    it('should be able to print the empty list', () => {
        ll.printListData()
        expect(ll.printListData()).toStrictEqual([]);
    });
    it('should be able to insert a new node with insertFirst', () => {
        ll.insertFirst(100)
        ll.insertFirst(200)
        ll.insertFirst(300)
        expect(ll.printListData()).toStrictEqual([300, 200, 100]);
    });
    it('should be able to insert a new node with insertLast', () => {
        ll.insertLast(400)
        expect(ll.printListData()).toStrictEqual([300, 200, 100, 400]);
    });
    it('should get an error when trying to insert a new node with insertAt with a wrong index', () => {
        try {
            ll.insertAt(500, 22)
        } catch (e) {
            expect(e).toStrictEqual(Error(`Index doesn't exist in the Linked List`));
        }
    });
    it('should be able to insert a new node with insertAt', () => {
        ll.insertAt(500, 2)
        expect(ll.printListData()).toStrictEqual([300, 200, 500, 100, 400]);
    });
    it('should be able to get the value of a node from a given index', () => {
        expect(ll.getAt(2)).toBe(500);
    });
    it('should be able to get the current size of the Linked List', () => {
        expect(ll.size).toBe(5);
    });
    it('should be able to remove a node a node in a given index', () => {
        expect(ll.printListData()).toStrictEqual([300, 200, 500, 100, 400]);
        expect(ll.size).toBe(5);
        ll.removeAt(2)
        expect(ll.printListData()).toStrictEqual([300, 200, 100, 400]);
        expect(ll.size).toBe(4);
    });
    it('should be able to clear the Linked List', () => {
        ll.clearList()
        expect(ll.printListData()).toStrictEqual([]);
        expect(ll.size).toBe(0);
    });
});
