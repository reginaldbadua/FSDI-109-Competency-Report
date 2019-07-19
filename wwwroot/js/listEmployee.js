alert('file linked');

function GetEmployees(){
    $.ajax({
        type: 'GET',
        url: '/Employee/GetAll',
        contentType: 'application/json; charset=utf-8',
        success: function (res){
            console.log('Server says: ', res);
            // display each employee as a row on the table 
            for(var i=0; i< res.length; i++){
                var emp = res[i];
                
                displayEmployee(emp);
            }
        },
        error: function (error){
            console.log("Error retrieving data");
            console.error(error);
        }
    });
}    

function displayEmployee(emp){
    var table = $("#tblEmployees >tbody"); //Jquery get element by ID 

    var row = 
    `<tr>
        <td>${emp.id}</td> 
        <td>${emp.name}</td> 
        <td>${emp.lastName}</td> 
        <td>${emp.position}</td> 
    </tr>`

    console.log("ROW:", row);

    table.append(row);
}

//when employee list page loads, call this function

window.onload = GetEmployees;
