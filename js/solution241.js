// reverse a linked list [1,2,3,4,5]

const reverseList = (head) => {
    let prev = null
    let current = head

    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return head = prev
}