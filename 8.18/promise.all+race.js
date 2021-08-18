Mypromise.all = function (promises) {
  const p = new Mypromise((resolve, reject) => {
    let res = [];
    let index = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (data) => {
          res.push(data);
          if (+index === promises.length) {
            resolve(res);
          }
        },
        (err) => {
          reject(err);
          return;
        }
      );
    }
  });
  return p;
};

Mypromise.race = function (promises) {
  const p = new Mypromise((resolve, reject) => {
    promises[i].then(
      (data) => {
        resolve(data);
      },
      (err) => {
        reject(err);
        return;
      }
    );
  });
  return p;
};
