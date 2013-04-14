/* DOKUWIKI:include jquery.tools.min.js */


jQuery(document).ready(function(){
    jQuery(".day").tooltip({
 
   // tweak the position
   //offset: [0,0],
 
   // use the "slide" effect
   effect: 'slide'
 
// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: { direction: 'down', bounce: true } });
});
