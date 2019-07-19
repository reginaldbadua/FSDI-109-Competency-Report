function GetDishes(){
    console.log('getting data: ',$);        
    $.ajax({
        type: 'GET',
        url: '/Dish/GetAll',
        contentType: 'application/json; charset=utf-8',
        success: function (res){
            console.log('Server says: ', res);
            // display each dish as a row on the table 
            for(var i=0; i< res.length; i++){
                var dish = res[i];
                
                displayDish(dish);
            }
        },
        error: function (error){
            console.log("Error retrieving data");
            console.error(error);
        }
        //for
        //call the display function
    });
}
function displayDish(dish){
    var table = $("#tblDishes > tbody"); //Jquery get element by ID 

    var row = 
    `<tr>
        <td>${dish.name}</td> 
        <td>${dish.description}</td> 
        <td>${dish.price}</td> 
        <td>${dish.image}</td> 
        <td>${dish.vegan}</td> 
    </tr>`

    console.log("ROW:", row);

    table.append(row);
}

//when dish list page loads, call this function
function test() {
    console.log('Hello');
    console.log($);
}

window.onload = GetDishes;


//$(document).ready(GetDishes);
