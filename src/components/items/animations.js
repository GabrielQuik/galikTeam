import { TweenMax, Power3 } from "gsap/TweenMax";
import $ from 'jquery';

export default {
  halfImagesAnim() {
    $('.half__desc__button').hover(
      function () {
        let hoverID = $(this).attr('data-id');
        TweenMax.to($('.container__half.' + hoverID).find('img'), 1, {
          scale: 1.2,
          opacity: .5,
          ease: Power3.easeOut
        });
      },
      function () {
        let hoverID = $(this).attr('data-id');
        TweenMax.to($('.container__half.' + hoverID).find('img'), .5, {
          scale: 1,
          opacity: 1,
          ease: Power3.easeOut
        });
      }
    );  
  }
}