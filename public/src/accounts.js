function findAccountById(accounts, id) {
  return accounts.find((identity)=>identity.id==id);
}

function sortAccountsByLastName(accounts) {   
  
 accounts.sort((letterA,letterB)=>letterA.name.last.toLowerCase()<letterB.name.last.toLowerCase() ? -1 :1);
   
   return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let numBorrows=0;
    
  books.forEach((book)=>{ //look at each book 
    book.borrows.forEach((data)=>{ //need to look at each borrowed so zoom in to that array
      if(data.id==account.id)
        numBorrows++;
    });
  });

  return numBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let arrCheckedOut=[];
  let count=0;
 
  books.forEach((book)=>{
    book.borrows.forEach((data)=>{
      if(data.id==account.id && data.returned==false){ //book is checked out

       authors.forEach((writer)=>{
         if(writer.id==book.authorId){ //if id's match, add book to checked out array
           arrCheckedOut[count]=book;
           arrCheckedOut[count]["author"]=writer; //create new author section in object w/ brackets
           count++;
         }
       });
      }
    });
  });
  return arrCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
