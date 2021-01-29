// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。  
//
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
const l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
// function mergeTwoLists(l1, l2) {
//     const newList = {
//         val: -1,
//         next: null,
//     };
//     let tempList = newList;
//     while (l1 && l2) {
//         if (l1.val <= l2.val) {
//             tempList.next = l1;
//             l1 = l1.next
//         } else if (l1.val > l2.val) {
//             tempList.next = l2
//             l2 = l2.next
//         }
//         tempList.next.next = null
//         tempList = tempList.next
//     }
//     tempList.next = l1 || l2
//     // return newList.next
//     console.log(newList.next)
// }
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
mergeTwoLists(l1, l2)
