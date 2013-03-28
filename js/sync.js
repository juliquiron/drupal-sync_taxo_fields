
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      var slave = settings.sync_taxo_fields.slave.replace('_','-');
      var master = settings.sync_taxo_fields.master.replace('_','-');
      jQuery('#edit-' + slave).hide(); 
      jQuery('#edit-' + master + ' input').each(function (context) {
        jQuery(this).click(function (context) {
          jQuery('#edit-' + slave + ' input[value=' + jQuery(this).val() + ']').click();
          jQuery('#edit-' + slave + ' input[value=' + jQuery(this).val() + ']').change();
          console.log(jQuery(this).val());
        });
      });

    }
  };
