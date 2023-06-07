function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let numBorrowed=0;
   books.forEach((book)=>{
    book.borrows.forEach((isBorrowed)=>{
      if(isBorrowed.returned==false)
        numBorrowed++;
    });
   });
  return numBorrowed;
}

function getMostCommonGenres(books) {
  let mostCommon=[];

  
  for(let i=0;i<books.length;i++){
    if(i==0){ //empty array, make first entry
      mostCommon[0]={name:books[0].genre, count:1};
    }
    else{
      let alreadyEntered=false;
      mostCommon.forEach((entry)=>{
        if(entry.name==books[i].genre){ //genre already in array, just increase count
          entry.count++;
          alreadyEntered=true;
        }
          
        });
                         if(alreadyEntered==false){ //genre not in array
                           mostCommon[i]={name:books[i].genre, count:1};
      }
      }
    }
               
  
   mostCommon.sort((genreA,genreB)=>genreA.count>genreB.count ? -1:1); //sorting array
  let arrayOfFive=[];
  for(let i=0;i<5;i++){ //shortening the array to five objects or less
    arrayOfFive[i]=mostCommon[i];
  }
  
  return arrayOfFive;
}




function getMostPopularBooks(books) {
   let mostCommon=[];
  
  
  for(let i=0;i<books.length;i++){
    if(i==0){ //empty array, make first entry
      mostCommon[0]={name:books[0].title, count:books[0].borrows.length}; //count equal num times borrowed
    }
    else{
      let alreadyEntered=false;
      mostCommon.forEach((entry)=>{
        if(entry.name==books[i].title){ //title already in array, just increase count
          entry.count++;
          alreadyEntered=true;
        }
          
        });
                         if(alreadyEntered==false){ //title not in array
                           mostCommon[i]={name:books[i].title, count: books[i].borrows.length};
      }
      }
    }
         
   mostCommon.sort((bookA,bookB)=>bookA.count>bookB.count ? -1:1); //sorting array
  let arrayOfFive=[];
  for(let i=0;i<5;i++){ //shortening the array to five objects or less
    arrayOfFive[i]=mostCommon[i];
  }
  
  return arrayOfFive;
   
}

function getMostPopularAuthors(books, authors) {
  
     let mostCommon=[];
    let count=0;
  
  authors.forEach((author)=>{
        mostCommon[count]={name:getName(author), count:0}; //calling helper
       //     mostCommon[count]={name:author.name.first+" "+author.name.last, count:0};  
                  
      books.forEach((book)=>{
        if(book.authorId==author.id){
          mostCommon[count]["count"]=book.borrows.length;
        }
      });
  count++;
});
         
   mostCommon.sort((bookA,bookB)=>bookA.count>bookB.count ? -1:1); //sorting array
  let arrayOfFive=[];
  for(let i=0;i<5;i++){ //shortening the array to five objects or less
    arrayOfFive[i]=mostCommon[i];
  }
  
  return arrayOfFive;
  
  
  
}

function getName(author){ //helper function creating name properly
  return author.name.first+" "+author.name.last;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
