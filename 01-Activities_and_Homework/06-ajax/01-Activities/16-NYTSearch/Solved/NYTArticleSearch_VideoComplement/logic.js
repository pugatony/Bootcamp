/**
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  var queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };

  queryParams.q = $("#search-term")
    .val()
    .trim();

  var startYear = $("#start-year")
    .val()
    .trim();

  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }

  var endYear = $("#end-year")
    .val()
    .trim();

  if (parseInt(endYear)) {
    queryParams.end_date = endYear + "0101";
  }

  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

/**
 * @param {object} NYTData
 */
function updatePage(NYTData) {
  var numArticles = $("#article-count").val();

  console.log(NYTData);
  console.log("------------------------------------");

  for (var i = 0; i < numArticles; i++) {
    var article = NYTData.response.docs[i];

    var articleCount = i + 1;

    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    $("#article-section").append($articleList);

    var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline && headline.main) {
      console.log(headline.main);
      $articleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline.main +
          "</strong>"
      );
    }

    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);
      $articleListItem.append("<h5>" + byline.original + "</h5>");
    }

    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleListItem.append("<h5>Section: " + section + "</h5>");
    }

    var pubDate = article.pub_date;
    console.log(article.pub_date);
    if (pubDate) {
      $articleListItem.append("<h5>" + article.pub_date + "</h5>");
    }

    $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
    console.log(article.web_url);

    $articleList.append($articleListItem);
  }
}

function clear() {
  $("#article-section").empty();
}

$("#run-search").on("click", function(event) {

  event.preventDefault();

  clear();

  var queryURL = buildQueryURL();

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});


$("#clear-all").on("click", clear);
