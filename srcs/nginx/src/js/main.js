/* eslint-disable no-undef */
var initialize = false;
const l = (type, variable) => console.log(`${type} -----> ${variable}`);

window.addEventListener('load', function (event) {
  init();
});

function init (){
  if (!initialize) {
    this.sel = {
      body: document.getElementsByTagName('body')[0],
      bodySite: document.getElementsByClassName('site')[0],
      footer: document.getElementsByClassName('footer')[0],
      burger: document.getElementById('menu-burger'),
      burgerLogo: document.getElementById('burger-logo'),
      logo: document.getElementsByClassName('logo')[0],
      menu: document.getElementById('menu'),
      loader: document.getElementById('loader'),
      loaderImage: document.getElementById('loader-logo'),
      bookingDiv: document.getElementById('cta-booking'),
      bookingForm: document.getElementsByClassName('form-booking')[0],
      bookingIcon: document.getElementById('booking_svg'),
      socialIcon: document.getElementsByClassName('social')[0],
      formLabel: document.getElementsByTagName('label'),
      formInput: document.getElementsByClassName('form-inp'),
      preBtn: document.getElementsByClassName('precedent-input')[0],
      sucBtn: document.getElementsByClassName('successive-input')[0],
      burgerLink: document.getElementsByClassName('burger-link'),
      // chefShop: document.getElementsByClassName('chef-shop')[0],
      // chefCut: document.getElementsByClassName('chef-cut')[0],
      firstHeader: document.getElementsByClassName('first-header')[0],
      // secondHeader: document.getElementsByClassName('local-header')[0],
      photoContainer: document.getElementById('product-photo'),
      mixingContainer: document.getElementById('mixing'),
      photo: document.getElementById('the-product'),
      mixing: document.getElementById('mixing-child'),
      article: document.getElementsByClassName('article-container')[0],
      mixingMobileContainer: document.getElementById('mixing-mobile-container'),
      topHeader: document.getElementsByClassName('top-header')[0],
      bottomHeader: document.getElementsByClassName('bottom-header')[0],
      proposteBody: document.getElementsByClassName('proposte-body')[0]
    };
    let { sel } = this;

    this.opt = {
      lastMedia: '',
      bookingToggle: false,
      burgerToggle: false,
      previousLabel: null,
      lastScroll: window.scrollY,
      showed: 0,
      lastMobileInput: '',
      formInputArray: Array.prototype.slice.call(sel.formInput),
      focusOnceInput: true,
      inputIndex: '',
      precStop: false,
      bodySiteOffset: (media, colTot, cols) => {
        return (((window.innerHeight / colTot) * cols) / media) * 100 + 'vw';
      },
      media: () => {
        let query;
        if (window.innerWidth <= 600) {
          query = [600, 10];
        } else if (window.innerWidth <= 700){
          query = [700, 16];
        } else if (window.innerWidth <= 1300){
          query = [1300, 16];
        } else if (window.innerWidth <= 1920){
          query = [1920, 24];
        } else {
          query = [2560, 24];
        }

        return query;
      },
      isMobile: () => {
        let uAgent = navigator.userAgent||navigator.vendor||window.opera;
        return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(uAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(uAgent.substr(0,4)));
      },
      animatableFilo: () => {
        let arr = [];
        let animatable = ["first-scene", "first-quote", "first-presentation", "second-scene", "second-quote", "second-presentation", "third-scene", "third-quote", "third-presentation"]

        for(let i = 0; i < animatable.length; i++){
          arr.push(document.getElementById(animatable[i]));
        }

        return arr;
      },
      scrollYType: () => {
        return (opt.overlayScroll === undefined)? window.scrollY : opt.overlayScroll.scroll().y.position;
      }
    };
    let { opt } = this;

    this.tl = {
      loader: new TimelineMax({ onComplete: showElements })
        .to('#loader .top', 0.6, { ease: Power2.easeOut, right: 0 }, 0)
        .to('#loader .right', 0.6, { ease: Power2.easeOut, bottom: 0 }, 0)
        .to('#loader .bottom', 0.6, { ease: Power2.easeOut, left: 0 }, 0)
        .to('#loader .left', 0.6, { ease: Power2.easeOut, top: 0 }, 0)
        .to('#loader .cover', 0.5, { ease: Power2.easeOut, bottom: 0 }, 0.6)
        .to('#loader .loaderLoading', 0.7, { ease: Power2.easeIn, top: 0, bottom: 0, left: 0, right: 0, x: 0, y: 0 }, 0.8),

      fixedHeader: new TimelineMax({ paused: true })
        .staggerTo('.letter', 0.5, { left: 0, ease: Power2.easeIn }, 0.04)
        .to(sel.logo, 0.5, { autoAlpha: 1, ease: Power2.easeIn }, 0)
        .to(sel.bookingIcon, 1, { y: 0, autoAlpha: 1, ease: Power2.easeOut }, 1.2)
        .to(sel.socialIcon, 1, { y: 0, autoAlpha: 1, ease: Power2.easeOut }, 1.2),

      firstHeader: new TimelineMax({ paused: true })
        .to('.first-title>span', 2, { y: 0, ease: Power2.easeOut }, 0.4)
        .to('.first-header>.image', 1.5, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.2)
        .to('.first-header>.overlay', 1.5, { autoAlpha: 1, x: 0, ease: Power2.easeOut }, 0.6),

      secondHeader: new TimelineMax({ paused: true })
        .to('.second-title>span', 2, { y: 0, ease: Power2.easeOut }, 0.4)
        .to('.local-header>.image', 1.5, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.2)
        .to('.local-header>.overlay', 1.5, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.6),

      booking: new TimelineMax({ paused: true, onReverseComplete: resetForm })
        .to(sel.bookingDiv, 0, { zIndex: 100 }, 0)
        .to(sel.bookingDiv, 0.5, { autoAlpha: 1 }, 0),

      burgerIcon: new TimelineMax({ paused: true, repeat: -1, yoyo: true })
        .to('#waveOutOne', .2, { ease: Power2.easeIn, morphSVG:"M5,57c28,1,41,2.77,63,1,28.49-2.28,36-16.13,62.81-16,28.41.14,34.08,22,62.47,22.2,27,.14,34.69-19.63,63.33-21.89,20.83-1.64,42,6.83,62.89,21.89" }, 0)
        .to('#waveOutTwo', .2, { ease: Power2.easeIn, morphSVG:"M5,20c28,1,41,2.77,63,1,28.49-2.28,36-16.13,62.81-16,28.41.14,34.08,22.05,62.47,22.2,27,.14,34.69-19.63,63.33-21.89,20.83-1.64,42,6.83,62.89,21.89" }, 0)
        .to('#waveOutOne', .2, { ease: Power2.easeIn, morphSVG:"M5,67c28,1,41-4.23,63-6,28.49-2.28,35.19-7.13,62-7,28.41.14,35.61,8.85,64,9,27,.14,34.36-12.74,63-15,20.83-1.64,41.61,4.14,62.5,19.2" }, 0.2)
        .to('#waveOutTwo', .2, { ease: Power2.easeIn, morphSVG:"M5,27c28,1,41-4.23,63-6,28.49-2.28,35.19-7.13,62-7,28.41.14,35.61,8.85,64,9,27,.14,34.36-12.74,63-15,20.83-1.64,41.61,4.14,62.5,19.2" }, 0.2)
        .to('#waveOutOne', .2, { ease: Power2.easeIn, morphSVG:"M4,67c28,1,41-4.23,63-6,28.49-2.28,35.19-.13,62,0,28.41.14,35.61,1.85,64,2,27,.14,36.36.26,65-2,20.83-1.64,42-18,61-8" }, 0.4)
        .to('#waveOutTwo', .2, { ease: Power2.easeIn, morphSVG:"M5,27c28,1,41-4.23,63-6,28.49-2.28,35.19-.13,62,0,28.41.14,35.61,1.85,64,2,27,.14,36.36.26,65-2,20.83-1.64,42-18,61-8" }, 0.4)
        .to('#waveOutOne', .5, { ease: Power2.easeOut, morphSVG:"M6,61.9C26.9,46.84,48.06,38.37,68.9,40c28.64,2.26,36.33,22,63.33,21.89,28.38-.2,34.06-22.06,62.47-22.2,26.79-.13,34.42,19.3,62.9,21.58,22,1.77,43.49-7.73,62.9-21.58" }, 0.6)
        .to('#waveOutTwo', .5, { ease: Power2.easeOut, morphSVG:"M6,27.2C26.9,12.14,48.07,3.67,68.9,5.31c28.64,2.26,36.33,22,63.33,21.89,28.39-.15,34.06-22.06,62.48-22.2,26.78-.13,34.41,19.3,62.89,21.58,22,1.77,43.49-7.73,62.9-21.58" }, 0.6),

      openMenu: new TimelineMax({ paused: true, onReverseComplete: setMeasure })
        .to(sel.burgerLogo, 0.3, { scale: 0 }, 0)
        .to(sel.menu, 0.2, { left: 0, right: 0 }, 0)
        .to('.header-background', 0.2, { right: '100vw' }, 0)
        .set('.social-ico',{ display: 'none' }, 0.15)
        .set('.social-ico-white', { display: 'block' }, 0.3)
        .to('#booking_svg', 0.4, { autoAlpha: 0 }, 0.3)
        .staggerTo('.social-ico-white', 0.2, { autoAlpha: 1 }, 0.1, 0.35)
        .to('.logo *', 0.3, { display: 'none' }, 0.3)
        .to('#burger-cross', 0.3, { scale: 1 }, 0.2)
        .staggerTo('.burger-li', 0.3, { autoAlpha: 1, y: 0 }, 0.1, 0.7),

      filoScene: (selector) => {
        let timeline = new TimelineMax({ paused: true })
          .staggerTo(`#${selector} .letter`, 0.2, { top: 0, ease: Power2.easeInBack }, 0.05, 0.4)
          .to(`#${selector} .ver-image`, 0.9, { autoAlpha: 1, top: 0 }, 0 )
          .to( `#${selector} .hor-image`, 1.1, { left: 0, autoAlpha: 1, ease: Power2.easeOut }, 0.3);

        return timeline;
      },

      filoQuote: (selector) => {
        let timeline = new TimelineMax({ paused: true })
          .to(`#${selector} .text`, 0.9, { top: 0, autoAlpha: 1}, 0)
          .to(`#${selector} .author`, 0.4, { autoAlpha: 1}, 0.4)
          .to(`#${selector} .im`, 0.6, { autoAlpha: 1}, 0.6);

        return timeline;
      },

      filoPresentation: (selector) => {
        let timeline = new TimelineMax({ paused: true })
          .to(`#${selector} span`, 0.5, { top: 0, autoAlpha: 1}, 0)
          .to(`#${selector} .hor-image`, 0.6, {right: 0, autoAlpha: 1}, 0.2)
          .to(`#${selector} .ver-image`, 0.6, {top: 0, autoAlpha: 1}, 0.4)

        return timeline;
      }

    };
    let { tl } = this;

    // if not mobile device load OverlayScrollbarPlugin
    if (!opt.isMobile()){
      opt.overlayScroll = OverlayScrollbars(document.querySelectorAll('body'), {
        className: "os-theme-dark",
        callbacks:{
          onScroll: siteScroll
        } });

      if (sel.body.dataset.page === "8dG3yTe") {
        opt.articleScroll = OverlayScrollbars(document.querySelectorAll('.materia-prima, .article-navigation'), {
          className: "os-theme-dark",
          sizeAutoCapable: false
        });
      }

    } else {
      window.addEventListener('scroll', siteScroll);
    }

    // set lastMedia property
    opt.lastMedia = opt.media()[0];
    siteOffset();


    window.addEventListener('resize', siteOffset);

    sel.burger.addEventListener('click', burgerToggle);

    sel.burger.addEventListener('mouseenter', burgerHover);

    sel.burger.addEventListener('mouseleave', burgerOut);

    sel.bookingIcon.addEventListener('click', showBookingForm);

    sel.bookingDiv.addEventListener('click', closeForm);

    initialize = true;
  }
}

const siteOffset = () => {
  // resize main top on media query change only
  if ((opt.lastMedia !== opt.media()[0] || !initialize) && sel.body.dataset.page !== "8dG3yTe" ){
    l('called', 'resize');
    if (window.innerWidth <= 600){
      TweenMax.set([ sel.bodySite, sel.footer ], { top: opt.bodySiteOffset(...opt.media(), 2) });
    } else if (window.innerWidth <= 1300){
      TweenMax.set([ sel.bodySite, sel.footer ], { top: opt.bodySiteOffset(...opt.media(), 5) });
    } else if (window.innerWidth <= 1920) {
      TweenMax.set([ sel.bodySite, sel.footer ], { top: opt.bodySiteOffset(...opt.media(), 6) });
    } else {
      TweenMax.set([ sel.bodySite, sel.footer ], { top: opt.bodySiteOffset(...opt.media(), 7) });
    }
    opt.lastMedia = opt.media()[0];
  }

  // TODO optimize
  if (sel.body.dataset.page === "8dG3yTe"){
    let perc = (a) => (a / window.innerHeight) * 100;
    let topHead = perc(sel.topHeader.offsetHeight);
    let bottomHead = perc(sel.bottomHeader.offsetHeight);
    let height = 100 - topHead - bottomHead;

    sel.proposteBody.style.height = height + 'vh';
    sel.proposteBody.style.top = sel.topHeader.getBoundingClientRect().bottom + 'px';

    opt.lastMedia = opt.media()[0];
  }

  // close the burger menu and remove the link listeners
  if(opt.media()[0] > 1300 && opt.burgerToggle){
    tl.openMenu.restart().reverse();
    for (let i = 0; i < sel.burgerLink.length; i++) {
      sel.burgerLink[i].removeEventListener('mouseenter', burgerLinkDisplay);
      sel.burgerLink[i].removeEventListener('mouseleave', burgerLinkOut);
    }
    opt.burgerToggle = false;
  }

  if(opt.media()[0] > 700 && sel.body.dataset.page === "8dG3yTe"){
    opt.articleScroll = OverlayScrollbars(document.querySelectorAll('.materia-prima, .article-navigation'), {
      className: "os-theme-dark",
      sizeAutoCapable: false
    });
  }

  if(opt.media()[0] < 701 && sel.body.dataset.page === "8dG3yTe" && opt.articleScroll[0].hasOwnProperty('sleep')){
      opt.articleScroll[0].destroy();
      opt.articleScroll[1].destroy();
  }
};

const burgerToggle = () => {
  if (!opt.burgerToggle) {
    tl.burgerIcon.progress(0).stop();

    for (let i = 0; i < sel.burgerLink.length; i++){
      sel.burgerLink[i].addEventListener('mouseenter', burgerLinkDisplay);
      sel.burgerLink[i].addEventListener('mouseleave', burgerLinkOut);
    }

    tl.openMenu.timeScale(0.8).play();
  } else {
    tl.openMenu.timeScale(1.5).reverse();

    for (let i = 0; i < sel.burgerLink.length; i++) {
      sel.burgerLink[i].removeEventListener('mouseenter', burgerLinkDisplay);
      sel.burgerLink[i].removeEventListener('mouseleave', burgerLinkOut);
    }
  }

  opt.burgerToggle = !opt.burgerToggle;
};

const setMeasure = () => {
  TweenMax.set(sel.menu, { left: '100vw', right: '-100vw'});
};

const burgerLinkDisplay = (e) => {
  let img = e.target.href.slice(e.target.href.lastIndexOf('/') + 1);
  TweenMax.to('#showcase', 0, { autoAlpha: 0, ease: Power2.easeIn, background: `url('assets/img/link/${img || 'grafana'}.jpg') no-repeat 50%`, backgroundSize: 'cover', onComplete: () => {
    TweenMax.to('#showcase', 0.5, { autoAlpha: 1});
    }})
};

const burgerLinkOut = (e) => {
  TweenMax.to('#showcase', 0.4, { autoAlpha: 0 });
};

const burgerHover = () => {
  tl.burgerIcon.play();
};

const burgerOut = () => {
  tl.burgerIcon.progress(0).stop();
};

const showBookingForm = () => {
  if (!opt.bookingToggle) {

    for (let i = 0; i < sel.formLabel.length; i++){
      //TODO replace the if with commented line
      // if (opt.isMobile()){
      // if(opt.media()[0] === 600){
      //   sel.formInput[i].addEventListener('focus', mobileInputManagement);
      // } else {
        sel.formLabel[i].addEventListener('click', moveFormLabel);
      // }
    }

    tl.booking.play();
  } else {
    tl.booking.reverse();
  }

  opt.bookingToggle = !opt.bookingToggle;
};

const closeForm = (e) => {
  if (!sel.bookingForm.contains(e.target)){
    tl.booking.reverse();

    opt.bookingToggle = !opt.bookingToggle;
  }
};

const moveFormLabel = (e) => {
  TweenMax.set(sel.formLabel, { borderBottom: '0px solid transparent', bottom: '2px' });

  TweenMax.staggerTo(sel.formLabel, 0.4, { fontSize: 16, color: '#212121', y: '-20px', ease: Power2.EaseOut, backgroundColor: 'transparent' }, 0.1);
};

// center input to viewport when in mobile and keyboard comes up
const mobileInputManagement = (e) => {
  // / append selections button to focused element
  /**/ e.path[1].append(document.getElementsByClassName('selectors')[0]);
  /**/ TweenMax.set(sel.preBtn, { display: 'block' });
  /**/ TweenMax.set(sel.sucBtn, { display: 'block' });

  TweenMax.set('.form-el', { flexFlow: 'column nowrap', alignItems: 'flex-start'});

  // set the listeners once
  if (opt.focusOnceInput){
    sel.preBtn.addEventListener('click', precedentInput);
    sel.sucBtn.addEventListener('click', successiveInput);

    opt.focusOnceInput = false;
  }

  // restore position of precedent input valid only from the second input focused
  if (opt.lastMobileInput !== ''){
    TweenMax.set(opt.lastMobileInput, { position: 'relative', width: '100%', top: 'unset', left: 'unset', x: '0%', y: '0%', borderRadius: '0', zIndex: 0, border: '0px', alignItems: 'initial', padding: 0 });
  }

  // focus the input at the center of the screen
  if (opt.inputIndex !== opt.formInputArray.indexOf(e.target)){
    let index = opt.formInputArray.indexOf(e.target);

    TweenMax.to(sel.formLabel, 0.3, { borderBottom: '0px solid transparent', fontSize: 16, color: '#212121', ease: Power2.EaseOut, position: 'relative', backgroundColor: 'transparent' });

    TweenMax.set(e.path[1], { position: 'fixed', width: '70%', top: '50%', left: '50%', y: '-50%', x: '-50%', backgroundColor: '#efefef', borderRadius: '5px', zIndex: 100000, border: '1px solid #212121', padding: '10px' });

    sel.preBtn.innerHTML = (index === 0) ? '- <i class="im im-angle-down">' : opt.formInputArray[index - 1].name + '<i class="im im-angle-down">';
    sel.sucBtn.innerHTML = (index === opt.formInputArray.length - 1) ? '- <i class="im im-angle-up">' : opt.formInputArray[index + 1].name + '<i class="im im-angle-up">';
  }

  opt.inputIndex = opt.formInputArray.indexOf(e.target);
  opt.lastMobileInput = e.path[1];
};

const precedentInput = (e) => {
  e.preventDefault();
  let preIdx = (opt.inputIndex - 1 < 0) ? 0 : opt.inputIndex - 1;
  let element = opt.formInputArray[preIdx];
  opt.formInputArray[preIdx].focus();
};

const successiveInput = (e) => {
  e.preventDefault();
  let nextIdx = (opt.inputIndex + 1 > opt.formInputArray.length - 1) ? opt.formInputArray.length - 1 : opt.inputIndex + 1;
  opt.formInputArray[nextIdx].focus();
};

const resetForm = () => {
  // TODO replace with isMobile
  if(opt.media()[0] === 600){
    // TODO resolve the reset for the mobile query
  } else {
    TweenMax.set(sel.bookingDiv, {zIndex: -10});
    TweenMax.set(sel.formLabel, {
      fontSize: 20,
      color: '#ababab',
      backgroundColor: '#efefef',
      y: 0,
      borderBottom: '2px solid #212121',
      bottom: 0
    });


    if (opt.lastMobileInput !== '') {
      TweenMax.set(opt.lastMobileInput, {
        position: 'relative',
        width: '100%',
        top: 'unset',
        left: 'unset',
        x: '0%',
        y: '0%',
        borderRadius: '0'
      });

      TweenMax.set(sel.preBtn, {display: 'none'});
      TweenMax.set(sel.sucBtn, {display: 'none'});
    }

    for (let i = 0; i < sel.formLabel.length; i++) {
      let input = document.getElementById(sel.formLabel[i].htmlFor);
      if (input.value !== '' && input.value !== 'Seleziona un\'orario') {
        TweenMax.set(sel.formLabel[i], {
          fontSize: 16,
          color: '#212121',
          y: '-20px',
          ease: Power2.EaseOut,
          backgroundColor: 'transparent',
          borderBottom: '0px solid transparent',
          bottom: '2px'
        });
      }

      // free memory
      input = null;
      sel.formLabel[i].removeEventListener('click', moveFormLabel);
    }
  }
};

const siteScroll = (e) => {
  // if (opt.lastScroll < window.scrollY){
  if (opt.lastScroll < opt.scrollYType()){
    showElements();
  }
};

const showElements = () => {
  sel.loader.style.display = 'none';
  sel.body.style.overflow = 'visible';
  tl.fixedHeader.play();

  let viewport70Perc = (window.innerHeight / 100) * 70;

  switch (sel.body.dataset.page) {
    case 'Ac3f8De':

      // if (window.scrollY < window.innerHeight){
      if (opt.scrollYType() < window.innerHeight){
        tl.firstHeader.delay(0).play();
      } else {
        tl.firstHeader.progress(1).play();
      }

      // if (viewport70Perc > sel.chefShop.getBoundingClientRect().top && !opt.showed){
      //   TweenMax.to(sel.chefShop, 1.1, { autoAlpha: 1 });
      //   TweenMax.to(".chef-shop-img", 0.9, { bottom: 0 });
      //   TweenMax.to(".chef-shop-text>span", 0.9, { right: 0, autoAlpha: 1, delay: 0.3});
      //   opt.showed += 1;
      // }

      // if (viewport70Perc > sel.chefCut.getBoundingClientRect().top && opt.showed === 1){
      //   TweenMax.to('.chef-cut-img', 0.9, { autoAlpha: 1, bottom: 0 });
      //   TweenMax.to('.chef-cut-text>span', 0.9, { autoAlpha: 1, left: 0, delay: 0.3 });
      //   opt.showed += 1;
      // }

      // if (viewport70Perc > sel.secondHeader.getBoundingClientRect().top && opt.showed === 2){
      //   tl.secondHeader.play();
      //   delete opt.showed;
      //   removeScrollListener();
      // }
      break;
    case '3Q9dFej':
      let animatable = opt.animatableFilo();

      // for not scroll and to permit element to stay relative and not fixed
      sel.bodySite.style.overflow = "hidden";

      // if (window.scrollY < window.innerHeight){
      if (opt.scrollYType() < window.innerHeight){
        tl.filoScene("first-scene").play();
      } else {
        tl.filoScene("first-scene").progress(1).play();
      }

      if(viewport70Perc > animatable[opt.showed].getBoundingClientRect().top){
        switch (true){
          case animatable[opt.showed].id.indexOf("scene") !== -1:
            tl.filoScene(animatable[opt.showed].id).play();
            break;
          case animatable[opt.showed].id.indexOf("quote") !== -1:
            tl.filoQuote(animatable[opt.showed].id).play();
            break;
          case animatable[opt.showed].id.indexOf("presentation") !== -1:
            tl.filoPresentation(animatable[opt.showed].id).play();
            break;
        }
        opt.showed++;
        showElements();
      }

      if(opt.showed === animatable.length){
        delete opt.showed;
        removeScrollListener();
      }

      break;
    case '8dG3yTe':
      break;
  }
  opt.lastScroll = opt.scrollYType();
};

const removeScrollListener = () => {
  if (opt.overlayScroll === undefined) {
    window.removeEventListener('scroll', siteScroll);
  } else {
    opt.overlayScroll.options({
      callbacks: {
        onScroll: null
      }
    });
  }
};

// Snippet da utilizzare?
// funzione MoveFormLabel per gestire le label singolarmente
// single label
// let inputOfPreviousLabel = (opt.previousLabel !== null) ? document.getElementById(opt.previousLabel.htmlFor) : null;

// // se la label é vuota resettala
// if (opt.previousLabel !== null && inputOfPreviousLabel.value === ''){
//   TweenMax.to(opt.previousLabel, 0.4, { fontSize: 20, color: '#ababab', y: -1 });
//   TweenMax.set(opt.previousLabel.id, { borderBottom: '2px solid #212121', backgroundColor: '#efefef', bottom: 0, zIndex: 100000000 });
// }

// TweenMax.set(e.toElement, { borderBottom: '0px solid transparent', bottom: '2px', backgroundColor: 'transparent' });
// TweenMax.to(e.toElement, 0.4, { fontSize: 16, color: '#212121', y: '-20px', ease: Power2.EaseOut, delay: 0.1 });

// opt.previousLabel = e.toElement;
