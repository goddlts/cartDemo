$(function () {
  $('.container').fullpage({
    // 内容不垂直居中
    verticalCentered: false,
    // 设置每一屏幕的颜色
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#fed', '#d04759', '#84d9ed', '#8ac060'],
    navigation: true,
    /*屏动画切换的时间*/
    scrollingSpeed:1500,
    //afterRender
    afterRender: function () {
      $('.more').on('click', function () {
        // 切换下一屏
        $.fn.fullpage.moveSectionDown();
      });
    },
    onLeave: function (index, nextIndex, direction) {
      // 当离开某一屏的时候
      $('.more').fadeOut();
      // 从第2屏到第3屏
      if (index === 2 && nextIndex === 3) {
        $('.screen02').find('.sofa').addClass('animated');
      } else if (index === 3 && nextIndex === 4) {
        // 当离开第三屏，进入第四屏的时候
        $('.screen03 .safo').hide().siblings('.newSafo').show().addClass('animated');
        // 当newSafo的动画结束之后
        $('.screen03 .newSafo').on('animationend', function () {
          $('.screen04 .sofaImg').show();
          $('.screen04 .cart').addClass('animated');
          //
          $('.screen04 .cart').on('animationend', function () {
            $('.screen04 .text').find('img').hide().eq(1).show();
            $('.screen04 .address').fadeIn(1000, function () {
              $('.screen04 .address').find('img').eq(1).fadeIn();
            });
          });
        });
      } 
    },
    afterLoad: function (link, index) {
      // 当完全进入某一屏
      $('.more').fadeIn();
      
      $(this).addClass('selected');
      // 第五屏动画
      $('.screen05 .handImg').on('transitionend', function () {
        $('.screen05 .mouse02Img').show();
      })
    }
  });
})