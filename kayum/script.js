function validateForm(){
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var semister = document.getElementById("semister").value;
    var dept = document.getElementById("dept").value;

    if(name == ""){
        alert("Name is required");
        return false;
    }
    if(roll == ""){
        alert("Roll is required");
        return false;
    }
    if(semister == ""){
        alert("Semister is required");
        return false;
    }
    if(dept == ""){
        alert("dept is required");
        return false;
    }
    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem
        ("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>"
        html += "<td>"+element.name+"</td>"
        html += "<td>"+element.roll+"</td>"
        html += "<td>"+element.semister+"</td>"
        html += "<td>"+element.dept+"</td>"
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });
    document.querySelector("#cruadTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var roll = document.getElementById("roll").value;
        var semister = document.getElementById("semister").value;
        var dept = document.getElementById("dept").value;
    
        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
    
        peopleList.push({
            name : name,
            roll : roll,
            semister : semister,
            dept : dept,
        });
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("roll").value = "";
        document.getElementById("semister").value = "";
        document.getElementById("dept").value = "";
    }
}

function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

function updateData(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("roll").value = peopleList[index].roll;
    document.getElementById("semister").value = peopleList[index].semister;
    document.getElementById("dept").value = peopleList[index].dept;
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].roll =   document.getElementById("roll").value;
            peopleList[index].semister =  document.getElementById("semister").value;
            peopleList[index].dept =  document.getElementById("dept").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            showData();


            document.getElementById("name").value = "";
            document.getElementById("roll").value = "";
            document.getElementById("semister").value = "";
            document.getElementById("dept").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";

        }
    }
}