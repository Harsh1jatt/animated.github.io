Shery.mouseFollower();

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
})

gsap.from('.nlink', {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate('#headings h1', {
    style: 1,
    y: 20,
    delay: 0.1,
    duration: 2,
    ease: 'cubic-bezier(0.23,1,0.320,1)',
    multiplier: 0.1
})

gsap.from('.anim2', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .3,
    ease: Expo
})

Shery.textAnimate('.text', {
    style: 2,
})


Shery.imageEffect('#imagentext img', {
    style: 3,
    config: {"uFrequencyX":{"value":11,"range":[0,100]},"uFrequencyY":{"value":12.21,"range":[0,100]},"uFrequencyZ":{"value":45.56,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})
Shery.imageEffect('.imgeff img', {
    style: 5,
    config: {"a":{"value":1.36,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

gsap.from('#imagentext img', {
    z: 30,
    opacity: 0,
    duration: 2,
    ease: Expo.easeinout
})
 
Shery.imageEffect('#bimg', {
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.337078651685393},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.53,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.23,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":35}},"discard_threshold":{"value":0.55,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":18.32,"range":[0,100]}},
    gooey: true,
})

document.querySelector("#ftext button")
.addEventListener("mouseover", function() {
    gsap.to("video", {
        opacity: 1,
        stagger: 2,
        
    })
})
document.querySelector("#ftext button")
.addEventListener("mouseleave", function() {
    gsap.to("video", {
        opacity: 0,
        stagger: 2,

    })
})
