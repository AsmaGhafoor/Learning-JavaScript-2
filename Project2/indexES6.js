console.log('Index ES6');

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        //To reset the form after enter info
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show = function (type, displaymsg) {
        let msg = document.getElementById('msg');
        let boldText;
        if(type==='Success'){
            boldText='Success';
        }
        else{
            boldText='Error';
        }
        msg.innerHTML = ` <div class="aler3t alert-${type} alert-dismissible fade show" role="alert">
                            <strong> ${boldText} </strong> ${displaymsg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">x</span>
                            </button>
                        </div>`;
        //Set a time
        setTimeout(function () {
            msg.innerHTML = ''
        }, 4000);
    }
}

//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('You have submitted Library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    //To display in table
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success', ' Your book has been successfully added.');
    }
    else {
        //Show error to user
        display.show('Danger!', ' Sorry you cannot add this book');
    }
    e.preventDefault();
}

