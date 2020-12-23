class Cookie {
    constructor(domain, path, exp) {
        this.domain = domain || '.zhongan.com'
        this.path = path || '/'
        this.exp = exp || 365 * 24 * 60 * 60 * 1000
    }
    setCookie(name, value, cookieExp) {
        var exp = new Date()
        exp.setTime(exp.getTime() + (cookieExp || this.exp))
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};path=${this.path};domain=${this.domain};`
    }

    getCookie(name) {
        var arr
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if ((arr = document.cookie.match(reg))) {
            return unescape(arr[2])
        } else {
            return null
        }
    }

    delCookie(name) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 100 - this.exp)
        var cval = this.getCookie(name)
        if (cval != null) {
            // document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
            document.cookie = `${name}=${escape(cval)};expires=${exp.toGMTString()};path=${this.path};domain=${this.domain};`
        }
    }
}


let cookie = null
const dReg = /\.(ac.cn|bj.cn|sh.cn|tj.cn|cq.cn|he.cn|sn.cn|sx.cn|nm.cn|ln.cn|jl.cn|hl.cn|js.cn|zj.cn|ah.cn|fj.cn|jx.cn|sd.cn|ha.cn|hb.cn|hn.cn|gd.cn|gx.cn|hi.cn|sc.cn|gz.cn|yn.cn|gs.cn|qh.cn|nx.cn|xj.cn|tw.cn|hk.cn|mo.cn|xz.cn|com.cn|net.cn|org.cn|gov.cn|com|cn|cc|org|net|xin|xyz|vip|shop|top|club|wang|fun|info|online|tech|store|site|ltd|ink|biz|group|link|work|pro|mobi|ren|kim|name|tv|red|io|cool|team|live|pub|company|zone|today|video|art|chat|gold|guru|show|life|love|email|fund|city|plus|design|social|center|world|auto)/ig
const hostname = 'isee.zhongan.io' ||  window.location.hostname
console.log('hostname: ', hostname);
console.log( hostname.match(dReg)); // [.io]
const list = hostname.split('.')
if (list.length === 1 || /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(hostname)) {
    cookie = new Cookie(hostname)
  } else {
    // const tophost = list.slice(-2).join('.')
    // cookie = new Cookie(tophost)
  
    let suffixList = hostname.match(dReg).map((suffix) => suffix.substring(1))
    console.log('suffixList: ', suffixList);
    let suffixCounter = 0
    const hostNameSplitList = hostname.split('.')
    console.log('hostNameSplitList: ', hostNameSplitList);// ["isee", "zhongan", "io"]
    for (let i = hostNameSplitList.length - 1; i > 0; --i) {
      if (suffixList.includes(hostNameSplitList[i])) {
        ;++suffixCounter
      } else break
    }
    if (suffixCounter) {
      const len = hostNameSplitList.length
      cookie = new Cookie(
        hostNameSplitList.slice(len - suffixCounter - 1, len).join('.')
      )
    } else {
      cookie = new Cookie(document.domain)
    }
  }


  console.log(cookie, 888);