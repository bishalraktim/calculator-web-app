$(document).ready(function () {
  let decimalAdded = false;
  let plusSign = false;
  let minusSign = false;
  let mulSign = false;
  let divSign = false;
  let lockNum = false;
  let powerOn = false;

  function backSpace() {
    if (!lockNum) {
      let string = $("#result").val().slice(0, -1);
      $("#result").val(string);
    }
  }

  function enterNumber(num) {
    if ($("#result").val() === "POWER ON!") {
      $("#result").val("");
    }
    if (!lockNum) {
      // document.forms.display.value += 0;
      $("#result").val($("#result").val() + num);
      plusSign = false;
      minusSign = false;
      mulSign = false;
      divSign = false;
    }
  }

  if (!powerOn) {
    $("#result").val("POWER OFF");
    lockNum = true;
  }

  // zero
  $("#zero").click(function () {
    enterNumber(0);
  });

  // one
  $("#one").click(function () {
    enterNumber(1);
  });

  // two
  $("#two").click(function () {
    enterNumber(2);
  });

  // three
  $("#three").click(function () {
    enterNumber(3);
  });

  // four
  $("#four").click(function () {
    enterNumber(4);
  });

  // five
  $("#five").click(function () {
    enterNumber(5);
  });

  // six
  $("#six").click(function () {
    enterNumber(6);
  });

  // seven
  $("#seven").click(function () {
    enterNumber(7);
  });

  // eight
  $("#eight").click(function () {
    enterNumber(8);
  });

  // nine
  $("#nine").click(function () {
    enterNumber(9);
  });

  // add
  $("#add").click(function () {
    decimalAdded = false;

    if ($("#add").val() === "+") {
      if (!plusSign && !lockNum) {
        document.forms.display.value += "+";
        plusSign = true;
      }
    }
  });

  // sub
  $("#sub").click(function () {
    decimalAdded = false;

    if ($("#sub").val() === "-") {
      if (!minusSign && !lockNum) {
        document.forms.display.value += "-";
        minusSign = true;
      }
    }
  });

  // mul
  $("#mul").click(function () {
    decimalAdded = false;

    if ($("#mul").val() === "x") {
      if (!mulSign && !lockNum) {
        document.forms.display.value += "*";
        mulSign = true;
      }
    }
  });

  // div
  $("#div").click(function () {
    decimalAdded = false;

    if ($("#div").val() === "/") {
      if (!divSign && !lockNum) {
        document.forms.display.value += "/";
        divSign = true;
      }
    }
  });

  // dot
  $("#dot").click(function () {
    if ($("#dot").val() === ".") {
      if (!decimalAdded && !lockNum) {
        document.forms.display.value += ".";
        decimalAdded = true;
      }
    }
  });

  // open Bracket
  $("#openBrack").click(function () {
    if (!lockNum) {
      $("#result").val($("#result").val() + "(");
    }
  });

  // close Bracket
  $("#closeBrack").click(function () {
    if (!lockNum) {
      $("#result").val($("#result").val() + ")");
    }
  });

  // clear entry (ce)
  $("#ce").click(function () {
    backSpace();
  });

  // clear all
  $("#clear").click(function () {
    if (!lockNum) {
      document.forms.display.value = "";
      decimalAdded = false;
      plusSign = false;
      minusSign = false;
      mulSign = false;
      divSign = false;
    }
  });

  // NumLock
  $("#numLock").click(function () {
    if (!lockNum) {
      lockNum = true;
      return;
    }

    if ($("#result").val() !== "POWER OFF!") {
      if ($("#result").val() !== "POWER OFF") {
        lockNum = false;
      }
    }
  });

  // Power
  $("#power").click(function () {
    if (!powerOn) {
      $("#result").fadeOut(1500, function () {
        $(this).val("POWER ON!").fadeIn(1000);
      });
      $("#power").val("OFF");
      powerOn = true;
      lockNum = false;

      // if ($("#result").val() === "POWER OFF") {
      //   $("#numLock").prop("disabled", false);
      // }
      return;
    }

    powerOn = false;
    $("#result").fadeOut(1500, function () {
      $(this).val("POWER OFF!").fadeIn(1000);
    });
    //$("#result").val("Power OFF!");
    $("#power").val("ON");
    lockNum = true;
  });

  // equal
  $("#equal").click(function () {
    try {
      if (document.forms.display.value === "") {
        alert("Please click any numbers to calculate!");
      } else {
        document.forms.display.value = eval(document.forms.display.value);
      }
    } catch (err) {
      alert(err.message);
    }
  });

  // Keyboard Inputs
  $(document).keypress(function (e) {
    if (!lockNum) {
      if ($("#result").val() === "POWER ON!") {
        $("#result").val("");
      }

      // Numbers
      if (e.which === 48) {
        $("#result").val($("#result").val() + 0);
      }

      if (e.which === 49) {
        $("#result").val($("#result").val() + 1);
      }

      if (e.which === 50) {
        $("#result").val($("#result").val() + 2);
      }

      if (e.which === 51) {
        $("#result").val($("#result").val() + 3);
      }

      if (e.which === 52) {
        $("#result").val($("#result").val() + 4);
      }

      if (e.which === 53) {
        $("#result").val($("#result").val() + 5);
      }

      if (e.which === 54) {
        $("#result").val($("#result").val() + 6);
      }

      if (e.which === 55) {
        $("#result").val($("#result").val() + 7);
      }

      if (e.which === 56) {
        $("#result").val($("#result").val() + 8);
      }

      if (e.which === 57) {
        $("#result").val($("#result").val() + 9);
      }

      // operators
      if (e.which === 43) {
        $("#result").val($("#result").val() + "+");
      }

      if (e.which === 45) {
        $("#result").val($("#result").val() + "-");
      }

      if (e.which === 47) {
        $("#result").val($("#result").val() + "/");
      }

      if (e.which === 42) {
        $("#result").val($("#result").val() + "*");
      }

      // Keys
      if (e.which === 40) {
        $("#result").val($("#result").val() + "(");
      }

      if (e.which === 41) {
        $("#result").val($("#result").val() + ")");
      }

      if (e.which === 46) {
        $("#result").val($("#result").val() + ".");
      }

      if (e.which === 127) {
        $("#result").val("");
      }

      // Calculation
      if (e.which === 13 && $("#result").val() !== "POWER OFF") {
        try {
          // preventing page jumps
          e.preventDefault();

          let finalOutput = eval(
            $("#result")
              .val()
              .replace(/\b0(\d+)\b/g, "$1")
          );
          $("#result").val(finalOutput);
        } catch (e) {
          alert(e.message);
        }
      }
    }
  });

  // KeyDown
  $(document).keydown(function (e) {
    if (
      $("#result").val() !== "POWER ON!" &&
      $("#result").val() !== "POWER OFF!"
    ) {
      if (e.keyCode === 8 && $("#result").val() !== "POWER OFF") {
        backSpace();
      }
    }
  });
});
