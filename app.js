$(document).ready(function() {
  var addthis_share = {
    url: "https://free.currencyconverterapi.com"
  };

  function getCurrency() {
    var currVal = $("#CURR_VAL");
    currVal.val("");

    var currFrSelect = $("#CURR_FR");
    var fr = currFrSelect.val();

    var currToSelect = $("#CURR_TO");
    var to = currToSelect.val();

    var currId = fr + "_" + to;
    var protocol = window.location.protocol.replace(/:/g, "");
    currVal.attr("placeholder", "Convertendo...");
    $.getJSON(
      "https://free.currconv.com/api/v7/convert?q=" +
        currId +
        "&compact=y&apiKey=8e2df2287145b3b86bb7&callback=?",
      function(data) {
        try {
          var currFrVal = parseFloat(
            document.getElementById("CURR_FR_VAL").value
          );
          currVal.val(
            numeral(currFrVal * data[currId].val).format("0,0.00[0]")
          );
        } catch (e) {
          alert("Please enter a number in the Amount field.");
        }

        currVal.attr("placeholder", "Press Convert button");
      }
    );
    console.log(protocol);
  }
  $("#button").click(function() {
    getCurrency();
  });
});
