    // Name: David Huynh
    // Email: david_huynh@student.uml.edu
    // Major: C.S (Senior year) in course 91.61 GUI Programming I
    // Date Created: 07/29/2020
    // Short Description: Assigment 5 - First javscript Assigment - Creating an Interactive Dynamic Table
    // Copyright (c) 2020 by David Huynh. All rights reserved


function isBlank(inputValue){
  if (inputValue === ""){
    return 1;
  }
  return 0;
}

var error_check = 0;
function handleClicks() {
  document.getElementById('rowStart').value = -50;
  document.getElementById('rowEnd').value = 50;
  document.getElementById('colStart').value = -50;
  document.getElementById('colEnd').value = 50;

  $('#btnSubmit').click(function(event) {

    function Valid1(begin,beginID,errorID){
        if (!Number.isInteger(begin) || isBlank(document.getElementById(beginID).value)) {
        document.getElementById(errorID).innerHTML = " Only Accept Integer ";
        return 1;
      } else if (begin > 1000) {
        document.getElementById(errorID).innerHTML = " The # is larger than 1000 ";
        return 1;
      } else {
        document.getElementById(errorID).innerHTML = "  ";
        return 0;
      }

    }

    function Valid(begin,beginID,errorID){
        if (!Number.isInteger(begin) || isBlank(document.getElementById(beginID).value)) {
        document.getElementById(errorID).innerHTML = " Only Accept Integer  ";
        return 1;
      } else if (begin > 1000) {
        document.getElementById(errorID).innerHTML = " The # is larger than 1000 ";
        return 1;
      } else {
        document.getElementById(errorID).innerHTML = "  ";
      }

    }
    //$('#rowStart').val();
    var rowStart = Number(document.getElementById('rowStart').value);
    var rowEnd = Number(document.getElementById('rowEnd').value);
    var colStart = Number(document.getElementById('colStart').value);
    var colEnd = Number(document.getElementById('colEnd').value);
    

    error_check = Valid1(rowStart,'rowStart','rowStart_error');
    Valid(rowEnd,'rowEnd','rowEnd_error');
    Valid(colStart,'colStart','colStart_error');
    Valid(colEnd,'colEnd','colEnd_error');

    function errorMessage(errorBeginID, errorEndID,MessagebBeginID,MessagebEndID){
      document.getElementById(errorBeginID).innerHTML = MessagebBeginID;
      document.getElementById(errorEndID).innerHTML = MessagebEndID;
    }

    if (error_check == 0){
      if (rowStart > rowEnd) {
        errorMessage('rowStart_error','rowEnd_error'," This # must be smaller than ending # ","This # must be larger than starting # ");
        error_check = 1;
      } else {
        errorMessage('rowStart_error','rowEnd_error',"  ","  ");        
      }

      if (colStart > colEnd) {
        errorMessage('colStart_error','colEnd_error'," This # must be smaller than ending # ","This # must be larger than starting # ");
        error_check = 1;
      } else {
        errorMessage('colStart_error','colEnd_error', "  ", "  ");
      }
    } else {
      return false;
    }

    if (error_check == 0){
      if (rowEnd -rowStart > 100) {
        errorMessage('rowStart_error','rowEnd_error'," Range Start & End should in 100 "," Range Start & End should in 100 ");
        error_check = 1;
      } else {
         errorMessage('rowStart_error','rowEnd_error', "  ", "  ");
      }

      if (colEnd - colStart > 100) {
        errorMessage('colStart_error','colEnd_error'," Range Start & End should in 100 "," Range Start & End should in 100 ");
        error_check = 1;
      } else {
        errorMessage('colStart_error','colEnd_error', "  ", "  ");
      }
    } else {
        return false;
    }

//render();
    var table = '<table>';
    if(error_check == 0){
      var table = '<table>';
      //get table #
      var rowHeader = rowStart;
      var colHeader = colStart;

      for (var k = colStart; k <= colEnd + 1; k++) {
          table += '<tr>'; 
          for (var j = rowStart; j <= rowEnd + 1; j++) {
            if (k == colStart && j == rowStart) {
              table += '<td>' + '' + '</td>';
            } else if (k == colStart) {
              table += "<td class ='header'>" + rowHeader + '</td>';
              rowHeader++;

            } else if (j == rowStart) {

              table += '<td >' + colHeader + '</td>';
              colHeader++;
            } else {
              if (k % 2 === 0 && j % 2 === 0 || (k % 2 !== 0 && j % 2 !== 0)) {
                  table += "<td class = 'both'>" + ((k - 1) * (j - 1)) + '</td>';
              } else {
                  table += "<td class = 'either'>" + ((k - 1) * (j - 1)) + '</td>';
              }
            }
          }
        table += '</tr>'; // close tab 
      }
      table += '</table>'; // close 
   }
   document.getElementById('render').innerHTML = table; //push table content into html
   return false;
  });
  
}


// function render(table,rowStart,ColStart){
//   return table;
// }

$(handleClicks);