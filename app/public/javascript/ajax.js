
$("#submit").serialize() // returns all the data in your form
$.ajax({
     type: "POST",
     url: "/layouts/new",
     data: $("#submit").serialize(),
     success: function() {
          ("It worked")
     }
});