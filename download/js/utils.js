function download(url) {
  const eleLink = document.createElement('a')
  eleLink.style.display = 'none'
  eleLink.href = url
  eleLink.setAttribute('download', true)
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

// 使用a标签下载
function downloadWithElementA(file) {
  const a = document.createElement("a");
  a.href = file.url || file.thumbUrl;
  a.download = file.name;
  a.click();
}


// 使用ajax获取文件blob，并保持到本地
function downloadWithAjax(file) {
  getBlob(file.url || file.thumbUrl).then(blob => {
    saveAs(blob, file.name);
  });
}


/**
 * 获取 blob
 * url 目标文件地址
 */
function getBlob(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}

/**
     * 保存 blob
     * filename 想要保存的文件名称
     */
function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    const body = document.querySelector("body");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    // fix Firefox
    link.style.display = "none";
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  }
}