//Object Literal
const book1 ={
    title: 'Book One',
    author: 'Vince Kayz',
    year: '2020',

    getSummary: function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 ={
    title: 'Book Two',
    author: 'Taky Trez',
    year: '2021',

    getSummary: function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};
// console.log(book2.getSummary());

// Get all the values inside the object

console.log(Object.values(book2));
console.log(Object.keys(book2));