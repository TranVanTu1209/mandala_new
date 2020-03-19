$("#regis_main_slt_em").click(function(){
  $("#regis_form_email").addClass('regis_form_email_show');
  $("#regis_form_phone").removeClass('regis_form_phone_show');
  $("#regis_main_slt_em").addClass('regis_main_slt_active');
  $("#regis_main_slt_ph").removeClass('regis_main_slt_active');
});
$("#regis_main_slt_ph").click(function () {
  $("#regis_form_email").removeClass('regis_form_email_show');
  $("#regis_form_phone").addClass('regis_form_phone_show');
  $("#regis_main_slt_em").removeClass('regis_main_slt_active');
  $("#regis_main_slt_ph").addClass('regis_main_slt_active');
});
