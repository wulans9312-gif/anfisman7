document.addEventListener("DOMContentLoaded", () => {
    // ELements
    const btnStart = document.getElementById("btnStart");
    const btnRef = document.getElementById("btnRef");
    const modalRef = document.getElementById("modalRef");
    const closeRef = document.getElementById("closeRef");
    const petaPembelajaran = document.getElementById("petaPembelajaran");
    const btnKesimpulan = document.getElementById("btnKesimpulan");
    
    const viewerModal = document.getElementById("contentViewer");
    const closeViewer = document.querySelector(".close-viewer");
    const materiItems = document.querySelectorAll(".materi-item");

    // 1. Mulai Eksplorasi Scroll ke Peta Pembelajaran
    btnStart.addEventListener("click", () => {
        petaPembelajaran.style.display = "block";
        petaPembelajaran.scrollIntoView({ behavior: "smooth" });
    });

    // 2. Modal Daftar Pustaka
    btnRef.addEventListener("click", () => {
        modalRef.classList.add("active");
    });

    closeRef.addEventListener("click", () => {
        modalRef.classList.remove("active");
    });

    // 3. Open Viewer Modal saat Menu Card diklik
    const menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetId = card.getAttribute("data-target");
            openMateri(targetId);
        });
    });

    btnKesimpulan.addEventListener("click", () => {
        openMateri("materiKesimpulan");
    });

    function openMateri(materiId) {
        materiItems.forEach(item => {
            item.style.display = "none";
        });

        const activeMateri = document.getElementById(materiId);
        if (activeMateri) {
            activeMateri.style.display = "block";
            viewerModal.classList.add("active");
        }
    }

    // Close Viewer Smooth Zoom Out
    closeViewer.addEventListener("click", () => {
        viewerModal.classList.remove("active");
    });

    // 4. Toggle Interactive Sub-Buttons (Klik untuk Penjelasan)
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetInfoId = btn.getAttribute("data-info");
            const targetInfo = document.getElementById(targetInfoId);

            if (targetInfo) {
                // Toggle kelas hidden
                if (targetInfo.classList.contains("hidden")) {
                    targetInfo.classList.remove("hidden");
                    btn.classList.add("active");
                } else {
                    targetInfo.classList.add("hidden");
                    btn.classList.remove("active");
                }
            }
        });
    });
});