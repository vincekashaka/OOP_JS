// Constructor

function Book(title,author, year){
     this.title = title;
     this.author = author;
     this.year = year;

     this.getSummary = function(){
         return`${this.title} was written in ${this.year} by ${this.author}`
     }
}

//Instantiate an Object
const book1 = new Book('Book One', 'Vince Kayz', '2020');
const book2 = new Book('Book Two', 'Vador Ka', '2021');
console.log(book1.getSummary());
console.log(book2.getSummary());