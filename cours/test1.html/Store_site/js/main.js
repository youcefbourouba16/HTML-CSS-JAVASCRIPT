
  var search=document.querySelector(".search");
var  search__inputdocument=document.querySelector(".search__input");
  var  rest=document.querySelectorAll(".rest");
  function addClass() {

    rest.forEach(function(element) {
      search.classList.add("search_change");
      search__inputdocument.classList.add("search__input_change");
      element.classList.add("rest_change");
    });
  }
  function removeClass() {
    rest.forEach(function(element) {
      search.classList.remove("search_change");
      search__inputdocument.classList.remove("search__input_change");
      element.classList.remove("rest_change");
    });
  }

  document.addEventListener("mouseup", removeClass);

