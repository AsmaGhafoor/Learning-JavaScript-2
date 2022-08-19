console.log('Index 39');

//Promise

// 1. resolve.
// 2. reject.
// 3. pending.

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved.');
                resolve();
            }
            else {
                console.log('Function: Your promise has been rejected.');
                reject('Sorry not fulfilled');
            }

        }, 2000);
    })
}

func1().then(function () {
    console.log("Asma : Thanks for resolving");
}).catch(function () {
    console.log('Asma : Very Bad. Reason: ' + error);
})







