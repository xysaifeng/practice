
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
    const myWorker = new Worker("worker.js", {
        type: 'classic',
        // type: 'module', // Uncaught TypeError: Failed to execute 'importScripts' on 'WorkerGlobalScope': Module scripts don't support importScripts() // worker.js中不支持importScripts方法
        name: 'self worker',
        credentials: 'include',
        // credentials: 'omit',
        // credentials: 'same-origin',
    });
    // const myWorker = new Worker("worker2.js");
    console.log('myWorker: ', myWorker);

    first.onchange = function () {
        var  o = JSON.stringify({
            data: {a:1},
            event: 'close',
        })
        // myWorker.postMessage(o);
        // return;
        // 当输入框值改变时，消息传递给worker
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker first：', first.value, second.value);
    }

    second.onchange = function () {
        // throw new Error('main error did')
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worke second：', first.value, second.value);
    }

    // 用于处理从worker回传的消息，在主线程中，必须以myWorker.onmessage的方式调用，反之，在脚本worker.js中，只需要定义onmessage
    myWorker.onmessage = function (e) {
        result.textContent = e.data;
        console.log('Message received from worker =======', e.data);
    }

    myWorker.onerror = function(e) {
        e.preventDefault();
        console.log(e, 'main error 6666');
    }

    myWorker.onmessageerror = function(e) {
        e.preventDefault();
        console.log(e, 'main error222');
    }

    setTimeout(() => {
        console.log('terminate');
        // myWorker.terminate();
    }, 5000)
} else {
    console.log('Your browser doesn\'t support web workers.')
}

window.addEventListener('message', e => {
    console.log('myi');
    console.log(e);
})