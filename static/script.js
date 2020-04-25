function showlform() {
    $('#lform').show();
    $('#rform').hide();
    $("#login").css('border-bottom','gold 5px solid');
    $("#register").css('border-bottom','none');
}

function showrform() {
    $('#rform').show();
    $('#lform').hide();
    $("#login").css('border-bottom','none');
    $("#register").css('border-bottom','gold 5px solid');
}

function hideforms() {
    $('#loginbg').css('transform', 'scale(1)');
    $("#loginpanel").fadeToggle(400);
    setTimeout(function () {
        $('#getstarted').fadeToggle();
        $('#herotxt').fadeToggle();
    }, 800)
}



$(function () {
    // get started button displayes an overlay
    $('#getstarted').click(function () {
        $('#getstarted').fadeToggle();
        $('#herotxt').fadeToggle();
        $('#loginbg').css('transform', 'scale(100)');
        $("#loginpanel").fadeToggle();
        $("#login").css('border-bottom','gold 5px solid');
    })

    // summernote
    $('#summernote').summernote({
        placeholder: 'Hello Bootstrap 4',
        tabsize: 2,
        height: 500
    });












}) //jquery end