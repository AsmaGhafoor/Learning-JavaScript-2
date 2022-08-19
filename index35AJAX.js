console.log('Index 35 AJAX');

// AJAX stands for Asynchronous JavaScript and XML.
// AJAX is not a programming language, Rather, It is a set of existing technologies.
// AJAX help in fetching data asynchronously without interfacing  with the existing page.
// No page load/refresh.
// Modern websites use JSON instead or XML for data transfer.

// AJAX uses XMLHttpRequest object(also called xhr object)
// Pure javascript = Vanilla javascript

//Error in this file

let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);


function buttonClickHandler(){
    
    console.log('You clicked the button');

    // Instantiate an xhr object
    const xhr= new XMLHttpRequest();
    
    // //Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // Use this for post Request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress
    xhr.onprogress=function() {
        console.log('On progress');
    }

    // State change hogi to ye call hoga like 0 to 1, 1 to 2 and so on.
    xhr.onreadystatechange=function(){
        console.log('ready state is ' + xhr.readyState);
    }

    // What to do when responce is ready
    xhr.onload=function() {
        if(this.status === 200){
            console.log(this.responseText);
        }
        // else{
        //     console.error('Error accures');
        // }
    }

    //send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log('We are done!');
}


let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log('You clicked the Pop Handler');

    // Instantiate an xhr object
    const xhr= new XMLHttpRequest();
    
    //Open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees', true);

    // What to do on progress
    xhr.onprogress=function() {
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
}
}