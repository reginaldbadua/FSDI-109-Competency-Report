// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function clicked (){
    console.log('button was clicked');
}
function SendTest(){

    //var text = $("#txtName").val();

    var name = $("#txtName").val();
    var last = $("#txtLast").val();
    var phone = $("#txtPhone").val();
    var position = $("#txtPosition").val();
    var salary = $("#txtSalary").val();

    var emp = {
        Id: 0,
        Name: name,
        LastName: last,
        PhoneNumber: phone,
        Position: position,
        Salary: salary
    };

    //do some validations
    //validate a double value
    var validDouble = parseFloat(salary);
    console.log("value for valid: ", validDouble);    
    
    if(!name || !last){
        console.error("valdidation failed");
        $("#nameLastError").removeClass('hidden');
        return;
    }
    if (!validDouble){

        //display error (bootstrap alert)
        $("#salaryError").removeClass('hidden');

        console.error(salary + " is not a valid number");

        return; //finish the func: do not continue

    }



    console.log("Sending to Server: ", emp);

    $.ajax({
        type: 'POST',
        url: '/Employee/Create',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(emp),
        success: function (res){
            console.log('POST ended');
            console.log('Server says: ', res);
        }
    });

}
function RegisterDish(){

    var dishname = $("#txtDishName").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var imageurl = $("#txtImageUrl").val();
    var vegan = $("#chkIsVegan").is(":checked");

    var dish = {
        Name: dishname,
        Description: description,
        Price: price,
        Image: imageurl,
        Vegan: vegan
    };

    console.log(dish);
    //dish name validation
    if(!dishname){
        console.error("valdidation failed");
        $("#nameDishError").removeClass('hidden');
        return;
    }
    $("#nameDishError").addClass('hidden');

    // dish price validation
    var validDishPrice = parseFloat(price);
    console.log("value for valid: ", validDishPrice);  

    if (!validDishPrice){

        //display error (bootstrap alert)
        $("#priceError").removeClass('hidden');

        console.error(price + " is not a valid number");

        return; //finish the func: do not continue

    }
    $("#priceError").addClass('hidden');

    $.ajax({
        type: 'POST',
        url: '/Dish/Create',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(dish),
        success: function (res){
            console.log('POST ended');
            console.log('Server says: ', res);
        }
    });
}

    