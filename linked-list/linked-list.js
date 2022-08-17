/****************
 *  LINKED LIST *
 ***************/

/**
 * Single Node factory function
 *
 * @param data
 * @param next
 * @returns *
 */
function Node(data, next = null) {
    let localData = data
    let localNext = next

    return {
        get data() {
            return localData
        },
        get next() {
            return localNext
        },
        setNext(n) {
            localNext = n
            return localNext
        }
    }
}

/**
 * Linked List factory function
 *
 * @returns *
 */
function LinkedList() {
    let head = null
    let localSize = 0

    // Insert first node
    function insertFirst(data) {
        head = Node(data, head)
        localSize++
    }

    // Insert last node
    function insertLast(data) {
        let node = Node(data)

        if (!head) {
            head = node
        } else {
            // Looking for the tail
            let current = head
            while (current.next) {
                current = current.next
            }

            // Tail found, adding node to the end of the LL
            current.setNext(node)
        }

        localSize++
    }

    // Insert at index
    function insertAt(data, index) {
        // If index is out of range
        if (index && index > localSize) {
            throw Error(`Index doesn't exist in the Linked List`)
        }

        // If first index
        if (index === 0) {
            insertFirst(data)
            return
        }

        const node = Node(data)
        let current = head
        let previous = null
        let count = 0

        while (count < index) {
            previous = current // Node before index
            current = current.next // Node after index
            count++
        }

        node.setNext(current)
        previous.setNext(node)

        localSize++
    }

    // Get at index
    function getAt(index) {
        let current = head
        let count = 0

        while (current) {
            if (count === index) {
                return current.data
            }
            current = current.next
            count++
        }

        return 'No node found'
    }

    // Remove at index
    function removeAt(index) {
        // If index is out of range
        if (index && index > localSize) {
            throw Error(`Index doesn't exist in the Linked List`)
        }

        let current = head
        let previous
        let count = 0

        // Remove first
        if (index === 0) {
            head = current.next
        } else {
            while (count < index) {
                previous = current // Node before index
                current = current.next // Node after index
                count++
            }

            previous.setNext(current.next)
        }

        localSize--
    }

    // Clear list
    function clearList() {
        head = null
        localSize = 0
    }

    // Print list data
    // We chose to "print" the list in an Array format. We could have logged it or returned it in a concatenated String
    function printListData() {
        let current = head
        let printedList = []

        while (current) {
            printedList.push(current.data)
            current = current.next
        }

        return printedList
    }

    // Get size
    function getSize() {
        return localSize
    }

    return {
        insertFirst,
        insertLast,
        insertAt,
        getAt,
        removeAt,
        printListData,
        clearList,
        get size() {
            return getSize()
        },
    }
}

module.exports = { LinkedList }

