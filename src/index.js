// Examples of how to solve one of
// the most popular javascript problem
// from many of interviews

const arr = [10, 12, 15, 21];

// 1
// for (var i = 0; i < arr.length; i++) {
//   (function (i) {
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
//   })(i);
// }

// 2
// for (var i = 0; i < arr.length; i++) {
//     setTimeout((function local(i) {
//         return function() {
//             console.log('Index: ' + i + ', element: ' + arr[i]);
//         }
//     })(i), 3000);
// }

// 3
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function(i) {
//             console.log('Index: ' + i + ', element: ' + arr[i]);
//         }, 3000, i);
// }

// 4
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function(item, i) {
//             console.log('Index: ' + i + ', element: ' + item);
//         }.bind(this, arr[i], i), 3000);
// }

// 5
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }

// 6
function createClosure() {
  arr.forEach((a, i) => {
    setTimeout(function() {
      console.log("Index: " + i + ", element: " + a);
    }, 3000);
  });
}

createClosure();
