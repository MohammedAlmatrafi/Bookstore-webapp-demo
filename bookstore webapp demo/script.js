let books = [['001', 'Start with why', 'Simon Sinek', 80, 13],
    ['002', 'But how do it know', 'j. Clark Scott', 59.9, 22],
    ['003', 'Clean code', 'Robert Cecil Martin', 50, 5],
    ['004', 'Zero to one', 'Peter Thiel', 45, 12],
    ['005', "You don't know js", 'Kyle Simpson', 39.9, 9]
 ]
 let searchTypeOutput = null;
 let searchTypeName = null;

 

 function buyingBooks(){
    let searchTypeInput = prompt(`Please enter search method:
id, book title, author`);

    switch(searchTypeInput.toLowerCase()){
        case 'id':
        searchTypeOutput = 0
        searchTypeName = 'ID'
            break;
        case 'title':
        case 'book title':
            searchTypeOutput = 1
            searchTypeName = 'Book Title'
            break;
        case 'author':
            searchTypeOutput = 2
            searchTypeName = 'Author Name'
            break;
        default:
            buyingBooks();
            break;
    }


    bookSearch(searchTypeOutput);
    
    

 }

 function bookSearch(){
    
    let userSearchInput = prompt(`Enter ${searchTypeName}` ,'');
    for(let i = 0; i < books.length; i++){
        if(userSearchInput.toLowerCase() == books[i][searchTypeOutput].toLowerCase()){
           let customerDecision = prompt(`Book Found: \' ${books[i][1]} \'
             Quantity: ${books[i][4]}, Price: ${books[i][3]}` + `\n Do you wish to buy the book?
             Enter yes or no (Y/N) `, '')

             if(customerDecision.toLowerCase() == 'yes' || customerDecision.toLowerCase() == 'y'){
                 let customerQuantity = prompt('Enter Quantity: ', '')
                 
                 if(parseInt(customerQuantity) > 0){
                     if(parseInt(customerQuantity) <= books[i][4]){
                        books[i][4] -= customerQuantity;
                        document.getElementById(`${books[i][0]}-q`).innerHTML =  books[i][4];
                        let currentDate = new Date();
                        let Fulldate = currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '   ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
                        alert("                    ************************ \n Thanks For Buying From Our Bookstore \n Please Comeback Again \n \n Date: "  + Fulldate + " \n ---------------------------------------- \n " + customerQuantity +"        "+ books[i][1] + "         $" + (customerQuantity * books[i][3] ) + "\n ---------------------------------------- \n NO REFUNDS WITHOUT RECEIPT \n                    ************************")
                     }

                     else if(parseInt(customerQuantity) > books[i][4]){
                         alert('Quantity is over stock.')
                     }
                     else{
                         alert("Entered Unkown Quantity, \nTry Again")
                     }
                 }
                    
             }
             else if(customerDecision.toLowerCase() == 'no' || customerDecision.toLowerCase() == 'n'){
                 alert('Order Cancelled.')
             }
             else{
                alert('Order Couldn\'t Be Completed \nTry Again.')
             }
             
             break;
        }
    }
 }
