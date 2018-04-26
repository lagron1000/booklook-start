var fetch = function () {
  var ibsnNum = $("#isbn").val()
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+ibsnNum,
      success: function(data) {
        $(".book").empty()
          var bookTitle = data.items[0].volumeInfo.title;
          var bookDescription = data.items[0].volumeInfo.description
          var bookAuthor = data.items[0].volumeInfo.authors;
          var bookImg = data.items[0].volumeInfo.imageLinks.thumbnail

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

// $("li").on('click', function(){
//   $(this).siblings().empty()
// })