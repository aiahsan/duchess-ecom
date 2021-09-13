(function() {
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse2').on('click', function () {
        $('#sidebar2').toggleClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
})();

// show password on eye icon click
$( ".confirm-icon" ).click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".confirm-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});
  
// show password on eye icon click
$( ".enter-icon" ).click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});
  
// show password on eye icon click
$( ".current-icon" ).click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".current-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value == 1 ? "" : value--;
    // value--;
    document.getElementById('number').value = value;
  }

//   $breadcrumb-divider: quote(">");
