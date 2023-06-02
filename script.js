$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  const text = document.querySelector(".text p");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 7.6}deg)">${char}</span>`
    )
    .join("");

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".leaf").css("transform", "rotate(" + scrollTop / 2 + "deg)");
  });
});
