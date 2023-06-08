jQuery(document).ready(function ($) {
  'use strict'

  $(window).on('load', function () {
    // makes sure the whole site is loaded
    $('.seq-preloader').fadeOut() // will first fade out the loading animation
    $('.sequence').delay(500).fadeOut('slow') // will fade out the white DIV that covers the website.
  })

  $(function () {
    function showSlide(n) {
      // n is relative position from current slide

      // unbind event listener to prevent retriggering
      $body.unbind('mousewheel')

      // increment slide number by n and keep within boundaries
      currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1)

      var displacment = window.innerWidth * currSlide
      // translate slides div across to appropriate slide
      $slides.css('transform', 'translateX(-' + displacment + 'px)')
      // delay before rebinding event to prevent retriggering
      setTimeout(bind, 700)

      // change active class on link
      $('nav a.active').removeClass('active')
      $($('a')[currSlide]).addClass('active')
    }

    function bind() {
      $body.bind('false', mouseEvent)
    }

    function mouseEvent(e, delta) {
      // On down scroll, show next slide otherwise show prev slide
      showSlide(delta >= 0 ? -1 : 1)
      e.preventDefault()
    }

    $('nav a, .main-btn a').click(function (e) {
      // When link clicked, find slide it points to
      var newslide = parseInt($(this).attr('href')[1])
      // find how far it is from current slide
      var diff = newslide - currSlide - 1
      showSlide(diff) // show that slide
      e.preventDefault()
    })

    $(window).resize(function () {
      // Keep current slide to left of window on resize
      var displacment = window.innerWidth * currSlide
      $slides.css('transform', 'translateX(-' + displacment + 'px)')
    })

    // cache
    var $body = $('body')
    var currSlide = 0
    var $slides = $('.slides')
    var $slide = $('.slide')

    // give active class to first link
    $($('nav a')[0]).addClass('active')

    // add event listener for mousescroll
    $body.bind('false', mouseEvent)
  })

  $('#form-submit .date').datepicker({})

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('active')
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $('.header').removeClass('active')
    }
  })
})

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)

  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/**
 * Porfolio isotope and filter
 */
window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container')
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    })

    let portfolioFilters = select('#portfolio-flters li', true)

    on(
      'click',
      '#portfolio-flters li',
      function (e) {
        e.preventDefault()
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active')
        })
        this.classList.add('filter-active')

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        })
      },
      true
    )
  }
})

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
})

/**
 * Initiate portfolio details lightbox
 */
const portfolioDetailsLightbox = GLightbox({
  selector: '.portfolio-details-lightbox',
  width: '90%',
  height: '90vh'
})

/**
 * Portfolio details slider
 */
new Swiper('.portfolio-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

/**
 * Initiate Pure Counter
 */
new PureCounter()
