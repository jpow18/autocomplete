aData = {}
$("#country_name").autocomplete({
  source: function (request, response) {
    $.ajax({
      url: 'http://localhost/autocomplete/server.php',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        //console.log(data)
        aData = $.map(data, function(value, key) {
          return {
            id: value.id,
            label: value.country_name,
            capital: value.capital
          }
        })
        //console.log(aData)
        var results = $.ui.autocomplete.filter(aData, request.term);
        response(results);
      }
    })
  },
  select: function (event, ui) {
    $("#capital").text(ui.item.capital);
  }
})