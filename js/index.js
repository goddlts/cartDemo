$(function () {
  $('.container').fullpage({
    // 内容不垂直居中
    verticalCentered: false,
    // 设置每一屏幕的颜色
    sectionsColor: ['#fadd67', '#84a2d4', '#ffeedd', '#ef674d', '#fed', '#d04759', '#84d9ed', '#8ac060'],
    navigation: true,
    //afterRender
    afterRender: function () {
      $('.more').on('click', function () {
        // 切换下一屏
        $.fn.fullpage.moveSectionDown();
      });
    },
    afterLoad: function (link, index) {
      $(this).addClass('selected');
    }
  });
})