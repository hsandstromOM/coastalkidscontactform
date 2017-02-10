$(document).ready(function() {
  function findNextChild (currentDiv) {
    var currentIdNum = parseInt(currentDiv['id'].substr(currentDiv['id'].length - 1))
    var nextIdNumber = currentIdNum + 1
    var newString = "#insuranceChild" + nextIdNumber
    $(newString).show()
  }


  function showOrHideOptions (currentDiv) {
    var currentId = currentDiv['id']
    var currentIdNum = parseInt(currentDiv['id'].substr(currentDiv['id'].length - 1))
    var currentIdString = '#' + currentId
    var insuranceType = $(currentIdString).val()
    var currentPrivateString = '#privateInsuranceOptions' + currentIdNum
    var currentMedicaidString = '#medicaidInsuranceOptions' + currentIdNum
    if(insuranceType == 'selfPay'){
      $(currentPrivateString).hide()
      $(currentMedicaidString).hide()
    } else if (insuranceType == 'private') {
      $(currentPrivateString).show()
      $(currentMedicaidString).hide()
    } else if (insuranceType == 'medicaid') {
      $(currentPrivateString).hide()
      $(currentMedicaidString).show()
    }
  }

  $( ".addChild" ).click(function() {
    var currentDiv = this
    findNextChild(currentDiv)
  });

  $('.insuranceDropDown').select(function(){
    var currentDiv = this
    showOrHideOptions(currentDiv)
  });
});
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please supply your last name'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          address: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please supply your street address'
                  }
              }
          },
          city: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your city'
                  }
              }
          },
          state: {
              validators: {
                  notEmpty: {
                      message: 'Please select your state'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
          comment: {
              validators: {
                    stringLength: {
                      min: 10,
                      max: 200,
                      message:'Please enter at least 10 characters and no more than 200'
                  },
                  notEmpty: {
                      message: 'Please supply a description of your project'
                  }
                  }
              }
          }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

          // Use Ajax to submit form data
          $.post($form.attr('action'), $form.serialize(), function(result) {
              console.log(result);
          }, 'json');
      });
});
