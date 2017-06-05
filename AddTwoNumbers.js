/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);  //头结点
    var current_node = res; //当前节点
    var next_node = res;  //下一节点
    var tmp1 = l1;  //l1链表当前节点
    var tmp2 = l2;  //l2链表当前节点
    var tmp_sum = 0;   //当前位数的和
    var tmp_carry = 0;  //进位
    
    while(tmp1 !== null || tmp2 !== null) {
        if(tmp1 !== null && tmp2 !== null) {
            tmp_sum = tmp1.val + tmp2.val + tmp_carry;
            tmp1 = tmp1.next;
            tmp2 = tmp2.next;
        } else if(tmp1 === null && tmp2 !== null) {
            tmp_sum = tmp2.val + tmp_carry;
            tmp2 = tmp2.next;
        } else if(tmp2 === null && tmp1 !== null) {
            tmp_sum = tmp1.val + tmp_carry;
            tmp1 = tmp1.next;
        } 
         
        //判断进位
        if(tmp_sum >= 10) {
            tmp_sum = tmp_sum - 10;
            tmp_carry = 1;
        } else {
            tmp_carry = 0;
        }
        
        current_node.val = tmp_sum;
        //判断最高位
        if(tmp1 !== null || tmp2 !== null) {
            next_node = new ListNode(0);
            current_node.next = next_node;
            current_node = next_node;
            current_node.next = null;
        } else if(tmp_carry === 1) {
            next_node = new ListNode(1);
            current_node.next = next_node;
            current_node = next_node;
            current_node.next = null;
        }
        
        
    }
    
    return res;
    
};