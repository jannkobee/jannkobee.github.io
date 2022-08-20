$(document).ready(function () {
  $(".navbar .column .buttons, .burger-nav .nav-labels").click(function () {
    let nav = $(this).val();
    if (nav == "home") {
      let offset = $(".main").offset();
      $("html, body").animate({
        scrollTop: offset.top,
      });
    } else if (nav == "about") {
      let offset = $(".about").offset();
      offset.top += 50;
      $("html, body").animate({
        scrollTop: offset.top,
      });
    } else if (nav == "certifications") {
      let offset = $(".certifications").offset();
      offset.top -= 50;
      $("html, body").animate({
        scrollTop: offset.top,
      });
    } else if (nav == "works") {
      let offset = $(".works").offset();
      offset.top -= 50;
      $("html, body").animate({
        scrollTop: offset.top,
      });
    }
  });

  $(`.modal .container .header .fa-solid.fa-xmark`).click(function () {
    $("body").removeClass("stopScroll");
    $(".backdrop").css("display", "none");
    $(".modal").css("display", "none");
    $(".modal .container").hide();
    $(`.modal .container .body`).empty();
    $(`.modal .container .footer`).empty();
  });

  $(".navbar .column .burger").click(function () {
    $(".navbar .column .burger").toggleClass("fa-xmark");
    $(".burger-nav").toggleClass("show");
  });

  $(`.badge`).click(function () {
    $(`.modal .container .body`).append(`
      <img class="badge" src="">
      <label class="badge-label"></label>
      <label class="badge-issue">Issued by: <span class="badge-actual by"></span></label>
      <label class="badge-issue">Issued on: <span class="badge-actual on"></span></label>
    `);
    $(`.modal .container .footer`).append(`
      <a href="" target="_blank"><button class="button">View in Credly</button></a>
    `);
    let badge = $(this).attr("certtype");
    if (!$("body").hasClass("stopScroll")) {
      $("body").addClass("stopScroll");
      $(".backdrop").css("display", "flex");
      $(".modal").css("display", "flex");
      $(".modal .container").show("fast", "linear");
      if (badge == "netsec") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/netsec_badge.png"
        );
        $(".modal .container .body .badge-label").html(
          "IT Specialist - Network Security"
        );
        $(".modal .container .body .badge-actual.by").html("Certiport");
        $(".modal .container .body .badge-actual.on").html("June 24, 2022");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/4e95e5c1-892d-4285-b650-2d897a629cd6/public_url"
        );
      } else if (badge == "ensa") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/ensa_badge.png"
        );
        $(".modal .container .body .badge-label").html(
          "CCNA: Enterprise Networking, Security, and Automation"
        );
        $(".modal .container .body .badge-actual.by").html("Cisco");
        $(".modal .container .body .badge-actual.on").html("April 26, 2022");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/3bb3cad2-2e2f-4807-ac0f-3d01a211b499/public_url"
        );
      } else if (badge == "cyberops") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/cyberops_badge.png"
        );
        $(".modal .container .body .badge-label").html("CyberOps Associate");
        $(".modal .container .body .badge-actual.by").html("Cisco");
        $(".modal .container .body .badge-actual.on").html("April 11, 2022");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/2a052b2e-1b1e-4020-8afd-2a18325c216e/public_url"
        );
      } else if (badge == "srwe") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/srwe_badge.png"
        );
        $(".modal .container .body .badge-label").html(
          "CCNA: Switching, Routing, and Wireless Essentials"
        );
        $(".modal .container .body .badge-actual.by").html("Cisco");
        $(".modal .container .body .badge-actual.on").html("December 06, 2021");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/41216975-b8c1-4940-8516-f06cc3b22dfa/public_url"
        );
      } else if (badge == "devnet") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/devnet_badge.png"
        );
        $(".modal .container .body .badge-label").html("DevNet Associate");
        $(".modal .container .body .badge-actual.by").html("Cisco");
        $(".modal .container .body .badge-actual.on").html("August 24, 2021");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/6571b4cb-4569-4f42-bcdf-3e07ebc486bb/public_url"
        );
      } else if (badge == "python") {
        $(".modal .container .body .badge").attr(
          "src",
          "images/python_badge.png"
        );
        $(".modal .container .body .badge-label").html(
          "MTA: Introduction to Programming Using Python - Certified 2020"
        );
        $(".modal .container .body .badge-actual.by").html("Microsoft");
        $(".modal .container .body .badge-actual.on").html(
          "September 18, 2020"
        );
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/7d462331-3e4d-4610-af3e-7118998f6d36/public_url"
        );
      } else if (badge == "database") {
        $(".modal .container .body .badge").attr("src", "images/dbf_badge.png");
        $(".modal .container .body .badge-label").html(
          "MTA: Database Fundamentals - Certified 2019"
        );
        $(".modal .container .body .badge-actual.by").html("Microsoft");
        $(".modal .container .body .badge-actual.on").html("November 17, 2019");
        $(".modal .container .footer a").attr(
          "href",
          "https://www.credly.com/badges/ed822b11-363c-4659-bf9b-91836262aa81/public_url"
        );
      }
    }
  });
  // $(`.works`).click(function () {
  //   $(`.modal .container .body`).append(`

  //   `);
  //   $(`.modal .container .footer`).append(`

  //   `);
  //   if (!$("body").hasClass("stopScroll")) {
  //     $("body").addClass("stopScroll");
  //     $(".backdrop").css("display", "flex");
  //     $(".modal").css("display", "flex");
  //     $(".modal .container").show("fast", "linear");
  //   }
  // });
});
