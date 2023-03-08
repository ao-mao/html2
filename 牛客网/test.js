function f1(callback) {
    setTimeout(function () {
        console.log(2222);
    },1000);
  }
  f1();
  console.log(1111);