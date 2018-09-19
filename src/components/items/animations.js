import { TweenMax, Power3 } from "gsap/TweenMax";
import $ from 'jquery';

export default {
  halfImagesAnim() {
    $('.half-size-item__button').hover(
      function () {
        let hoverID = $(this).attr('data-id');
        TweenMax.to($('.half-size-item.' + hoverID).find('img'), 1, {
          scale: 1.2,
          opacity: .5,
          ease: Power3.easeOut
        });
      },
      function () {
        let hoverID = $(this).attr('data-id');
        TweenMax.to($('.half-size-item.' + hoverID).find('img'), .5, {
          scale: 1,
          opacity: 1,
          ease: Power3.easeOut
        });
      }
    );  
  }
}