(function(){
  var modes = ['both','en','zh'];
  function getMode(){ return localStorage.getItem('mp_lang_mode') || 'both'; }
  function setMode(m){ localStorage.setItem('mp_lang_mode',m); document.documentElement.setAttribute('data-lang-mode',m); }
  function applyMode(){ setMode(getMode()); }
  function makeButton(){
    var btn=document.createElement('button');
    btn.id='lang-toggle';
    btn.title='切换语言 / Toggle language';
    btn.innerHTML='语言';
    btn.className='mp-lang-toggle';
    btn.onclick=function(){
      var cur = getMode();
      var idx = modes.indexOf(cur);
      var next = modes[(idx+1)%modes.length];
      setMode(next);
    };
    document.body.appendChild(btn);
    applyMode();
  }
  if (document.readyState==='loading') window.addEventListener('DOMContentLoaded', makeButton); else makeButton();
})();
