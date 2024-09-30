import{a as h}from"./chunk-3QGRG5LW.js";import"./chunk-R7LU4YMR.js";var l=e=>Array.isArray(e)?h.random(e[0],e[1]):e,_=(e,t)=>{for(t=t.toUpperCase();e;){if(e.nodeName===t)return!0;e=e.parentNode}return!1},R=(e,t)=>{var n;if(t.move.includes("emit")){let{emitRadius:s=[50,180]}=(n=t.moveOptions)!==null&&n!==void 0?n:{},o=h.random(0,360)*Math.PI/180,i=[-1,1][h.random(0,1)]*l(s);e.endPos={x:e.x+i*Math.cos(o),y:e.y+i*Math.sin(o)}}},z=(e,t)=>{var n;if(t.move.includes("rotate")){let{angle:s=[-180,180]}=(n=t.moveOptions)!==null&&n!==void 0?n:{};e.endRotation=l(s)}},b=e=>Array.isArray(e)?e.map(t=>t*100):[e*100,e*100],v=class{constructor(t,n,s,o,i,a,r){this.ctx=t,this.x=n,this.y=s,this.color=o,this.radius=i,this.alpha=a,this.lineWidth=r,this.rotation=0}draw(){let{ctx:t,x:n,y:s}=this;t.save(),t.translate(n,s),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha,this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill()),t.globalAlpha=1,t.restore()}},x=class extends v{paint(){this.ctx.beginPath(),this.ctx.arc(0,0,this.radius,0,2*Math.PI),this.ctx.closePath()}},w=class extends v{constructor(t,n,s,o,i,a,r,c){super(t,n,s,o,i,a,c),this.sides=r}paint(){let{ctx:t,sides:n,radius:s}=this;t.beginPath(),t.moveTo(s*Math.cos(0),s*Math.sin(0));for(let o=1;o<=n;o++){let i=o*2*Math.PI/n;t.lineTo(s*Math.cos(i),s*Math.sin(i))}t.closePath()}},P=class extends v{constructor(t,n,s,o,i,a,r,c){super(t,n,s,o,i,a,c),this.spikes=r}paint(){let{ctx:t,spikes:n,radius:s}=this;t.beginPath(),t.moveTo(0,-s);for(let o=0;o<n*2;o++){let i=o*Math.PI/n-Math.PI/2,a=o%2===0?s:s*.5,r=Math.cos(i)*a,c=Math.sin(i)*a;t.lineTo(r,c)}t.closePath()}},A=(e,t,n,s,o)=>{let i=l(s.number),{radius:a,alpha:r=1,lineWidth:c}=s.shapeOptions;r=b(r);let u=[];for(let m=0;m<i;m++){let f=s.colors[h.random(0,s.colors.length-1)],k=[e,t,n,f,l(a),l(r)/100],L=o===x?k:[...k,l(o===P?s.shapeOptions.spikes:s.shapeOptions.sides)],y=new o(...L,l(c));R(y,s),z(y,s),u.push(y)}return u},S=(e,t,n,s)=>A(e,t,n,s,x),T=(e,t,n,s)=>A(e,t,n,s,P),D=(e,t,n,s)=>A(e,t,n,s,w),d=document.createElement("canvas");d.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(d);var p=d.getContext("2d"),C=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",W=0,I=0,M=()=>{let{clientWidth:e,clientHeight:t}=document.documentElement;d.width=e*2,d.height=t*2,d.style.width=e+"px",d.style.height=t+"px",p.setTransform(1,0,0,1,0,0),p.scale(2,2)},X=e=>{var t,n;W=(t=e.clientX)!==null&&t!==void 0?t:e.touches&&e.touches[0].clientX,I=(n=e.clientY)!==null&&n!==void 0?n:e.touches&&e.touches[0].clientY},Y=e=>{var t,n;let{move:s,moveOptions:o}=e,i={};if(s.includes("emit")){let{radius:a=.1,alphaChange:r=!1,alphaEasing:c="linear",alphaDuration:u=[600,800],alpha:m=0}=(t=o)!==null&&t!==void 0?t:{};i={x:f=>f.endPos.x,y:f=>f.endPos.y,radius:l(a)},r&&(i.alpha={value:l(b(m))/100,easing:c,duration:l(u)})}else if(s.includes("diffuse")){let{diffuseRadius:a=[80,160],lineWidth:r=0,alphaEasing:c="linear",alphaDuration:u=[600,800],alpha:m=0}=(n=o)!==null&&n!==void 0?n:{};i={radius:l(a),lineWidth:l(r),alpha:{value:l(b(m))/100,easing:c,duration:l(u)}}}return s.includes("rotate")&&(i.rotation=a=>a.endRotation),i},N=e=>{for(let t of e)t.draw()},F=h({duration:1/0,update(){p.clearRect(0,0,d.width,d.height)}}),g=null,E=null,O=e=>{E=e,g&&document.removeEventListener(C,g,!1),g=t=>{e.excludeElements.some(n=>_(t.target,n))||(F.play(),X(t),H(W,I))},document.addEventListener(C,g,!1),M(),window.removeEventListener("resize",M,!1),window.addEventListener("resize",M,!1)},H=(e,t)=>{if(!E)return;let{particles:n}=E,s=h().timeline();n.forEach(o=>{var i;let a=[];switch(o.shape){case"circle":a=S(p,e,t,o);break;case"star":a=T(p,e,t,o);break;case"polygon":a=D(p,e,t,o)}s.add({targets:a,duration:l(o.duration),easing:(i=o.easing)!==null&&i!==void 0?i:"linear",update:N,...Y(o)})}),s.play()},q=e=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>O(e),{passive:!0}):O(e)};export{q as default};
/*! For license information please see index.esm-DU3GRLWI.js.LEGAL.txt */
