$(document).ready(function(){


  function getInsurance2() {
    var insuranceNew2 = document.getElementById("insuranceNew2");
    if(insuranceNew2.checked) {
      // TODO dropbox
      $("#sameInsurance").removeClass("hide");
      console.log("checked");
    }
    if(insuranceNew2.checked != true) {
      console.log("nope");
       $("#sameInsurance").addClass("hide");
      // $("#insForm").addClass("hide");
      // $("#medicaidForm").addClass("hide");
    }
  }


  $("#insuranceNew2").click(getInsurance2);

  $('#insSame3').change(function() {
    if($('#insSame3').val() == 'yes'){
      console.log("1");
      $("#insChoose3").addClass("hide")
    }
    if($('#insSame3').val() == 'no'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose3").removeClass("hide")
    }
  });

  $('#insChoose3').change(function() {
    if($('#insChoose3').val() == 'self_pay'){
      console.log("1 3");
      $("#payForm4").removeClass("hide");
      $("#insForm4").addClass("hide");
      $("#medicaidForm4").addClass("hide");
    }
    if($('#insChoose3').val() == 'private_insurance'){
      console.log("2 3");
      $("#payForm4").addClass("hide");
      $("#insForm4").removeClass("hide");
      $("#medicaidForm4").addClass("hide");
    }

    if($('#insChoose3').val() == 'medicaid'){
      console.log("3");
      $("#payForm4").addClass("hide");
      $("#insForm4").addClass("hide");
      $("#medicaidForm4").removeClass("hide");
    }
  });

  function getInsurance3() {
    var insuranceNew3 = document.getElementById("insuranceNew3");
    if(insuranceNew3.checked) {
      $("#sameInsurance4").removeClass("hide");
      console.log("checked 3");
    }
    if(insuranceNew3.checked != true) {
      console.log("nope 33");
      $("#sameInsurance4").addClass("hide");
      // $("#insForm").addClass("hide");
      // $("#medicaidForm").addClass("hide");
    }
  }

  $('#insSame4').change(function(){
    if($('#insSame4').val() == 'yes'){
      console.log("1");
    }
    if($('#insSame4').val() == 'no'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose4").removeClass("hide")
    }
  });
  $('#insChoose4').change(function() {
    if($('#insChoose4').val() == 'self_pay'){
      console.log("1 3");
      $("#payForm5").removeClass("hide");
      $("#insForm5").addClass("hide");
      $("#medicaidForm5").addClass("hide");
    }
    if($('#insChoose4').val() == 'private_insurance'){
      console.log("2 3");
      $("#payForm5").addClass("hide");
      $("#insForm5").removeClass("hide");
      $("#medicaidForm5").addClass("hide");
    }

    if($('#insChoose4').val() == 'medicaid'){
      console.log("3");
      $("#payForm5").addClass("hide");
      $("#insForm5").addClass("hide");
      $("#medicaidForm5").removeClass("hide");
    }
  });

  $('#insSame5').change(function(){
    if($('#insSame5').val() == 'yes'){
      console.log("1");
    }
    if($('#insSame5').val() == 'no'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose5").removeClass("hide")
    }
  });
  $('#insChoose5').change(function() {
    if($('#insChoose5').val() == 'self_pay'){
      console.log("1 3");
      $("#payForm6").removeClass("hide");
      $("#insForm6").addClass("hide");
      $("#medicaidForm6").addClass("hide");
    }
    if($('#insChoose5').val() == 'private_insurance'){
      console.log("2 3");
      $("#payForm6").addClass("hide");
      $("#insForm6").removeClass("hide");
      $("#medicaidForm6").addClass("hide");
    }

    if($('#insChoose5').val() == 'medicaid'){
      console.log("3");
      $("#payForm6").addClass("hide");
      $("#insForm6").addClass("hide");
      $("#medicaidForm6").removeClass("hide");
    }
  });

  function getInsurance10() {
    var insuranceNew10 = document.getElementById("insuranceNew10");
    if(insuranceNew10.checked) {
      $("#sameInsurance10").removeClass("hide");
      console.log("checked");
    }
    if(insuranceNew10.checked != true) {
      console.log("nope");
      $("#sameInsurance10").addClass("hide");
      // $("#insForm").addClass("hide");
      // $("#medicaidForm").addClass("hide");
    }
  }

  $("#insuranceNew10").click(getInsurance10);

  $('#insSame10').change(function(){
    if($('#insSame10').val() == 'yes'){
      console.log("1");
    }
    if($('#insSame10').val() == 'no'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose10").removeClass("hide")
    }
  });

  $( "#addChildNew11" ).click(function() {
    console.log("yo New 10");
    $( "#childAdditionNew11" ).toggle();
  });

  function getInsurance11() {
    var insuranceNew11 = document.getElementById("insuranceNew11");
    if(insuranceNew11.checked) {
      $("#sameInsurance11").removeClass("hide");
      console.log("checked");
    }
    if(insuranceNew11.checked != true) {
      console.log("nope");
      $("#sameInsurance11").addClass("hide");
      // $("#insForm").addClass("hide");
      // $("#medicaidForm").addClass("hide");
    }
  }

  $("#insuranceNew11").click(getInsurance11);

  $('#insSame11').change(function(){
    if($('#insSame11').val() == 'yes'){
      console.log("1");
    }
    if($('#insSame11').val() == 'no'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose11").removeClass("hide")
    }
  });

  $('#insChoose11').change(function(){
      if($('#insChoose11').val() == 'self_pay'){
        console.log("1 4");
        $("#insForm11").addClass("hide");
        $("#medicaidForm11").addClass("hide");
    }
    if($('#insChoose11').val() == 'private_insurance'){
      console.log("2 4");
       $("#insForm11").removeClass("hide");
     }

    if($('#insChoose11').val() == 'medicaid'){
      console.log("4");
      $("#insForm11").addClass("hide");
      $("#medicaidForm11").removeClass("hide");
    }
  });
  ////////////////////

  /////////////////12

  $( "#addChildNew12" ).click(function() {
    console.log("yo New 10");
    $( "#childAdditionNew12" ).toggle();
  });

  function getInsurance12() {
    var insuranceNew12 = document.getElementById("insuranceNew12");
    if(insuranceNew12.checked) {
      $("#sameInsurance12").removeClass("hide");
      console.log("checked");
    }
    if(insuranceNew12.checked != true) {
      console.log("nope");
      $("#sameInsurance12").addClass("hide");
      // $("#insForm").addClass("hide");
      // $("#medicaidForm").addClass("hide");
    }
  }

  $("#insuranceNew12").click(getInsurance12);

  $('#insSame12').change(function(){
    if($('#insSame12').val() == 'yes') {
      console.log("1");
    }
    if($('#insSame12').val() == 'no') {
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose12").removeClass("hide")
    }
  });

  $('#insChoose12').change(function(){
    if($('#insChoose12').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm12").addClass("hide");
      $("#medicaidForm12").addClass("hide");
    }
    if($('#insChoose12').val() == 'private_insurance'){
      console.log("2 4");
      $("#insForm12").removeClass("hide");
    }
    if($('#insChoose12').val() == 'medicaid'){
      console.log("4");
      $("#insForm12").addClass("hide");
      $("#medicaidForm12").removeClass("hide");
    }
  });
////////////////////

/////////////////13

$( "#addChildNew13" ).click(function() {
  console.log("yo New 10");
  $( "#childAdditionNew13" ).toggle();
});

function getInsurance13() {
  var insuranceNew13 = document.getElementById("insuranceNew13");
  if(insuranceNew13.checked) {

    $("#sameInsurance13").removeClass("hide");
  console.log("checked");
  }
  if(insuranceNew13.checked != true) {
    console.log("nope");
     $("#sameInsurance13").addClass("hide");
    // $("#insForm").addClass("hide");
    // $("#medicaidForm").addClass("hide");
  }
}


$("#insuranceNew13").click(getInsurance13);

$('#insSame13').change(function(){
    if($('#insSame13').val() == 'yes'){
      console.log("1");
  }
  if($('#insSame13').val() == 'no'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose13").removeClass("hide")
  }
});

$('#insChoose13').change(function(){
    if($('#insChoose13').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm13").addClass("hide");
      $("#medicaidForm13").addClass("hide");
  }
  if($('#insChoose13').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm13").removeClass("hide");

}

if($('#insChoose13').val() == 'medicaid'){
  console.log("4");
  $("#insForm13").addClass("hide");
  $("#medicaidForm13").removeClass("hide");

}

});
////////////////////

/////////////////14

$( "#addChildNew14" ).click(function() {
  console.log("yo New 10");
  $( "#childAdditionNew14" ).toggle();
});

function getInsurance14() {
  var insuranceNew14 = document.getElementById("insuranceNew14");
  if(insuranceNew14.checked) {

    $("#sameInsurance14").removeClass("hide");
  console.log("checked");
  }
  if(insuranceNew14.checked != true) {
    console.log("nope");
     $("#sameInsurance14").addClass("hide");
    // $("#insForm").addClass("hide");
    // $("#medicaidForm").addClass("hide");
  }
}


$("#insuranceNew14").click(getInsurance14);

$('#insSame14').change(function(){
    if($('#insSame14').val() == 'yes'){
      console.log("1");
  }
  if($('#insSame14').val() == 'no'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose14").removeClass("hide")
  }
});

$('#insChoose14').change(function(){
    if($('#insChoose14').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm14").addClass("hide");
      $("#medicaidForm14").addClass("hide");
  }
  if($('#insChoose14').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm14").removeClass("hide");

}

if($('#insChoose14').val() == 'medicaid'){
  console.log("4");
  $("#insForm14").addClass("hide");
  $("#medicaidForm14").removeClass("hide");

}

});
////////////////////

/////////////////15

$( "#addChildNew15" ).click(function() {
  console.log("yo New 10");
  $( "#childAdditionNew15" ).toggle();
});

function getInsurance15() {
  var insuranceNew15 = document.getElementById("insuranceNew15");
  if(insuranceNew15.checked) {

    $("#sameInsurance15").removeClass("hide");
  console.log("checked");
  }
  if(insuranceNew15.checked != true) {
    console.log("nope");
     $("#sameInsurance15").addClass("hide");
    // $("#insForm").addClass("hide");
    // $("#medicaidForm").addClass("hide");
  }
}


$("#insuranceNew15").click(getInsurance15);

$('#insSame15').change(function(){
    if($('#insSame15').val() == 'yes'){
      console.log("1");
  }
  if($('#insSame15').val() == 'no'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose15").removeClass("hide")
  }
});

$('#insChoose15').change(function(){
    if($('#insChoose15').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm15").addClass("hide");
      $("#medicaidForm15").addClass("hide");
  }
  if($('#insChoose15').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm15").removeClass("hide");

}

if($('#insChoose15').val() == 'medicaid'){
  console.log("4");
  $("#insForm15").addClass("hide");
  $("#medicaidForm15").removeClass("hide");

}

});
////////////////////15

/////////////////15

$( "#addChildNew16" ).click(function() {
  console.log("yo New 10");
  $( "#childAdditionNew16" ).toggle();
});

function getInsurance16() {
  var insuranceNew16 = document.getElementById("insuranceNew16");
  if(insuranceNew16.checked) {

    $("#sameInsurance16").removeClass("hide");
  console.log("checked");
  }
  if(insuranceNew16.checked != true) {
    console.log("nope");
     $("#sameInsurance16").addClass("hide");
    // $("#insForm").addClass("hide");
    // $("#medicaidForm").addClass("hide");
  }
}


$("#insuranceNew16").click(getInsurance16);

$('#insSame16').change(function(){
    if($('#insSame16').val() == 'yes'){
      console.log("1");
  }
  if($('#insSame16').val() == 'no'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose16").removeClass("hide")
  }
});

$('#insChoose16').change(function(){
    if($('#insChoose16').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm16").addClass("hide");
      $("#medicaidForm16").addClass("hide");
  }
  if($('#insChoose16').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm16").removeClass("hide");

}

if($('#insChoose16').val() == 'medicaid'){
  console.log("4");
  $("#insForm16").addClass("hide");
  $("#medicaidForm16").removeClass("hide");

}

});
////////////////////16






$("#insuranceNew3").click(getInsurance3);
$('#insChoose4').change(function(){
    if($('#insChoose4').val() == 'self_pay'){
      console.log("1 4");
      $("#payForm4").removeClass("hide");
      $("#insForm4").addClass("hide");
      $("#medicaidForm4").addClass("hide");
  }
  if($('#insChoose4').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm4").removeClass("hide");
     $("#payForm4").addClass("hide");
}

if($('#insChoose4').val() == 'medicaid'){
  console.log("4");
  $("#insForm4").addClass("hide");
  $("#medicaidForm4").removeClass("hide");
  $("#payForm4").addClass("hide");

}

});

$('#insChoose5').change(function(){
    if($('#insChoose5').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm5").addClass("hide");
      $("#medicaidForm5").addClass("hide");
  }
  if($('#insChoose5').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm5").removeClass("hide");

}

if($('#insChoose5').val() == 'medicaid'){
  console.log("4");
  $("#insForm5").addClass("hide");
  $("#medicaidForm5").removeClass("hide");

}

});


$('#insChoose10').change(function(){
    if($('#insChoose10').val() == 'self_pay'){
      console.log("1 4");
      $("#insForm10").addClass("hide");
      $("#medicaidForm10").addClass("hide");
  }
  if($('#insChoose10').val() == 'private_insurance'){
    console.log("2 4");
     $("#insForm10").removeClass("hide");

}

if($('#insChoose10').val() == '3'){
  console.log("4");
  $("#insForm5").addClass("hide");
  $("#medicaidForm10").removeClass("hide");

}

});




$('#insChoose').change(function(){
    if($('#insChoose').val() == 'self_pay'){
      console.log("1");
      $("#payForm").removeClass("hide");
        $("#insForm").addClass("hide");
        $("#medicaidForm").addClass("hide");
  }
  if($('#insChoose').val() == 'private_insurance'){
    console.log("2");
    $("#payForm").addClass("hide");
    $("#insForm").removeClass("hide");
    $("#medicaidForm").addClass("hide");
}
if($('#insChoose').val() == 'medicaid'){
  console.log("3");
  $("#payForm").addClass("hide");
  $("#insForm").addClass("hide");
  $("#medicaidForm").removeClass("hide");

}
});


$( "#addChildNew2" ).click(function() {
  console.log("New Child 2");
  $( "#childAdditionNew2" ).toggle();
  $("#addChildNew3").removeClass("hide");

});


$( "#addChildNew3" ).click(function() {
  console.log("New Child 3");
  $( "#childAdditionNew3" ).toggle();
 $("childAdditionNew4").removeClass("hide")
});
$( "#addChildNew4" ).click(function() {
  console.log("New Child 4");
  $( "#childAdditionNew4" ).toggle();
 $("childAdditionNew5").removeClass("hide")
});
$( "#addChildNew5" ).click(function() {
  console.log("New Child 5");
  $( "#childAdditionNew5" ).toggle();
 $("childAdditionNew6").removeClass("hide")
});
$( "#addChildNew6" ).click(function() {
  console.log("New Child 6");
  $( "#childAdditionNew6" ).toggle();
 $("childAdditionNew7").removeClass("hide")
});
$( "#addChildNew7" ).click(function() {
  console.log("New Child 7");
  $( "#childAdditionNew7" ).toggle();
 $("childAdditionNew8").removeClass("hide")
});
$( "#addChildNew8" ).click(function() {
  console.log("New Child 8");
  $( "#childAdditionNew8" ).toggle();
 $("childAdditionNew9").removeClass("hide")
});
$( "#addChildNew9" ).click(function() {
  console.log("New Child 9");
  $( "#childAdditionNew9" ).toggle();
 $("childAdditionNew10").removeClass("hide")
});

$( "#addChildNew10" ).click(function() {
  console.log("New Child 10");
  $( "#childAdditionNew10" ).toggle();
});

$( "#addAnotherInd2" ).click(function() {
  console.log("yo New");
  $( "#indAdditionNew2" ).toggle();
  $("#addIndNew3").removeClass("hide")
});

$( "#addAnotherInd3" ).click(function() {
  console.log("yo New");
  $( "#indAdditionNew3" ).toggle();
 $("#addIndNew4").removeClass("hide")
});
$( "#addAnotherInd4" ).click(function() {
  console.log("yo New");
  $( "#indAdditionNew4" ).toggle();
 // $("#addIndNew5").removeClass("hide")
});

// $( "#sendIt" ).on('click', function() {
//   console.log("Sending Email");
//   $( "#success_message" ).toggle();
//  $("#success_message").removeClass("hide")
// });


/////////////////////////////// ^^ insurance section ///////////////


  $('#apptType input').on('change', function() {
    var apptType = ($('input[name=appt]:checked', '#apptType').val());
    console.log(apptType);
    patient.apptType = apptType || "not answered"
  });
  $('#location input').on('change', function() {
    var location = ($('input[name=loc]:checked', '#location').val());
    console.log(location);
    patient.location = location
  });
  $('#contact input').on('change', function() {
    var contactMethod = ($('input[name=cont]:checked', '#contact').val());
    console.log(contactMethod);
    patient.contactMethod = contactMethod
  });
  $('#dayPref input').on('change', function() {
    var dayPreference = ($('input[name=day]:checked', '#dayPref').val());
    console.log(dayPreference);
    patient.dayPreference = dayPreference
  });
  $('#prefTime input').on('change', function() {
    var timePreference = ($('input[name=time]:checked', '#prefTime').val());
    console.log(timePreference);
    patient.timePreference = timePreference

  });

var $contactForm = $('#contact_form');
  $('#contact_form').on('submit', function(e) {
    // var $submit = $('input:submit', $contactForm);
	  // var defaultSubmitText = $submit.val();
       e.preventDefault();

       var legal_guardian = $('#legal_guardian').val();
       var legal_guardianL = $('#legal_guardianL').val();
       var legal_guardian2 = $('#legal_guardian2').val();
       var legal_guardianL2 = $('#legal_guardianL2').val();
       var email = $('#email').val();
       var address = $('#address').val();
       var city = $('#city').val();
       var state = $('#state').val();
       var zip = $('#zip').val();
       var phone = $('#phone').val();
       var alt_phone = $('#alt_phone').val();

       var child1 = $('#child1').val();
       var child_1_first_name = $('#child_1_first_name').val();
       var child_1_last_name = $('#child_1_last_name').val();
       var child_1_dob = $('#child_1_dob').val();
       var insChoose = $('#insChoose').val();
       var child1private = $('#child1private').val();
       var subscriberFirstName1 = $('#subscriberFirstName1').val();
       var subscriberLastName1 = $('#subscriberLastName1').val();
       var subscriberDOB1 = $("#subscriberDOB1").val();
       var subscriberID1 = $("#subscriberID1").val();
       var employer1 = $("#employer1").val();
       var insurCompany1 = $("#insurCompany1").val();
       var child1medicaid = $("#child1medicaid").val();
       var medicaid_id1 = $("#medicaid_id1").val();

       var child2 = $('#child2').val();
       var child_2_first_name = $('#child_2_first_name').val();
       var child_2_last_name = $('#child_2_last_name').val();
       var child_2_dob = $('#child_2_dob').val();
       var insSame3 = $('#insSame3').val();
       var insChoose3 = $('#insChoose3').val();
       var child2private = $('#child2private').val();
       var subscriberFirstName2 = $('#subscriberFirstName2').val();
       var subscriberLastName2 = $('#subscriberLastName2').val();
       var subscriberDOB2 = $("#subscriberDOB2").val();
       var subscriberID2 = $("#subscriberID2").val();
       var employer2 = $("#employer2").val();
       var insurCompany2 = $("#insurCompany2").val();
       var medicaid_id2 = $("#medicaid_id2").val();

       var child3 = $('#child3').val();
       var child_3_first_name = $('#child_3_first_name').val();
       var child_3_last_name = $('#child_3_last_name').val();
       var child_3_dob = $('#child_3_dob').val();
       var insSame4 = $('#insSame4').val();
       var insChoose4 = $('#insChoose4').val();
       var child3private = $('#child3private').val();
       var subscriberFirstName3 = $('#subscriberFirstName3').val();
       var subscriberLastName3 = $('#subscriberLastName3').val();
       var subscriberDOB3 = $("#subscriberDOB3").val();
       var subscriberID3 = $("#subscriberID3").val();
       var employer3 = $("#employer3").val();
       var insurCompany3 = $("#insurCompany3").val();
       var medicaid_id3 = $("#medicaid_id3").val();

       var child4 = $('#child4').val();
       var child_4_first_name = $('#child_4_first_name').val();
       var child_4_last_name = $('#child_4_last_name').val();
       var child_4_dob = $('#child_4_dob').val();
       var insSame5 = $('#insSame5').val();
       var insChoose5 = $('#insChoose5').val();
       var child4private = $('#child4private').val();
       var subscriberFirstName4 = $('#subscriberFirstName4').val();
       var subscriberLastName4 = $('#subscriberLastName4').val();
       var subscriberDOB4 = $("#subscriberDOB4").val();
       var subscriberID4 = $("#subscriberID4").val();
       var employer4 = $("#employer4").val();
       var insurCompany4 = $("#insurCompany4").val();
       var medicaid_id4 = $("#medicaid_id4").val();

       var rp_1_first = $("#rp_1_first").val();
       var rp_1_last = $("#rp_1_last").val();
       var rp_2_first = $("#rp_2_first").val();
       var rp_2_last = $("#rp_2_last").val();
       var rp_3_first = $("#rp_3_first").val();
       var rp_3_last = $("#rp_3_last").val();
       var rp_4_first = $("#rp_4_first").val();
       var rp_4_last = $("#rp_4_last").val();

       var complete_and_accurate = $("#complete_and_accurate").val();
       var legal_guardian_for_children_listed = $("#legal_guardian_for_children_listed").val();
       var give_permission = $("#give_permission").val();
       var understand = $("#understand").val();
       var understand_office = $("#understand_office").val();
       var responsible = $("#responsible").val();

       var full_name = $("#full_name").val();
       var date_signed = $("#date_signed").val();



       //send to formspree
       $.ajax({
           url:'//formspree.io/emily@obviouslee.com',
           method:'POST',
           data:{
               "Legal Guardian First Name":legal_guardian,
               "Legal Guardian Last Name":legal_guardianL,
               "Legal Guardian 2 First Name" :legal_guardian2,
               "Legal Guardian 2 Last Name" :legal_guardianL2,
               "Email" :email,
               "Address" :address,
               "City" :city,
               "State" :state,
               "Zip Code" :zip,
               "Phone" :phone,
               "Alt. Phone" :alt_phone,
               "-CHILD 1 INFORMATION-" :child1,
               "First Name" :child_1_first_name,
               "Last Name" :child_1_last_name,
               "D.O.B." :child_1_dob,
               "INSURANCE CHOICE" :insChoose,
               "Private Insurance Information" :child1private,
               "-Subscriber First Name" :subscriberFirstName1,
               "-Subscriber Last Name" :subscriberLastName1,
               "-D.O.B" :subscriberDOB1,
               "-ID Number" :subscriberID1,
               "-Employer"  :employer1,
               "-Company" :insurCompany1,
               "Medicaid ID Number" :medicaid_id1,
               "-CHILD 2 INFORMATION-" :child2,
               "#2 First Name" :child_2_first_name,
               "#2 Last Name" :child_2_last_name,
               "#2 D.O.B." :child_2_dob,
               "Same insurance as child above?" :insSame3,
               "#2 INSURANCE CHOICE" :insChoose3,
               "#2 Private Insurance Information" :child2private,
               "-#2 Subscriber First Name" :subscriberFirstName2,
               "-#2 Subscriber Last Name" :subscriberLastName2,
               "-#2 D.O.B" :subscriberDOB2,
               "-#2 ID Number" :subscriberID2,
               "-#2 Employer"  :employer2,
               "-#2 Company" :insurCompany2,
               "#2 Medicaid ID Number" :medicaid_id2,
               "-CHILD 3 INFORMATION-" :child3,
               "#3 First Name" :child_3_first_name,
               "#3 Last Name" :child_3_last_name,
               "#3 D.O.B." :child_3_dob,
               "#3 Same insurance as child above?" :insSame3,
               "#3 INSURANCE CHOICE" :insChoose3,
               "#3 Private Insurance Information" :child3private,
               "-#3 Subscriber First Name" :subscriberFirstName3,
               "-#3 Subscriber Last Name" :subscriberLastName3,
               "-#3 D.O.B" :subscriberDOB3,
               "-#3 ID Number" :subscriberID3,
               "-#3Employer"  :employer3,
               "-#3 Company" :insurCompany3,
               "#3 Medicaid ID Number" :medicaid_id3,
               "-CHILD 4 INFORMATION-" :child4,
               "#4 First Name" :child_4_first_name,
               "#4 Last Name" :child_4_last_name,
               "#4 D.O.B." :child_4_dob,
               "#4 Same insurance as child above?" :insSame4,
               "#4 INSURANCE CHOICE" :insChoose4,
               "#4 Private Insurance Information" :child4private,
               "-#4 Subscriber First Name" :subscriberFirstName4,
               "-#4 Subscriber Last Name" :subscriberLastName4,
               "-#4 D.O.B" :subscriberDOB4,
               "-#4 ID Number" :subscriberID4,
               "-#4 Employer"  :employer4,
               "-#4 Company" :insurCompany4,
               "#4 Medicaid ID Number" :medicaid_id4,
               "Responsible Person First Name" :rp_1_first,
               "Responsible Person Last Name" :rp_1_last,
               "Responsible Person 2 First Name" :rp_2_first,
               "Responsible Person 2 Last Name" :rp_2_last,
               "Responsible Person 3 First Name" :rp_3_first,
               "Responsible Person 3 Last Name" :rp_3_last,
               "Responsible Person 4 First Name" :rp_4_first,
               "Responsible Person 4 Last Name" :rp_4_last,

                "Information complete and accurate" :complete_and_accurate,
                "Legal guardian for the children listed above" :legal_guardian_for_children_listed,
                "Give permission to take photos" :give_permission,
                "Understand the Privacy Act" :understand,
                "Understand the Office Policies" :understand_office,
                "Responsible for uncovered fees" :responsible,

                "Full Name" :full_name,
                "Date Signed" :date_signed,



               _subject:'Insurance Form Submission',
           },
           dataType:"json",

		// beforeSend: function() {
		// 	//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		// 	$submit.attr('disabled', true).val('Sending message…');
		// },
		success: function(data) {
			//$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			$('#success_message').show();
      // console.log("Message Sent!");
			setTimeout(function() {
				//$('.alert--success').remove();
			window.location.href = "http://www.coastalkidsdental.com";
			}, 5000);
		},
		// error: function(err) {
		// 	//$contactForm.find('.alert--loading').hide();
		// 	//$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		// 	$submit.val('Ops, there was an error.');
		// 	setTimeout(function() {
		// 		//$('.alert--error').remove();
		// 		$submit.attr('disabled', false).val(defaultSubmitText);
		// 	}, 5000);
		// }

          //  success:function(data) {
          //      console.log('success');
          //      $('#success_message').show();
          //      window.location.href = "http://www.coastalkidsdental.com";
          //  }

       });
     });
  });
// the end
