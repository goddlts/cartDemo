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
      }
    },
    afterLoad: function (link, index) {
      // 当完全进入某一屏
      $('.more').fadeIn();
      
      $(this).addClass('selected');
      
    }
  });
})