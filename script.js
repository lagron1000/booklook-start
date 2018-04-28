var fetch = function () {
  var ibsnNum = $("#isbn").val()
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+ibsnNum,
      success: function(data) {
        $(".book").empty()
          var source = $('#books-template').html();
          var template = Handlebars.compile(source);
          var newHTML = template(data);
          $('.book').append(newHTML);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

$(".search-book").on('click', function(){
    fetch();
})

$(".book").on('click', '.bookLi', function(){
  $(this).siblings().remove()
})