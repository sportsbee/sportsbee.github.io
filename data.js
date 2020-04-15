var dataLeaderboard = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "./data.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
})();



    $(document).ready(function () {
        $('#example').DataTable({
            "processing": true,
            "info": true,
            "stateSave": true,
            data: dataLeaderboard,
            "columns": [
                { "data": "insta_user_name" },
                { "data": "rank" },
                { "data": "POINTS" },
                { "data": "CORRECT_ANSWERS" }
            ]
        });
    });
