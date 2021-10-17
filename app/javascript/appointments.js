$("#appointment_user_id").prop("disabled", true); // second dropdown is disable while first dropdown is empty
$("#appointment_profile_id").change(function(){
  	var profile = $(this).val();
  	if(profile == ''){
  		$("#appointment_user_id").prop("disabled", true);
  	}else{
  		$("#appointment_user_id").prop("disabled", false);
  	}
  	$.ajax({
	    url: "/appointments",
	    method: "GET",  
	    dataType: "json",
	    data: {profile: profile},
	    error: function (xhr, status, error) {
	      	console.error('AJAX Error: ' + status + error);
	    },
	    success: function (response) {
	      	console.log(response);
	      	var users = response["users"];
	      	$("#appointment_user_id").empty();

	      	$("#appointment_user_id").append('<option>Select</option>');
	      	for(var i = 0; i < users.length; i++){
	      		$("#appointment_user_id").append('<option value="' + users[i]["id"] + '">' +users[i]["name"] + '</option>');
	      	}
	    }
  	});
});