/* Promo slider */

const promoSlider = document.querySelector(".promo-slider");
const promoSliderButtons = promoSlider.querySelector(".promo-slider-toggles");
const promoSlides = promoSlider.querySelectorAll(".promo-slide");

const promoSliderButtonClickHandler = ((evt) => {
  evt.preventDefault();
  const {target} = evt;
  if (target.tagName !== "BUTTON") {
    return;
  }
  if (target.classList.contains("promo-slider-toggle-active")) {
    target.blur();
    return;
  }
  const activeButtonPromo = promoSliderButtons.querySelector(".promo-slider-toggle-active");
  activeButtonPromo.classList.remove("promo-slider-toggle-active");
  const activeSlidePromo = promoSlider.querySelector(".promo-slide-current");
  activeSlidePromo.classList.remove("promo-slide-current");

  promoSlides.forEach((item) => {

    if (item.className.includes(target.id)) {
      item.classList.add("promo-slide-current");
      target.classList.add("promo-slider-toggle-active");
      target.blur();
    }
  });
});
promoSliderButtons.addEventListener("click", promoSliderButtonClickHandler);

/* Services slider */

const servicesSlider = document.querySelector(".services-slider");
const servicesSliderButtons = servicesSlider.querySelector(".services-toggles");
const servicesSlides = servicesSlider.querySelectorAll(".services-slide");

const servicesSliderButtonClickHandler = ((evt) => {
  evt.preventDefault();
  const {target} = evt;
  if (target.tagName !== "BUTTON") {
    return;
  }
  if (target.classList.contains("services-toggle-active")) {
    target.blur();
    return;
  }
  const activeButtonServices = servicesSliderButtons.querySelector(".services-toggle-active");
  activeButtonServices.classList.remove("services-toggle-active");
  const activeSlideServices = servicesSlider.querySelector(".services-slide-current");
  activeSlideServices.classList.remove("services-slide-current");

  servicesSlides.forEach((item) => {

    if (item.className.includes(target.id)) {
      item.classList.add("services-slide-current");
      target.classList.add("services-toggle-active");
      target.blur();
    }
  });
});
servicesSliderButtons.addEventListener("click", servicesSliderButtonClickHandler);
