jQuery(function ($) {
  "use strict";

  // Change Dropdown
  // Slick Slider
  // CounterUp
  // Checkbox Icon Change
  // Text Edit
  // Remove Item
  // Item clone
  // Gmap

  // -------------------------------------------------------------
  //  Toggle Menu for Mobile
  // -------------------------------------------------------------

  mobileDropdown();
  function mobileDropdown() {
    if ($(".tr-menu").length) {
      $(".tr-menu .tr-dropdown").on("append", function () {
        return '<i class="fa fa-angle-down icon" aria-hidden="true"></i>';
      });
      $(".tr-menu .tr-dropdown .icon").on("click", function () {
        $(this).parent("li").children("ul").slideToggle();
      });
    }
  }

  // -------------------------------------------------------------
  //  Change Dropdown
  // -------------------------------------------------------------

  $(".tr-change-dropdown").on("click", ".tr-change a", function (ev) {
    if ("#" === $(this).attr("href")) {
      ev.preventDefault();
      var parent = $(this).parents(".tr-change-dropdown");
      parent.find(".change-text").html($(this).html());
    }
  });

  // -------------------------------------------------------------
  //  Slick Slider
  // -------------------------------------------------------------

  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1
  });

  // -------------------------------------------------------------
  // CounterUp
  // -------------------------------------------------------------

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  // -------------------------------------------------------------
  //  Checkbox Icon Change
  // -------------------------------------------------------------

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      $(this).parent("label").addClass("checked");
    } else {
      $(this).parent("label").removeClass("checked");
    }
  });

  // -------------------------------------------------------------
  //  Text Edit
  // -------------------------------------------------------------

  // disabling inputs and hiding bottm action buttons
  $(".edit-resume input").prop("disabled", true);
  $(".edit-resume .buttons.action-panel").hide();
  $(".edit-resume .clone").hide();

  $("#edit-resume-action").click(function () {
    // calling Plugin
    $(".code-edit").jqte({
      // center: false,
      // justify: false,
      // left: false,
      // right: false,
      // color: false,
      // fsize: false,
      // ol: false,
      // sub: false,
      // sup: false,
      // outdent: false,
      // indent: false,
      format: false

      // rule: false,
      // unlink: false,
      // link: false,
      // remove: false,
      // strike: false,
      // source: false,
    });

    // enabling inputs and hiding bottm action buttons
    $(".edit-resume input").prop("disabled", false);
    $(".edit-resume .buttons.action-panel").show();
    $(".edit-resume .clone").show();
  });

  // $('.code-edit').jqte();

  // -------------------------------------------------------------
  //  Remove Item
  // -------------------------------------------------------------

  $(".remove-icon").on("click", function () {
    $(this).parents(".remove-item").fadeOut();
  });

  // -------------------------------------------------------------
  //  item clone
  // -------------------------------------------------------------

  $(document).ready(function () {
    var regex = /^(.*)(\d)+$/i;
    var cloneitem = $("#addhistory").length;
    $("#clone").click(function () {
      $("#addhistory")
        .clone()
        .appendTo(".additem-work")
        .attr("id", "#addhistory" + cloneitem)
        .find("*")
        .each(function () {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem;
          }
        });
      cloneitem++;
    });

    var cloneitem2 = $("#add-edu").length;
    $("#edu-clone").click(function () {
      $("#add-edu")
        .clone()
        .appendTo(".additem-edu")
        .attr("id", "#add-edu" + cloneitem2)
        .find("*")
        .each(function () {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem2;
          }
        });
      cloneitem2++;
    });

    var cloneitem3 = $("#achievement").length;
    $("#achiev-clone").click(function () {
      $("#achievement")
        .clone()
        .appendTo(".additem-achiev")
        .attr("id", "#achievement" + cloneitem3)
        .find("*")
        .each(function () {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem3;
          }
        });
      cloneitem3++;
    });

    $(document).on("click", ".remove", function () {
      $(this).parents(".additem").remove();
    });
  });

  // script end

  // editor settings

  // $(".editor-wrapper .description-editor").jqte({
  //   center: false,
  //   justify: false,
  //   left: false,
  //   right: false,
  //   color: false,
  //   fsize: false,
  //   ol: false,
  //   sub: false,
  //   sup: false,
  //   outdent: false,
  //   indent: false,
  //   format: false,
  //   soruce: false,
  //   rule: false,
  //   unlink: false,
  //   link: false,
  //   remove: false,
  //   strike: false,
  //   source: false,

  // });
});

$(function () {
  backToTop();
  headerMarginHandler();

  $(window).scroll(function () {
    // show/hide back to button
    backToTop();
  });
  $(window).resize(function () {
    headerMarginHandler();
  });

  function headerMarginHandler() {
    var headerHeight = $("header").outerHeight();
    var headerHeight2 = $(".resume-progress").outerHeight();
    $("header").next("div, section").css("margin-top", headerHeight);
    $(".resume-progress").next("div, section").css("margin-top", headerHeight2);
  }

  function backToTop() {
    if ($(window).scrollTop() > 300) {
      // Show button
      $(".back-to-top").fadeIn(200);
    } else {
      // Hide button
      $(".back-to-top").hide();
    }
  }

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  var window_width = $(window).width();

  function mobile_tabs() {
    $(".mobile-tab li a").click(function () {
      var tab_text = $(this).html();
      $(this)
        .closest(".mobile-tab")
        .prev(".selected-tab-status")
        .find("p")
        .empty()
        .append(tab_text);
      $(this).closest(".mobile-tab").slideUp();
    });
  }
  if (window_width < 767) {
    mobile_tabs();
  }

  // custom tabs

  $(".custom-tab-container .tabs-list li").click(function () {
    let getId = $(this).attr("data-target");
    $(".custom-tab-container .tabs-list li").removeClass("active");
    $(this).addClass("active");
    $(".custom-tab-container .tab-content").removeClass("active");
    $(getId).addClass("active");
  });
  // =======================New JS function ===========================//

  $(".final-resume-section .edit-resume-btn").click(function () {
    $(".final-resume-section .resume-edit-actions").slideToggle(200);
  });

  // custom popup===============
  $(".custom-popup .btn-close-popup").click(function () {
    $(".custom-popup").removeClass("active");
  });
  $(".custom-popup").click(function () {
    $(this).removeClass("active");
  });
  $(".custom-popup-inner").click(function (event) {
    event.stopImmediatePropagation();
  });

  // login popup

  // custom login popup===============
  $("#LoginPopup .inner .close-btn").click(function () {
    $("#LoginPopup").removeClass("active");
  });
  $("#LoginPopup ").click(function () {
    $(this).removeClass("active");
  });
  $("#LoginPopup .inner").click(function (event) {
    event.stopImmediatePropagation();
  });

  // ================= activating tooptip
  $('[data-toggle="tooltip"]').tooltip();

  //=================== custom mobile tab select
  $(".selected-tab-status").click(function () {
    $(this).next(".mobile-tab").slideDown(200);
  });

  //======= chat --------------
  $(".chat-left-panel .friend-drawer-wrapper .friend-drawer").click(
    function () {
      $(".right-panel-wrapper").show(200);
    }
  );
  $(".close-chat-right").click(function () {
    $(".right-panel-wrapper").hide(200);
  });

  $(".templates-list .template").click(function () {
    $(".templates-list .template").removeClass("active");
    $(this).addClass("active");
  });

  $(".select-template-action .color-selector .label").click(function () {
    $(".select-template-action .color-selector .label").removeClass("active");
    $(this).addClass("active");
  });

  // Job summary full view==============
  $(".job-summary .action-expand .btn-expand.view-more").click(function () {
    $(".job-summary  .job-summary-inner").addClass("active");
  });
  $(".job-summary .action-expand .btn-expand.view-less").click(function () {
    $(".job-summary  .job-summary-inner").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: $(".job-summary  .job-summary-inner").offset().top - 50
      },
      600
    );
  });

  // please remove these functions ( its just to demonstrate  demonstrate the work flow
  $(".job-actions .btn").click(function () {
    $(".profile-update-popup").addClass("active");
  });

  // quick profile update =============

  $("#add_prof_details").click(function () {
    $(".profile-update-form").slideToggle(200);
  });

  $(".custom-scroll").mCustomScrollbar({
    axis: "y"
  });

  // $(".custom-job-description .form-control").keyup(function () {
  //   textareaPlaceholderHandler();
  // });

  // $(".custom-job-description .form-control").blur(function () {
  //   textareaPlaceholderHandler();
  // });
  $(".custom-job-description .form-control").on("input", function(){
    if (
      
      $(this).val().length
    ) {
      $(".custom-job-description .textarea-placeholder").hide();
    }
});
  function textareaPlaceholderHandler() {
    if (
      
      $(".custom-job-description .form-control").val().length
    ) {
      $(".custom-job-description .textarea-placeholder").hide();
    }
  }
});
