(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

    $(function() {

        $('#product-search-form input[type="submit"]').on('click', function (e) {
            console.log('submit got clicked');
            console.log(ajaxurl);
            e.preventDefault();
            // send the ajax request
            var data = {
                'action': 'find_product',
                'whatever': 22
            };

            // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
            /*jQuery.post(ajaxurl, data, function(response) {
                alert('Got this from the server: ' + response);
            });*/
            $.ajax({
                method: "POST",
                url: ajaxurl,
                data: data
            }).done(function( msg ) {
                    alert( "Data Saved: " + msg );
                });
        });
    });

})( jQuery );
