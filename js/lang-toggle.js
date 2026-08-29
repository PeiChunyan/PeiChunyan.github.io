(function(){
  var langs = ['en','zh','fi'];
  function currentLang(){
    var p = location.pathname.toLowerCase();
    for(var i=0;i<langs.length;i++) if (p.indexOf('/'+langs[i]+'/')!==-1) return langs[i];
    return null;
  }
  function makeButton(){
    var btn=document.createElement('button');
    btn.id='lang-toggle';
    btn.title='切换语言 / Toggle language / Vaihda kieli';
    btn.innerHTML='EN / 中文 / FI';
    btn.className='mp-lang-toggle';

    btn.onclick=function(){
      var p=location.pathname;
      var cur = currentLang();
      var idx = cur ? langs.indexOf(cur) : 0;
      var next = langs[(idx+1) % langs.length];
      if (cur) {
        location.pathname = p.replace('/'+cur+'/','/'+next+'/');
      } else {
        // no language in path — go to next's understanding page
        location.pathname = '/'+next+'/systems/';
      }
    };

    document.body.appendChild(btn);
  }
  if (document.readyState==='loading') window.addEventListener('DOMContentLoaded', makeButton); else makeButton();
})();
