function findAuthorById(authors, id) {
  return authors.find((author)=>author.id==id);
}

function findBookById(books, id) {
  return books.find((book)=>book.id==id);
}

function partitionBooksByBorrowedStatus(books) {

  let checkedOut=[];
  let returned=[];
  
  books.forEach((book)=>{
      if(book.borrows[0].returned==false){ //only need to check first object in borrowed for status
        checkedOut.push(book);    //checked out
      }
      else{ //has been returned
        returned.push(book);
      }
  });
  
  return [checkedOut,returned];
}

function getBorrowersForBook(book, accounts) {
  let borrowers=[];
  let count=0;
  
  accounts.forEach((account)=>{
    book.borrows.forEach((borrow)=>{
    if(account.id==borrow.id && borrowers.length<10){ //limit to ten or fewer objects in arr
      borrowers[count]=account;
      borrowers[count]["returned"]=borrow.returned; //adding this feature to account object
      count++;
    }
  });
  });
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
