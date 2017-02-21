$(document).ready(function(){
  var patient = {};
  patient.patientStatus = "Not answered"
  patient.timePreference = "Not answered"
  patient.apptType = "Not answered"
  patient.location = "Not answered"
  patient.contactMethod = "Not answered"
  patient.dayPreference = "Not answered"
  patient.phone = "Not answered"
  patient.comments = "Not answered"
  // patient.subscriberName1 = "N/A"
  // patient.subscriberID1 = "N/A"
  // patient.subscriberDOB1 = "N/A"
  // patient.employer1 = "N/A"
  // patient.insurComp1 = "N/A"
  // patient.DOBcard1 = "N/A"
  // patient.medicaidID1 = "N/A"

///////// new patient and returning patient toggle/////
  var newButton = document.getElementById("newPt");
  var retButton = document.getElementById("retPt");
  $('#patientToggle input').on('change', function() {
    var patientStatus = ($('input[name=rad]:checked', '#patientToggle').val());
    console.log(patientStatus);
    patient.patientStatus = patientStatus;
    if(retButton.checked) {
      console.log("Hide");
      $("#newPtHear").addClass("hide"); ///// how did you hear from us toggle
    }
    if(newButton.checked) {
      $("#newPtHear").removeClass("hide"); ///// how did you hear from us toggle
    }
  });

//////////////////////// insurance section//////////////

  // function getInsurance() {
  //   var insurance = document.getElementById("insurance");
  //   if(insurance.checked) {
  //     // TODO dropbox
  //     $("#insChoose").addClass("show");
  //   console.log("checked");
  //   }
  //   if(insurance.checked != true) {
  //     console.log("nope");
  //     $("#insChoose").removeClass("show");
  //     $("#insForm").addClass("hide");
  //     $("#medicaidForm").addClass("hide");
  //   }
  // }
  //
  // $("#insurance").click(getInsurance);


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
    if($('#insSame3').val() == '1'){
      console.log("1");
      $("#insChoose3").addClass("hide")
    }
    if($('#insSame3').val() == '2'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose3").removeClass("hide")
    }
  });

  $('#insChoose3').change(function() {
    if($('#insChoose3').val() == '1'){
      console.log("1 3");
      $("#payForm4").removeClass("hide");
      $("#insForm4").addClass("hide");
      $("#medicaidForm4").addClass("hide");
    }
    if($('#insChoose3').val() == '2'){
      console.log("2 3");
      $("#payForm4").addClass("hide");
      $("#insForm4").removeClass("hide");
      $("#medicaidForm4").addClass("hide");
    }

    if($('#insChoose3').val() == '3'){
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
    if($('#insSame4').val() == '1'){
      console.log("1");
    }
    if($('#insSame4').val() == '2'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose5").removeClass("hide")
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
    if($('#insSame10').val() == '1'){
      console.log("1");
    }
    if($('#insSame10').val() == '2'){
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
    if($('#insSame11').val() == '1'){
      console.log("1");
    }
    if($('#insSame11').val() == '2'){
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose11").removeClass("hide")
    }
  });

  $('#insChoose11').change(function(){
      if($('#insChoose11').val() == '1'){
        console.log("1 4");
        $("#insForm11").addClass("hide");
        $("#medicaidForm11").addClass("hide");
    }
    if($('#insChoose11').val() == '2'){
      console.log("2 4");
       $("#insForm11").removeClass("hide");
     }

    if($('#insChoose11').val() == '3'){
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
    if($('#insSame12').val() == '1') {
      console.log("1");
    }
    if($('#insSame12').val() == '2') {
      console.log("2");
      // $("#insForm2").removeClass("hide");
      $("#insChoose12").removeClass("hide")
    }
  });

  $('#insChoose12').change(function(){
    if($('#insChoose12').val() == '1'){
      console.log("1 4");
      $("#insForm12").addClass("hide");
      $("#medicaidForm12").addClass("hide");
    }
    if($('#insChoose12').val() == '2'){
      console.log("2 4");
      $("#insForm12").removeClass("hide");
    }
    if($('#insChoose12').val() == '3'){
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
    if($('#insSame13').val() == '1'){
      console.log("1");
  }
  if($('#insSame13').val() == '2'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose13").removeClass("hide")
  }
});

$('#insChoose13').change(function(){
    if($('#insChoose13').val() == '1'){
      console.log("1 4");
      $("#insForm13").addClass("hide");
      $("#medicaidForm13").addClass("hide");
  }
  if($('#insChoose13').val() == '2'){
    console.log("2 4");
     $("#insForm13").removeClass("hide");

}

if($('#insChoose13').val() == '3'){
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
    if($('#insSame14').val() == '1'){
      console.log("1");
  }
  if($('#insSame14').val() == '2'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose14").removeClass("hide")
  }
});

$('#insChoose14').change(function(){
    if($('#insChoose14').val() == '1'){
      console.log("1 4");
      $("#insForm14").addClass("hide");
      $("#medicaidForm14").addClass("hide");
  }
  if($('#insChoose14').val() == '2'){
    console.log("2 4");
     $("#insForm14").removeClass("hide");

}

if($('#insChoose14').val() == '3'){
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
    if($('#insSame15').val() == '1'){
      console.log("1");
  }
  if($('#insSame15').val() == '2'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose15").removeClass("hide")
  }
});

$('#insChoose15').change(function(){
    if($('#insChoose15').val() == '1'){
      console.log("1 4");
      $("#insForm15").addClass("hide");
      $("#medicaidForm15").addClass("hide");
  }
  if($('#insChoose15').val() == '2'){
    console.log("2 4");
     $("#insForm15").removeClass("hide");

}

if($('#insChoose15').val() == '3'){
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
    if($('#insSame16').val() == '1'){
      console.log("1");
  }
  if($('#insSame16').val() == '2'){
    console.log("2");
    // $("#insForm2").removeClass("hide");
    $("#insChoose16").removeClass("hide")
  }
});

$('#insChoose16').change(function(){
    if($('#insChoose16').val() == '1'){
      console.log("1 4");
      $("#insForm16").addClass("hide");
      $("#medicaidForm16").addClass("hide");
  }
  if($('#insChoose16').val() == '2'){
    console.log("2 4");
     $("#insForm16").removeClass("hide");

}

if($('#insChoose16').val() == '3'){
  console.log("4");
  $("#insForm16").addClass("hide");
  $("#medicaidForm16").removeClass("hide");

}

});
////////////////////16






$("#insuranceNew3").click(getInsurance3);
$('#insChoose4').change(function(){
    if($('#insChoose4').val() == '1'){
      console.log("1 4");
      $("#payForm4").removeClass("hide");
      $("#insForm4").addClass("hide");
      $("#medicaidForm4").addClass("hide");
  }
  if($('#insChoose4').val() == '2'){
    console.log("2 4");
     $("#insForm4").removeClass("hide");
     $("#payForm4").addClass("hide");
}

if($('#insChoose4').val() == '3'){
  console.log("4");
  $("#insForm4").addClass("hide");
  $("#medicaidForm4").removeClass("hide");
  $("#payForm4").addClass("hide");

}

});

$('#insChoose5').change(function(){
    if($('#insChoose5').val() == '1'){
      console.log("1 4");
      $("#insForm5").addClass("hide");
      $("#medicaidForm5").addClass("hide");
  }
  if($('#insChoose5').val() == '2'){
    console.log("2 4");
     $("#insForm5").removeClass("hide");

}

if($('#insChoose5').val() == '3'){
  console.log("4");
  $("#insForm5").addClass("hide");
  $("#medicaidForm5").removeClass("hide");

}

});


$('#insChoose10').change(function(){
    if($('#insChoose10').val() == '1'){
      console.log("1 4");
      $("#insForm10").addClass("hide");
      $("#medicaidForm10").addClass("hide");
  }
  if($('#insChoose10').val() == '2'){
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
    if($('#insChoose').val() == '1'){
      console.log("1");
      $("#payForm").removeClass("hide");
        $("#insForm").addClass("hide");
        $("#medicaidForm").addClass("hide");
  }
  if($('#insChoose').val() == '2'){
    console.log("2");
    $("#payForm").addClass("hide");
    $("#insForm").removeClass("hide");
    $("#medicaidForm").addClass("hide");
}
if($('#insChoose').val() == '3'){
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


      //////GABRIEL HERE ///////

  var formP = document.getElementById('contactForm'); // form has to have ID: <form id="formID">
  if(formP) {
    formP.noValidate = true;

  // ///////// new patient form section
    formP.addEventListener('submit', function(event) { // listen for form submitting
      event.preventDefault();

      if (!event.target.checkValidity()) {
                  event.preventDefault(); // dismiss the default functionality
                  // alert('Please fill in the required fields.'); // error message
                  checkIt();
              } else {
                getItDone()
              }
  });
  }

function checkIt() {

  var ref = $('#contact_form').find("[required]");
    $(ref).each(function(){
       if ( $(this).val() == '' )
       {
           alert("Required field should not be blank.");
           $(this).focus();

           return false;
       }
})
}

 function getItDone() {

    var fullNamep = document.getElementById("fullNamep").value
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value
  //  var age = document.getElementById("age").value
  //  var hear = document.getElementById("hear").value
    var comments = document.getElementById("comments").value
    var hearAbout = document.getElementById("hearAbout").value

    // patient.fullName = fullName
    // patient.hearAbout = hearAbout
    // patient.phone = phone
    // patient.email = email
    // patient.age = age
  //  patient.hear = hear
    patient.comments = comments
    // child1/////
    var childName1 = document.getElementById("childName1").value
    var childLast1 = document.getElementById("childLast1").value
    var childDOB1 = document.getElementById("childDOB1").value

    var subscriberName1 = document.getElementById("subscriberName1").value
    var subscriberDOB1 = document.getElementById("subscriberDOB1").value
    var subscriberID1 = document.getElementById("subscriberID1").value
    var employer1 = document.getElementById("employer1").value
    var insurComp1 = document.getElementById("insurComp1").value
    var DOBcard1 = document.getElementById("DOBcard1").value
    var medicaidID1 = document.getElementById("medicaidID1").value
  // child 1 /////
    var recaptcha = document.getElementById("g-recaptcha-response").value

    patient.fullName = fullNamep
    patient.hearAbout = hearAbout
    patient.phone = phone
    patient.email = email
    patient.comments = comments


    //child 1
    patient.childName1 = childName1
    patient.childLast1 = childLast1
    patient.childDOB1 = childDOB1
    patient.subscriberName1 = subscriberName1
    patient.subscriberID1 = subscriberID1
    patient.subscriberDOB1 = subscriberDOB1
    patient.employer1 = employer1
    patient.insurComp1 = insurComp1
    patient.DOBcard1 = DOBcard1
    patient.medicaidID1 = medicaidID1

    //child 2

    var childName2 = document.getElementById("childName2").value
    var childLast2 = document.getElementById("childLast2").value
    var childDOB2 = document.getElementById("childDOB2").value

    var subscriberName2 = document.getElementById("subscriberName2").value
    var subscriberDOB2 = document.getElementById("subscriberDOB2").value
    var subscriberID2 = document.getElementById("subscriberID2").value
    var employer2 = document.getElementById("employer2").value
    var insurComp2 = document.getElementById("insurComp2").value
    var DOBcard2 = document.getElementById("DOBcard2").value
    var medicaidID2 = document.getElementById("medicaidID2").value

    patient.childName2 = childName2
    patient.childLast2 = childLast2
    patient.childDOB2 = childDOB2
    patient.subscriberName2 = subscriberName2
    patient.subscriberID2 = subscriberID2
    patient.subscriberDOB2 = subscriberDOB2
    patient.employer2 = employer2
    patient.insurComp2 = insurComp2
    patient.DOBcard2 = DOBcard2
    patient.medicaidID2 = medicaidID2

///child 3////

    var childName3 = document.getElementById("childName3").value
    var childLast3 = document.getElementById("childLast3").value
    var childDOB3 = document.getElementById("childDOB3").value

    var subscriberName3 = document.getElementById("subscriberName3").value
    var subscriberDOB3 = document.getElementById("subscriberDOB3").value
    var subscriberID3 = document.getElementById("subscriberID3").value
    var employer3 = document.getElementById("employer3").value
    var insurComp3 = document.getElementById("insurComp3").value
    var DOBcard3 = document.getElementById("DOBcard3").value
    var medicaidID3 = document.getElementById("medicaidID3").value

    patient.childName3 = childName3
    patient.childLast3 = childLast3
    patient.childDOB3 = childDOB3
    patient.subscriberName3 = subscriberName3
    patient.subscriberID3 = subscriberID3
    patient.subscriberDOB3 = subscriberDOB3
    patient.employer3 = employer3
    patient.insurComp3 = insurComp3
    patient.DOBcard3 = DOBcard3
    patient.medicaidID3 = medicaidID3

//////////////////// 4////////

var childName4 = document.getElementById("childName4").value
var childLast4 = document.getElementById("childLast4").value
var childDOB4 = document.getElementById("childDOB4").value

var subscriberName4 = document.getElementById("subscriberName4").value
var subscriberDOB4 = document.getElementById("subscriberDOB4").value
var subscriberID4 = document.getElementById("subscriberID4").value
var employer4 = document.getElementById("employer4").value
var insurComp4 = document.getElementById("insurComp4").value
var DOBcard4 = document.getElementById("DOBcard4").value
var medicaidID4 = document.getElementById("medicaidID4").value

patient.childName4 = childName4
patient.childLast4 = childLast4
patient.childDOB4 = childDOB4
patient.subscriberName4 = subscriberName4
patient.subscriberID4 = subscriberID4
patient.subscriberDOB4 = subscriberDOB4
patient.employer4 = employer4
patient.insurComp4 = insurComp4
patient.DOBcard4 = DOBcard4
patient.medicaidID4 = medicaidID4
////////////////

/////////////////// 5////////

var childName5 = document.getElementById("childName5").value
var childLast5 = document.getElementById("childLast5").value
var childDOB5 = document.getElementById("childDOB5").value

var subscriberName5 = document.getElementById("subscriberName5").value
var subscriberDOB5 = document.getElementById("subscriberDOB5").value
var subscriberID5 = document.getElementById("subscriberID5").value
var employer5 = document.getElementById("employer5").value
var insurComp5 = document.getElementById("insurComp5").value
var DOBcard5 = document.getElementById("DOBcard5").value
var medicaidID5 = document.getElementById("medicaidID5").value

patient.childName5 = childName5
patient.childLast5 = childLast5
patient.childDOB5 = childDOB5
patient.subscriberName5 = subscriberName5
patient.subscriberID5 = subscriberID5
patient.subscriberDOB5 = subscriberDOB5
patient.employer5 = employer5
patient.insurComp5 = insurComp5
patient.DOBcard5 = DOBcard5
patient.medicaidID5 = medicaidID5
/////////////////
////// 6////////
var childName6 = document.getElementById("childName6").value
var childLast6 = document.getElementById("childLast6").value
var childDOB6 = document.getElementById("childDOB6").value

var subscriberName6 = document.getElementById("subscriberName6").value
var subscriberDOB6 = document.getElementById("subscriberDOB6").value
var subscriberID6 = document.getElementById("subscriberID6").value
var employer6 = document.getElementById("employer6").value
var insurComp6 = document.getElementById("insurComp6").value
var DOBcard6 = document.getElementById("DOBcard6").value
var medicaidID6 = document.getElementById("medicaidID6").value

patient.childName6 = childName6
patient.childLast6 = childLast6
patient.childDOB6 = childDOB6
patient.subscriberName6 = subscriberName6
patient.subscriberID6 = subscriberID6
patient.subscriberDOB6 = subscriberDOB6
patient.employer6 = employer6
patient.insurComp6 = insurComp6
patient.DOBcard6 = DOBcard6
patient.medicaidID6 = medicaidID6
///////////7////////////
var childName7 = document.getElementById("childName7").value
var childLast7 = document.getElementById("childLast7").value
var childDOB7 = document.getElementById("childDOB7").value

var subscriberName7 = document.getElementById("subscriberName7").value
var subscriberDOB7 = document.getElementById("subscriberDOB7").value
var subscriberID7 = document.getElementById("subscriberID7").value
var employer7 = document.getElementById("employer7").value
var insurComp7 = document.getElementById("insurComp7").value
var DOBcard7 = document.getElementById("DOBcard7").value
var medicaidID7 = document.getElementById("medicaidID7").value

patient.childName7 = childName7
patient.childLast7 = childLast7
patient.childDOB7 = childDOB7
patient.subscriberName7 = subscriberName7
patient.subscriberID7 = subscriberID7
patient.subscriberDOB7 = subscriberDOB7
patient.employer7 = employer7
patient.insurComp7 = insurComp7
patient.DOBcard7 = DOBcard7
patient.medicaidID7 = medicaidID7
//////8////////////
var childName8 = document.getElementById("childName8").value
var childLast8 = document.getElementById("childLast8").value
var childDOB8 = document.getElementById("childDOB8").value

var subscriberName8 = document.getElementById("subscriberName8").value
var subscriberDOB8 = document.getElementById("subscriberDOB8").value
var subscriberID8 = document.getElementById("subscriberID8").value
var employer8 = document.getElementById("employer8").value
var insurComp8 = document.getElementById("insurComp8").value
var DOBcard8 = document.getElementById("DOBcard8").value
var medicaidID8 = document.getElementById("medicaidID8").value

patient.childName8 = childName8
patient.childLast8 = childLast8
patient.childDOB8 = childDOB8
patient.subscriberName8 = subscriberName8
patient.subscriberID8 = subscriberID8
patient.subscriberDOB8 = subscriberDOB8
patient.employer8 = employer8
patient.insurComp8 = insurComp8
patient.DOBcard8 = DOBcard8
patient.medicaidID8 = medicaidID8
///////8/////////////////

//////9////////////
var childName9 = document.getElementById("childName9").value
var childLast9 = document.getElementById("childLast9").value
var childDOB9 = document.getElementById("childDOB9").value

var subscriberName9 = document.getElementById("subscriberName9").value
var subscriberDOB9 = document.getElementById("subscriberDOB9").value
var subscriberID9 = document.getElementById("subscriberID9").value
var employer9 = document.getElementById("employer9").value
var insurComp9 = document.getElementById("insurComp9").value
var DOBcard9 = document.getElementById("DOBcard9").value
var medicaidID9 = document.getElementById("medicaidID9").value

patient.childName9 = childName9
patient.childLast9 = childLast9
patient.childDOB9 = childDOB9
patient.subscriberName9 = subscriberName9
patient.subscriberID9 = subscriberID9
patient.subscriberDOB9 = subscriberDOB9
patient.employer9 = employer9
patient.insurComp9 = insurComp9
patient.DOBcard9 = DOBcard9
patient.medicaidID9 = medicaidID9
///////9/////////////////

//////8////////////
var childName10 = document.getElementById("childName10").value
var childLast10 = document.getElementById("childLast10").value
var childDOB10 = document.getElementById("childDOB10").value

var subscriberName10 = document.getElementById("subscriberName10").value
var subscriberDOB10 = document.getElementById("subscriberDOB10").value
var subscriberID10 = document.getElementById("subscriberID10").value
var employer10 = document.getElementById("employer10").value
var insurComp10 = document.getElementById("insurComp10").value
var DOBcard10 = document.getElementById("DOBcard10").value
var medicaidID10 = document.getElementById("medicaidID10").value

patient.childName10 = childName10
patient.childLast10 = childLast10
patient.childDOB10 = childDOB10
patient.subscriberName10 = subscriberName10
patient.subscriberID10 = subscriberID10
patient.subscriberDOB10 = subscriberDOB10
patient.employer10 = employer10
patient.insurComp10 = insurComp10
patient.DOBcard10 = DOBcard10
patient.medicaidID10 = medicaidID10
///////8/////////////////

    patient.recaptcha = recaptcha


    console.log(patient);
  //  console.log(g-recaptcha-response);
  //  $("#myBtn").click(function(){

    //    });

//// send to email/////
  $.post("/captcha", patient).then(function(data){
    console.log(patient);
    console.log(data);

    var json = JSON.parse(data);
    console.log("this is the json parse data",data);

    // if(json.registeredSuccessfully) {
      console.log("success");
          $.get("/appointment", patient).then(function(data){
                 console.log("this is the /appointment data", data);
                 if ( data === "sent") {
                   console.log('patientInfo sent');
                     $("#myModal").modal();
                     /// send confirmation///
                     $.get("/confirm", patient).then(function(data){
                           console.log("sending /confirm", data);
                           if ( data === "sent") {
                             console.log('confirmation sent');
                           //    $("#myModal2").modal();
                             }
                           });
        }
});
// }

    });

//  }, false);
};
//}); // end patientform submit

/////// end of new patient section

  var insurance = {};

  $('#inscontact input').on('change', function() {
    var contactMethod = ($('input[name=cont]:checked', '#inscontact').val());
    console.log(contactMethod);
    insurance.contactMethod = contactMethod
  });
  function checkRequiredInsuranceForm() {
    var ref = $('#standAloneForm').find("[required]");
    $(ref).each(function(){
       if ($(this).val() == '')
       {
         alert("Required field should not be blank.");
         $(this).focus();
         return false;
       }
    })
  }

  function postInsuranceForm () {
    var InsFullName = document.getElementById("InsName").value
    var InsPhone = document.getElementById("InsPhone").value
    var InsEmail = document.getElementById("InsEmail").value
    var InsComments = document.getElementById("insComments").value

    insurance.insFullName = InsFullName
    insurance.insPhone = InsPhone
    insurance.insEmail = InsEmail
    insurance.insComments = InsComments

    var insChildName0 = document.getElementById("insChildName0").value
    var insChildLast0 = document.getElementById("insChildLast0").value
    var insChildDOB0 = document.getElementById("insChildDOB0").value
    var insSubscriberName0 = document.getElementById("insSubscriberName0").value
    var insSubscriberDOB0 = document.getElementById("insSubscriberDOB0").value
    var insSubscriberID0 = document.getElementById("insSubscriberID0").value
    var insEmployer0 = document.getElementById("insEmployer0").value
    var insInsurComp0 = document.getElementById("insInsurComp0").value
    var insDOBcard0 = document.getElementById("insDOBcard0").value
    var insMedicaidID0 = document.getElementById("insMedicaidID0").value

    insurance.insChildName0 = insChildName0
    insurance.insChildLast0 = insChildLast0
    insurance.insChildDOB0 = insChildDOB0
    insurance.insSubscriberName0 = insSubscriberName0
    insurance.insSubscriberDOB0 = insSubscriberDOB0
    insurance.insSubscriberID0 = insSubscriberID0
    insurance.insEmployer0 = insEmployer0
    insurance.insInsurComp0 = insInsurComp0
    insurance.insDOBcard0 = insDOBcard0
    insurance.insMedicaidID0 = insMedicaidID0

    var insChildName1 = document.getElementById("insChildName1").value
    var insChildLast1 = document.getElementById("insChildLast1").value
    var insChildDOB1 = document.getElementById("insChildDOB1").value
    var insSubscriberName1 = document.getElementById("insSubscriberName1").value
    var insSubscriberDOB1 = document.getElementById("insSubscriberDOB1").value
    var insSubscriberID1 = document.getElementById("insSubscriberID1").value
    var insEmployer1 = document.getElementById("insEmployer1").value
    var insInsurComp1 = document.getElementById("insInsurComp1").value
    var insDOBcard1 = document.getElementById("insDOBcard1").value
    var insMedicaidID1 = document.getElementById("insMedicaidID1").value

    insurance.insChildName1 = insChildName1
    insurance.insChildLast1 = insChildLast1
    insurance.insChildDOB1 = insChildDOB1
    insurance.insSubscriberName1 = insSubscriberName1
    insurance.insSubscriberDOB1 = insSubscriberDOB1
    insurance.insSubscriberID1 = insSubscriberID1
    insurance.insEmployer1 = insEmployer1
    insurance.insInsurComp1 = insInsurComp1
    insurance.insDOBcard1 = insDOBcard1
    insurance.insMedicaidID1 = insMedicaidID1

    var insChildName2 = document.getElementById("insChildName2").value
    var insChildLast2 = document.getElementById("insChildLast2").value
    var insChildDOB2 = document.getElementById("insChildDOB2").value
    var insSubscriberName2 = document.getElementById("insSubscriberName2").value
    var insSubscriberDOB2 = document.getElementById("insSubscriberDOB2").value
    var insSubscriberID2 = document.getElementById("insSubscriberID2").value
    var insEmployer2 = document.getElementById("insEmployer2").value
    var insInsurComp2 = document.getElementById("insInsurComp2").value
    var insDOBcard2 = document.getElementById("insDOBcard2").value
    var insMedicaidID2 = document.getElementById("insMedicaidID2").value

    insurance.insChildName2 = insChildName2
    insurance.insChildLast2 = insChildLast2
    insurance.insChildDOB2 = insChildDOB2
    insurance.insSubscriberName2 = insSubscriberName2
    insurance.insSubscriberDOB2 = insSubscriberDOB2
    insurance.insSubscriberID2 = insSubscriberID2
    insurance.insEmployer2 = insEmployer2
    insurance.insInsurComp2 = insInsurComp2
    insurance.insDOBcard2 = insDOBcard2
    insurance.insMedicaidID2 = insMedicaidID2

    var insChildName3 = document.getElementById("insChildName3").value
    var insChildLast3 = document.getElementById("insChildLast3").value
    var insChildDOB3 = document.getElementById("insChildDOB3").value
    var insSubscriberName3 = document.getElementById("insSubscriberName3").value
    var insSubscriberDOB3 = document.getElementById("insSubscriberDOB3").value
    var insSubscriberID3 = document.getElementById("insSubscriberID3").value
    var insEmployer3 = document.getElementById("insEmployer3").value
    var insInsurComp3 = document.getElementById("insInsurComp3").value
    var insDOBcard3 = document.getElementById("insDOBcard3").value
    var insMedicaidID3 = document.getElementById("insMedicaidID3").value

    insurance.insChildName3 = insChildName3
    insurance.insChildLast3 = insChildLast3
    insurance.insChildDOB3 = insChildDOB3
    insurance.insSubscriberName3 = insSubscriberName3
    insurance.insSubscriberDOB3 = insSubscriberDOB3
    insurance.insSubscriberID3 = insSubscriberID3
    insurance.insEmployer3 = insEmployer3
    insurance.insInsurComp3 = insInsurComp3
    insurance.insDOBcard3 = insDOBcard3
    insurance.insMedicaidID3 = insMedicaidID3

    var insChildName4 = document.getElementById("insChildName4").value
    var insChildLast4 = document.getElementById("insChildLast4").value
    var insChildDOB4 = document.getElementById("insChildDOB4").value
    var insSubscriberName4 = document.getElementById("insSubscriberName4").value
    var insSubscriberDOB4 = document.getElementById("insSubscriberDOB4").value
    var insSubscriberID4 = document.getElementById("insSubscriberID4").value
    var insEmployer4 = document.getElementById("insEmployer4").value
    var insInsurComp4 = document.getElementById("insInsurComp4").value
    var insDOBcard4 = document.getElementById("insDOBcard4").value
    var insMedicaidID4 = document.getElementById("insMedicaidID4").value

    insurance.insChildName4 = insChildName4
    insurance.insChildLast4 = insChildLast4
    insurance.insChildDOB4 = insChildDOB4
    insurance.insSubscriberName4 = insSubscriberName4
    insurance.insSubscriberDOB4 = insSubscriberDOB4
    insurance.insSubscriberID4 = insSubscriberID4
    insurance.insEmployer4 = insEmployer4
    insurance.insInsurComp4 = insInsurComp4
    insurance.insDOBcard4 = insDOBcard4
    insurance.insMedicaidID4 = insMedicaidID4

    var insChildName5 = document.getElementById("insChildName5").value
    var insChildLast5 = document.getElementById("insChildLast5").value
    var insChildDOB5 = document.getElementById("insChildDOB5").value
    var insSubscriberName5 = document.getElementById("insSubscriberName5").value
    var insSubscriberDOB5 = document.getElementById("insSubscriberDOB5").value
    var insSubscriberID5 = document.getElementById("insSubscriberID5").value
    var insEmployer5 = document.getElementById("insEmployer5").value
    var insInsurComp5 = document.getElementById("insInsurComp5").value
    var insDOBcard5 = document.getElementById("insDOBcard5").value
    var insMedicaidID5 = document.getElementById("insMedicaidID5").value

    insurance.insChildName5 = insChildName5
    insurance.insChildLast5 = insChildLast5
    insurance.insChildDOB5 = insChildDOB5
    insurance.insSubscriberName5 = insSubscriberName5
    insurance.insSubscriberDOB5 = insSubscriberDOB5
    insurance.insSubscriberID5 = insSubscriberID5
    insurance.insEmployer5 = insEmployer5
    insurance.insInsurComp5 = insInsurComp5
    insurance.insDOBcard5 = insDOBcard5
    insurance.insMedicaidID5 = insMedicaidID5

    var insChildName6 = document.getElementById("insChildName6").value
    var insChildLast6 = document.getElementById("insChildLast6").value
    var insChildDOB6 = document.getElementById("insChildDOB6").value
    var insSubscriberName6 = document.getElementById("insSubscriberName6").value
    var insSubscriberDOB6 = document.getElementById("insSubscriberDOB6").value
    var insSubscriberID6 = document.getElementById("insSubscriberID6").value
    var insEmployer6 = document.getElementById("insEmployer6").value
    var insInsurComp6 = document.getElementById("insInsurComp6").value
    var insDOBcard6 = document.getElementById("insDOBcard6").value
    var insMedicaidID6 = document.getElementById("insMedicaidID6").value

    insurance.insChildName6 = insChildName6
    insurance.insChildLast6 = insChildLast6
    insurance.insChildDOB6 = insChildDOB6
    insurance.insSubscriberName6 = insSubscriberName6
    insurance.insSubscriberDOB6 = insSubscriberDOB6
    insurance.insSubscriberID6 = insSubscriberID6
    insurance.insEmployer6 = insEmployer6
    insurance.insInsurComp6 = insInsurComp6
    insurance.insDOBcard6 = insDOBcard6
    insurance.insMedicaidID6 = insMedicaidID6

    var insChildName7 = document.getElementById("insChildName7").value
    var insChildLast7 = document.getElementById("insChildLast7").value
    var insChildDOB7 = document.getElementById("insChildDOB7").value
    var insSubscriberName7 = document.getElementById("insSubscriberName7").value
    var insSubscriberDOB7 = document.getElementById("insSubscriberDOB7").value
    var insSubscriberID7 = document.getElementById("insSubscriberID7").value
    var insEmployer7 = document.getElementById("insEmployer7").value
    var insInsurComp7 = document.getElementById("insInsurComp7").value
    var insDOBcard7 = document.getElementById("insDOBcard7").value
    var insMedicaidID7 = document.getElementById("insMedicaidID7").value

    insurance.insChildName7 = insChildName7
    insurance.insChildLast7 = insChildLast7
    insurance.insChildDOB7 = insChildDOB7
    insurance.insSubscriberName7 = insSubscriberName7
    insurance.insSubscriberDOB7 = insSubscriberDOB7
    insurance.insSubscriberID7 = insSubscriberID7
    insurance.insEmployer7 = insEmployer7
    insurance.insInsurComp7 = insInsurComp7
    insurance.insDOBcard7 = insDOBcard7
    insurance.insMedicaidID7 = insMedicaidID7

    var insChildName8 = document.getElementById("insChildName8").value
    var insChildLast8 = document.getElementById("insChildLast8").value
    var insChildDOB8 = document.getElementById("insChildDOB8").value
    var insSubscriberName8 = document.getElementById("insSubscriberName8").value
    var insSubscriberDOB8 = document.getElementById("insSubscriberDOB8").value
    var insSubscriberID8 = document.getElementById("insSubscriberID8").value
    var insEmployer8 = document.getElementById("insEmployer8").value
    var insInsurComp8 = document.getElementById("insInsurComp8").value
    var insDOBcard8 = document.getElementById("insDOBcard8").value
    var insMedicaidID8 = document.getElementById("insMedicaidID8").value

    insurance.insChildName8 = insChildName8
    insurance.insChildLast8 = insChildLast8
    insurance.insChildDOB8 = insChildDOB8
    insurance.insSubscriberName8 = insSubscriberName8
    insurance.insSubscriberDOB8 = insSubscriberDOB8
    insurance.insSubscriberID8 = insSubscriberID8
    insurance.insEmployer8 = insEmployer8
    insurance.insInsurComp8 = insInsurComp8
    insurance.insDOBcard8 = insDOBcard8
    insurance.insMedicaidID8 = insMedicaidID8

    var insChildName9 = document.getElementById("insChildName9").value
    var insChildLast9 = document.getElementById("insChildLast9").value
    var insChildDOB9 = document.getElementById("insChildDOB9").value
    var insSubscriberName9 = document.getElementById("insSubscriberName9").value
    var insSubscriberDOB9 = document.getElementById("insSubscriberDOB9").value
    var insSubscriberID9 = document.getElementById("insSubscriberID9").value
    var insEmployer9 = document.getElementById("insEmployer9").value
    var insInsurComp9 = document.getElementById("insInsurComp9").value
    var insDOBcard9 = document.getElementById("insDOBcard9").value
    var insMedicaidID9 = document.getElementById("insMedicaidID9").value

    insurance.insChildName9 = insChildName9
    insurance.insChildLast9 = insChildLast9
    insurance.insChildDOB9 = insChildDOB9
    insurance.insSubscriberName9 = insSubscriberName9
    insurance.insSubscriberDOB9 = insSubscriberDOB9
    insurance.insSubscriberID9 = insSubscriberID9
    insurance.insEmployer9 = insEmployer9
    insurance.insInsurComp9 = insInsurComp9
    insurance.insDOBcard9 = insDOBcard9
    insurance.insMedicaidID9 = insMedicaidID9

    var recaptcha = document.getElementById("g-recaptcha-response").value
    insurance.recaptcha = recaptcha

    $.post("/captcha", insurance).then(function(data) {
      var json = JSON.parse(data);
      console.log('this is the json parse data:', data)
      $.get("/ins", insurance).then(function(data){
        console.log('this is the insurance data', data);
        if ( data === "sent") {
          console.log('patientInfo sent');
          $("#myModal2").modal();
          /// send confirmation///
          $.get("/confirm", patient).then(function(data) {
            console.log("sending /confirm", data);
            if ( data === "sent") {
              console.log('confirmation sent');
            } else {
              console.log('ERROR: confirmation failed')
            }
          });
        }
      });
    });
  }
  var insuranceForm = document.getElementById('standAloneForm');
  if(insuranceForm) {
    insuranceForm.noValidate = true;
    insuranceForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!event.target.checkValidity()){
        event.preventDefault();
        checkRequiredInsuranceForm();
      } else {
        postInsuranceForm()
      }
    });
  }
});
// the end
