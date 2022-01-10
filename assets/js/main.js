    !(function (s) {
        "use strict";
        var t = s(window);
        function a() {
            var e, a;
            (e = s(".full-screen")), (a = t.height()), e.css("min-height", a), (e = s("header").height()), (a = s(".screen-height")), (e = t.height() - e), a.css("height", e);
        }
        s("#preloader").fadeOut("normall", function () {
            s(this).remove();
        }),
            s.scrollIt({ upKey: 38, downKey: 40, easing: "swing", scrollTime: 600, activeClass: "active", onPageChange: null, topOffset: -70 }),
            t.on("scroll", function () {
                var e = t.scrollTop(),
                    a = s(".navbar-brand img"),
                    o = s(".navbar-brand.logodefault img");
                e <= 50 ? (s("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "assets/images/logos/logo.png")) : (s("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "assets/images/logos/logo.png")),
                    o.attr("src", "assets/images/logos/logo.png");
            }),
            t.on("scroll", function () {
                500 < s(this).scrollTop() ? s(".scroll-to-top").fadeIn(400) : s(".scroll-to-top").fadeOut(400);
            }),
            s(".scroll-to-top").on("click", function (e) {
                e.preventDefault(), s("html, body").animate({ scrollTop: 0 }, 600);
            }),
            t.on("scroll", function () {
                var e = t.scrollTop(),
                    a = s(".onepage-nav.navbar");
                100 < e ? a.addClass("nav-scroll") : a.removeClass("nav-scroll");
            }),
            t.width() <= 991 &&
                s(".onepage-nav .navbar-nav .nav-link").on("click", function () {
                    s(".onepage-nav .navbar-nav").removeClass("open").hide(), s(".onepage-nav .navbar-toggler").removeClass("menu-opened");
                }),
            s("#sidebar_toggle").length &&
                (s("body").addClass("sidebar-menu"),
                s("#sidebar_toggle").on("click", function () {
                    s(".sidebar-menu").toggleClass("active"), s(".side-menu").addClass("side-menu-active"), s("#close_sidebar").fadeIn(700);
                }),
                s("#close_sidebar").on("click", function () {
                    s(".side-menu").removeClass("side-menu-active"), s(this).fadeOut(200), s(".sidebar-menu").removeClass("active");
                }),
                s("#btn_sidebar_colse").on("click", function () {
                    s(".side-menu").removeClass("side-menu-active"), s("#close_sidebar").fadeOut(200), s(".sidebar-menu").removeClass("active");
                })),
            new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }).init(),
            s(".parallax,.bg-img").each(function (e) {
                s(this).attr("data-background") && s(this).css("background-image", "url(" + s(this).data("background") + ")");
            }),
            s(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
            s(".source-modal").magnificPopup({ type: "inline", mainClass: "mfp-fade", removalDelay: 160 }),
            s(".current-year").text(new Date().getFullYear()),
            t.resize(function (e) {
                setTimeout(function () {
                    a();
                }, 500),
                    e.preventDefault();
            }),
            a(),
            0 !== s(".copy-clipboard").length &&
                (new ClipboardJS(".copy-clipboard"),
                s(".copy-clipboard").on("click", function () {
                    var e = s(this);
                    e.text();
                    e.text("Copied"),
                        setTimeout(function () {
                            e.text("Copy");
                        }, 2e3);
                })),
            
            s(document).ready(function () {
                var slider = s('#lightSliderPdt').lightSlider({
                    gallery: true,
                    item: 1,
                    loop:true,
                    slideMargin: 0,
                    thumbItem: 4,
                    controls: false
                });
                s('#goToPrevSlide').on('click', function () {
                    slider.goToPrevSlide();
                });
                s('#goToNextSlide').on('click', function () {
                    slider.goToNextSlide();
                });
                s("ul.nav-tabs a").click(function (e) {
                  e.preventDefault();  
                    s(this).tab('show');
                });
                //equal height
                var offsetHeight = document.getElementById('leftcard').offsetHeight;
                document.getElementById('rightcard').style.height = offsetHeight+'px';
                s(".testimonial-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 0,
                    responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 } },
                }),
                    s(".testimonial-carousel2").owlCarousel({
                        loop: !1,
                        responsiveClass: !0,
                        autoplay: !0,
                        smartSpeed: 1500,
                        nav: !1,
                        dots: !0,
                        center: !1,
                        margin: 50,
                        responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 2 } },
                    }),
                    s(".testimonial-carousel3").owlCarousel({
                        loop: !0,
                        responsiveClass: !0,
                        autoplay: !0,
                        smartSpeed: 1500,
                        nav: !1,
                        dots: !1,
                        thumbs: !0,
                        thumbsPrerendered: !0,
                        center: !1,
                        margin: 50,
                        responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 } },
                    }),
                    s(".testimonial-carousel6").owlCarousel({
                        loop: !1,
                        responsiveClass: !0,
                        autoplay: !0,
                        smartSpeed: 1500,
                        nav: !1,
                        dots: !0,
                        center: !1,
                        margin: 50,
                        responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 } },
                    }),
                    s(".feature-carousel").owlCarousel({
                        loop: !0,
                        responsiveClass: !0,
                        autoplay: !0,
                        smartSpeed: 1500,
                        nav: !0,
                        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
                        dots: !0,
                        center: !1,
                        margin: 0,
                        responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 5 } },
                    }),
                    s(".whychooseus3-carousel").owlCarousel({
                        loop: !0,
                        responsiveClass: !0,
                        autoplay: !0,
                        smartSpeed: 1500,
                        nav: !1,
                        dots: !0,
                        center: !1,
                        margin: 0,
                        responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 } },
                    }),
                    s(".blog-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !1, smartSpeed: 1500, nav: !1, dots: !0, center: !1, margin: 30, items: 1 }),
                    s(".slider-fade").owlCarousel({
                        items: 1,
                        loop: !0,
                        dots: !0,
                        margin: 0,
                        nav: !1,
                        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
                        autoplay: !0,
                        smartSpeed: 1500,
                        mouseDrag: !1,
                        animateIn: "fadeIn",
                        animateOut: "fadeOut",
                        responsive: { 992: { nav: !0, dots: !1 } },
                    }),
                    s(".owl-carousel").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, autoplay: !0, smartSpeed: 500 }),
                    s(".slider-fade").on("changed.owl.carousel", function (e) {
                        e = e.item.index - 2;
                        s("span").removeClass("animated fadeInUp"),
                            s(".ban-img").removeClass("animated fadeInLeft"),
                            s("h1").removeClass("animated fadeInUp"),
                            s("p").removeClass("animated fadeInUp"),
                            s("a").removeClass("animated fadeInUp"),
                            s(".owl-item").not(".cloned").eq(e).find(".ban-img").addClass("animated fadeInLeft"),
                            s(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"),
                            s(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"),
                            s(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"),
                            s(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp");
                    }),
                    0 !== s(".horizontaltab").length &&
                        s(".horizontaltab").easyResponsiveTabs({
                            type: "default",
                            width: "auto",
                            fit: !0,
                            tabidentify: "hor_1",
                            activate: function (e) {
                                var a = s(this),
                                    o = s("#nested-tabInfo");
                                s("span", o).text(a.text()), o.show();
                            },
                        }),
                    0 !== s(".verticaltab").length &&
                        s(".verticaltab").easyResponsiveTabs({
                            type: "vertical",
                            width: "auto",
                            fit: !0,
                            closed: "accordion",
                            tabidentify: "hor_1",
                            activate: function (e) {
                                var a = s(this),
                                    o = s("#nested-tabInfo2");
                                s("span", o).text(a.text()), o.show();
                            },
                        }),
                    s(".countup").counterUp({ delay: 25, time: 2e3 }),
                    s(".countdown").countdown({ date: "01 Jan 2024 00:01:00", format: "on" });
            }),
            t.on("load", function () {
                var a = s(".portfolio-gallery-isotope").isotope({});
                s(".filtering").on("click", "span", function () {
                    var e = s(this).attr("data-filter");
                    a.isotope({ filter: e });
                }),
                    s(".filtering").on("click", "span", function () {
                        s(this).addClass("active").siblings().removeClass("active");
                    }),
                    s(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
                    t.stellar();
            });
    })(jQuery);
    