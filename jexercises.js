document.addEventListener("DOMContentLoaded", function (event) {
    var generateAll = function (type) {
        window.answers = document.querySelectorAll(".a");

        clean();


        function randomInt(min, max) {
            return min + Math.floor((max - min) * Math.random());
        }

        function generateColor(type) {

            if (type === "hard") {
                if (Math.round(Math.random() * 2) == 0) {
                    generateRGB(0, 85);
                    console.log(11)
                } else if (Math.round(Math.random() * 2) == 1) {
                    console.log(22)
                    generateRGB(85, 170);

                } else {
                    console.log(33)
                    generateRGB(170, 255);
                }
            } else {
                generateRGB(0, 255);
            }

        }

        function generateRGB(x, y) {
            window.a1 = randomInt(x, y);
            window.a2 = randomInt(x, y);
            window.a3 = randomInt(x, y);
            var generatedColor = "RGB(" + a1 + "," + a2 + "," + a3 + ")";

            return generatedColor;
        }

        var singleColors = [];
        for (i = 0; i <= answers.length - 1; i++) {
            generateColor(type);
            answers[i].style.background = "RGB(" + window.a1 + "," + window.a2 + "," + window.a3 + ")";
            console.log(answers[i].style.background)
            var singleColor = [];
            singleColor.push(window.a1, window.a2, window.a3)
            singleColors.push(singleColor);

        }

        var answerOrder = Math.round(Math.random() * 8);

        console.log(answerOrder);
        var question = document.querySelector("h1");

        question.textContent = answers[answerOrder].style.background;

        var red = "RGB(" + singleColors[answerOrder][0] + ",0,0)";
        var green = "RGB(0," + singleColors[answerOrder][1] + ",0)";
        var blue = "RGB(0,0," + singleColors[answerOrder][2] + ")";

        var redHtml = document.querySelector("#red");
        var greenHtml = document.querySelector("#green");
        var blueHtml = document.querySelector("#blue");
        redHtml.style.background = red;
        greenHtml.style.background = green;
        blueHtml.style.background = blue;
        redHtml.textContent = red;
        greenHtml.textContent = green;
        blueHtml.textContent = blue;



        for (i = 0; i <= answers.length - 1; i++) {

            answers[i].addEventListener("click", function () {

                clean();
                window.self = this;

                window.control = false;
                if (self.style.background == question.textContent) {

                    window.foundAnswer = self.classList.add("right");

                    setTimeout(clean, 925);

                    return window.contorl = true;

                } else if (self.style.background != question.textContent) {

                    self.classList.add("wrong");

                }

            });

        }
    }
    generateAll();



    function clean() {

        for (i = 0; i < answers.length; i++) {
            if (answers[i].classList.contains("wrong") || answers[i].classList.contains("right")) {
                console.log("temizleme çalıştı");
                answers[i].classList.remove("wrong");
                answers[i].classList.remove("right");

            }

        }
    }

    var generateButton = document.querySelector("#generateButton");
    var hardButton = document.querySelector("#hard");
    var easyButton = document.querySelector("#easy");


    var type = "";

    hardButton.addEventListener("click", function () {
        generateButton.textContent = "Generate Hard"
        type = "hard";
    });
    easyButton.addEventListener("click", function () {
        generateButton.textContent = "Generate Easy"
        type = "easy"
    });

    generateButton.addEventListener("click", function () { generateAll(type) }, true);

});





