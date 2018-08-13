import { TweenLite, Power4 } from "gsap/TweenMax";
import $ from 'jquery';

$('.half__desc__button').hover(
  function () {
    let hoverID = $(this).attr('data-id');
    TweenLite.to($('.container__half.' + hoverID).find('img'), 2, {
      scale: 1.2,
      ease: Power4.easeOut
    });
  },
  function () {
    let hoverID = $(this).attr('data-id');
    TweenLite.to($('.container__half.' + hoverID).find('img'), 1, {
      scale: 1,
      ease: Power4.easeOut
    });
  }
);

