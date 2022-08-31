console.log("Index 42");

//button with id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById("content");

// Use of fetch API
// function getData(){
//     url="asma.txt";
//     fetch(url).then((responce)=>{
//         console.log("Inside first then");
//         return responce.text();
//     }).then((data)=>{
//         console.log("Inside Second then");
//         console.log(data);
//     })
// }

function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((responce) => {
        console.log("Inside first then");
        // ager yaha .text user kryn gay to wo data ko parse nhi krey ga
        // JSON is Javascript object notation
        return responce.json();
    }).then((data) => {
        console.log("Inside Second then");
        console.log(data);
    })
}
//getData();

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"newdummydata","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        //data string hai to stringify use nhi hoga
        body: data
    }
    // .params means parameter
    fetch(url,params).then(responce => responce.json())
    .then((data) => console.log(data))
}

// console.log("Before get data");
postData();
// console.log("After running get data");
