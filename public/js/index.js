// document.querySelector('.navbar-toggler')
//     .addEventListener('click', function() {
//         if (document.querySelector('.top').style.display == "") {
//             document.querySelector('.top').style.display = "none";
//         } else {
//             document.querySelector('.top').style.display = "";
//         }
//     });

$(function() {
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});
