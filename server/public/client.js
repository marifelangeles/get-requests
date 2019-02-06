

$(document).ready(docReady);

function docReady() {
    
    $.ajax({   
        // where to go to get info and what method to use (CRUD) 
        url: '/quotes',
        method: 'GET'
    }).then(function () {     // then something else will happen
        console.log('The quotes get request worked!');
    }); 

    // display quote in table
    $('#quoteTableBody').append(`
    <tr>
        <td>
            Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.
        </td>
        <td>Scott Adams</td>
    </tr>
    `);
    
} // end docReady