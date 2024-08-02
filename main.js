document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Slide functionality
    let slide = document.querySelectorAll(".patientReview");
    let count = 0;

    slide.forEach(function (slides, index) {
        slides.style.left = `${index * 100}%`;
    });

    function myFun() {
        slide.forEach(function (curVal) {
            curVal.style.transform = `translateX(-${count * 100}%)`;
        });
    }

    setInterval(function () {
        count++;
        if (count == slide.length) {
            count = 0;
        }
        myFun();
    }, 2000);

    // Card functionality for patient review
    let card = document.querySelectorAll(".card");
    let closeBtn = document.getElementById("closeBtn");

    if (card) {
        card.forEach(function (cards) {
            cards.addEventListener("click", function () {
                console.log(cards);
                document.querySelector(".detail").style.display = "block";
                document.querySelector(".content").innerHTML = `
                    <img src=${cards.firstElementChild.src} alt="">
                    <div class="contentText">
                        <h1>Alexa Zoan</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ex accusantium eius magnam, esse repellat veritatis, consectetur aut perspiciatis dolor labore sapiente.</p>
                    </div>
                `;
                if (closeBtn) {
                    closeBtn.addEventListener("click", function () {
                        document.querySelector(".detail").style.display = "none";
                    });
                }
            });
        });
    }

    // Connect button functionality
    let connectBtn = document.getElementById("connectBtn");

    if (connectBtn) {
        connectBtn.addEventListener("click", function () {
            let email = document.getElementById("email");
            let pass = document.getElementById("pass");

            if (email.value == "" && pass.value == "") {
                alert("Enter Details");
            } else {
                alert("You Logged IN");
            }
        });
    }

    // New functionality for .spCard elements
    const spCards = document.querySelectorAll(".spCard");
    console.log(spCards);  // Check if elements are selected

    spCards.forEach(card => {
        card.addEventListener("click", () => {
            console.log("Card clicked, redirecting to doctor.html");
            window.location.href = "doctor.html";
        });
    });

    // Functionality for "Book Appointment" buttons
    const bookButtons = document.querySelectorAll(".bookBtn");
    bookButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering the card's click event
            window.location.href = "book.html";
        });
    });
});
