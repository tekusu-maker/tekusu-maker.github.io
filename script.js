// DOMContentLoadedイベントで、ページ読み込み後にプログレスバーのアニメーションを実行
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(function(bar) {
      const percentage = bar.getAttribute('data-percentage');
      const progress = bar.querySelector('.progress');
      // 少しの遅延を設定してアニメーション開始
      setTimeout(function(){
        progress.style.width = percentage + '%';
      }, 500);
    });
  });