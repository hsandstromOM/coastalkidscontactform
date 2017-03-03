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



  // var $input = $("input[name*='req']")
  //   $send = $('#send');
  //
  //   $send.attr('disabled', true);
  //   $input.keyup(function() {
  //   var trigger = false;
  //   $input.each(function() {
  //       if (!$(this).val()) {
  //           trigger = true;
  //       }
  //   });
  //   trigger ? $send.attr('disabled', true) : $send.removeAttr('disabled');
  //   });


    // var $selector = $(":selected"),
    //   $send = $('#send');
    //
    //   $send.attr('disabled', true);
    //   $selector.keyup(function() {
    //   var trigger = false;
    //   $selector.each(function() {
    //       if (!$(this).val()) {
    //           trigger = true;
    //       }
    //   });
    //   trigger ? $send.attr('disabled', true) : $send.removeAttr('disabled');
    //   });
    //
      // var $checkbox = $("input:checked"),
      //   $send = $('#send');
      //
      //   $send.attr('disabled', true);
      //   $checkbox.keyup(function() {
      //   var trigger = false;
      //   $checkbox.each(function() {
      //       if (!$(this).val()) {
      //           trigger = true;
      //       }
      //   });
      //   trigger ? $send.attr('disabled', true) : $send.removeAttr('disabled');
      //   });
     //
    //   $('.checkbox').click(function () {
    //      if($('input[value="I_confirm"]').is(':checked')) //edit the value here to use your own.
    //         {
    //
    //         $('.Submit').show();
    //         }
    //      else {
    //        $('.Submit').hide();
    //      }
    //    });
    //  });
var $contactForm = $('#contact_form');
  $contactForm.submit(function(e) {
    var $submit = $('input:submit', $contactForm);
	  var defaultSubmitText = $submit.val();
       e.preventDefault();

       //send to formspree
       $.ajax({
           url:'//formspree.io/hosea@obviouslee.com',
           method:'POST',
           data: $(this).serialize(),
           dataType:"json",
           beforeSend: function() {
			//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
			//$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			$submit.val('Message sent!');
			setTimeout(function() {
				//$('.alert--success').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
        	window.location.href = "http://www.coastalkidsdental.com";
			}, 5000);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			//$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
},
		// success: function(data) {
		// 	$('#success_message').show();
		// 	setTimeout(function() {
		// 	window.location.href = "http://www.coastalkidsdental.com";
		// 	}, 5000);
		// },

          //  success:function(data) {
          //      console.log('success');
          //      $('#success_message').show();
          //      window.location.href = "http://www.coastalkidsdental.com";
          //  }

       });
     });
  });
// the end
