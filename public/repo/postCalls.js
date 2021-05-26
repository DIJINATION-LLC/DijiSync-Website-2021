console.log("Hi i m there");
$.getScript('./public/GlobalConfig/config.js')
$(document).ready(function () {

    $('#btnSubmitContact').submit(function (e) {

        e.preventDefault()
        console.log('button clicked')

        const department = $('#department').val();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

            console.log("Working if");
            $.post(`https://dijisynchcs-llc.github.io/DijiSync-Website-2021/index.html/api/v1/form`, { department: department, name: name , phone: phone , message: message }, (data, status) => {
                // if (status == "success") {
                //     window.location = "/"
                // }
            })

    })

    $('#btnSubmit').submit(function (e) {

        e.preventDefault()
        console.log('button clicked')

        const name = $('#name').val();
        const practiceName = $('#practiceName').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const address = $('#address').val();
        const desc = $('#desc').val();

       
            console.log("Working if");
            $.post(`https://dijisynchcs-llc.github.io/DijiSync-Website-2021/index.html/api/v1/form`, { name: name , practiceName: practiceName , phone: phone , email: email ,  address: address , desc:desc }, (data, status) => {
                // if (status == "success") {
                //     window.location = "/"
                // }
            })

    })

})

