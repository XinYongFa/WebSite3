// 隱藏Andoroid瀏覽器的導覽列

if (navigator.userAgent.match(/Android|iPhone/i)){
  $(document).on("pagechange",function(e,data){
    // 向下錯開1像素就隱藏網址列
    var hide_addressbar=function(){
      if(document.body.scrollTop == 0){  
        window.scrollTo(0,1);
      }
    }

    // Android的環境、
    // 頁面的縱長比螢幕的縱長還短時
    // 將頁面的縱長設定為螢幕尺寸+1
    // 將畫面設定為可捲動。
    if (navigator.userAgent.match(/Android/i)){
      var pageHeight = $(document).height();
      var windowHeight = window.outerHeight / window.devicePixelRatio;
      if (windowHeight >= pageHeight) {
        pageHeight = windowHeight+1;
        $('BODY').css('height',(pageHeight) + 'px');
      }
    }
    hide_addressbar();

    // 捲動畫面時，強制向下錯開1像素
    $(window).on('scrollstop', function() { 
      hide_addressbar();
    });
  });
}

