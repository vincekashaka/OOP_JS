// Constructor

function Book(title,author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return`${this.title} was written in ${this.year} by ${this.author}`;
}

//Magazine Function
function Magazine(title, author,year, month){
    Book.call(this, title, author,year);

    this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Intantiate Magazine
const mag1 = new Magazine('Mag One', 'John Gug','2014', 'Feb');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1.getSummary());