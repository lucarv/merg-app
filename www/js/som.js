$(document).ready(function () {

    var merg_server = 'http://localhost:3000/service_order'
    $.ajax({
        url: merg_server,
        type: 'GET',
        data: { 'agentId': localStorage.getItem("agentId") },
        success: function (response) {
            if (response.order === "no order in backlog")
                $( "<p>" + response.order +"</p>").appendTo(".inner");
            else {
                var buffer = response.tasks;
                for (var i = 0, len = buffer.length; i < len; i++) {
                    $("<p>" + buffer[i] + "</p>").appendTo(".inner");
                };
            }
        }
    })
})

