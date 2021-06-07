(function(f){
    if (typeof exports === 'object' && typeof moudle !== 'undefined') {
        moudle.exports = f()
    }else if (typeof define === 'function' && define.amd) {
        define[[], f]
    }else {
        var g;
        if (typeof window !== 'undefined') {
            g = window
        } else if (typeof global !== 'undefined') {
            g = global
        } else if (typeof self !== 'undefined') {
            g = self
        } else {
            g = this
        }
        g.Clipboard = f()
    }
})(function(event){
    // 'use strict'
    var copy = {}
    // console.log(event);
    copy.coptText = function(copybtn, cb) {
        copybtn = event || document.querySelector(copybtn)
       

        copybtn.addEventListener('click', function() {
            let copyTextArea = document.querySelector(copybtn.getAttribute('data-copy'))
            console.log('copyTextArea: ', copyTextArea.nodeName);
            (copyTextArea.nodeName === 'INPUT' || copyTextArea.nodeName === 'TEXTAREA') ? copyTextArea.select() : copy.selectText(copyTextArea);
            copyTextArea.focus()
            try {
                var successful = document.execCommand('copy');
                cb(successful)
            } catch (error) {
                console.log(error, "-------can't copy");
                cb(false)
            }
            // if (copyTextArea) {
            //     (copyTextArea.nodeName === 'INPUT' || copyTextArea.nodeName === 'TEXTAREA') ? copyTextArea.select() : copy.selectText(copyTextArea);
            //     copyTextArea.focus()
            //     try {
            //         var successful = document.execCommand('copy');
            //         cb(successful)
            //     } catch (error) {
            //         console.log(error, "-------can't copy");
            //         cb(false)
            //     }
            // } else {
            //     cb(false)
            // }
        })
    }
    copy.selectText = function(copyTextArea) {
        if (copyTextArea.hasAttribute('contenteditable')) {
            copyTextArea.focus()
            console.log(222);
        }
        if (document.selection){
            var range = document.body.createTextReange()
            range.moveToElementText(copyTextArea)
            range.select()
        } else if (window.getSelection) {
            var selection = window.getSelection()
            selection.removeAllRanges()
            var range = document.createRange()
            range.selectNodeContents(copyTextArea)
            selection.addRange(range)
            let selectedText = selection.toString()
            console.log('selectedText: ', selectedText);
            let r = selection.getRangeAt(0)
            console.log('r: ', r+'');
        }
    }
    this.copy = copy
})