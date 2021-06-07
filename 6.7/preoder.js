const preorder = (root) => {
    if (!root) { return; }
    //函数调用堆栈
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        //后进先出
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    } 
};
