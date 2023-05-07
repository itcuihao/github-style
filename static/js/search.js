$(function() {
    // 替换成自己的algolia信息
    var client = algoliasearch("X98HP3O6IB", "73d1d78ec2d38f91803298227a92819d");
    var index = client.initIndex("blog");
    autocomplete(
      "#aa-input-search",
      { hint: false },
      {
        source: autocomplete.sources.hits(index, { hitsPerPage: 8 }),
        displayKey: "name",
        templates: {
          suggestion: function(suggestion) {
            console.log(suggestion);
            var search;
            if (suggestion.search) {
              search = suggestion.search;
            } else {
              search = suggestion.uri;
            }
            return (
              "<span>" +
              '<a href="/' +
              search +
              '">' +
              suggestion._highlightResult.title.value +
              "</a></span>"
            );
          }
        }
      }
    );
  
  
    $(document).on("click", ".aa-suggestion", function () { 
      var aa = $(this).find("a").attr("href");
      window.location.href = aa;
    })
  });
  