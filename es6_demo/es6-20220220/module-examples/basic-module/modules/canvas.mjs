
//  在指定 ID 的包装器 <div> 内创建指定 width 和 height 的画布，
// 该 ID 本身附加在指定的父元素内。返回包含画布的 2D 上下文和包装器 ID 的对象。
function create(id, parent, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext('2d');

  return {
    ctx: ctx,
    id: id
  };
}

//  创建一个附加在指定包装器元素内的无序列表，该列表可用于将报告数据输出到。返回列表的 ID。
function createReportList(wrapperId) {
  let list = document.createElement('ul');
  list.id = wrapperId + '-reporter';

  let canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);

  return list.id;
}

export { create, createReportList };