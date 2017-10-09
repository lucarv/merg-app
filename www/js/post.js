$.post("http://localhost:3000",
{
  meterId: "Donald Duck",
  custId: "Duckburg"
},
function(data,status){
    alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
});