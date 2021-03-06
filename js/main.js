$(document).ready(function () {
    let currentFloor = 2; // переменная, где хратиться текущий этаж
    let floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    let counterUp = $(".counter-up"); // кнопка увеличения этажа  
    let counterDown = $(".counter-down"); // кнопка уменьшение этажа 

    // функция при наведении мышью на этаж 
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
    });


    counterUp.on("click", function () { // отслеживавем клик по кнопке вверх 
        // проверяем значение этажа 
        if (currentFloor < 18) { 
          currentFloor++; // прибавляем один этаж 
          usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, что бы было 01 а не 1
          $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж 
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })  
});