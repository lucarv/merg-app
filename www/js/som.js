$(document).ready(function () {
    var globalAgentId = localStorage.getItem("agentId");
    console.log(globalAgentId)
    var som_url = localStorage.getItem("merg_url") + '/order_mgmt';
    if (!som_url)
        alert('please configure end point')
    else {
        console.log(som_url)

        $.ajax({
            url: som_url,
            type: 'GET',
            data: { 'agentId': globalAgentId },
            success: function (response) {
                if (response.order === "no order in backlog")
                    $("<p>" + response.order + "</p>").appendTo(".inner");
                else {
                    var buffer = response.tasks;
                    for (var i = 0, len = buffer.length; i < len; i++) {
                        $("<p>" + buffer[i] + "</p>").appendTo(".inner");
                    };
                }
            }
        })
    }

})

