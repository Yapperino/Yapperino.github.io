/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

let indexes = {
    bestseller: 0,
    review: 0
};

function moveSlide(type, direction) {
    const wrapper = document.getElementById(`${type}Wrapper`);
    const slides = wrapper.querySelectorAll(".carousel-item");
    const total = slides.length;
    const visible = 3;

    const maxIndex = total - visible;
    indexes[type] += direction;

    if (indexes[type] < 0) {
        indexes[type] = maxIndex;
    } else if (indexes[type] > maxIndex) {
        indexes[type] = 0;
    }

    const slideWidth = wrapper.clientWidth / total * visible;
    const moveBy = wrapper.clientWidth / total * indexes[type] * (total / visible);

    wrapper.style.transform = `translateX(-${moveBy}px)`;
}