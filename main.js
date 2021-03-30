window.addEventListener("load", function () {
    const tl = gsap.timeline();

    tl.to(".panels .panel:nth-child(1), .panel:nth-child(6)", {
        scaleY: 1,
        duration: 1,
        ease: Power2.easeOut,
    })
        .to(
            ".panels .panel:nth-child(2), .panels .panel:nth-child(3), .panels .panel:nth-child(4), .panel:nth-child(5)",
            { scaleY: 1, duration: 0.5, ease: Power2.easeOut },
            "-=0.5"
        )
        .to(".panels .panel", {
            scaleY: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: Power2.easeOut,
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
});
