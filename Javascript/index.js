"use strict"
    const easeAnimation = "sine.out";
    const easeDuration = .8;
    const yValue = "100%"

document.querySelector('.nav_mobile__menu').addEventListener('click', () => {

    document.querySelector('.modal-container').style.display = 'block'
    gsap.fromTo(".modal", {opacity: 0, y: "-100%"}, {opacity: 1, y: "0%", duration: .3})
    document.body.style.overflow = 'hidden';
})

document.querySelector('.modal-container').addEventListener('click', (e) => {

    // animate the modal, then diplay to none the container

    gsap.fromTo(".modal", {opacity: 1, y: "0%"}, {opacity: 0, y: "-100%", duration: .3})
    .then(() => e.target.style.display = 'none');
    document.body.style.overflowY = 'auto';
})

window.addEventListener('scroll', (e) => {

    document.body.style.overflowX = 'hidden';

    // For the Details
    const title = document.querySelector('.div_first__title');
    const paragraph = document.querySelector('.div_first__paragraph');
    const button = document.querySelector('.div_first__button');

    // For the "Why choose Easybank" section
    const whyChooseTitle = document.querySelector('.title_section__title');
    const whyChooseParagraph = document.querySelector('.title_section__paragraph');
    const firstInfo = document.querySelector('#first-info')
    const secondInfo = document.querySelector('#second-info')
    const thirdInfo = document.querySelector('#third-info')
    const fourthInfo = document.querySelector('#fourth-info')

    const articleSectionTitle = document.querySelector('.title-section__title');
    const firstArticle = document.querySelector('#first-article');
    const secondArticle = document.querySelector('#second-article');
    const thirdArticle = document.querySelector('#third-article');
    const fourthArticle = document.querySelector('#fourth-article');

    if (document.querySelector('.div_first__details').getBoundingClientRect().top <= window.innerHeight) {
        verticalAnimation("-100%", '.div_first__title', title)
        verticalAnimation("100%", '.div_first__paragraph', paragraph)
        verticalAnimation('-20%', '.div_first__button', button)
    }

    // Why choose Easybank section ;
    if (document.querySelector('.div_second__content').getBoundingClientRect().top <= window.innerHeight) {
        verticalAnimation("-100%", '.title_section__title', whyChooseTitle)
        verticalAnimation("100%", '.title_section__paragraph', whyChooseParagraph)
        verticalAnimation(yValue, '#first-info', firstInfo)
        verticalAnimation(yValue, '#second-info', secondInfo)
        verticalAnimation(yValue, '#third-info', thirdInfo)
        verticalAnimation(yValue, '#fourth-info', fourthInfo)
    }

    if (document.querySelector('.div_third__content').getBoundingClientRect().top <= window.innerHeight) {

        
        verticalAnimation("-100%", '.title-section__title', articleSectionTitle)
        verticalAnimation(yValue, '#first-article', firstArticle)
        verticalAnimation(yValue, '#second-article', secondArticle)
        verticalAnimation(yValue, '#third-article', thirdArticle)
        verticalAnimation(yValue, '#fourth-article', fourthArticle)
    }
})

 function verticalAnimation(yValue = "100%", id, element) {


    /** I use destructuring because we only need two properties 
     *  of the getBoundingClientRect() method. */
    const {top, bottom} = element.getBoundingClientRect();

    if ((top <= window.innerHeight)) {
        gsap.to(id, {x: "0%", duration: easeDuration, ease: easeAnimation});
        gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {x: yValue, ease: "power1"});
        element.style.opacity = '0';
    } 

    if ((bottom >= 0)) {
        gsap.to(id, {x: "0%", duration: easeDuration, ease: easeAnimation});
        gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {x: yValue, ease: "power1"});
        element.style.opacity = '0';
    }
}

function horizontalAnimation(yValue = "100%", id, element) {


    /** I use destructuring because we only need two properties 
     *  of the getBoundingClientRect() method. */
    const {top, bottom} = element.getBoundingClientRect();

    if ((top <= window.innerHeight)) {
        gsap.to(id, {y: "0%", duration: easeDuration, ease: easeAnimation});
        gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: yValue, ease: "power1"});
        element.style.opacity = '0';
    } 

    if ((bottom >= 0)) {
        gsap.to(id, {y: "0%", duration: easeDuration, ease: easeAnimation});
        gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: yValue, ease: "power1"});
        element.style.opacity = '0';
    }
}