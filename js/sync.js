  // not needed for select
  // Drupal.sync_selected = new Array();
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      var slave = settings.sync_taxo_fields.slave.replace(/_/g,'-');
      var master = settings.sync_taxo_fields.master.replace(/_/g,'-');
//      if(jQuery('#field-ajn-add-more-wrapper .shs-select').val() == null) {
//        console.log('reseting');
//        jQuery('#edit-' + slave + ' select').val('_none');
//        jQuery('#edit-' + slave + ' select').change();
//      }
      jQuery('#edit-' + slave).hide(); 
/*  Code to work with Tree reference
      jQuery('#edit-' + master + ' input').each(function (context) {
        jQuery(this).change(function (context) {
          alert('hi');
          jQuery('#edit-' + slave + ' input[value=' + jQuery(this).val() + ']').click();
          jQuery('#edit-' + slave + ' input[value=' + jQuery(this).val() + ']').change();
        });
      });
      */
/* Code towork with HS
      jQuery('.hierarchical-select .selects select').each(function (context) {
          jQuery(this).change(function (context) { 

            // Uncheck all options when a level is changed
            jQuery('.hierarchical-select .selects select').each(function (context) {
              var opts = jQuery(this).find('option');
              for(var i=0;i<=opts.length;i++) {
                if(jQuery('#edit-' + slave + ' input[value=' + jQuery(opts[i]).val() + ']').length > 0
                   && jQuery('#edit-' + slave + ' input[value=' + jQuery(opts[i]).val() + ']').attr('checked')) {
                    var delit = jQuery('#edit-' + slave + ' input[value=' + jQuery(opts[i]).val() + ']').val();
                    jQuery('#edit-' + slave + ' input[value=' + delit + ']').click();
                    jQuery('#edit-' + slave + ' input[value=' + delit + ']').change();
                }
              }
            });
*/
   jQuery('#field-ajn-add-more-wrapper .shs-select').each(function (context) {
      jQuery(this).change(function (context) { 
        console.log(jQuery(this).val());
        Drupal.attachBehaviors('.shs-wrapper-processed');
        // Get new values
        var i = 0;
        var n_selected = new Array();
        jQuery('#field-ajn-add-more-wrapper .shs-select').each(function (context) {
          if(jQuery(this).val() != 0){
            n_selected[i] = jQuery(this).val();
            i =  i + 1;
          }
        });
        
        //var out = new Array()
        var nou = new Array()
        /*for(var j = Drupal.sync_selected.length - 1; j >= 0; j--) {
          if(n_selected.indexOf(Drupal.sync_selected[j]) == -1) {
            out.push(Drupal.sync_selected[j]);
          }
        }*/
        for(var j = n_selected.length - 1; j >= 0; j--) {
         // if(Drupal.sync_selected.indexOf(n_selected[j]) == -1) {
            nou.push(n_selected[j]);
         // }
        }
        //console.log(Drupal.sync_selected);
        //console.log(out);
/* Code working for checkbox list 
        for(var j = out.length - 1; j >= 0; j--) {
          jQuery('#edit-' + slave + ' input[value=' + out[j] + ']').attr("checked","checked");
          jQuery('#edit-' + slave + ' input[value=' + out[j] + ']').click();
          jQuery('#edit-' + slave + ' input[value=' + out[j] + ']').change();
        }
        for(var j = nou.length - 1; j >= 0; j--) {
          jQuery('#edit-' + slave + ' input[value=' + nou[j] + ']').attr("checked","");
          jQuery('#edit-' + slave + ' input[value=' + nou[j] + ']').click();
          jQuery('#edit-' + slave + ' input[value=' + nou[j] + ']').change();
        }
        */
        // Code for select element
        // First reset all values
        jQuery('#edit-' + slave + ' select').val(nou);
        jQuery('#edit-' + slave + ' select').change();
        //jQuery('#edit-' + slave + ' select').click();
        console.log(jQuery('#edit-' + slave + ' select').val());
        Drupal.sync_selected = n_selected;

        // Set checked value
        /*
        var curr = jQuery(this).find(':selected').val();
        jQuery('#edit-' + slave + ' input[value=' + curr + ']').click();
        jQuery('#edit-' + slave + ' input[value=' + curr + ']').change();
        */
        });
      });
    }
  };
