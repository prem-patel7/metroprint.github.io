//sticky navbar
const section_hero = document.querySelector(".section-hero")

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false 
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");

}, {
    root: null,
    rootMargin:" -70px",
    threshold: 0,
})

observer.observe(section_hero)