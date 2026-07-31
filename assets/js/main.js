console.log('Bukit Ciater template is ready.');

// Header scroll: toggle .scrolled when page is scrolled
(function () {
	const header = document.getElementById('site-header');
	if (!header) return;

	const onScroll = () => {
		if (window.scrollY > 20) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	// burger click placeholder: toggle mobile nav (implement later)
	const burger = document.getElementById('burger');
	if (burger) {
		burger.addEventListener('click', () => {
			document.body.classList.toggle('nav-open');
		});
	}
})();

function initGalleryCarousel() {
    if (!window.jQuery || typeof jQuery.fn.owlCarousel !== 'function') {
        return;
    }

    var $galleryMain = jQuery('#gallery-main');
    var $galleryThumbs = jQuery('#gallery-thumbs');

    if (!$galleryMain.length || !$galleryThumbs.length) {
        return;
    }

    $galleryMain.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 }
        }
    });

    $galleryThumbs.owlCarousel({
        items: 5,
        loop: false,
        margin: 1,
        nav: true,
        dots: false,
        smartSpeed: 400,
        responsive: {
            0: { items: 3 },
            640: { items: 5 }
        },
        navText: ['<span aria-label="Previous thumbnail">‹</span>', '<span aria-label="Next thumbnail">›</span>']
    });

    $galleryThumbs.on('click', '.owl-item', function () {
        var $clicked = jQuery(this).closest('.owl-item');
        var index = $galleryThumbs.find('.owl-item').not('.cloned').index($clicked);
        if (index === -1) {
            return;
        }
        $galleryMain.trigger('to.owl.carousel', [index, 300, true]);
    });

    $galleryMain.on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index;
        $galleryThumbs.find('.owl-item').removeClass('current');
        $galleryThumbs.find('.owl-item').not('.cloned').eq(currentIndex).addClass('current');
    });

    $galleryThumbs.find('.owl-item').not('.cloned').eq(0).addClass('current');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleryCarousel);
} else {
    initGalleryCarousel();
}

function initClientsCarousel() {
    if (!window.jQuery || typeof jQuery.fn.owlCarousel !== 'function') return;
    var $clients = jQuery('#clients-carousel');
    if (!$clients.length) return;

    $clients.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 2 },
            640: { items: 3 },
            1024: { items: 5 }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClientsCarousel);
} else {
    initClientsCarousel();
}

// No fixed JS behavior required for video; CSS handles absolute positioning and clipping by the section.

$(document).ready(function(){
  $(".burger").click(function(){
    $(".pop-menu").addClass("show");
  });
  $(".close-bt").click(function(){
    $(".pop-menu").removeClass("show");
  });
});
