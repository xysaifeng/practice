/**
 * 打开or创建数据库
 * @param {string} dbName 数据库名称
 * @param {number} version 数据库版本
 * @return {object} 数据库实例
 */
function openDb(dbName, version = 1) {
  return new Promise(function (resolve, reject) {
    // 兼容浏览器
    const indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;

    let db; // 数据库实例

    // 打开数据库,没有数据库则创建
    const request = indexedDB.open(dbName, version);

    // 数据库打开成功的回调
    request.onsuccess = function (e) {
      console.log("e: ", e);
      db = e.target.result;
      resolve(db);
      console.log("数据库打开成功");

      // addData(db, "users", {
      //   uuid: "1",
      //   name: "张三",
      //   age: 18,
      //   sex: "男",
      //   address: "北京",
      //   createTime: new Date().getTime(),
      // });
    };

    // 数据库打开失败的回调
    request.onerror = function (e) {
      reject(e);
      console.log("数据库打开失败");
      // 针对此数据库请求的所有错误的通用错误处理器！
      console.error(`数据库错误：${e.target.errorCode}`);
    };

    // 数据库有更新的时候的回调（包括创建表、创建一个仓库store是数据库的更新，更新数据库中的某个字段不是数据库的更新）
    request.onupgradeneeded = function (e) {
      // 数据库创建或升级的时候触发
      db = e.target.result; // 数据库对象
      console.log("onupgradeneeded");
      let objectStore;
      // 创建存储库（创建表）存储库名称：users
      objectStore = db.createObjectStore("users", {
        keyPath: "uuid", // 主键
        // autoIncrement: true // 创建主键自增
      });
      console.log(objectStore, "0000");
      // 基于存储库创建索引,在后面查询数据的时候可以根据索引进行查询
      objectStore.createIndex("uuid", "uuid", { unique: true });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("age", "age", { unique: false });
      objectStore.createIndex("sex", "sex", { unique: false });
    };
  });
}

/**
 * 添加数据
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {object} data 数据
 */
function addData(db, storeName, data) {
  // 创建事务 - 指定存储库名称和操作模式（只读或读写）
  const transaction = db.transaction([storeName], "readwrite");
  console.log("transaction: ", transaction);
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  console.log("objectStore: ", objectStore);
  // 添加数据
  const request = objectStore.add({ ...data });
  // 添加成功的回调
  request.onsuccess = function (e) {
    console.log("数据添加成功", e);
  };
  // 添加失败的回调
  request.onerror = function (e) {
    console.log("数据添加失败", e);
    // objectStore.put({ ...data, age: 19, uuid: "2" });
    // setTimeout(() => {
    //   // error: TransactionInactiveError objectStore事务处于非活动状态
    //   objectStore.put({ ...data, age: 19 });
    // }, 1000);
  };

  // 事务完成的回调
  transaction.oncomplete = function (e) {
    console.log("事务完成", e);
  };
  // 事务失败的回调
  transaction.onerror = function (e) {
    console.log("事务失败", e);
    console.log(transaction, 3333);
    // error: TransactionInactiveError objectStore事务处于非活动状态
    // objectStore.put({ ...data, age: 19 });
  };
}

/**
 * 通过主键读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} key 主键
 * */
function getDataByKey(db, storeName, key) {
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取数据
  const request = objectStore.get(key);
  // 获取成功的回调
  request.onsuccess = function (e) {
    console.log("数据获取成功", e.target.result);
  };
}

/**
 * 通过游标读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} [key] 主键
 */
function getDataByCursor(db, storeName, key) {
  const list = [];
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取数据
  const request = objectStore.openCursor(key, "next");
  // 获取成功的回调
  request.onsuccess = function (e) {
    const cursor = e.target.result;
    console.log("cursor: ", cursor);
    // console.log(request.result === e.target.result, 333); // true
    if (cursor) {
      console.log("数据获取成功");
      list.push(cursor.value);
      cursor.continue();
    } else {
      console.log("数据获取完成", list);
    }
  };
}

/**
 * 通过主键读取数据2
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} [key] 主键
 * */
function getDataByKey2(db, storeName, key) {
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取数据
  // const request = objectStore.getAll(key, 1);
  const request = objectStore.getAll({
    count: 2,
    direction: "prev",
  });
  // 获取成功的回调
  request.onsuccess = function (e) {
    console.log("数据获取成功2", e.target.result);
  };
}

/**
 * 通过索引读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function getDataByIndex(db, storeName, indexName, indexValue) {
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取索引
  const index = objectStore.index(indexName);
  console.log("index: ", index.getAllKeys(indexValue));
  // 获取数据
  const request = index.get(indexValue);
  // const request = index.getAll(indexValue);
  // console.log("request: ", request);
  // 获取成功的回调
  request.onsuccess = function (e) {
    console.log("数据获取成功3", e.target.result);
  };
}

// 通过索引和游标查询数据
function getDataByIndexAndCursor(db, storeName, indexName, indexValue) {
  const list = [];

  // const keyRangeValue = IDBKeyRange.bound("F", "W", false, true);
  // console.log(keyRangeValue.upper, 777);
  // console.log(keyRangeValue.includes("F"));

  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取索引
  const index = objectStore.index(indexName);
  // 获取数据
  // const request = index.openCursor(indexValue);
  // console.log("indexValue: ", indexValue);
  // const request = index.openCursor(IDBKeyRange.only(indexValue)); // name
  const request = index.openCursor(IDBKeyRange.lowerBound(indexValue)); // age
  // 获取成功的回调
  request.onsuccess = function (e) {
    const cursor = e.target.result;
    console.log("cursor: ", cursor);
    if (cursor) {
      console.log("数据获取成功4");
      cursor.continue();
      list.push(cursor.value);
    } else {
      console.log("数据获取完成4");
      console.log(list);
    }
  };
}

/**
 * 通过索引和游标进行分页查询
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} pageNum 分页页码
 * @param {number} pageSize 分页大小
 */
function getDataByIndexAndCursor2(
  db,
  storeName,
  indexName,
  indexValue,
  pageNum,
  pageSize
) {
  const list = [];
  const res = [];
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取索引
  const index = objectStore.index(indexName);
  // 获取数据
  const request = index.openCursor(
    IDBKeyRange.lowerBound(indexValue, true),
    "next"
  );

  const startIndex = pageNum * pageSize - pageSize;
  const endIndex = startIndex + pageSize;
  let i = 0;
  // 获取成功的回调
  request.onsuccess = function (e) {
    const cursor = e.target.result;
    if (cursor) {
      list.push(cursor.value);
      if (i >= startIndex && i < endIndex) {
        res.push(cursor.value);
      }
      cursor.continue();
      i++;
    } else {
      console.log(list, 555);
      console.log("数据获取完成5", res);
      i = 0;
    }
  };
}
/**
 * 通过索引和游标进行分页查询，比getDataByIndexAndCursor2查询效率高
 * @param {object} db 数据库实例
 * @param {string} storeName 存储库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} pageNum 分页页码
 * @param {number} pageSize 分页大小
 */
function getDataByIndexAndCursor3(
  db,
  storeName,
  indexName,
  indexValue,
  pageNum,
  pageSize
) {
  const res = [];
  // 创建事务 - 创建一个只读事务
  const transaction = db.transaction([storeName], "readonly");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取索引
  const index = objectStore.index(indexName);
  // 获取数据
  const request = index.openCursor(
    IDBKeyRange.lowerBound(indexValue, true),
    "next"
  );

  let flag = false;
  // 获取成功的回调
  request.onsuccess = function (e) {
    let cursor = e.target.result;
    if (cursor) {
      if (pageNum > 1 && !flag) {
        flag = true;
        cursor.advance((pageNum - 1) * pageSize);
        return;
      }

      if (res.length < pageSize) {
        cursor.continue();
        res.push(cursor.value);
      } else {
        cursor = null;
        console.log("数据获取完成64", res);
      }
    } else {
      console.log("数据获取完成6", res);
    }
  };
}

/**
 * 更新数据 通过主键读取数据再put更新（没有则会新增数据）
 * @param {object} db
 * @param {string} storeName
 * @param {object} value
 * @param {string} [key]
 */
function updateData(db, storeName, value, key) {
  // 创建事务 - 创建一个读写事务
  const transaction = db.transaction([storeName], "readwrite");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);

  const req1 = objectStore.get(key);
  req1.onsuccess = function (e) {
    const oldValue = e.target.result;
    if (oldValue) {
      // 更新数据
      const request = objectStore.put({ ...oldValue, ...value });
      // 获取成功的回调
      request.onsuccess = function (e) {
        console.log("数据更新成功7");
      };
      // 获取失败的回调
      request.onerror = function (e) {
        console.log("数据更新失败7", e);
      };
    }
  };
}

/**
 * 通过索引游标更新数据
 * @param {object} db
 * @param {string} storeName
 * @param {string} indexName
 * @param {object} indexValue
 */
function updateData2(db, storeName, indexName, indexValue) {
  // 创建事务 - 创建一个读写事务
  const transaction = db.transaction([storeName], "readwrite");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);

  // 获取索引
  const index = objectStore.index(indexName);

  // 获取数据
  const request = index.openCursor(indexValue, "next");

  request.onsuccess = function (e) {
    const cursor = e.target.result;
    if (cursor) {
      oldValue = cursor.value;
      oldValue.name = oldValue.name + "三";
      console.log("oldValue.name: ", oldValue.name);
      const request = cursor.update(oldValue);
      request.onsuccess = function (e) {
        console.log("数据更新成功-------", e.target.value);
      };
      cursor.continue();
    } else {
      console.log("数据获取完成 end");
    }
  };
}

// 删除数据
function deleteData(db, storeName, key) {
  // 创建事务 - 创建一个读写事务
  const transaction = db.transaction([storeName], "readwrite");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 删除数据
  const request = objectStore.delete(key);
  // 获取成功的回调
  request.onsuccess = function (e) {
    console.log("数据删除成功8");
  };
}

// 通过索引游标删除数据
function deleteData2(db, storeName, indexName, indexValue) {
  // 创建事务 - 创建一个读写事务
  const transaction = db.transaction([storeName], "readwrite");
  // 获取存储库
  const objectStore = transaction.objectStore(storeName);
  // 获取索引
  const index = objectStore.index(indexName);

  // 获取数据
  const request = index.openCursor(indexValue, "next");

  // 获取成功的回调
  request.onsuccess = function (e) {
    const cursor = e.target.result;
    console.log("cursor: ", cursor);
    if (cursor) {
      const req = cursor.delete();

      req.onsuccess = function (e) {
        console.log("数据删除成功9");
      };
      req.onerror = function (e) {
        console.log("数据删除失败9", e);
      };
      cursor.continue();
    } else {
      console.log("数据获取完成 end");
    }
  };
}

// 关闭数据库
function closeDB(db) {
  db.close();
  console.log("数据库已关闭10");
}
