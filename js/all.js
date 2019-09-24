$(document).ready(function () {
    // 愛心
    $(".item-icon").on("click", function (e) {
        e.preventDefault();
        $(this).find(".heart_border").toggleClass("d-none");
        $(this).find(".heart").toggleClass("d-none");
    });
});