### HTMLElement一些属性
* offsetHeight：元素的像素高度,高度包含该元素的垂直内边距和边框，且是一个整数。 不包含:before或:after等伪类元素的高度   

* clientHeight：元素内部的高度，包含内边距，但不包括水平滚动条、边框和外边距 【clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.】   

* scrollHeight：元素**内容**高度,包括由于溢出导致的视图中不可见内容。【没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。包括元素的padding，但不包括元素的border和margin。scrollHeight也包括 ::before 和 ::after这样的伪元素。】

* scrollTop：元素的**内容**顶部（卷起来的）到它(元素)的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。


```
    HTMLElement.offsetHeight = el CSS高度 + 垂直内边距 + 垂直border + 滚动条高度(如果渲染的话)

    HTMLElement.clientHeight = el CSS高度 + 垂直内边距 (不包含滚动条、边框和外边距)

    HTMLElement.scrollHeight = HTMLElement.clientHeight + HTMLElement.scrollTop
```