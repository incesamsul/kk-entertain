// Get the current viewport width
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// Define the function to be executed based on the viewport size
function cekDevices() {
    if (viewportWidth < 576) {
        // Execute code for mobile screens
        console.log('Mobile screen detected.');
        scrollMagicAnimationMobile();
    } else {
        // Execute code for larger screens
        console.log('Desktop or tablet screen detected.');
        scrollMagicAnimation();
    }
}

// Execute the function initially
cekDevices();

// Add an event listener to listen for changes in viewport size
window.addEventListener('resize', function () {
    // Get the new viewport width
    var newViewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Update the viewport width variable
    viewportWidth = newViewportWidth;

    // Execute the function again with the updated viewport size
    cekDevices();
});




function scrollMagicAnimation() {

    var tlFirstScroll = new TimelineMax();
    let light1 = '.light1';
    let light2 = '.light2';
    let heroText = '.hero-text';
    let lightingText = '.lightning-text';
    let light1TextTop = '.light1-text-top';
    let light2TextTop = '.light2-text-top';
    let middleText = '.middle-text';
    let middleTextSound = '.middle-text-sound';
    let sound = '.sound';

    tlFirstScroll
        .from(heroText, 1, { opacity: 1 })
        .to(heroText, 5, { opacity: 0 })

        .to(light1TextTop, 6, { opacity: 1, scale: 1.5, y: "-180%", rotate: "10deg", prespective: "500px", skewX: "10deg" }, "-=7")
        .to(light1TextTop, 6, { opacity: 0, scale: 0, y: "180%", rotate: "10deg", prespective: "500px", skewX: "10deg" }, "+=10")

        .to(light2TextTop, 6, { opacity: 1, scale: 1.5, y: "-180%", rotate: "-10deg", prespective: "500px", skewX: "-10deg" }, "-=22")
        .to(light2TextTop, 6, { opacity: 0, scale: 0, y: "180%", rotate: "-10deg", prespective: "500px", skewX: "-10deg" }, "-=6")





    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: "100%",
        triggerHook: 0,

    })
        .setTween(tlFirstScroll)
        .addTo(controller)


    var tlSecondScroll = new TimelineMax();

    tlSecondScroll
        .to(light1, 10, { opacity: 0, scale: 1, y: "150%", x: "-250%" })
        .to(light2, 10, { opacity: 0, scale: 1, y: "150%", x: "380%" }, "-=10")
        .to(middleText, 6, { opacity: 1, scale: 5, rotate: "0deg", prespective: "500px", skewX: "0deg" }, "-=10")
        .to(middleText, 6, { opacity: 1, y: "-2300%", scale: 10, rotate: "20deg", prespective: "500px", skewX: "10deg" }, "-=3")
        .to(middleTextSound, 6, { opacity: 1, y: "-1100%", scale: 10, rotate: "50deg", prespective: "500px", skewX: "10deg" }, "-=8")
        .to(middleTextSound, 6, { opacity: 1, y: "-1100%", scale: 5, rotate: "0deg", prespective: "500px", skewX: "0deg" }, "-=8")
        .to(sound, 6, { y: "-60%", opacity: 1, scale: 1 }, "-=6")


    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#lightning',
        triggerHook: 0,
        duration: "100%",
    })
        .setTween(tlSecondScroll)
        .setPin('#lightning')
        .addTo(controller);


    var tlThirdScroll = new TimelineMax();

    tlThirdScroll
        .to(sound, 6, { scale: 95, x: "-3200%", y: "-3450%" })

    // .to(function () { }, 0, { onComplete: function () { $('body').addClass('bg-black'); }, onReverseComplete: function () { $('body').removeClass('bg-black'); }, immediateRender: false })


    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#sound',
        triggerHook: 0.6,
        duration: "100%",
    })
        .setTween(tlThirdScroll)
        .setPin('#sound')
        // .setClassToggle('body', 'bg-black')
        .addTo(controller);


    var tlFourthScroll = new TimelineMax();

    tlFourthScroll
        .to(sound, 6, { display: "none" }, "-=16")
        .to('.acara-text', 10, { opacity: 1 })
        .to(function () { }, 0, { onComplete: function () { $('#acara').addClass('bg-black'); }, onReverseComplete: function () { $('#acara').removeClass('bg-black'); }, immediateRender: false })

    // .to(function () { }, 0, { onComplete: function () { $('body').addClass('bg-black'); }, onReverseComplete: function () { $('body').removeClass('bg-black'); }, immediateRender: false })


    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#acara',
        triggerHook: 1,
        duration: "100%",
    })
        .setTween(tlFourthScroll)
        .setClassToggle('body', 'bg-black')
        .addTo(controller);

    var tlFifthScroll = new TimelineMax();

    tlFifthScroll
        .to('.vid-overlay', 0.5, { opacity: 0.8 })
        .to('.text-overlay', 0.5, { opacity: 1 })
        .to('.text-overlay', 0.5, { opacity: 0 })
        .to('.video', 0.5, { opacity: 0 })
        .to('.video', 0.5, { src: 'vids/taspen.mp4' })
        .to('.video', 0.5, { opacity: 1 })
        .to('.text-overlay-2', 0.5, { opacity: 1 })

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#maxie-event-vid',
        triggerHook: 0,
        duration: "7000",
    })
        .setTween(tlFifthScroll)
        .setClassToggle('body', 'bg-black')
        .setPin('#maxie-event-vid')
        .addTo(controller);

    $(".reveal-on-scroll .item").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8, // Trigger at 80% of viewport height
            duration: "100%", // Reveal over full height of item
        })
            .setClassToggle(this, "reveal") // Add reveal class to item
            .addTo(controller);
    });

}


function scrollMagicAnimationMobile() {


    var controller = new ScrollMagic.Controller();

    $(".reveal-on-scroll .item").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8, // Trigger at 80% of viewport height
            duration: "100%", // Reveal over full height of item
        })
            .setClassToggle(this, "reveal") // Add reveal class to item
            .addTo(controller);
    });


}