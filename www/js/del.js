$(document).ready(function () {
    $("#theButton").click(function () {
        $.post("http://dlms-node.azurewebsites.net/del",
            {
                meterId: $("#meterId").val()
            },
            function (data, status) {
                alert("Data: " + JSON.stringify(data));
            });
    });
});