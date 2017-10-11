
$(document).ready(function () {
    $("#addButton").click(function () {
        var merg_url = localStorage.getItem("merg_url");
        if (merg_url === null)
            alert('please configure end point')
        else {
            var meter = $("#meterId").val()
            $.ajax({
                url: merg_url,
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
        }
    })
    $("#delButton").click(function () {
        var merg_url = localStorage.getItem("merg_url");
        if (merg_url === null)
            alert('please configure end point')
        else {
            var meter = $("#meterId").val()
            $.ajax({
                url: merg_url,
                type: 'DELETE',
                data: { 'meterId': meter },
                success: function (response) {
                    $("#content").text(response.result);
                }
            })
        }
    })

    $("#cfgButton").click(function () {
        localStorage.setItem("merg_url", $("#merg_url").val());
        $("#content").text('enpoint configured');
    })

    $("#loginButton").click(function () {
        localStorage.setItem("agentId", $("#agId").val());
        $("#content").text("agent " + localStorage.getItem("agentId") + " succesfully logged in");
    })
})