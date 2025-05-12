document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scroll-container");
  const content = document.querySelector(".scroll-content");

  if (container && content) {
    // Duplicate content for smooth looping
    content.innerHTML += content.innerHTML;

    let totalWidth = content.scrollWidth / 2;

    gsap.to(content, {
      x: () => -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => x % -totalWidth), // Ensures smooth infinite loop
      },
    });

    // Pause on hover, resume on mouse leave
    container.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
    container.addEventListener("mouseleave", () =>
      gsap.globalTimeline.resume()
    );
  }
});
