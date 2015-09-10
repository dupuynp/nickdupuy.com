(function($) {
    
    $(document).ready(function(){
        $('.contact-me-btn').on('click', function(){
                $('.modal.contact-modal')
                .modal('setting', 'transition', 'horizontal flip')
                .modal({
                    closable  : false,
                    onDeny    : function(){
                    },
                    onApprove : function() {
                      submitContactForm();
                    }
                })
                .modal('show');
        });

    });

    function submitContactForm() {
        var formData = {};
        $.ajax({ 
            type: 'POST', 
            url: '/sites/all/modules/npd/api/form/', 
            data: formData,
            success: onFormSubmitted 
        });
    }

    function onFormSubmitted() {
        console.log('done');
    }
})( jQuery );