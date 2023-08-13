var selectedSlots = [];
var selectedSlotValues = [];
let bookings = [];

let peakCount = 0;
let normalCount = 0;

$(document).ready(function () {
  clearSlots();

  $("form").submit(function () {
    var visitDate = $("#date").val() ? $("#date").val() : 0;

    var slAdultCount = Number($("#slAdults").val())
      ? Number($("#slAdults").val())
      : 0;
    var slChildCount = Number($("#slChild").val())
      ? Number($("#slChild").val())
      : 0;
    var frAdultCount = Number($("#fAdults").val())
      ? Number($("#fAdults").val())
      : 0;

    var frChildCount = Number($("#fChild").val())
      ? Number($("#fChild").val())
      : 0;

    var timeSlot = $("#time").val();

    var slAdultTotalCost = 0;
    var frAdultTotalCost = 0;
    var slChildTotalCost = 0;
    var frChildTotalCost = 0;

    var totalPayble = 0;

    selectedSlotValues.forEach((slot) => {
      slAdultTotalCost += calSlAdult(slAdultCount, Number(slot));
      frAdultTotalCost += calFrAdult(frAdultCount, Number(slot));
      slChildTotalCost += calSlChild(slChildCount, Number(slot));
      frChildTotalCost += calFrChild(frChildCount, Number(slot));

      if ((slot == 2) | (slot == 4)) {
        peakCount += 1;
      } else {
        normalCount += 1;
      }
    });

    totalPayble =
      slAdultTotalCost + frAdultTotalCost + slChildTotalCost + frChildTotalCost;

    const booking = {
      sl_adult_count: Number(slAdultCount),
      sl_child_count: Number(slChildCount),
      fr_adult_count: Number(frAdultCount),
      fr_child_count: Number(frChildCount),
      sl_adult_cost: slAdultTotalCost,
      sl_child_cost: slChildTotalCost,
      fr_adult_cost: frAdultTotalCost,
      fr_child_cost: frChildTotalCost,
      visit_date: visitDate,
      peek_hours: peakCount,
      normal_hours: normalCount,
      selected_slots: selectedSlots,
      total_payble: totalPayble,
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    // localStorage.setItem("date", $("#date").val());
    // localStorage.setItem("slAdults", $("#slAdults").val());
    // localStorage.setItem("slChild", $("#slChild").val());
    // localStorage.setItem("fAdults", $("#fAdults").val());
    // localStorage.setItem("fChild", $("#fChild").val());
    // localStorage.setItem("infants", $("#infants").val());
    // localStorage.setItem("time", $("#time").val());

    // let boxes = document.getElementsByClassName("remember").length;
    // for (let i = 1; i <= boxes; i++) {
    //   var checkbox = document.getElementById(i).value;
    //   localStorage.setItem("checkbox" + String(i), checkbox);
    // }
    // var slAdultsN = 4;
    // var slAdultsP = 6;
    // var fAdultsN = 10;
    // var fAdultsP = 13;
    // var slChildN = 2;
    // var slChildP = 3;
    // var fChildN = 5;
    // var fChildP = 8;

    // var slAdults = localStorage.getItem("slAdults");
    // var slChild = localStorage.getItem("slChild");
    // var fAdults = localStorage.getItem("fAdults");
    // var fChild = localStorage.getItem("fChild");
  });

  // view data ---------------------------------------------------------------------------------------------------

  var booking_data = JSON.parse(localStorage.getItem("booking") || "[]");
  document.getElementById("dateview").innerHTML = booking_data.visit_date;
  document.getElementById("sladultview").innerHTML =
    "$" + booking_data.sl_adult_cost;
  document.getElementById("slchildview").innerHTML =
    "$" + booking_data.sl_child_cost;
  document.getElementById("fadultview").innerHTML =
    "$" + booking_data.fr_adult_cost;
  document.getElementById("fchildview").innerHTML =
    "$" + booking_data.fr_child_cost;
  document.getElementById("infantsview").innerHTML = "Free";
  document.getElementById("durationview").innerHTML =
    booking_data.selected_slots.length +
    " hrs (" +
    booking_data.normal_hours +
    " Normal : " +
    booking_data.peek_hours +
    " Peak )";

  var slots = "";
  booking_data.selected_slots.forEach((e) => {
    slots += e + ",";
  });
  document.getElementById("timeview").innerHTML = slots;
  document.getElementById("ticketsview").innerHTML =
    localStorage.getItem("tickets");
  document.getElementById("totalpayableview").innerHTML =
    "$" + booking_data.total_payble;
});

const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Select Language";
    }
  });
});

$("#time").change(function () {
  $("#time option:selected").each(function () {
    var slot_value = $(this).val();
    var slot_text = $(this).text();

    selectedSlotValues.push(slot_value);
    selectedSlots.push(slot_text);

    setSelectedSlotView();
  });
});

function clearSlots() {
  selectedSlotValues = [];
  selectedSlots = [];

  setSelectedSlotView();
}

function setSelectedSlotView() {
  document.getElementById("selected_slot_view").innerHTML = "";
  selectedSlots.forEach((e) => {
    document.getElementById("selected_slot_view").innerHTML += e + " ,";
  });
}

function calSlAdult(qty = 0, type) {
  const PRICE_1 = 4;
  const PRICE_2 = 6;
  const PRICE_3 = 4;
  const PRICE_4 = 6;

  var total = 0;
  if (type == 1) {
    total = qty * PRICE_1;
  }
  if (type == 2) {
    total = qty * PRICE_2;
  }
  if (type == 3) {
    total = qty * PRICE_3;
  }
  if (type == 4) {
    total = qty * PRICE_4;
  }
  return total;
}
function calFrAdult(qty = 0, type) {
  const PRICE_1 = 10;
  const PRICE_2 = 13;
  const PRICE_3 = 10;
  const PRICE_4 = 13;

  var total = 0;
  if (type == 1) {
    total = qty * PRICE_1;
  }
  if (type == 2) {
    total = qty * PRICE_2;
  }
  if (type == 3) {
    total = qty * PRICE_3;
  }
  if (type == 4) {
    total = qty * PRICE_4;
  }
  return total;
}
function calSlChild(qty = 0, type) {
  const PRICE_1 = 2;
  const PRICE_2 = 3;
  const PRICE_3 = 2;
  const PRICE_4 = 3;

  var total = 0;
  if (type == 1) {
    total = qty * PRICE_1;
  }
  if (type == 2) {
    total = qty * PRICE_2;
  }
  if (type == 3) {
    total = qty * PRICE_3;
  }
  if (type == 4) {
    total = qty * PRICE_4;
  }
  return total;
}
function calFrChild(qty = 0, type) {
  const PRICE_1 = 5;
  const PRICE_2 = 8;
  const PRICE_3 = 5;
  const PRICE_4 = 8;

  var total = 0;
  if (type == 1) {
    total = qty * PRICE_1;
  }
  if (type == 2) {
    total = qty * PRICE_2;
  }
  if (type == 3) {
    total = qty * PRICE_3;
  }
  if (type == 4) {
    total = qty * PRICE_4;
  }
  return total;
}







   