const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('whooops!');
        }
    });
};

somethingWillHappen ()
    .then(Response => console.log(response))
    .catch(err => console.error(err));