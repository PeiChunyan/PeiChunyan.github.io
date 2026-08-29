(function(){
  function makeButton(){
    var btn=document.createElement('button');
    btn.id='lang-toggle';
    btn.title='切换语言 / Toggle language';
    btn.innerHTML='EN / 中文';
    btn.className='mp-lang-toggle';

    btn.onclick=function(){
      var p=location.pathname;
      if (p.indexOf('/zh/')!==-1){
        location.pathname = p.replace('/zh/','/en/');
      } else if (p.indexOf('/en/')!==-1){
        location.pathname = p.replace('/en/','/zh/');
      } else {
        // default: switch to matching section - go to zh Understanding
        location.pathname = '/zh/understanding/';
      }
    };

    document.body.appendChild(btn);
  }
  if (document.readyState==='loading') window.addEventListener('DOMContentLoaded', makeButton); else makeButton();
})();
