      let text = 'Value2';
      $("select option").filter(function() {
          //may want to use $.trim in here
          return $(this).text() == text;
        }).attr('selected', true);





//var submitButtonEl = $('btn-primary');
//var productFormEl = $('productType')

//submitButtonEl.on('click', function() {
   // if ('#productType') {
        
   // }
//});