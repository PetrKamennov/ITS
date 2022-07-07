

var i = 0;
$(window).on('load', function () {
   setTimeout(function () {
     $('.preloader').addClass("preloader-remove")
     i = 1;
   }, 5000);
});
$(function ()

{ var percent_func = function(percent, time) {

    $('#percent').prop({numberValue: percent}).animate({numberValue: 100}, {
    duration: time,
    easing: 'linear',
    step: function(a, b) {
    $(this).text((b.now|0) + ' %');
    }
})}
  percent_func(0, 5000);
})
