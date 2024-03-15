# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes = 1
        current_node = head
        while current_node.next != None:
            nodes += 1
            current_node = current_node.next
            
        index = 0
        if nodes % 2 != 0:
            nodes -= 1
        nodes /= 2

        current_node = head
        while index < nodes:
            current_node = current_node.next
            index += 1
        return current_node