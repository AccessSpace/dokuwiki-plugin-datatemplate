/* DOKUWIKI:include jquery.tools.min.js */

jQuery(document).ready(function(){
  jQuery(".day").tooltip({
    relative:true,
    predelay:100,
    //offset: [10,0],
    // use the "slide" effect
    effect: 'slide'
  }).dynamic();
  
  // TODO : get other classes
  jQuery(".day").one("onBeforeShow", function(event) {
    var sID = jQuery(this).next().find('.cal-ppecdg-btn').prop('id');
    var dg = new PAYPAL.apps.DGFlow({
      trigger: sID,
      expType: 'instant'
    });
  });
  
});
