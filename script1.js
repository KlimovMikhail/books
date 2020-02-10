"use strict";

const $searchForm = $("#search-form"),
      $bookList = $("#book-list"),
      $currentBook = $("#current-book");
let arrBooks = [];
console.log($searchForm);
$currentBook.hide();

const getBooks = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes`;

    $.ajax({
        url: url,
        method: "GET",
        data: `q=${query}`
    }).done((response) => {
      arrBooks = response.items;

        $bookList.empty();

        arrBooks.forEach((book) => {
            $('<a href="">').addClass("list-group-item")
            .attr("data-id", book.id)
            .text(book.volumeInfo.title)
            .appendTo($bookList);
        })
        // console.log(response);
    }).fail((error) => {
        console.log("error", error)
    })
};

$bookList.on("click", "[data-id]", function (event) {
  event.preventDefault();
  console.log("this", this);

  const bookId = $(this).data("id");
  console.log("bookId", bookId);
  const book = arrBooks.find((item) => item.id === bookId);
  console.log("book", book);

  $currentBook.fadeIn();

  $currentBook.find(".book-title")
    .text(`${book.volumeInfo.title} | ${book.volumeInfo.authors.join(", ")} ${book.volumeInfo.publishedDate}`)

})

$searchForm.on("submit", (event) => {
    event.preventDefault();

    const query = $("#search-form input").val().replace(/\s/g, "+");

    getBooks(query);
});

