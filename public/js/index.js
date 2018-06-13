$(function() {
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});

$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

const lastDay = new Date();
document.querySelector('.last-client-bid')
  .addEventListener('change', function() {
  document.querySelector('.time')
    .innerText = lastDay.setDate(lastDay.getDate() + 7);
});

const lotList = new LotList('lot-list.json', $('.lots-container'));