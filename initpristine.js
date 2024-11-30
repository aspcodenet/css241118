window.onload = function () {

    var form = document.getElementById("form1");

    // create the pristine instance
    var pristine = new Pristine(form,{
        classTo: 'mb-3',
        errorTextParent: 'mb-3',
    });

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false

    });
};
