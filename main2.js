document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    
    const specialityBtn = document.getElementById("specialityBtn");
    if (specialityBtn) {
        specialityBtn.addEventListener("click", () => {
            window.location.href = "specialists.html";
        });
    }

    // Slide functionality
    const slides = document.querySelectorAll(".patientReview");
    let count = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    function slideShow() {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        });
    }

    setInterval(() => {
        count = (count + 1) % slides.length;
        slideShow();
    }, 2000);

    // Card functionality for patient review
    const cards = document.querySelectorAll(".card");
    const closeBtn = document.getElementById("closeBtn");

    // Different content for each card
    const cardContent = [
        {
            imgSrc: '/images/dt3.jpg',
            name: 'Dr. Maria Rodriguez',
            description: 'Dr. Maria Rodriguez is a renowned neurologist with extensive experience in treating various neurological disorders. She is dedicated to providing the best care to her patients.'
        },
        {
            imgSrc: '/images/d4.jpg',
            name: 'Dr. Emily Clark',
            description: 'Dr. Emily Clark is a compassionate pediatrician known for her gentle approach with children. She has been serving the community with dedication and care for over 15 years.'
        },
        {
            imgSrc: '/images/d5.jpg',
            name: 'Dr. Michael Lee',
            description: 'Dr. Michael Lee is a leading dermatologist specializing in skin care and cosmetic procedures. His expertise and friendly demeanor make him a favorite among patients.'
        },
        {
            imgSrc: '/images/d6.jpg',
            name: 'Dr. Sarah Thompson',
            description: 'Dr. Sarah Thompson is an experienced oncologist committed to fighting cancer and supporting her patients throughout their treatment journey.'
        },
        {
            imgSrc: '/images/d7.jpg',
            name: 'Dr. John Williams',
            description: 'Dr. John Williams is a skilled general surgeon known for his precision and successful surgical outcomes. He has a calming presence that reassures his patients.'
        },
        {
            imgSrc: '/images/d8.jpg',
            name: 'Dr. Olivia Harris',
            description: 'Dr. Olivia Harris is a dedicated obstetrician-gynecologist who provides exceptional care to women throughout their reproductive health journey.'
        },
        {
            imgSrc: '/images/d9.jpg',
            name: 'Dr. David Patel',
            description: 'Dr. David Patel is a proficient radiologist who uses advanced imaging techniques to diagnose and treat a variety of conditions.'
        },
        {
            imgSrc: '/images/d10.jpg',
            name: 'Dr. Lisa Parker',
            description: 'Dr. Lisa Parker is an expert endocrinologist who helps patients manage hormonal imbalances and endocrine disorders.'
        },
        {
            imgSrc: '/images/d11.jpg',
            name: 'Dr. Robert Davis',
            description: 'Dr. Robert Davis is a leading urologist known for his expertise in treating urinary tract issues and male reproductive health.'
        },
        {
            imgSrc: '/images/d12.jpg',
            name: 'Dr. Laura Martinez',
            description: 'Dr. Laura Martinez is a pulmonologist dedicated to helping patients with respiratory issues breathe easier and improve their quality of life.'
        },
        {
            imgSrc: '/images/d7.jpg',
            name: 'Dr. Alexa Johnson',
            description: 'Dr. Alexa Johnson is a skilled cardiologist who specializes in diagnosing and treating heart conditions with a patient-centered approach.'
        },
        {
            imgSrc: '/images/dt3.jpg',
            name: 'Dr. James Brown',
            description: 'Dr. James Brown is an orthopedic surgeon known for his expertise in treating musculoskeletal conditions and performing complex surgeries.'
        }
    ];

    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.addEventListener("click", () => {
                const content = cardContent[index] || {};

                document.querySelector(".detail").style.display = "block";
                document.querySelector(".content").innerHTML = `
                    <img src="${content.imgSrc}" alt="${content.name}">
                    <div class="contentText">
                        <h1>${content.name}</h1>
                        <p>${content.description}</p>
                    </div>
                `;

                if (closeBtn) {
                    closeBtn.addEventListener("click", () => {
                        document.querySelector(".detail").style.display = "none";
                    });
                }
            });
        });
    }

    // Connect button functionality
    const connectBtn = document.getElementById("connectBtn");

    if (connectBtn) {
        connectBtn.addEventListener("click", () => {
            const email = document.getElementById("email");
            const pass = document.getElementById("pass");

            if (email.value === "" || pass.value === "") {
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
