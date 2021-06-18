function isSameVnode(oldNode, newNode) { }
function patch(oldNode, newNode) { }
function createElm(vnode) { }

function updateChild(el, oldChildren, newChildren) {
    // vue内部做了优化（能尽量提升性能，如果实在不行，暴力比对）
    // 1.在列表中新增或删除的情况
    let oldStartIndex = 0
    let oldStartVnode = oldChildren[0]
    let oldEndIndex = oldChildren.length - 1
    let oldEndVnode = oldChildren[oldEndIndex]

    let newStartIndex = 0
    let newStartVnode = newChildren[0]
    let newEndIndex = newChildren.length - 1
    let newEndVnode = newChildren[newEndIndex]

    function makeKeyByIndex(children) {
        let map = {}
        children.forEach((child, index) => {
            map[child.key] = index
        })
        return map
    }

    // 根据老的孩子创建一个映射表
    const mapping = makeKeyByIndex(oldChildren)

    // diff算法的复杂度是O(n),比对的时候，指针交叉的时候 就是比对完成了
    while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
        if (!oldStartVnode) {// 在指针移动的时候，可能元素已经被移动走了,那就需要跳过
            oldStartVnode = oldChildren[++ oldStartIndex]
        } else if(!oldEndVnode) { // 跳过为空
            oldEndVnode = oldChildren[-- oldEndIndex]
        } else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode) // 会递归比较子节点，同时比较这两个人的差异
            oldStartVnode = oldChildren[++oldStartIndex]
            newStartVnode = newChildren[++newStartIndex]
        } else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode) // 
            oldEndVnode = oldChildren[--oldEndIndex]
            newEndVnode = newChildren[--newEndIndex]
        } else if (isSameVnode(oldStartVnode, newEndVnode)) { // abcd=> dcba  头尾
            patch(oldStartVnode, newEndVnode)
            // 先移动再改变指针
            el.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling)
            oldStartVnode = oldChildren[++ oldStartIndex]
            newEndVnode = newChildren[-- newEndIndex]
        } else if (isSameVnode(oldEndVnode, newStartVnode)) { // fabcd => dcba 尾头比较
            patch(oldEndVnode, newStartVnode)
            el.insertBefore(oldEndVnode.el, oldStartVnode.el) // 将尾部的元素插入到头部去
            oldEndVnode = oldChildren[-- oldEndIndex]
            newStartVnode = newChildren[++ newStartIndex]
        } else {  // abcd => fbaep
            // 乱序排列
            let moveIndex = mapping[newStartVnode.key]
            if (moveIndex == null) { // 在老的孩子(oldChildren)里没有，则插入到老的孩子的oldStartIndex的前面
                // 没有直接将节点插入到开头的前面
                el.insertBefore(createElm(newStartVnode), oldStartVnode.el)
            } else {
                // 有的话需要复用
                let moveVnode = oldChildren[moveIndex]
                patch(moveVnode, newStartVnode)
                el.insertBefore(moveVnode.el, oldStartVnode.el)
                oldChildren[moveIndex] = null // 将移动的节点标记为空
            }
            // 指针向后移动
            newStartVnode = newChildren[++ newStartIndex]
        }
    }
    if (newStartIndex <= newEndIndex) { // 新的多，那么就将新的插进去即可
        // 看一下当前newChildren的尾指针的下一个元素是否存在，如果存在，则插入到下一个元素的前面
        // 如果当前newChildren的尾指针的下一个节点是null,则是append
        // 参照物是固定的 不会变
        let anchor = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].el
        for (let i = 0; i < newEndIndex; i++) {
            // 这里可能是向前追加，可能是向后追加，所以不能用append
            // el.appendChild(createElm(newChildren[i]))

            el.insertBefore(createElm(newChildren[i]), anchor)
        }
    }
    if (oldStartIndex <= oldEndIndex) { // 老的多，新的已经结束了，需要删除老的
        for (let i = 0; i < oldEndIndex; i++) {
            let child = oldChildren[i] // child是虚拟节点
            // child可能为undefined，所以要跳过空节点
            // el.removeChild(child.el)
            child && el.removeChild(child.el)
        }
    }
}