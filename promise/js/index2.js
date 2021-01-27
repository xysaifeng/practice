// 参考：https://github.com/dwqs/blog/issues/61

new Promise((resolve)=>{
	setTimeout(()=>{
		console.log(1);
	});
	setImmediate(()=>{
		console.log(2);
	})
	resolve(1);
}).then(()=>{
	setTimeout(()=>{
		console.log(3);
	});
	setImmediate(()=>{
		console.log(4);
	})
}).then(()=>{
	setTimeout(()=>{
		console.log(5);
	});
	setImmediate(()=>{
		console.log(6);
	})
})

// res: 2 4 6 1 3 5


// setImmediate(()=>{
//   console.log(2);
// })
// setTimeout(()=>{
//   console.log(1);
// });

// res: 1 2