$(function () {
  //! Menu mobile
  /* au click fait apparaitre le menu */
  $(".burger-menu").click(function (e) {
    $(
      ".menu-mobile"
    ).slideDown(); /* slide apparait de haut en bas ( slideDown prend en parametre un temps (slow)) */
    e.preventDefault();
  });
  /* au click fait disparaitre le menu */
  $(".close-menu").click(function (e) {
    $(".menu-mobile").slideUp();
    e.preventDefault();
  });

  /*  navigation sur le responsive */
  $(".menu-mobile ul").onePageNav({
    end: function () {
      /* end permet a la fin de nav d'executer une instruction ici refermer le menu */
      $(".menu-mobile").slideUp();
    },
  });

  //! slider folio

  $(".slider").slick({
    slidesToShow: 3 /* Pour choisir le nombre d'image apparente */,
    slidesToScroll: 1 /* nombre d'image par scroll */,
    autoplay: true /* passe les images tout seul (par défault) */,
    pauseOnHover: true /* le scroll s'arrete au survol (par défault) */,
    dots: true /* numéro de photo en bulle */,
    infinite: false,
    responsive: [
      {
        breakpoint: 768 /* taille du changement */,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //! tilt effect js
  if ($(window).innerWidth() > 768) {
    /* si l'écran est small pas d'effet */
    $(".card").tilt({
      scale: 1.1, // le scale permet de faire un zoom sur la card
      glare: true,
      maxGlare: 0.5, // gere le blanchissement de la photo
    });
  }

  //! One page navigation

  $("#menu").onePageNav(); // appel de la fonction crée dans nav.js

  //! Scroll a propos

  $(".go").click(function (e) {
    /* correspond a get elementby */
    var skills = $("#skills");
    $("html, body").animate({ scrollTop: skills.offset().top }, 750);
    // animate le scroll de la page ( le chiffre représente la vitesse)
    // offset permet de récupérer la position du skill

    e.preventDefault(); // enleve l'evenement par défault (#)
  });

  //! Header change

  $(window).scroll(function () {
    var Hscroll = $(this).scrollTop(); // nombre de pixel a partir du haut
    if (Hscroll > 300) {
      $("header").addClass("fix-white");
    } else {
      $("header").removeClass("fix-white");
    }
    //! Modifie l'opacité en fonction du scroll
    var opScroll = Hscroll / 500;
    $(".logo").css({ opacity: 1 - opScroll });
  });
});
