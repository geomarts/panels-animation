const tl = gsap.timeline({ paused: true });
tl.to(".panels .panel:first-child, .panels .panel:last-child", {
    scaleY: 1,
    duration: 1,
})
    .to(
        ".panels .panel:nth-child(n+2), .panels .panel:nth-child(-n+5)",
        { scaleY: 1, duration: 0.5, ease: "power2.out" },
        "-=0.5"
    )
    .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
    })
    .to(".panels", { autoAlpha: 0, duration: 0.3 })
    .to(
        ".main-content",
        {
            clipPath: "circle(100%)",
            duration: 1,
        },
        "-=.3"
    );
//console.log(tl.duration());
window.addEventListener("load", function () {
    tl.play();
});
