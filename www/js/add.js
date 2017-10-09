$(document).ready(function () {
    $("#theButton").click(function () {

        $.post("http://dlms-node.azurewebsites.net/add",
            {
                meterId: $("#meterId").val(),
                model: $("#model").val(),
                custId: $("#custid").val()
            },
            function (data, status) {
                alert("Data: " + JSON.stringify(data) + "\nStatus: ");
            });
    });
});