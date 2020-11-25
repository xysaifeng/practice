importScripts('a.js');

// onmessage函数用来接收从主线程传递过来的信息
onmessage = function(e) {
  // console.log(JSON.parse(e.data));
  // return
    console.log('Worker: Message received from main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
      postMessage('Please write two numbers');
    } else {
      const workerResult = 'Result: ' + result;
      console.log('Worker: Posting message back to main script');
      postMessage(workerResult);
    }
  }

  onerror = function(e) {
    e.preventDefault();
    console.log(e,'-----------e' );
  }

  setTimeout(() => {
    // worker主动关闭
    console.log('worker close');
    // close();
  }, 6000);


onmessageerror = function(e) {
  e.preventDefault();
  console.log(e, 'main error 333');
}


console.log(name, 'name=======');



console.log(self.DedicatedWorkerGlobalScope, '--DedicatedWorkerGlobalScope');