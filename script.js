$("#selection").ddslick({
    width: "80%",
    imagePosition: "left"

})

$("#selection2").ddslick({
    width: "80%",
    imagePosition: "left",
})

$("#selection3").ddslick({
    width: "80%",
    imagePosition: "left",
})

$("#selection4").ddslick({
    width: "80%",
    imagePosition: "left",
});

$('.slider').slick({
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    mobileFirst: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
});

$('.thumbnail > div').click(function () {
    $('.slider').slick('slickGoTo', $(this).index());
});






//Quantity and Total Value

$('.dd-container').click('input .dd-selected-value', function addItems() {
    var totalSum = 779.00;
    $('.dd-selected-value').each(function () {
        var inputVal = $(this).val();
        if ($.isNumeric(inputVal)) {
            totalSum += parseFloat(inputVal);
        }
        $('#total').val(totalSum);

    });


});



function increaseValue() {

    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;

    var a = document.getElementById("total").value;
    var b = document.getElementById("quantity").value;
    var result = a * b;
    document.getElementById("total").innerHTML = result;

}



function decreaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('quantity').value = value;

    var a = document.getElementById("total").value;
    var b = document.getElementById("quantity").value;
    var result = a * b;
    document.getElementById("total").innerHTML = result;
}




//Item name selection

$('#selection').click('input .dd-selected-value', function (event) {
    $(".dd-selected-text").addClass("item-name");
    var divContent = $("#selection .item-name").text();
    var cartRowContents = `Hay About A Lounge Chair - Low AAL82 `;
    //var divDescription = $("#selection .dd-desc").text();
    //document.getElementById("cart-items").innerHTML = (divContent);
    document.getElementById("item-name").innerHTML = (cartRowContents) + (divContent);
    console.log(divContent);

});




$('#selection').click('input .dd-selected-value', function (event) {
    $(".dd-selected-text").addClass("fabric");
    var divContent = $("#selection .fabric").text();
    var cartRowContents = `Fabric: `;
    //var divDescription = $("#selection .dd-desc").text();
    //document.getElementById("cart-items").innerHTML = (divContent);
    document.getElementById("item-fabric").innerHTML = (cartRowContents) + (divContent);
    console.log(divContent);

});

$('#selection2').click('input .dd-selected-value', function (event) {
    $(".dd-selected-text").addClass("colour");
    var colorContent = $("#selection2 .colour").text();
    var cartRowContents = `Colour: `
    //var divDescription = $("#selection .dd-desc").text();
    //document.getElementById("cart-items").innerHTML = (divContent);
    document.getElementById("item-color").innerHTML = (cartRowContents) + (colorContent);
    console.log(colorContent);

});
$('#selection3').click('input .dd-selected-value', function (event) {
    $(".dd-selected-text").addClass("lg-finish");
    var lgFinish = $("#selection3 .lg-finish").text();
    var cartRowContents = `Leg Finish: `
    //var divDescription = $("#selection .dd-desc").text();
    //document.getElementById("cart-items").innerHTML = (divContent);
    document.getElementById("item-lg").innerHTML = (cartRowContents) + (lgFinish);
    console.log(lgFinish);

});
$('#selection4').click('input .dd-selected-value', function (event) {
    $(".dd-selected-text").addClass("seat-cushion");
    var cushOp = $("#selection4 .seat-cushion").text();
    var cartRowContents = `Optional Seat Cushion: `
    //var divDescription = $("#selection .dd-desc").text();
    //document.getElementById("cart-items").innerHTML = (divContent);
    document.getElementById("item-cushion").innerHTML = (cartRowContents) + (cushOp);
    console.log(cushOp);

});