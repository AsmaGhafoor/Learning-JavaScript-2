console.log('Project 2');

//   Task
//1. Store all the data to the local Storage
//2. Give another column as an option to delete the book
//3. Add a scroll bar to a view

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display() {

}

// //Add method to display prototype
Display.prototype.add = function (book) {
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}


//Implement the Clear Function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    //To reset the form after enter info
    libraryForm.reset();
}


//Implement the Validate Function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong></strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        msg.innerHTML = ''
    }, 2000);

}


// //Add submit event listener to libraryForm
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
    console.log('book');

    //To display in table
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added.');
    }
    else {
        //Show error to user
        display.show('danger!', ' Sorry you cannot add this book');
    }
    e.preventDefault();
}



