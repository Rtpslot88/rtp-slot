function StickyHeader() {
  window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementById("StickyHeader");
  var sticky = navbar.offsetTop;
  var height = document.querySelector("#item-slot").offsetHeight;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    600: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    991: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
});

$("#searchInput").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#EvidenceSlot div").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

function DisplaySlot() {
  list_display("Popular");
  $("#Popular-Prov").click(function () {
    list_display("Popular");
  });
  $("#Prag-Prov").click(function () {
    list_display("Pragmatic");
  });
  $("#IDN-Prov").click(function () {
    list_display("IDN");
  });
  $("#HB-Prov").click(function () {
    list_display("Habanero");
  });
  $("#Micro-Prov").click(function () {
    list_display("Micro");
  });
  $("#ISoft-Prov").click(function () {
    list_display("ISoft");
  });

  function list_display(Code) {
    $.ajax({
      method: "POST",
      url: "Query/EvidenceSlot.php",
      data: {
        val: Code,
      },
      success: function (data) {
        $("#EvidenceSlot").html(data);
      },
    });
  }
}

$(document).on("click", ".ClickerPop", function () {
  var id = $(this).attr("id");
  var type = $(this).attr("name");
  $.ajax({
    method: "POST",
    url: "Query/ClickerPopular.php",
    data: {
      id: id,
      type: type,
    },
    success: function (data) {
      DisplaySlot();
    },
  });
});
