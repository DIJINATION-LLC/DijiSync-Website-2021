// console.log("Hi i m there");
$.getScript('./public/GlobalConfig/config.js')
$(document).ready(function () {

    $('#btnSubmitContact').click(function (e) {

        e.preventDefault()
        console.log('button clicked')

        const department = $('#department').val();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        if(department != "" && name != "" && phone != "" && message != ""){
            console.log("Working if");
            $.post(`http://localhost:3000/api/v1/form`, { department: department, name: name , phone: phone , message: message }, (data, status) => {
                // if (status == "success") {
                //     window.location = "/"
                // }
            })
        }else{
            console.log("Please fill all fields")
        }

    })

    $('#btnSubmit').click(function (e) {

        e.preventDefault()
        console.log('button clicked')

        const name = $('#name').val();
        const practiceName = $('#practiceName').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const address = $('#address').val();
        const desc = $('#desc').val();

        if(name != "" && practiceName != "" && phone != "" && email != "" && address != "" && desc != ""){
            console.log("Working if");
            $.post(`http://localhost:3000/api/v1/form`, { name: name , practiceName: practiceName , phone: phone , email: email ,  address: address , desc:desc }, (data, status) => {
                // if (status == "success") {
                //     window.location = "/"
                // }
            })
        }else{
            console.log("Please fill all fields")
        }



    })

})

