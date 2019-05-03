/**
 * This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
 */

function kthFromLast(head, k) {
    let kthLast = head;
    let i = 0;
    let node = head;
    while(node) {
        if(i > k) {
            kthLast = kthLast.next
        }
        node = node.next;
        i++;
    }

    const kthLastNextNext = kthLast.next.next;
    kthLast.next.next = null;
    kthLast.next = kthLastNextNext;

    let node1 = head;
    while(node1) {
        console.log(node1.value);
        node1 = node1.next;
    }
}
const ll = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6
                    }
                }
            }
        }
    }
}
for(var i = 1; i <= 6; i++) {
    let newLL = JSON.parse(JSON.stringify(ll));
    kthFromLast(newLL, i);
    console.log("----");
}
