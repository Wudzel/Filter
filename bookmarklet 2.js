javascript:(function(){
var TARGET='https://frogieeisback-edu.zone.id';
var PROXY='https://api.allorigins.win/get?url=';
if(document.getElementById('__mb__'))return;
var ov=document.createElement('div');
ov.id='__mb__';
ov.style.cssText='position:fixed;top:55px;left:14px;width:340px;height:490px;min-width:200px;min-height:160px;background:rgba(16,16,20,0.93);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.11);border-radius:18px;box-shadow:0 28px 70px rgba(0,0,0,0.65);z-index:2147483647;display:flex;flex-direction:column;overflow:hidden;font-family:sans-serif;';
var bar=document.createElement('div');
bar.style.cssText='height:42px;display:flex;align-items:center;gap:8px;padding:0 12px;background:rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.08);flex-shrink:0;touch-action:none;cursor:grab;';
var dots=document.createElement('div');
dots.style.cssText='display:flex;gap:5px;flex-shrink:0;';
var ct=document.createElement('div');
ct.style.cssText='flex:1;overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;';
[['#ff5f57',function(){ov.remove();}],['#febc2e',function(){ct.style.display=ct.style.display==='none'?'flex':'none';}],['#28c840',function(){ov.style.width=(window.innerWidth-20)+'px';ov.style.height=(window.innerHeight-20)+'px';ov.style.left='10px';ov.style.top='10px';}]].forEach(function(x){
  var d=document.createElement('div');
  d.style.cssText='width:11px;height:11px;border-radius:50%;background:'+x[0]+';cursor:pointer;flex-shrink:0;';
  d.addEventListener('click',x[1]);
  dots.appendChild(d);
});
var ul=document.createElement('div');
ul.style.cssText='flex:1;font-size:10px;color:rgba(255,255,255,0.45);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:rgba(0,0,0,0.28);padding:3px 8px;border-radius:6px;border:1px solid rgba(255,255,255,0.07);';
ul.textContent=TARGET;
bar.appendChild(dots);
bar.appendChild(ul);
var stEl=document.createElement('style');
stEl.textContent='@keyframes __mbspin{to{transform:rotate(360deg)}}';
document.head.appendChild(stEl);
var sp=document.createElement('div');
sp.style.cssText='width:26px;height:26px;border:2px solid rgba(255,255,255,0.1);border-top-color:#4f8ef7;border-radius:50%;animation:__mbspin 0.7s linear infinite;position:absolute;';
ct.appendChild(sp);
var fr=document.createElement('iframe');
fr.style.cssText='width:100%;height:100%;border:none;display:none;touch-action:pan-x pan-y;';
fr.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-popups');
ct.appendChild(fr);
var rs=document.createElement('div');
rs.style.cssText='position:absolute;bottom:0;right:0;width:28px;height:28px;cursor:se-resize;touch-action:none;z-index:10;display:flex;align-items:flex-end;justify-content:flex-end;padding:5px;opacity:0.4;font-size:14px;color:white;line-height:1;';
rs.textContent='\u25e2';
ov.appendChild(bar);
ov.appendChild(ct);
ov.appendChild(rs);
document.body.appendChild(ov);

function loadUrl(url){
  sp.style.display='block';
  fr.style.display='none';
  ul.textContent=url;
  fetch(PROXY+encodeURIComponent(url))
    .then(function(r){return r.json();})
    .then(function(d){
      var html=d.contents;
      var base=new URL(url);
      html=html.replace(/((?:src|href|action)\s*=\s*["'])(?!https?:\/\/|\/\/|#|data:|javascript:|mailto:)([^"']*?)(["'])/gi,function(m,a,v,q){
        try{return a+new URL(v,base).href+q;}catch(e){return m;}
      });
      var clickScript='\x3cscript\x3edocument.addEventListener("click",function(e){var a=e.target.closest("a");if(a&&a.href&&!a.href.startsWith("javascript:")){e.preventDefault();window.parent.postMessage({__mb:true,url:a.href},"*");}});\x3c/script\x3e';
      html=html.replace(/\x3c\/head\x3e/i,clickScript+'\x3c/head\x3e');
      fr.srcdoc=html;
      fr.onload=function(){sp.style.display='none';fr.style.display='block';};
    })
    .catch(function(){
      sp.style.display='none';
      ct.innerHTML='';
      var msg=document.createElement('div');
      msg.style.cssText='color:rgba(255,255,255,0.4);font-size:12px;text-align:center;padding:20px;';
      msg.textContent='Could not load page. Check connection.';
      ct.appendChild(msg);
    });
}

window.addEventListener('message',function(e){if(e.data&&e.data.__mb)loadUrl(e.data.url);});
loadUrl(TARGET);

var drag=null;
bar.addEventListener('touchstart',function(e){if(e.target.style.cursor==='pointer')return;var t=e.touches[0],r=ov.getBoundingClientRect();drag={ox:t.clientX-r.left,oy:t.clientY-r.top};e.preventDefault();},{passive:false});
bar.addEventListener('touchmove',function(e){if(!drag)return;var t=e.touches[0];ov.style.left=Math.max(0,t.clientX-drag.ox)+'px';ov.style.top=Math.max(0,t.clientY-drag.oy)+'px';e.preventDefault();},{passive:false});
bar.addEventListener('touchend',function(){drag=null;});
bar.addEventListener('mousedown',function(e){var r=ov.getBoundingClientRect();drag={ox:e.clientX-r.left,oy:e.clientY-r.top};});
document.addEventListener('mousemove',function(e){if(!drag)return;ov.style.left=Math.max(0,e.clientX-drag.ox)+'px';ov.style.top=Math.max(0,e.clientY-drag.oy)+'px';});
document.addEventListener('mouseup',function(){drag=null;});

var rsz=null;
rs.addEventListener('touchstart',function(e){var t=e.touches[0];rsz={sx:t.clientX,sy:t.clientY,sw:ov.offsetWidth,sh:ov.offsetHeight};e.preventDefault();e.stopPropagation();},{passive:false});
rs.addEventListener('touchmove',function(e){if(!rsz)return;var t=e.touches[0];ov.style.width=Math.max(200,rsz.sw+(t.clientX-rsz.sx))+'px';ov.style.height=Math.max(160,rsz.sh+(t.clientY-rsz.sy))+'px';e.preventDefault();},{passive:false});
rs.addEventListener('touchend',function(){rsz=null;});
rs.addEventListener('mousedown',function(e){rsz={sx:e.clientX,sy:e.clientY,sw:ov.offsetWidth,sh:ov.offsetHeight};e.preventDefault();e.stopPropagation();});
document.addEventListener('mousemove',function(e){if(!rsz)return;ov.style.width=Math.max(200,rsz.sw+(e.clientX-rsz.sx))+'px';ov.style.height=Math.max(160,rsz.sh+(e.clientY-rsz.sy))+'px';});
document.addEventListener('mouseup',function(){rsz=null;});
})();
