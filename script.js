document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen navigasi
    const navLinks = document.querySelectorAll(".navbar a");

    // Tambahkan event listener untuk setiap tombol navigasi agar tidak error di halaman lain
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Hindari perilaku default
            window.location.href = this.getAttribute("href"); // Redirect ke halaman terkait
        });
    });

    // Ambil semua elemen quotes yang bisa diklik
    const quoteButtons = document.querySelectorAll(".quote-box");
    const modal = document.getElementById("modal");
    const quoteText = document.getElementById("quote-text");
    const closeModal = document.getElementById("close-modal");

    // Pastikan modal hanya berjalan jika elemen modal ada (hanya di halaman yang relevan)
    if (modal && quoteText && closeModal) {
        quoteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const quote = this.getAttribute("data-quote"); // Ambil teks dari atribut data-quote
                if (quote) {
                    quoteText.innerText = quote; // Set teks modal
                    modal.classList.remove("hidden"); // Tampilkan modal
                }
            });
        });

        closeModal.addEventListener("click", function () {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
});




