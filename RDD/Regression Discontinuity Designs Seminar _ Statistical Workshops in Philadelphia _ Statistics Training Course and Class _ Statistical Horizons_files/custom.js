jQuery(document).ready(function($) {

	var link = "/wp-content/themes/statisticalhorizons/modal-form.php";
	$('.downloadLink').attr("href", "#downloadForm")
	$('.downloadLink a').attr("download", "true")
	$('.downloadLink a').attr("data-download", $('.downloadLink a').attr("href"));
	$('.downloadLink a').attr("href", "");
	$('.downloadLink a').attr("target", "_blank");

	$('.page-child .sidebar a.button').click(function(){
		fbq('track', 'Register');
	})

    $(".downloadLink").colorbox({
 
     fixed: true, 
     closeButton: true, 
     inline: true, 
     width: "900px", 
     height: "auto", 
     maxWidth: "100%",
      maxHeight: "100%" });




	jQuery(document).bind('gform_confirmation_loaded', function(event, formId){
		
		

			$('.downloadLink').removeClass('cboxElement');
			$.colorbox.close()
			$('.downloadLink a').attr("href", $('.downloadLink a').attr("data-download"));
			$('.downloadLink a')[0].click()
		


		})

})
