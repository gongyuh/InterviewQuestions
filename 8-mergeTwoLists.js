var mergeTwoLists = function(l1, l2) {
    let curr = new ListNode();
//dummy会把头的位置占住
    let dummy = curr;

    while(l1!==null &&l2!==null){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if(l1 !==null ){
        curr.next = l1;
    }

    if(l2 !==null){
        curr.next = l2;
    }
//把指针指回最开头，并且跳过空节点，来到第一个真实的位置
    return dummy.next;
};