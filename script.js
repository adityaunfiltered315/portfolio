const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});

/* THEME */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});


// =========================
// MOBILE MENU OPEN
// =========================

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });
}

// =========================
// MOBILE MENU CLOSE
// =========================

if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
}

// =========================
// AUTO CLOSE MENU
// =========================

document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }
    });
});






/* ==========================================
            HERO TYPING EFFECT
========================================== */

const words = [
    "MBA Data Science & AI Student",
    "Full Stack Web Developer",
    "Business Analytics Enthusiast",
    "Machine Learning Learner",
    "Future AI Professional"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* ==========================================
            NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");
    }

});

/* ==========================================
            REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".hero-left, .hero-right"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    revealObserver.observe(el);

});

/* ==========================================
            PARALLAX ORBS
========================================== */

document.addEventListener(
    "mousemove",
    e => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;

        const orb1 =
            document.querySelector(".orb-1");

        const orb2 =
            document.querySelector(".orb-2");

        const orb3 =
            document.querySelector(".orb-3");

        if (orb1) {

            orb1.style.transform =
                `translate(${x}px, ${y}px)`;
        }

        if (orb2) {

            orb2.style.transform =
                `translate(${-x}px, ${-y}px)`;
        }

        if (orb3) {

            orb3.style.transform =
                `translate(${x / 2}px, ${-y / 2}px)`;
        }

    }
);

/* ==========================================
            MAGNETIC BUTTONS
========================================== */

const magneticButtons =
    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    );

magneticButtons.forEach(btn => {

    btn.addEventListener(
        "mousemove",
        e => {

            const rect =
                btn.getBoundingClientRect();

            const x =
                e.clientX - rect.left - rect.width / 2;

            const y =
                e.clientY - rect.top - rect.height / 2;

            btn.style.transform =
                `translate(${x * 0.15}px,
                ${y * 0.15}px)`;
        }
    );

    btn.addEventListener(
        "mouseleave",
        () => {

            btn.style.transform =
                "translate(0,0)";
        }
    );

});

/* ==========================================
            HERO CARD FLOATING
========================================== */

const heroCard =
    document.querySelector(".hero-card");

window.addEventListener(
    "mousemove",
    e => {

        if (!heroCard) return;

        const x =
            (window.innerWidth / 2 - e.clientX) / 50;

        const y =
            (window.innerHeight / 2 - e.clientY) / 50;

        heroCard.style.transform =
            `rotateY(${-x}deg)
             rotateX(${y}deg)`;
    }
);

/* ==========================================
            ACTIVE NAV LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");
            }
        });

    }
);

/* ==========================================
            LOADING ANIMATION
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );
    }
);





/* ==========================================
            ABOUT REVEAL
========================================== */

const aboutRevealElements =
    document.querySelectorAll(".reveal");

const aboutObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

aboutRevealElements.forEach(el => {

    aboutObserver.observe(el);

});


/* ==========================================
            JOURNEY BUTTON
========================================== */
const openJourney =
    document.getElementById("openJourney");

if (openJourney) {

    openJourney.addEventListener(
        "click",
        () => {

            console.log(
                "Journey Modal Open"
            );

        });

}

/* ==========================================
        EDUCATION JOURNEY MODAL
========================================== */

const openJourneyBtn =
    document.getElementById("openJourney");

const journeyModal =
    document.getElementById("journeyModal");

const closeJourneyBtn =
    document.getElementById("journeyClose");

const closeJourneyOverlay =
    document.getElementById("closeJourney");

/* OPEN MODAL */

if (openJourneyBtn) {

    openJourneyBtn.addEventListener(
        "click",
        () => {

            journeyModal.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}

/* CLOSE FUNCTION */

function closeJourneyModal() {

    if (!journeyModal) return;

    journeyModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "auto";

}

/* CLOSE BUTTON */

if (closeJourneyBtn) {

    closeJourneyBtn.addEventListener(
        "click",
        closeJourneyModal
    );

}

/* CLOSE OVERLAY */

if (closeJourneyOverlay) {

    closeJourneyOverlay.addEventListener(
        "click",
        closeJourneyModal
    );

}

/* ESC KEY CLOSE */

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape" &&
            journeyModal &&
            journeyModal.classList.contains(
                "active"
            )
        ) {

            closeJourneyModal();

        }

    }
);

/* ==========================================
        EDUCATION TABS
========================================== */

const journeyTabs =
    document.querySelectorAll(
        ".journey-tab"
    );

const journeyPanels =
    document.querySelectorAll(
        ".journey-panel"
    );

journeyTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            const target =
                tab.getAttribute(
                    "data-tab"
                );

            /* REMOVE ACTIVE */

            journeyTabs.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            journeyPanels.forEach(panel => {

                panel.classList.remove(
                    "active"
                );

            });

            /* ADD ACTIVE TAB */

            tab.classList.add(
                "active"
            );

            /* SHOW PANEL */

            const activePanel =
                document.getElementById(
                    target
                );

            if (activePanel) {

                activePanel.classList.add(
                    "active"
                );

            }

        }
    );

});

/* ==========================================
        BUTTON MAGNETIC EFFECT
========================================== */

const journeyButton =
    document.querySelector(
        ".journey-btn"
    );

if (journeyButton) {

    journeyButton.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                journeyButton.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left -
                rect.width / 2;

            const y =
                e.clientY -
                rect.top -
                rect.height / 2;

            journeyButton.style.transform =
                `translate(
                ${x * 0.08}px,
                ${y * 0.08}px
            )`;

        }
    );

    journeyButton.addEventListener(
        "mouseleave",
        () => {

            journeyButton.style.transform =
                "translate(0,0)";

        }
    );

}

/* ==========================================
        PANEL FADE ANIMATION
========================================== */

journeyPanels.forEach(panel => {

    panel.addEventListener(
        "animationend",
        () => {

            panel.style.opacity = "1";

        }
    );

});

/* ==========================================
        AUTO RESET TAB
========================================== */

function resetEducationTabs() {

    journeyTabs.forEach(btn => {

        btn.classList.remove(
            "active"
        );

    });

    journeyPanels.forEach(panel => {

        panel.classList.remove(
            "active"
        );

    });

    const firstTab =
        document.querySelector(
            '.journey-tab[data-tab="tenth"]'
        );

    const firstPanel =
        document.getElementById(
            "tenth"
        );

    if (firstTab) {

        firstTab.classList.add(
            "active"
        );

    }

    if (firstPanel) {

        firstPanel.classList.add(
            "active"
        );

    }

}

/* RESET WHEN MODAL CLOSE */

if (closeJourneyBtn) {

    closeJourneyBtn.addEventListener(
        "click",
        resetEducationTabs
    );

}

if (closeJourneyOverlay) {

    closeJourneyOverlay.addEventListener(
        "click",
        resetEducationTabs
    );

}


/* ==========================================
        🚀 INNOVATION LAB JS
========================================== */

const projectButtons =
    document.querySelectorAll(".project-item");

const projectPanels =
    document.querySelectorAll(".project-panel");

/* =========================
   SWITCH PROJECT FUNCTION
========================= */

projectButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const target =
            btn.getAttribute("data-project");

        /* REMOVE ACTIVE BUTTON */
        projectButtons.forEach(b => {
            b.classList.remove("active");
        });

        /* ADD ACTIVE BUTTON */
        btn.classList.add("active");

        /* SWITCH PANELS */
        projectPanels.forEach(panel => {

            panel.classList.remove("active");

            if (panel.id === target) {

                panel.classList.add("active");
            }

        });

    });

});

/* ==========================================
        SMOOTH PANEL ANIMATION FIX
========================================== */

projectPanels.forEach(panel => {

    panel.addEventListener("animationend", () => {

        panel.style.opacity = "1";
    });

});

/* ==========================================
        EXTRA PREMIUM HOVER GLOW
========================================== */

projectButtons.forEach(btn => {

    btn.addEventListener("mousemove", (e) => {

        const rect =
            btn.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        btn.style.background =
            `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,229,255,.25),
            transparent 60%
        )`;
    });

    btn.addEventListener("mouseleave", () => {

        btn.style.background = "";
    });

});

/* ==========================================
        AUTO DEFAULT LOAD FIX
========================================== */

window.addEventListener("load", () => {

    const activeBtn =
        document.querySelector(".project-item.active");

    if (activeBtn) {
        activeBtn.click();
    }

});







/* ==========================================
        SKILLS SECTION ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const skillCards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show-skill");

                }, index * 120);

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    skillCards.forEach(card => {
        observer.observe(card);
    });

});




/* ==========================================
   CERTIFICATIONS & ACHIEVEMENTS JS
========================================== */

/* ==========================================
   CERTIFICATIONS & ACHIEVEMENTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       OPEN CERTIFICATION POPUP
    ========================== */

    const openCertBtn =
        document.getElementById("openCertPopup");

    const certPopup =
        document.getElementById("certPopup");

    const closeCertBtn =
        document.getElementById("certPopupClose");

    const closeCertOverlay =
        document.getElementById("closeCertPopup");

    if (openCertBtn && certPopup) {

        openCertBtn.addEventListener("click", () => {

            certPopup.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }

    function closeCertificatePopup() {

        if (!certPopup) return;

        certPopup.classList.remove("active");

        document.body.style.overflow = "auto";

    }

    if (closeCertBtn) {

        closeCertBtn.addEventListener(
            "click",
            closeCertificatePopup
        );

    }

    if (closeCertOverlay) {

        closeCertOverlay.addEventListener(
            "click",
            closeCertificatePopup
        );

    }

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            certPopup &&
            certPopup.classList.contains("active")
        ) {

            closeCertificatePopup();

        }

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const certNumbers =
        document.querySelectorAll(".cert-number");

    if (certNumbers.length) {

        const counterObserver =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const counter =
                            entry.target;

                        const target =
                            Number(
                                counter.dataset.count
                            );

                        let current = 0;

                        const increment =
                            target / 60;

                        const updateCounter = () => {

                            current += increment;

                            if (current < target) {

                                counter.textContent =
                                    Math.floor(current);

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target + "+";

                            }

                        };

                        updateCounter();

                        counterObserver.unobserve(
                            counter
                        );

                    }

                });

            }, {
                threshold: 0.4
            });

        certNumbers.forEach(counter => {

            counterObserver.observe(counter);

        });

    }

    /* ==========================
       CARD REVEAL
    ========================== */

    const certCards =
        document.querySelectorAll(".cert-card");

    if (certCards.length) {

        const cardObserver =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        cardObserver.unobserve(
                            entry.target
                        );

                    }

                });

            }, {
                threshold: 0.15
            });

        certCards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.12}s`;

            cardObserver.observe(card);

        });

    }

    /* ==========================
       IMAGE PREVIEW MODAL
    ========================== */

    const imageModal =
        document.getElementById("certModal");

    const imageModalImg =
        document.getElementById("certModalImg");

    const imageCloseBtn =
        document.getElementById("certClose");

    const certificateImages =
        document.querySelectorAll(
            ".cert-image img"
        );

    certificateImages.forEach(img => {

        img.addEventListener("click", () => {

            if (!imageModal) return;

            imageModal.classList.add("active");

            imageModalImg.src = img.src;

        });

    });

    if (imageCloseBtn) {

        imageCloseBtn.addEventListener(
            "click",
            () => {

                imageModal.classList.remove(
                    "active"
                );

            }
        );

    }

    if (imageModal) {

        imageModal.addEventListener(
            "click",
            (e) => {

                if (e.target === imageModal) {

                    imageModal.classList.remove(
                        "active"
                    );

                }

            }
        );

    }

    /* ==========================
       NCC A AUTO SLIDER
    ========================== */

    const nccASlider =
        document.getElementById("nccASlider");

    const nccATitle =
        document.getElementById("nccATitle");

    const nccAText =
        document.getElementById("nccAText");

    if (
        nccASlider &&
        nccATitle &&
        nccAText
    ) {

        const nccAData = [

            {
                image:
                    "./assets/certificates/ncc-a.jpg",

                title:
                    "NCC 'A' Certificate",

                text:
                    "Successfully completed NCC training focused on discipline, teamwork, leadership and social responsibility."
            },

            {
                image:
                    "./assets/certificates/ncc-a-camp.jpg",

                title:
                    "NCC Camp Participation",

                text:
                    "Participated in NCC camps developing confidence, leadership skills and teamwork abilities."
            }

        ];

        let currentA = 0;

        setInterval(() => {

            currentA++;

            if (currentA >= nccAData.length) {

                currentA = 0;

            }

            nccASlider.src =
                nccAData[currentA].image;

            nccATitle.textContent =
                nccAData[currentA].title;

            nccAText.textContent =
                nccAData[currentA].text;

        }, 4000);

    }

    /* ==========================
       NCC B AUTO SLIDER
    ========================== */

    const nccBSlider =
        document.getElementById("nccBSlider");

    const nccBTitle =
        document.getElementById("nccBTitle");

    const nccBText =
        document.getElementById("nccBText");

    if (
        nccBSlider &&
        nccBTitle &&
        nccBText
    ) {

        const nccBData = [

            {
                image:
                    "./assets/certificates/ncc-b.jpg",

                title:
                    "NCC 'B' Certificate",

                text:
                    "Advanced NCC certification showcasing leadership skills, commitment, teamwork and discipline."
            },

            {
                image:
                    "./assets/certificates/ncc-b-camp.jpg",

                title:
                    "Advanced NCC Training",

                text:
                    "Completed advanced NCC activities focused on leadership, responsibility and national service."
            }

        ];

        let currentB = 0;

        setInterval(() => {

            currentB++;

            if (currentB >= nccBData.length) {

                currentB = 0;

            }

            nccBSlider.src =
                nccBData[currentB].image;

            nccBTitle.textContent =
                nccBData[currentB].title;

            nccBText.textContent =
                nccBData[currentB].text;

        }, 4500);

    }

});



/* ==========================================
        CONTACT FORM
========================================== */


/* ==========================================
        CONTACT + HIRE MODAL + WHATSAPP
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const whatsappNumber = "91XXXXXXXXXX";

    /* ==========================================
            ELEMENTS
    ========================================== */

    const hireModal =
        document.getElementById("hireModal");

    const openHireBtn =
        document.getElementById("openHireModal");

    const closeHireBtn =
        document.getElementById("closeHireModal");

    const modalOverlay =
        document.querySelector(".hire-modal-overlay");

    const toast =
        document.getElementById("toast");

    const contactForm =
        document.querySelector(".contact-form");

    const hireForm =
        document.querySelector(".hire-form");

    /* ==========================================
            OPEN MODAL
    ========================================== */

    function openModal() {

        hireModal.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    /* ==========================================
            CLOSE MODAL
    ========================================== */

    function closeModal() {

        hireModal.classList.remove("active");

        document.body.style.overflow = "";
    }

    /* ==========================================
            TOAST
    ========================================== */

    function showToast(message) {

        if (!toast) return;

        const text =
            toast.querySelector("span");

        text.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);
    }

    /* ==========================================
            OPEN HIRE MODAL
    ========================================== */

    if (openHireBtn) {

        openHireBtn.addEventListener(
            "click",
            openModal
        );

    }

    /* ==========================================
            CLOSE BUTTON
    ========================================== */

    if (closeHireBtn) {

        closeHireBtn.addEventListener(
            "click",
            closeModal
        );

    }

    /* ==========================================
            OVERLAY CLICK CLOSE
    ========================================== */

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }

    /* ==========================================
            ESC KEY CLOSE
    ========================================== */

    document.addEventListener(
        "keydown",
        (e) => {

            if (
                e.key === "Escape" &&
                hireModal.classList.contains("active")
            ) {

                closeModal();
            }

        }
    );

    /* ==========================================
            CONTACT FORM
    ========================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                const inputs =
                    contactForm.querySelectorAll(
                        "input, textarea"
                    );

                const name =
                    inputs[0].value;

                const email =
                    inputs[1].value;

                const subject =
                    inputs[2].value;

                const message =
                    inputs[3].value;

                const whatsappMessage = `
📩 New Contact Message

👤 Name:
${name}

📧 Email:
${email}

📌 Subject:
${subject}

💬 Message:
${message}
`;

                const url =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(
                    url,
                    "_blank"
                );

                showToast(
                    "Opening WhatsApp 🚀"
                );

                contactForm.reset();

            }
        );

    }

    /* ==========================================
            HIRE FORM
    ========================================== */

    if (hireForm) {

        hireForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                const fields =
                    hireForm.querySelectorAll(
                        "input, select, textarea"
                    );

                const name =
                    fields[0].value;

                const company =
                    fields[1].value;

                const email =
                    fields[2].value;

                const phone =
                    fields[3].value;

                const projectType =
                    fields[4].value;

                const budget =
                    fields[5].value;

                const timeline =
                    fields[6].value;

                const details =
                    fields[7].value;

                const whatsappMessage = `
🚀 NEW PROJECT INQUIRY

👤 Name:
${name}

🏢 Company:
${company}

📧 Email:
${email}

📱 Phone:
${phone}

💻 Project Type:
${projectType}

💰 Budget:
${budget}

⏳ Timeline:
${timeline}

📝 Project Details:
${details}
`;

                const url =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(
                    url,
                    "_blank"
                );

                showToast(
                    "Project Inquiry Sent 🚀"
                );

                hireForm.reset();

                closeModal();

            }
        );

    }

});