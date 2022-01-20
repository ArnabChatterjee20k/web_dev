class Library{
    constructor(booklist){
        this.booklist = booklist;
        this.issued_Book = {};
    }
    issue_Book(bookname,user){
        if(! this.issued_Book[bookname]){ //if book not present in issued book object then issue the book
            this.issued_Book[bookname] = user;
            return `${user} issued book--> ${bookname}`
        }
        else{
            return `Sorry ${user}. Book--> ${bookname} already issued`
        }
        
    }

    get_issued_Book(){
        return this.issued_Book
    }

    return_Book(bookname){
        delete this.issued_Book[bookname]
        return `${bookname} now can be issued`
    }

    get_Book_list(){
        this.booklist.forEach( function(element) {
            console.log (element)
        });
        return this.booklist
    }
    
}

let libray = new Library(["1","2","3"])
// console.log(libray.get_Book_list())

console.log(libray.issue_Book("1","arnab"))
console.log(libray.issue_Book("2","arnab2"))

console.log(libray.issue_Book("1","arnab"))
console.log(libray.issue_Book("1","arnab"))

console.log(libray.get_issued_Book())
console.log(libray.return_Book("1"))

console.log(libray.issue_Book("1","arnab3"))
