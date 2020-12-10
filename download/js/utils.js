function download(url) {
    const eleLink = document.createElement('a')
    eleLink.style.display = 'none'
    eleLink.href = url
    eleLink.setAttribute('download', true)
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
  }