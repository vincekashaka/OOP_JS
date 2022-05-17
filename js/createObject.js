//Object Of Protos
const bookProtos = {
    getSummary: function(){
        return`${this.title} was written by ${this.year} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return`${this.title} is ${years} years old`
    }
  }

  //Create Object
//   const book1 = Object.create(bookProtos);
//   book1.title = 'Book One';
//   book1.author = 'Jonso Muller';
//   book1.year= '2016';

const book1 = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'Vince Kayz'},
    year: {value: '2015'}
});


  console.log(book1);
