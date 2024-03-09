document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".cardAnimales");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.classList.toggle("clicked");
        });
    });
});
