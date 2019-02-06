

$(document).ready(docReady);

function docReady() {
    
    $.ajax({   
        // where to go to get info and what method to use (CRUD) 
        url: '/quotes',
        method: 'GET'
    // then (a promise) something else will happen
    // 
    }).then(function (response) {     
        console.log('The quotes get request worked!');
        // now have access to array of objects
        console.log(response);
        // loop through quotes array
        for (let i = 0; i < response.length; i++) {
            console.log(response[i]);
            
            // display quote in table
            $('#quoteTableBody').append(`
            <tr>
                <td>
                    ${response[i].quote}
                </td>
                <td>${response[i].author}</td>
            </tr>
            `);
        } // end loop
        
    }); 

    
    
} // end docReady