// console.log("Hi i m there");
$.getScript('./public/GlobalConfig/config.js')
$(document).ready(function () {

    $('#btnSubmitContact').click(function (e) {

        e.preventDefault()
        console.log('button clicked')



        const department = $('#department').val();
        const doctor = $('#doctor').val();
        const date = $('#date').val();
        const time = $('#time').val();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        $.post(`http://localhost:3000/api/v1/form`, { department: department, doctor: doctor , date: date , time: time , name: name , phone: phone , message: message }, (data, status) => {
            console.log(status);
            console.log(data);
            // if (status == "success") {
            //     window.location = "/"
            // }
        })


    })

    $('#btnSubmit').click(function (e) {

        e.preventDefault()
        console.log('button clicked')

        

        const name = $('#name').val();
        const practiceName = $('#practiceName').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const practiceFunction = $('#practiceFunction').val();
        const address = $('#address').val();
        const desc = $('#desc').val();

        $.post(`http://localhost:3000/api/v1/form`, { name: name , practiceName: practiceName , phone: phone , email: email , practiceFunction: practiceFunction ,  address: address , desc:desc }, (data, status) => {
            console.log(status);
            console.log(data);
            // if (status == "success") {
            //     window.location = "/"
            // }
        })


    })

})

