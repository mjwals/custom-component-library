

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.dropdown_tabbed_menu').hide();
    $('#dave').hide();
    
    $('#bob').click(function () {
        $('.dropdown_tabbed_menu').show();
        $('#bob').tooltip('hide'); //remove tooltip after button is clicked
    });

    $(document).mouseup(function (e) {
        var dropDown = $('.dropdown_tabbed_menu');
        if (e.target.class != dropDown.attr('class') && !dropDown.has(e.target).length) {
            $('.dropdown_tabbed_menu').hide();
        }
    });

    //init bootstrap-select
    $('.selectpicker').selectpicker({
        //style:'',
    });
    $('.agent_select_tooltip').tooltip({
        placement:'bottom',
        title:'Agent Status'
    });

    $( "#contextMenuBtn" ).click(function() {
        $('#contextMenu').toggle();
        $(this).find('i').toggleClass('fas fa-ellipsis-v fas fa-times') //toggle font awesome icon by targeting the <i> element
    });


});

