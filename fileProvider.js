///////////////////////////////////GET FILES////////////////////////////
function getFile(part, vers) {

    var div = $("<div class='overlay'><i class='fa fa-spinner fa-6x fa-spin'></i></div>");
    $('#scheduler').append(div);


    $.ajax({
        url: '/api/values?part=' + part,
        type: "GET",
        async: true,

        success: function (data) {

            if (data) openPDF(data);
            $('.overlay').remove();

        },
        error: function (data) {
            $('.overlay').remove();


        },
        timeout: function (data) {
            $('.overlay').remove();


        }
    });

}
function openPDF(pdf) {
    window.open(pdf, "_blank");
    return false;
}