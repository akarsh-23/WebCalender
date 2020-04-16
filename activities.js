

function createActivity()
{
    var name = document.getElementById("ActivityName").value;
    name = document.createTextNode(name);
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    document.getElementsByTagName("td")[0].innerHTML = name;
    document.getElementsByTagName("td")[1].innerHTML = date;
    document.getElementsByTagName("td")[2].innerHTML = time;
}