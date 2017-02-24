$(document).ready(function(){


  function findNextChild (currentDiv) {
    var currentIdNum = parseInt(currentDiv['id'].substr(currentDiv['id'].length - 1))
    var nextIdNumber = currentIdNum + 1
    var newString = "#insuranceChild" + nextIdNumber
    $(newString).show()
  }

  function findNextInd (currentDiv) {
    var currentIdNum = parseInt(currentDiv['id'].substr(currentDiv['id'].length - 1))
    var nextIdNumber = currentIdNum + 1
    var newString = "#responsibleInd" + nextIdNumber
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

  $( ".addInd" ).click(function() {
    var currentDiv = this
    findNextInd(currentDiv)
  });

  $('.insuranceDropDown').change(function(){
    var currentDiv = this
    showOrHideOptions(currentDiv)
  });
});
