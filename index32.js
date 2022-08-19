console.log('Index 32');

//Exercise # 04

//Create a class library and implement the following:
//Constructor must take a book list as an argument
//getBooklist();
//issueBook(bookname, user);
//returnBook(bookname);

//OOP
class library {
    constructor(getBooklist) {
        this.book = getBooklist;
        this.issueBook = {};
    }
    getBooklist() {
        //return `This `
        this.book.foreach(element => {
            console.log(element);
        });
    }

    issueBooks(bookname, username) {
        // this.book1 = bookname;
        // this.name = username;
        console.log(this.issueBook[bookname]);
        if(this.issueBook[bookname]===undefined){
            this.issueBook[bookname]=username;
        }
        else{
            console.log("This book is already issued");
        }
        
    }
    returnBooks() {
        delete this.issueBook[bookname];
    }
}

// function returnBook() {
//     var user=
// }








