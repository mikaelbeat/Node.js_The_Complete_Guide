
/* const p = Promise.resolve({id: 1});
p.then(result => console.log(result));

console.log('\n**********************************\n');

const e = Promise.reject(new Error('Reason for rejection....'));
e.catch(error => console.log(error));

console.log('\n**********************************\n'); */

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result));

