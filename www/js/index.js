$(document).ready(function () {
    $("#addButton").click(function () {
        var meter = $("#meterId").val()
        $.ajax({
            url: 'http://localhost:3000',
            type: 'POST',
            data: {
                'meterId': $("#meterId").val(),
                'model': $("#model").val(),
                'custId': $("#custid").val()
            },
            success: function (response) {
                $("#content").text(response.result);
            }
        })

    })
    $("#delButton").click(function () {
        var meter = $("#meterId").val()
        $.ajax({
            url: 'http://localhost:3000',
            type: 'DELETE',
            data: { 'meterId': meter },
            success: function (response) {
                $("#content").text(response.result);
            }
        })

    })
    $("#cfgButton").click(function () {
        var hub = $("#hub").val()
        $("#content").text('not yet implemented');
    })
})