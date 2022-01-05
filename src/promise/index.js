const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if (false){
            resolve('Hiiiii!')
        }else{
            reject('Whopps!')
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 5000);
        }else{
            const error = new Error('Whoopp!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    


