window.onload = function () {
  let main__div = document.getElementsByClassName("main__div");
  main__div[0].style.display = "block";
};

function loadBill() {
  let main__div = document.getElementsByClassName("main__div");
  let bill__btn = document.getElementsByClassName("bill__btn");
  main__div[0].style.display == "none"
    ? ((main__div[0].style.display = "block"),
      (bill__btn[0].innerHTML = "Hide Invoice"))
    : ((main__div[0].style.display = "none"),
      (bill__btn[0].innerHTML = "Show Invoice"));

  let single__bill__box = document.getElementsByClassName("single__bill__box");

  let full__details = document.getElementById("full__details");

  let array = [];

  full__details.innerHTML = "";

  for (let i = 0; i < single__bill__box.length; i++) {
    let single__bill__box__div = single__bill__box[i].children;

    let obj = {
      daagina: single__bill__box__div[0].children[1].value,
      hsn_code: single__bill__box__div[1].children[1].value,
      maal: single__bill__box__div[2].children[1].value,
      jatho: single__bill__box__div[3].children[1].value,
      bhav: single__bill__box__div[4].children[1].value,
      rakam: single__bill__box__div[5].children[1].value,
      paisa: single__bill__box__div[6].children[1].value,
    };

    array.push(obj);
  }

  for (let i = 0; i < array.length; i++) {
    innerHTML = `<div class="single__bill__box">
                <p style="width: 45px;">${array[i].daagina}</p>
                <p style="width: 90px;">${array[i].hsn_code}</p>
                <p style="width: 230px;">${array[i].maal}</p>
                <p style="width: 65px;">${array[i].jatho}</p>
                <p style="width: 90px;">${array[i].bhav}</p>
                <p style="width: 80px;">${array[i].rakam}</p>
                <p style="width: 29px;">${array[i].paisa}</p>
            </div>`;

    full__details.innerHTML += innerHTML;
  }
}

function addNewRow() {
  let main__bill__table = document.getElementById("main__bill__box");
  let newRow = `<div class="single__bill__box">
                <div class="input__div" style="width: 100px;">
                    <label for="">
                        દાગીના
                    </label>
                    <input type=" text" class="" placeholder="દાગીના" />
                </div>
                <div class="input__div" style="width: 150px;">
                    <label for="">
                        H.S.N કોડ નં.
                    </label>
                    <input type=" text" class="" placeholder="H.S.N કોડ નં." />
                </div>
                <div class="input__div">
                    <label for="">
                        માલ ની જાત
                    </label>
                    <input type=" text" class="" placeholder="માલ ની જાત" />
                </div>
                <div class="input__div">
                    <label for="">
                        જથ્થો
                    </label>
                    <input type=" text" class="" placeholder="જથ્થો" />
                </div>
                <div class="input__div">
                    <label for="">
                        ભાવ
                    </label>
                    <input type=" text" class="" placeholder="ભાવ" />
                </div>
                <div class="input__div" style="width: 100px;">
                    <label for="">
                        રકમ
                    </label>
                    <input type=" text" class="" placeholder="રકમ" />
                </div>
                <div class="input__div" style="width: 100px;">
                    <label for="">
                        પૈસા
                    </label>
                    <input type=" text" class="" placeholder="પૈસા" />
                </div>
            </div>`;

  main__bill__table.innerHTML += newRow;
}

function printBill() {
  let main__div = document.getElementsByClassName("content__div");
  let footer = document.getElementsByClassName("footer");

  main__div[0].style.display = "none";
  footer[0].style.display = "none";

  window.print();

  main__div[0].style.display = "block";
  footer[0].style.display = "flex";
}
