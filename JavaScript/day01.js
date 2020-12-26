/**
 * 经典异步面试题
 * 以下代码的输出顺序
 */
async function async1 () {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  return 'async return';
}
async function async2 () {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1().then(function (res) {
  console.log(res);
})
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 * 注意事项
 * ①  Promise内部代码为同步代码
 * ②  async / await 会生成微任务
 * ③  setTimeout是浏览器行为会生成宏任务最后执行
 *
 * 题解：
 * // JS主线程
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 *
 * // 第一批微任务
 * async1 end
 * promise2
 *
 * // 第二批微任务
 * async return
 *
 * // 宏任务
 * setTimeout
 */


