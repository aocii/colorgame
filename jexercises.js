document.addEventListener("DOMContentLoaded", function (event) {
    var generateAll = function () {
        window.answers = document.querySelectorAll(".a");

        clean();

        function generateColor() {
            window.a1 = Math.round(Math.random() * 255);
            window.a2 = Math.round(Math.random() * 255);
            window.a3 = Math.round(Math.random() * 255);
            var generatedColor = "RGB(" + a1 + "," + a2 + "," + a3 + ")";
            return generatedColor;
        }

        var redPercentage = 100-((255-window.a1)/255);
        var greenPercentage = 100-((255-window.a2)/255);
        var bluePercentage = 100-((255-window.a3)/255);



        for (i = 0; i <= answers.length - 1; i++) {
            answers[i].style.background = generateColor();

        }

        var answerOrder = Math.round(Math.random() * 9)-1;
        console.log(answerOrder);
        var question = document.querySelector("h1");

        question.textContent = answers[answerOrder].style.background;


        for (i = 0; i <= answers.length - 1; i++) {

            answers[i].addEventListener("click", function () {

                clean();
                window.self = this;

                window.control = 0;
                if (self.style.background == question.textContent) {

                    window.foundAnswer = self.classList.add("right");
                    window.control = 1;

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

    generateButton.addEventListener("click", generateAll, true);

});





