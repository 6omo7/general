(function(){const st=document.createElement("style");st.textContent="/* ===== \u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 ===== */\n.admb{position:relative}.admb i{position:absolute;top:5px;left:5px;width:9px;height:9px;border-radius:50%;background:#f5a524;border:2px solid #173f58}\n.admall{display:flex;align-items:center;gap:6px;cursor:pointer}.admall input{accent-color:#19a79b}\n.adm{position:fixed;inset:0;z-index:2000;background:#f3f6f8;display:flex;flex-direction:column;color:var(--text)}\n.adm-top{background:linear-gradient(120deg,var(--navy),var(--navy2));color:#fff;padding:11px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0}\n.adm-top b{font-size:16px;flex:1}.adm-top button{border:0;background:#ffffff22;color:#fff;width:36px;height:36px;border-radius:10px;font-size:22px;line-height:1}\n.admchip{font-size:12px;padding:4px 10px;border-radius:99px;background:#ffffff22}.admchip.w{background:#f5a52433;color:#ffe2ad}.admchip.ok{background:#1baf7a33;color:#c9f5e1}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;background:#fff;border-bottom:1px solid var(--line);padding:6px 10px;flex-shrink:0;scrollbar-width:thin}\n.adm-tabs button{border:0;background:transparent;border-radius:9px;padding:9px 13px;font-weight:600;font-size:13px;white-space:nowrap;color:var(--muted)}\n.adm-tabs button.on{background:var(--navy);color:#fff}\n.adm-body{flex:1;min-height:0;overflow:auto;padding:16px;max-width:1100px;width:100%;margin:0 auto;-webkit-overflow-scrolling:touch}\n.pn{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin-bottom:14px}.pn h3{margin:0 0 10px;font-size:15px}\n.hint{color:var(--muted);font-size:12.5px;line-height:1.8;margin:6px 0}.muted{color:var(--muted)}\n.btn{border:1px solid var(--line);background:#fff;border-radius:10px;padding:8px 13px;font-weight:600;font-size:13px;display:inline-flex;align-items:center;gap:6px;color:var(--text);cursor:pointer}\n.btn:hover{background:#eef4f6}.btn.pri{background:var(--teal);border-color:var(--teal);color:#fff}.btn.pri:hover{background:#0b7a72}.btn[disabled]{opacity:.45;pointer-events:none}\n.ac{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}\n.pmsg{font-size:13px;margin:6px 0;min-height:1em;white-space:pre-line}.pmsg.ok{color:#0b7a4f}.pmsg.bad{color:#b3261e}\n.admin-in,.adm select,.adm input:not([type=checkbox]):not([type=file]),.admodal select,.admodal input:not([type=checkbox]){border:1px solid var(--line);border-radius:10px;padding:9px 11px;background:#fff;font-size:13.5px;min-width:0;max-width:100%}\n.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}.kpis.small{grid-template-columns:repeat(5,1fr)}\n.kpi{background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px;text-align:center}.kpi b{display:block;font-size:26px;color:var(--navy)}.kpis.small .kpi b{font-size:20px}.kpi span{font-size:12px;color:var(--muted)}\n.kpi.ok b{color:#0b7a4f}.kpi.w b{color:#b46a00}.kpi.bad b{color:#b3261e}\n.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.bar{display:grid;grid-template-columns:110px 1fr 36px;align-items:center;gap:8px;margin:6px 0;font-size:12.5px}.bar i{display:block;height:10px;border-radius:5px;background:var(--teal)}.bar b{text-align:start}\n.lrow{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px dashed var(--line);font-size:13px}.lrow span{color:var(--muted);font-size:12px}\n.tool{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:10px}.tl,.tr{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n.ck{display:inline-flex;align-items:center;gap:6px;font-size:13px}\n.bulk{display:none;gap:8px;flex-wrap:wrap;align-items:center;background:#fff7e6;border:1px solid #f1d9a5;border-radius:12px;padding:10px;margin-bottom:10px}.bulk.on{display:flex}\n.rows{background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 10px 10px}\n.rh{display:flex;justify-content:space-between;padding:10px 4px;font-size:12.5px;color:var(--muted);border-bottom:1px solid var(--line)}\n.rw{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:6px 10px;align-items:center;padding:10px 4px;border-bottom:1px solid #eef2f4}.rw.sl{background:#eaf7f5}\n.rw:not(:has(input[data-sel])){grid-template-columns:minmax(0,1fr) auto}\n.rn{min-width:0}.rn b{display:block;font-size:14px}.rn small{color:var(--muted);font-size:11.5px;overflow-wrap:anywhere}\n.dt{color:var(--muted);font-size:11px;white-space:nowrap}\n.ra{grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap}.ra .btn{padding:5px 10px;font-size:12px}\n.empty{padding:24px;text-align:center;color:var(--muted)}\n.stb{font-size:11.5px;padding:3px 9px;border-radius:99px;font-weight:700;background:#e8edf0;color:#425a69;white-space:nowrap;display:inline-block}\n.stb.approved{background:#d8f3e6;color:#0b6b45}.stb.verified{background:#dbe9fb;color:#1c4f93}.stb.pending{background:#fdebc8;color:#8a5200}.stb.draft{background:#e8edf0;color:#425a69}.stb.suspended{background:#fbdcda;color:#9b2118}.stb.archived{background:#ececec;color:#777}\n.lg{padding:10px 4px;border-bottom:1px solid #eef2f4}.lh{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.lh small{color:var(--muted);font-size:11.5px}.lc{font-size:12.5px;margin:3px 0;color:#34505f}.lc s{color:#9a5b57}.lc i{font-style:normal;color:var(--muted)}\n.kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:13px;margin:8px 0}\n.frm{display:grid;grid-template-columns:1fr 1fr;gap:10px}.frm label{display:flex;flex-direction:column;gap:5px;font-size:12.5px;color:var(--muted)}.frm label.w2,.frm .w2{grid-column:1/-1}.frm label.ck{flex-direction:row}\n.frm input,.frm select{width:100%}\n.rsum{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:13px}\n.admodal{position:fixed;inset:0;z-index:2100;background:#0f2b3f88;display:flex;align-items:center;justify-content:center;padding:14px}\n.mbox{background:#fff;border-radius:16px;padding:18px;width:min(640px,100%);max-height:92vh;overflow:auto;color:var(--text)}.mbox h3{margin:0 0 10px}\n.tw{overflow:auto;max-height:46vh;border:1px solid var(--line);border-radius:10px}.iot{border-collapse:collapse;width:100%;font-size:12.5px}.iot th,.iot td{padding:7px 9px;border-bottom:1px solid #eef2f4;text-align:start;vertical-align:top}.iot th{background:#f3f6f8;position:sticky;top:0}\n.iot tr.err td{background:#fff3f2}.iot tr.warn td{background:#fffaf0}.iot tr.same td{color:var(--muted)}\n/* \u0634\u0631\u064a\u0637 \u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 */\n.medit{position:fixed;z-index:1500;top:64px;inset-inline:0;margin:0 auto;width:fit-content;max-width:calc(100% - 16px);background:#fff;border:2px solid var(--teal);border-radius:14px;padding:9px 11px;box-shadow:0 8px 28px #0003;display:flex;gap:7px;flex-wrap:wrap;align-items:center;justify-content:center}\n.medit b{font-size:13px}.medit .btn{padding:6px 10px;font-size:12px}.medit .on{background:var(--teal);color:#fff;border-color:var(--teal)}\n.vx{width:18px;height:18px;margin:2px;border-radius:50%;background:#fff;border:3px solid #4285f4;box-shadow:0 1px 4px #0006}.vx.a{background:#ffe08a}.vx.s{border-color:#1baf7a}.vx.e{border-color:#d33}\n.edm{width:44px;height:44px;border-radius:50%;background:#19a79bdd;color:#fff;display:grid;place-items:center;font-size:24px;border:3px solid #fff;box-shadow:0 3px 12px #0006;cursor:grab}\n.admedit{margin:8px 12px 12px;border:1px solid var(--teal);background:#eaf7f5;color:#0b7a72;border-radius:10px;padding:8px 12px;font-weight:700}\nbody.adm-open{overflow:hidden}\n@media(max-width:760px){.kpis,.kpis.small{grid-template-columns:repeat(2,1fr)}.grid2,.frm{grid-template-columns:1fr}.bar{grid-template-columns:90px 1fr 32px}.adm-body{padding:10px}.rw{grid-template-columns:auto minmax(0,1fr) auto}.dt{display:none}.medit{top:56px}}\n@media(max-width:760px){.top{flex-wrap:wrap;row-gap:8px}.top .brand{flex:1 1 100%}.admb,.admall{display:inline-flex!important;align-items:center;padding:7px 11px;font-size:12px}.hchip{display:none}}\n.frm input[type=checkbox],.ck input[type=checkbox]{width:auto}\n";document.head.appendChild(st);
window.FM_ADMIN_INIT=function(FM){"use strict";
/* ===== نواة الإدارة: الحالة والتحقق والسجل والتشفير والنشر ===== */
const {DATA,ctx,L,map}=FM,esc=FM.esc,fmtN=FM.fmtN,norm=FM.norm,STL=FM.STL;
const $=id=>document.getElementById(id);
const KINDS={site:'موقع',street:'شارع',district:'حي'};
const TYPES={middle:'مدرسة متوسطة',high:'مدرسة ثانوية',mall:'مجمع / موقع تجاري'};
const STATUSES=['draft','pending','verified','approved','suspended','archived'];
const FLD={name:'الاسم',type:'التصنيف',city:'المدينة',district:'الحي',lat:'خط العرض',lng:'خط الطول',status:'الحالة',placeId:'معرّف Google',url:'رابط Google',aliases:'أسماء بديلة',note:'ملاحظات',alias:'اسم بديل',g:'رابط Google',lines:'المسار'};
const ACT={add:'إضافة',edit:'تعديل',status:'تغيير الحالة',archive:'أرشفة',restore:'استعادة',import:'استيراد',route:'تعديل المسار',move:'تغيير الموضع',rename:'إعادة تسمية حي',merge:'دمج حي',backup:'استعادة نسخة',publish:'نشر',bulk:'تعديل جماعي'};
const WK='fm_work',SK='fm_snaps',GK='fm_gh';
DATA.settings=DATA.settings||{};DATA.log=DATA.log||[];DATA.areas=DATA.areas||{};
let dirty=false;
const nowIso=()=>new Date().toISOString();
const fmtT=t=>{try{return new Date(t).toLocaleString('ar-SA-u-ca-gregory',{dateStyle:'short',timeStyle:'short'})}catch(e){return t}};
const rec=id=>DATA.records.find(r=>r.id===id);
const uid=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
const hasXY=r=>r.lat!==null&&r.lat!==undefined&&r.lat!==''&&r.lng!==null&&r.lng!==undefined&&r.lng!==''&&isFinite(+r.lat)&&isFinite(+r.lng);
function tracked(r){const o={};for(const k of Object.keys(FLD))o[k]=r[k];o.lines=r.lines?(r.lines.length+' مسار / '+r.lines.reduce((n,l)=>n+l.length,0)+' نقطة'):'';return o}
function diff(a,b){const x=tracked(a||{}),y=tracked(b),out=[];for(const k of Object.keys(FLD)){const p=x[k]??'',q=y[k]??'';if(String(p)!==String(q))out.push([k,String(p).slice(0,80),String(q).slice(0,80)])}return out}
function logIt(r,a,ch){DATA.log.unshift({t:nowIso(),id:r.id,k:r.kind,n:r.name,a,ch:ch||[]});if(DATA.log.length>1500)DATA.log.length=1500}
function validate(r){const e=[];if(!String(r.name||'').trim())e.push('الاسم مطلوب');
 if(r.kind!=='district'&&!FM.CITIES.includes(r.city))e.push('المدينة يجب أن تكون الخبر أو الظهران');
 const inBox=(la,ln)=>isFinite(la)&&isFinite(ln)&&la>=25.5&&la<=27&&ln>=49.5&&ln<=50.8;
 if(r.kind==='site'){if(!TYPES[r.type])e.push('التصنيف غير صالح');
  if(hasXY(r)){if(!inBox(+r.lat,+r.lng))e.push('الإحداثيات خارج نطاق الخبر والظهران')}else if((r.lat!==null&&r.lat!==undefined&&r.lat!=='')||(r.lng!==null&&r.lng!==undefined&&r.lng!==''))e.push('إحداثيات غير صالحة');
  if(r.status==='approved'&&!hasXY(r)&&!r.url)e.push('لا يُعتمد الموقع دون إحداثيات أو رابط Google');
  if(r.url&&!/^https:\/\/(www\.google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|maps\.google\.com)/i.test(r.url))e.push('الرابط ليس رابط خرائط Google')}
 if(r.kind==='street'){const L_=r.lines||[];for(const l of L_){if(l.length<2){e.push('مسار يحوي أقل من نقطتين');break}if(l.some(p=>!inBox(p[0],p[1]))){e.push('نقاط مسار خارج نطاق الخبر والظهران');break}}
  if(r.status==='approved'&&!L_.length&&!r.g)e.push('لا يُعتمد الشارع دون مسار أو رابط Google');
  if(r.g&&!/^https:\/\/(www\.google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|maps\.google\.com)/i.test(r.g))e.push('الرابط ليس رابط خرائط Google')}
 return e}
function findDup(r,except){const n=norm(r.name);return DATA.records.find(o=>o.id!==except&&o.kind===r.kind&&o.status!=='archived'&&((norm(o.name)===n&&(o.city||'')===(r.city||''))||(r.kind==='site'&&hasXY(o)&&hasXY(r)&&FM.dPt([+o.lat,+o.lng],[+r.lat,+r.lng])<30)))}
/* نسخ محلية تلقائية */
function snaps(){try{return JSON.parse(localStorage.getItem(SK)||'[]')}catch(e){return []}}
function snap(label){let a=snaps();a.unshift({t:nowIso(),label,rev:DATA.rev,data:JSON.stringify(DATA)});a=a.slice(0,8);while(a.length){try{localStorage.setItem(SK,JSON.stringify(a));return}catch(e){a.pop()}}}
/* الحفظ المحلي للمسودة */
function persist(){dirty=true;DATA.updated=nowIso();try{localStorage.setItem(WK,JSON.stringify({base:ctx.baseRev,data:DATA}))}catch(e){FM.toast('تعذّر حفظ المسودة على هذا الجهاز.')}updBadge()}
function afterChange(){persist();FM.refreshAll();if(ui.open)ui.render()}
function replaceData(d){DATA.records=d.records||[];DATA.log=d.log||[];DATA.areas=d.areas||DATA.areas||{};DATA.settings=Object.assign({},DATA.settings,d.settings||{});DATA.updated=d.updated||DATA.updated}
function updBadge(){const b=$('admDot');if(b){b.hidden=!dirty;b.title='تعديلات غير منشورة'}const s=$('admState');if(s){s.textContent=dirty?'● تعديلات غير منشورة':'✓ مطابق للمنشور';s.className='admchip '+(dirty?'w':'ok')}}
/* ===== العمليات على السجلات ===== */
function saveRecord(r,isNew,action){const errs=validate(r);if(errs.length)return {ok:false,errs};
 r.updated=nowIso();
 if(isNew){DATA.records.push(r);logIt(r,'add',[['status','',r.status]])}
 else{const old=rec(r.id);const ch=diff(old,r);Object.assign(old,r);if(ch.length)logIt(old,action||(ch.length===1&&ch[0][0]==='status'?'status':'edit'),ch)}
 afterChange();return {ok:true}}
function setStatus(ids,st,label){let n=0,bad=[];for(const id of ids){const r=rec(id);if(!r||r.status===st)continue;const t=Object.assign({},r,{status:st});const e=validate(t);if(e.length&&st==='approved'){bad.push(r.name+': '+e[0]);continue}const old=r.status;r.status=st;r.updated=nowIso();logIt(r,st==='archived'?'archive':old==='archived'?'restore':'status',[['status',old,st]]);n++}
 if(n)afterChange();return {n,bad}}
/* ===== التشفير والنشر ===== */
const b64=u=>{let s='';for(let i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);return btoa(s)};
async function encrypt(obj,pw){const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
 const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
 const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:600000,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['encrypt']);
 const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(JSON.stringify(obj))));
 return JSON.stringify({s:b64(salt),v:b64(iv),c:b64(ct),i:600000})}
function pubData(){const recs=DATA.records.filter(r=>r.status==='approved'&&r.kind!=='district').map(r=>{const o=Object.assign({},r);delete o.note;delete o.src;return o});return {v:1,rev:DATA.rev,updated:DATA.updated,records:recs,areas:DATA.areas||{}}}
function ghCfg(){let c={};try{c=JSON.parse(localStorage.getItem(GK)||'{}')}catch(e){}
 const h=location.hostname,p=location.pathname.split('/').filter(Boolean);const m=/^(.+)\.github\.io$/.exec(h);
 const guess={owner:m?m[1]:'',repo:m&&p.length?p[0]:'',branch:'main',dir:m&&p.length>1?p.slice(1,-1).concat(/\.[a-z]+$/i.test(p[p.length-1])?[]:[p[p.length-1]]).join('/'):''};
 return Object.assign(guess,c)}
function saveGh(c,keepToken){const o=Object.assign({},c);if(!keepToken)delete o.token;try{localStorage.setItem(GK,JSON.stringify(o))}catch(e){}}
async function ghPut(path,text,msg,c){const api=`https://api.github.com/repos/${c.owner}/${c.repo}/contents/${path}`;
 const H={Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
 let sha;const g=await fetch(api+'?ref='+encodeURIComponent(c.branch),{headers:H,cache:'no-store'});
 if(g.ok){sha=(await g.json()).sha}else if(g.status===401||g.status===403)throw new Error('الرمز غير صالح أو لا يملك صلاحية على المستودع ('+g.status+')');else if(g.status!==404)throw new Error('تعذّر قراءة الملف من GitHub ('+g.status+')');
 const body={message:msg,content:btoa(text),branch:c.branch};if(sha)body.sha=sha;
 const p=await fetch(api,{method:'PUT',headers:Object.assign({'Content-Type':'application/json'},H),body:JSON.stringify(body)});
 if(!p.ok){let t='';try{t=(await p.json()).message}catch(e){}throw new Error('تعذّر الكتابة في GitHub ('+p.status+')'+(t?': '+t:''))}}
function allInvalid(){const out=[];for(const r of DATA.records){if(r.status!=='approved')continue;const e=validate(r);if(e.length)out.push(r.name+': '+e[0])}return out}
async function remoteRev(c){const api=`https://api.github.com/repos/${c.owner}/${c.repo}/contents/${(c.dir?c.dir.replace(/^\/|\/$/g,'')+'/':'')}data.admin.enc?ref=${encodeURIComponent(c.branch)}`;
 const g=await fetch(api,{headers:{Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},cache:'no-store'});
 if(g.status===404)return 0;if(!g.ok)throw new Error('تعذّر قراءة الملف المنشور للتحقق من التعارض ('+g.status+')');
 const f=await g.json();const P=JSON.parse(atob(f.content.replace(/\n/g,'')));const b=x=>Uint8Array.from(atob(x),ch=>ch.charCodeAt(0));
 const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(ctx.adminPw),'PBKDF2',false,['deriveKey']);
 const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:b(P.s),iterations:P.i,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['decrypt']);
 const d=JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:b(P.v)},key,b(P.c))));return d.rev||0}
async function publish(onStep,cfg){const c=cfg||ghCfg();if(!c.token)throw new Error('أدخل رمز GitHub أولاً.');if(!c.owner||!c.repo)throw new Error('بيانات المستودع غير مكتملة.');
 const bad=allInvalid();if(bad.length)throw new Error('سجلات معتمدة غير صالحة:\n'+bad.slice(0,5).join('\n'));
 if(!DATA.settings.pubPw||DATA.settings.pubPw.length<6)throw new Error('كلمة مرور الاطلاع العامة غير مضبوطة.');
 onStep&&onStep('التحقق من عدم وجود نسخة أحدث…');const rr=await remoteRev(c);if(rr>(ctx.baseRev||0))throw new Error('يوجد نشر أحدث (r'+rr+') من جهاز آخر، ونسختك الحالية (r'+(ctx.baseRev||0)+') أقدم. لم يُنشر شيء. احفظ نسختك من «تنزيل نسخة كاملة (JSON)» ثم أعد فتح الصفحة لتحميل الأحدث.');
 const dir=c.dir?c.dir.replace(/^\/|\/$/g,'')+'/':'';snap('قبل النشر');
 const prev=DATA.rev;DATA.rev=prev+1;DATA.updated=nowIso();logIt({id:'-',kind:'site',name:'البيانات'},'publish',[['rev',String(prev),String(DATA.rev)]]);
 try{onStep&&onStep('تشفير الملفين…');const pub=await encrypt(pubData(),DATA.settings.pubPw),adm=await encrypt(DATA,ctx.adminPw);
  onStep&&onStep('رفع ملف الاطلاع…');await ghPut(dir+'data.pub.enc',pub,'تحديث بيانات الاطلاع (r'+DATA.rev+')',c);
  onStep&&onStep('رفع ملف الإدارة…');await ghPut(dir+'data.admin.enc',adm,'تحديث بيانات الإدارة (r'+DATA.rev+')',c);
 }catch(e){DATA.rev=prev;DATA.log.shift();throw e}
 ctx.baseRev=DATA.rev;dirty=false;try{localStorage.removeItem(WK)}catch(e){}updBadge()}
function dl(name,text,type){const b=new Blob([text],{type}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(u);a.remove()},600)}
const stamp=()=>new Date().toISOString().slice(0,10);

/* ===== واجهة لوحة الإدارة ===== */
const TABS=[['dash','📊 المؤشرات'],['rec','🗂️ السجلات'],['dist','🏘️ الأحياء'],['io','⇅ استيراد وتصدير'],['log','🕘 سجل التغييرات'],['pub','☁️ النسخ والنشر'],['set','⚙️ الإعدادات']];
const ui={open:false,tab:'dash',rf:{kind:'all',status:'all',city:'all',type:'all',q:'',sel:new Set(),limit:100,arch:false},render(){draw()}};
const typeLabel=r=>r.kind==='site'?TYPES[r.type]||r.type:r.kind==='street'?'شارع':'حي';
const stBadge=s=>`<span class="stb ${s}">${STL[s]||s}</span>`;
function mount(){
 const hdr=document.querySelector('.top'),fit=$('fitBtn');
 const b=document.createElement('button');b.className='fit admb';b.id='admBtn';b.innerHTML='⚙ إدارة البيانات<i id="admDot" hidden></i>';hdr.insertBefore(b,fit);
 const l=document.createElement('label');l.className='fit admall';l.innerHTML='<input type="checkbox" id="admAll"> غير المعتمد';l.title='إظهار السجلات غير المعتمدة على الخريطة والقائمة (للمدير فقط)';hdr.insertBefore(l,fit);
 const d=document.createElement('div');d.id='adm';d.className='adm';d.hidden=true;d.innerHTML=`<div class="adm-top"><b>إدارة بيانات التمركز الميداني</b><span id="admState" class="admchip"></span><button id="admClose" aria-label="إغلاق">×</button></div><nav class="adm-tabs" id="admTabs">${TABS.map(t=>`<button data-t="${t[0]}">${t[1]}</button>`).join('')}</nav><div class="adm-body" id="admBody"></div>`;
 document.body.appendChild(d);
 const m=document.createElement('div');m.id='admModal';m.className='admodal';m.hidden=true;document.body.appendChild(m);
 const me=document.createElement('div');me.id='medit';me.className='medit';me.hidden=true;document.body.appendChild(me);
 b.onclick=()=>openPanel();$('admClose').onclick=closePanel;
 $('admAll').onchange=e=>FM.setShowAll(e.target.checked);
 $('admTabs').onclick=e=>{const t=e.target.closest('[data-t]');if(t){ui.tab=t.dataset.t;draw()}};
 d.addEventListener('click',onClick);d.addEventListener('input',onInput);d.addEventListener('change',onChange);
 m.addEventListener('click',onModalClick);m.addEventListener('input',onModalInput);m.addEventListener('change',onModalInput);
 addEventListener('keydown',e=>{if(e.key==='Escape'){if(!m.hidden)closeModal();else if(ui.open)closePanel()}});
 updBadge()}
function openPanel(tab){if(tab)ui.tab=tab;ui.open=true;$('adm').hidden=false;document.body.classList.add('adm-open');draw()}
function closePanel(){ui.open=false;$('adm').hidden=true;document.body.classList.remove('adm-open');setTimeout(()=>map.invalidateSize(),50)}
function draw(){document.querySelectorAll('#admTabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===ui.tab));updBadge();const body=$('admBody');const st=body.scrollTop;
 body.innerHTML=({dash:vDash,rec:vRec,dist:vDist,io:vIO,log:vLog,pub:vPub,set:vSet})[ui.tab]();body.scrollTop=st;if(ui.tab==='io')ioBind()}
/* ---------- المؤشرات ---------- */
function vDash(){const R=DATA.records.filter(r=>r.kind!=='district'),A=R.filter(r=>r.status!=='archived'),by=s=>A.filter(r=>r.status===s).length;
 const card=(n,l,c,go)=>`<div class="kpi ${c||''}" ${go?`data-go="${go}"`:''}><b>${fmtN(n)}</b><span>${l}</span></div>`;
 const bars=(arr,total)=>{const mx=Math.max(1,...arr.map(x=>x[1]));return arr.map(x=>`<div class="bar"><span>${esc(x[0])}</span><i style="width:${Math.max(3,x[1]/mx*100)}%"></i><b>${fmtN(x[1])}</b></div>`).join('')||'<p class="muted">لا توجد بيانات.</p>'};
 const cnt=(f)=>{const m=new Map();for(const r of A){const k=f(r)||'—';m.set(k,(m.get(k)||0)+1)}return [...m.entries()].sort((a,b)=>b[1]-a[1])};
 const recent=DATA.log.filter(x=>x.a!=='publish').slice(0,8);
 return `<div class="kpis">${card(A.length,'إجمالي السجلات (المواقع والشوارع)')}${card(by('approved'),'معتمدة','ok')}${card(A.length-by('approved'),'غير معتمدة','w')}${card(by('draft')+by('pending')+by('verified'),'بانتظار المراجعة','w')}</div>
 <div class="kpis small">${card(by('draft'),'مسودة')}${card(by('pending'),'بانتظار التحقق')}${card(by('verified'),'تم التحقق (بانتظار الاعتماد)')}${card(by('suspended'),'موقوفة')}${card(R.length-A.length,'مؤرشفة')}</div>
 <div class="grid2"><section class="pn"><h3>بحسب التصنيف</h3>${bars(cnt(r=>r.kind==='site'?TYPES[r.type]:'شارع'))}</section><section class="pn"><h3>بحسب المدينة</h3>${bars(cnt(r=>r.city))}</section>
 <section class="pn"><h3>بحسب الحي (الأعلى ١٠)</h3>${bars(cnt(r=>r.district).slice(0,10))}</section>
 <section class="pn"><h3>آخر التحديثات</h3>${recent.length?recent.map(x=>`<div class="lrow"><b>${esc(x.n)}</b><span>${ACT[x.a]||x.a} · ${fmtT(x.t)}</span></div>`).join(''):'<p class="muted">لا توجد تغييرات مسجلة بعد.</p>'}</section></div>
 ${by('draft')+by('pending')+by('verified')?`<button class="btn" data-act="gopending">مراجعة السجلات المنتظرة ←</button>`:''}`}
/* ---------- السجلات ---------- */
function recList(){const f=ui.rf,q=norm(f.q);return DATA.records.filter(r=>(f.kind==='all'?r.kind!=='district':r.kind===f.kind)&&(f.status==='all'?(f.arch||r.status!=='archived'):r.status===f.status)&&(f.city==='all'||r.city===f.city)&&(f.type==='all'||r.type===f.type)&&(!q||norm([r.name,r.id,r.district,r.city,r.aliases,r.alias].join(' ')).includes(q))).sort((a,b)=>(b.updated||'').localeCompare(a.updated||''))}
function vRec(){const f=ui.rf,L_=recList(),sh=L_.slice(0,f.limit),allSel=sh.length&&sh.every(r=>f.sel.has(r.id));
 const opt=(o,cur)=>o.map(([v,t])=>`<option value="${v}"${v===cur?' selected':''}>${t}</option>`).join('');
 return `<div class="tool"><div class="tl"><input id="rq" class="admin-in" type="search" placeholder="بحث بالاسم أو الرقم أو الحي…" value="${esc(f.q)}">
 <select data-rf="kind">${opt([['all','المواقع والشوارع'],['site','المواقع'],['street','الشوارع']],f.kind)}</select>
 <select data-rf="type">${opt([['all','كل التصنيفات'],...Object.entries(TYPES)],f.type)}</select>
 <select data-rf="city">${opt([['all','كل المدن'],['الخبر','الخبر'],['الظهران','الظهران']],f.city)}</select>
 <select data-rf="status">${opt([['all','كل الحالات'],...STATUSES.map(s=>[s,STL[s]])],f.status)}</select>
 <label class="ck"><input type="checkbox" data-rf="arch"${f.arch?' checked':''}> المؤرشفة</label></div>
 <div class="tr"><button class="btn pri" data-act="newsite">＋ موقع</button><button class="btn pri" data-act="newstreet">＋ شارع</button></div></div>
 <div class="bulk${f.sel.size?' on':''}"><b>${fmtN(f.sel.size)} محدد</b><select id="bst"><option value="">تغيير الحالة إلى…</option>${STATUSES.map(s=>`<option value="${s}">${STL[s]}</option>`).join('')}</select><button class="btn" data-act="bulkst">تطبيق</button>
 <select id="bct"><option value="">نقل إلى مدينة…</option><option>الخبر</option><option>الظهران</option></select><button class="btn" data-act="bulkct">تطبيق</button>
 <input id="bdt" class="admin-in" list="dlist" placeholder="نقل إلى حي…"><button class="btn" data-act="bulkdt">تطبيق</button><button class="btn" data-act="bulkarch">أرشفة</button><button class="btn" data-act="bulkclr">إلغاء التحديد</button></div>
 <datalist id="dlist">${distNames().map(d=>`<option value="${esc(d)}">`).join('')}</datalist>
 <div class="rows"><div class="rh"><label class="ck"><input type="checkbox" data-act="selall"${allSel?' checked':''}> تحديد الكل (${fmtN(sh.length)})</label><span>${fmtN(L_.length)} سجل</span></div>
 ${sh.map(r=>`<div class="rw${f.sel.has(r.id)?' sl':''}"><input type="checkbox" data-sel="${esc(r.id)}"${f.sel.has(r.id)?' checked':''} aria-label="تحديد"><div class="rn"><b>${esc(r.name)}</b><small>${esc(r.id)} · ${typeLabel(r)} · ${esc(r.city||'')}${r.district?' · '+esc(r.district):''}</small></div>${stBadge(r.status)}<small class="dt">${fmtT(r.updated)}</small>
 <div class="ra"><button class="btn" data-edit="${esc(r.id)}">تعديل</button><button class="btn" data-onmap="${esc(r.id)}">🗺️ على الخريطة</button>${r.status==='archived'?`<button class="btn" data-rst="${esc(r.id)}">استعادة</button>`:`<button class="btn" data-arch="${esc(r.id)}">أرشفة</button>`}</div></div>`).join('')||'<div class="empty">لا توجد سجلات مطابقة.</div>'}
 ${L_.length>sh.length?`<button class="btn" data-act="more">عرض المزيد (${fmtN(L_.length-sh.length)})</button>`:''}</div>`}
function distNames(){return [...new Set(DATA.records.filter(r=>r.kind==='district'&&r.status!=='archived').map(r=>r.name))].sort((a,b)=>a.localeCompare(b,'ar'))}
/* ---------- الأحياء ---------- */
function vDist(){const D=DATA.records.filter(r=>r.kind==='district').sort((a,b)=>(a.city||'').localeCompare(b.city||'','ar')||a.name.localeCompare(b.name,'ar'));
 const use=n=>DATA.records.filter(r=>r.kind!=='district'&&r.status!=='archived'&&r.district===n).length;
 return `<div class="tool"><div class="tl"><input id="dn" class="admin-in" placeholder="اسم حي جديد"><select id="dc"><option>الخبر</option><option>الظهران</option></select><button class="btn pri" data-act="adddist">＋ إضافة حي</button></div></div>
 <p class="hint">إعادة تسمية الحي تُحدّث جميع السجلات المرتبطة به. والدمج ينقل سجلات الحي إلى حي آخر ثم يؤرشفه.</p>
 <div class="rows">${D.map(d=>`<div class="rw"><div class="rn"><b>${esc(d.name)}</b><small>${esc(d.city||'')} · ${fmtN(use(d.name))} سجل</small></div>${stBadge(d.status)}<div class="ra"><button class="btn" data-dren="${esc(d.id)}">إعادة تسمية</button><button class="btn" data-dmerge="${esc(d.id)}">دمج في…</button>${d.status==='archived'?`<button class="btn" data-rst="${esc(d.id)}">استعادة</button>`:`<button class="btn" data-arch="${esc(d.id)}">أرشفة</button>`}</div></div>`).join('')}</div>`}
/* ---------- السجل ---------- */
function vLog(){const q=norm(ui.lq||'');const L_=DATA.log.filter(x=>!q||norm(x.n+' '+x.id+' '+(ACT[x.a]||x.a)).includes(q)).slice(0,ui.llim||80);
 return `<div class="tool"><div class="tl"><input id="lq" class="admin-in" type="search" placeholder="بحث في السجل…" value="${esc(ui.lq||'')}"></div><span class="muted">${fmtN(DATA.log.length)} عملية محفوظة</span></div>
 <div class="rows">${L_.map(x=>`<div class="lg"><div class="lh"><b>${esc(x.n)}</b><span class="stb ${x.a==='publish'?'approved':'draft'}">${ACT[x.a]||x.a}</span><small>${KINDS[x.k]||''} · ${esc(x.id)} · ${fmtT(x.t)}</small></div>${(x.ch||[]).slice(0,8).map(c=>`<div class="lc"><i>${FLD[c[0]]||esc(c[0])}</i> ${c[1]===''?'':`<s>${esc(c[1])}</s> ←`} <b>${esc(c[2]||'—')}</b></div>`).join('')}</div>`).join('')||'<div class="empty">لا توجد عمليات.</div>'}
 ${DATA.log.length>L_.length?'<button class="btn" data-act="logmore">عرض المزيد</button>':''}</div>`}
/* ---------- النسخ والنشر ---------- */
function vPub(){const c=ghCfg(),sn=snaps();
 return `<section class="pn"><h3>النشر إلى الموقع</h3><p class="hint">تبقى التعديلات على هذا الجهاز حتى تنشرها. عند النشر تُشفَّر البيانات وتُرفع إلى المستودع، فتظهر لجميع المستخدمين خلال دقيقة أو دقيقتين دون إعادة نشر الشيفرة. لا يستطيع النشر إلا من يملك رمز GitHub بصلاحية الكتابة.</p>
 <div class="kv"><span>النسخة المنشورة</span><b>${fmtN(ctx.baseRev)}</b><span>الحالة</span><b>${dirty?'تعديلات غير منشورة':'مطابقة للمنشور'}</b></div>
 <div class="frm"><label>المالك<input id="gho" value="${esc(c.owner)}"></label><label>المستودع<input id="ghr" value="${esc(c.repo)}"></label><label>الفرع<input id="ghb" value="${esc(c.branch)}"></label><label>المجلد<input id="ghd" value="${esc(c.dir)}" placeholder="field-map"></label>
 <label class="w2">رمز GitHub (Fine-grained، صلاحية Contents: Read and write لهذا المستودع فقط)<input id="ght" type="password" autocomplete="off" value="${esc(c.token||'')}"></label><label class="ck w2"><input type="checkbox" id="ghk"${c.token?' checked':''}> حفظ الرمز على هذا الجهاز</label></div>
 <div class="ac"><button class="btn pri" data-act="publish"${dirty?'':''}>☁️ نشر التغييرات</button><button class="btn" data-act="dlfiles">تنزيل ملفي البيانات (رفع يدوي)</button><button class="btn" data-act="discard"${dirty?'':' disabled'}>تجاهل التعديلات غير المنشورة</button></div><div id="pubmsg" class="pmsg"></div></section>
 <section class="pn"><h3>النسخ الاحتياطية</h3><div class="ac"><button class="btn" data-act="bkdl">⬇ تنزيل نسخة كاملة (JSON)</button><label class="btn">⬆ استعادة من ملف<input type="file" id="bkf" accept=".json,application/json" hidden></label></div>
 <p class="hint">تُحفظ نسخة محلية تلقائية قبل كل نشر واستيراد واستعادة (آخر ٨). ويحفظ Git في المستودع تاريخ كل نشر.</p>
 ${sn.length?sn.map((s,i)=>`<div class="rw"><div class="rn"><b>${esc(s.label)}</b><small>${fmtT(s.t)} · نسخة ${fmtN(s.rev||0)}</small></div><div class="ra"><button class="btn" data-snap="${i}">استعادة</button></div></div>`).join(''):'<p class="muted">لا توجد نسخ محلية بعد.</p>'}</section>`}
/* ---------- الإعدادات ---------- */
function vSet(){return `<section class="pn"><h3>كلمات المرور</h3><p class="hint">كلمة المرور العامة للاطلاع فقط وتفتح المواقع المعتمدة وحدها. كلمة المدير تفتح هذه اللوحة. تسري التغييرات بعد النشر، ثم يلزم تسجيل الدخول بالكلمة الجديدة.</p>
 <div class="frm"><label>كلمة مرور الاطلاع العامة الجديدة<input id="npp" type="text" autocomplete="off" placeholder="٦ أحرف فأكثر"></label><label>كلمة مرور المدير الجديدة<input id="npa" type="password" autocomplete="new-password" placeholder="١٠ أحرف فأكثر"></label><label>تأكيد كلمة المدير<input id="npa2" type="password" autocomplete="new-password"></label></div>
 <div class="ac"><button class="btn pri" data-act="setpw">حفظ كلمات المرور</button></div><div id="pwmsg" class="pmsg"></div></section>
 <section class="pn"><h3>ملاحظات</h3><p class="hint">لا تُسجَّل أي بيانات للموظفين في النظام. سجل التغييرات يحفظ العملية والوقت وقيم الحقول فقط.</p></section>`}
/* ---------- الأحداث ---------- */
function onInput(e){const t=e.target;if(t.id==='rq'){ui.rf.q=t.value;ui.rf.limit=100;clearTimeout(ui._t);ui._t=setTimeout(()=>{const p=t.selectionStart;draw();const n=$('rq');if(n){n.focus();n.setSelectionRange(p,p)}},250)}
 if(t.id==='lq'){ui.lq=t.value;clearTimeout(ui._t);ui._t=setTimeout(()=>{draw();const n=$('lq');if(n){n.focus();n.setSelectionRange(n.value.length,n.value.length)}},250)}}
function onChange(e){const t=e.target;const rf=t.dataset.rf;if(rf){ui.rf[rf]=t.type==='checkbox'?t.checked:t.value;ui.rf.limit=100;draw();return}
 if(t.dataset.sel){t.checked?ui.rf.sel.add(t.dataset.sel):ui.rf.sel.delete(t.dataset.sel);draw();return}
 if(t.dataset.act==='selall'){const sh=recList().slice(0,ui.rf.limit);sh.forEach(r=>t.checked?ui.rf.sel.add(r.id):ui.rf.sel.delete(r.id));draw();return}
 if(t.id==='bkf'&&t.files[0]){restoreFile(t.files[0]);t.value=''}}
function msg(id,txt,cls){const m=$(id);if(m){m.textContent=txt;m.className='pmsg '+(cls||'')}}
async function onClick(e){const t=e.target.closest('button,[data-go]');if(!t)return;const d=t.dataset;
 if(d.go){return}
 if(d.edit)return openForm(rec(d.edit));
 if(d.onmap)return window.FM_ADMIN.onMap(d.onmap);
 if(d.arch){const r=rec(d.arch);if(r){setStatus([r.id],'archived');FM.toast('أُرشف «'+r.name+'». يمكن استعادته.')}return}
 if(d.rst){const r=rec(d.rst);if(r){setStatus([r.id],'draft');FM.toast('استُعيد «'+r.name+'» مسودةً.')}return}
 if(d.dren)return renameDist(d.dren);if(d.dmerge)return mergeDist(d.dmerge);
 if(d.snap!==undefined)return restoreSnap(+d.snap);
 switch(d.act){
 case'newsite':return openForm({kind:'site',type:'high',city:'الخبر',status:'draft',_new:true});
 case'newstreet':return openForm({kind:'street',city:'الخبر',status:'draft',_new:true});
 case'more':ui.rf.limit+=100;return draw();case'logmore':ui.llim=(ui.llim||80)+80;return draw();
 case'gopending':ui.rf.status='pending';ui.tab='rec';return draw();
 case'bulkclr':ui.rf.sel.clear();return draw();
 case'bulkst':{const v=$('bst').value;if(!v)return FM.toast('اختر الحالة.');snap('قبل تعديل جماعي');const r=setStatus([...ui.rf.sel],v);bulkLog();FM.toast('حُدّث '+fmtN(r.n)+' سجل'+(r.bad.length?'، وتعذّر '+fmtN(r.bad.length)+': '+r.bad[0]:'')+'.');if(!r.bad.length)ui.rf.sel.clear();return draw()}
 case'bulkarch':{if(!ui.rf.sel.size)return;snap('قبل أرشفة جماعية');setStatus([...ui.rf.sel],'archived');ui.rf.sel.clear();return draw()}
 case'bulkct':{const v=$('bct').value;if(!v)return FM.toast('اختر المدينة.');return bulkSet('city',v)}
 case'bulkdt':{const v=$('bdt').value.trim();if(!v)return FM.toast('اكتب اسم الحي.');return bulkSet('district',v)}
 case'adddist':{const n=$('dn').value.trim(),c=$('dc').value;if(!n)return FM.toast('اكتب اسم الحي.');if(DATA.records.some(r=>r.kind==='district'&&r.name===n&&r.city===c))return FM.toast('الحي موجود.');const r={kind:'district',id:uid('d'),name:n,city:c,status:'approved',updated:nowIso()};DATA.records.push(r);logIt(r,'add',[['name','',n]]);return afterChange()}
 case'publish':return doPublish();
 case'dlfiles':return doDlFiles();
 case'discard':{if(t.dataset.sure!=='1'){t.dataset.sure='1';t.textContent='اضغط للتأكيد: سيُتجاهل كل ما لم يُنشر';return}snap('قبل تجاهل التعديلات');try{localStorage.removeItem(WK)}catch(_){}FM.toast('أُعيد تحميل المنشور…');setTimeout(()=>location.reload(),500);return}
 case'bkdl':return dl('نسخة-احتياطية-التمركز-'+stamp()+'.json',JSON.stringify(DATA,null,1),'application/json');
 case'setpw':return doSetPw();
 }}
function bulkLog(){}
function bulkSet(f,v){if(!ui.rf.sel.size)return;snap('قبل تعديل جماعي');let n=0;for(const id of ui.rf.sel){const r=rec(id);if(!r||r[f]===v)continue;const old=r[f];r[f]=v;r.updated=nowIso();logIt(r,'edit',[[f,old||'',v]]);n++}ui.rf.sel.clear();FM.toast('حُدّث '+fmtN(n)+' سجل.');afterChange()}
async function doPublish(){const c=ghCfg();const g=id=>$(id).value.trim();c.owner=g('gho');c.repo=g('ghr');c.branch=g('ghb')||'main';c.dir=g('ghd');c.token=g('ght');saveGh(c,$('ghk').checked);
 const btn=document.querySelector('[data-act=publish]');btn.disabled=true;msg('pubmsg','جارٍ النشر…');
 try{await publish(s=>msg('pubmsg',s),c);msg('pubmsg','✓ تم النشر. تظهر التغييرات للجميع خلال دقيقة أو دقيقتين.','ok');updBadge();setTimeout(()=>{if(ui.tab==='pub')draw();msg('pubmsg','✓ تم النشر. تظهر التغييرات للجميع خلال دقيقة أو دقيقتين.','ok')},50)}
 catch(err){msg('pubmsg','✕ '+err.message,'bad');btn.disabled=false}}
function doDlFiles(){const S=DATA.settings.pubPw;if(!S||S.length<6)return FM.toast('كلمة مرور الاطلاع غير مضبوطة.');const bad=allInvalid();if(bad.length)return msg('pubmsg','سجلات معتمدة غير صالحة: '+bad[0],'bad');
 const prev=DATA.rev;DATA.rev=prev+1;Promise.all([encrypt(pubData(),S),encrypt(DATA,ctx.adminPw)]).then(([p,a])=>{dl('data.pub.enc',p,'text/plain');setTimeout(()=>dl('data.admin.enc',a,'text/plain'),400);msg('pubmsg','نُزّل الملفان. ارفعهما إلى مجلد الصفحة في المستودع (استبدال الملفين الحاليين). ثم اعتمد «نشر» يدوياً بعد الرفع؛ حتى ذلك الحين تبقى حالة التعديلات غير منشورة.','ok');DATA.rev=prev}).catch(()=>{DATA.rev=prev;msg('pubmsg','تعذّر التشفير.','bad')})}
function doSetPw(){const p=$('npp').value.trim(),a=$('npa').value,a2=$('npa2').value;if(!p&&!a)return msg('pwmsg','لم تُدخل كلمة جديدة.','bad');
 if(p&&p.length<6)return msg('pwmsg','كلمة الاطلاع قصيرة (٦ فأكثر).','bad');if(a&&a.length<10)return msg('pwmsg','كلمة المدير قصيرة (١٠ فأكثر).','bad');if(a&&a!==a2)return msg('pwmsg','تأكيد كلمة المدير غير مطابق.','bad');if(p&&a&&p===a)return msg('pwmsg','يجب أن تختلف الكلمتان.','bad');
 if(p)DATA.settings.pubPw=p;if(a)ctx.adminPw=a;logIt({id:'-',kind:'site',name:'كلمات المرور'},'edit',[['name','','تغيير كلمة مرور'+(p&&a?' الاطلاع والمدير':p?' الاطلاع':' المدير')]]);persist();$('npp').value=$('npa').value=$('npa2').value='';msg('pwmsg','✓ حُفظت محلياً. انشر التغييرات لتسري.','ok');try{sessionStorage.setItem('fm_k',ctx.adminPw)}catch(_){}}
function renameDist(id){const r=rec(id);openModal(`<h3>إعادة تسمية الحي</h3><label>الاسم الجديد<input id="mdn" value="${esc(r.name)}"></label><div class="ac"><button class="btn pri" data-mact="dren" data-id="${esc(id)}">حفظ</button><button class="btn" data-mact="close">إلغاء</button></div><div id="merr" class="pmsg bad"></div>`)}
function mergeDist(id){const r=rec(id),o=DATA.records.filter(x=>x.kind==='district'&&x.id!==id&&x.status!=='archived');openModal(`<h3>دمج «${esc(r.name)}»</h3><p class="hint">تنتقل سجلات هذا الحي إلى الحي المختار ثم يُؤرشف.</p><label>الحي الهدف<select id="mdt">${o.map(x=>`<option value="${esc(x.id)}">${esc(x.name)} — ${esc(x.city||'')}</option>`).join('')}</select></label><div class="ac"><button class="btn pri" data-mact="dmerge" data-id="${esc(id)}">دمج</button><button class="btn" data-mact="close">إلغاء</button></div>`)}
function restoreSnap(i){const s=snaps()[i];if(!s)return;try{const d=JSON.parse(s.data);confirmRestore(d,'نسخة محلية: '+s.label)}catch(e){FM.toast('النسخة تالفة.')}}
function restoreFile(f){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!Array.isArray(d.records))throw 0;const bad=d.records.filter(x=>!x.id||!x.kind||!x.name).length;if(bad)return FM.toast('الملف يحوي '+bad+' سجلاً ناقصاً؛ لم تتم الاستعادة.');confirmRestore(d,'ملف: '+f.name)}catch(e){FM.toast('الملف ليس نسخة احتياطية صالحة.')}};r.readAsText(f)}
function confirmRestore(d,label){const c={s:d.records.filter(r=>r.kind==='site').length,t:d.records.filter(r=>r.kind==='street').length,d:d.records.filter(r=>r.kind==='district').length};
 openModal(`<h3>استعادة نسخة احتياطية</h3><p>${esc(label)}</p><p class="hint">تحوي ${fmtN(c.s)} موقعاً و${fmtN(c.t)} شارعاً و${fmtN(c.d)} حياً. الحالية: ${fmtN(DATA.records.filter(r=>r.kind==='site').length)} و${fmtN(DATA.records.filter(r=>r.kind==='street').length)} و${fmtN(DATA.records.filter(r=>r.kind==='district').length)}. ستُحفظ نسخة محلية من الوضع الحالي قبل الاستبدال، ولا تظهر الاستعادة للمستخدمين إلا بعد النشر.</p><div class="ac"><button class="btn pri" data-mact="restore">استعادة</button><button class="btn" data-mact="close">إلغاء</button></div>`);ui._rd=d}
/* ---------- نافذة النموذج ---------- */
function openModal(h){const m=$('admModal');m.innerHTML=`<div class="mbox">${h}</div>`;m.hidden=false}
function closeModal(){$('admModal').hidden=true;$('admModal').innerHTML=''}
function openForm(r){const n=!!r._new,s=r.kind==='site',st=r.kind==='street';ui._f={r,n};
 const dopts=`<datalist id="dl2">${distNames().map(d=>`<option value="${esc(d)}">`).join('')}</datalist>`;
 const lines=st?(r.lines||[]):[];
 openModal(`<h3>${n?'إضافة':'تعديل'} ${s?'موقع':'شارع'}${n?'':' — '+esc(r.id)}</h3><form id="admF" class="frm" autocomplete="off">
 <label class="w2">الاسم<input name="name" value="${esc(r.name||'')}" required maxlength="120"></label>
 ${s?`<label>التصنيف<select name="type">${Object.entries(TYPES).map(([k,v])=>`<option value="${k}"${r.type===k?' selected':''}>${v}</option>`).join('')}</select></label>`:`<label>اسم بديل<input name="alias" value="${esc(r.alias||'')}"></label>`}
 <label>المدينة<select name="city"><option${r.city==='الخبر'?' selected':''}>الخبر</option><option${r.city==='الظهران'?' selected':''}>الظهران</option></select></label>
 <label>الحي<input name="district" list="dl2" value="${esc(r.district||'')}"></label>${dopts}
 ${s?`<label>خط العرض<input name="lat" inputmode="decimal" value="${r.lat??''}" dir="ltr"></label><label>خط الطول<input name="lng" inputmode="decimal" value="${r.lng??''}" dir="ltr"></label>
 <label class="w2">رابط Google Maps<input name="url" value="${esc(r.url||'')}" dir="ltr" placeholder="https://maps.app.goo.gl/…"></label><label>معرّف المكان (Place ID)<input name="placeId" value="${esc(r.placeId||'')}" dir="ltr"></label><label>أسماء بديلة<input name="aliases" value="${esc(r.aliases||'')}"></label>`
 :`<label class="w2">رابط Google Maps<input name="g" value="${esc(r.g||'')}" dir="ltr" placeholder="يُولَّد تلقائياً من الاسم إن تُرك فارغاً"></label>
 <div class="w2 rsum"><span>المسار على الخريطة: <b>${lines.length?fmtN(lines.length)+' مسار · '+fmtN(lines.reduce((a,l)=>a+l.length,0))+' نقطة':'غير مرسوم'}</b></span>${n?'':'<button type="button" class="btn" data-mact="route">✏️ رسم/تعديل المسار على الخريطة</button>'}</div>`}
 <label class="w2">ملاحظات داخلية (لا تظهر للمستخدمين)<input name="note" value="${esc(r.note||'')}"></label>
 <label>الحالة<select name="status">${STATUSES.map(x=>`<option value="${x}"${r.status===x?' selected':''}>${STL[x]}</option>`).join('')}</select></label>
 ${s?`<div class="w2 rsum"><button type="button" class="btn" data-mact="pick">📍 تحديد / تحريك الموضع على الخريطة</button></div>`:''}</form>
 <div id="merr" class="pmsg bad"></div><div class="ac"><button class="btn pri" data-mact="save">حفظ</button>${n?'':`<button class="btn" data-mact="${r.status==='archived'?'rstore':'archive'}">${r.status==='archived'?'استعادة':'أرشفة'}</button>`}<button class="btn" data-mact="close">إغلاق</button></div>`)}
function readForm(){const f=$('admF'),r=ui._f.r,o=Object.assign({},r);delete o._new;const fd=new FormData(f);for(const [k,v] of fd.entries())o[k]=String(v).trim();
 if(o.kind==='site'){o.lat=o.lat===''?null:+o.lat;o.lng=o.lng===''?null:+o.lng;if(!o.url)delete o.url;if(o.lat!==null&&!isFinite(o.lat))o.lat=NaN}
 if(o.kind==='street'){if(!o.g)o.g='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent([o.name,o.district,o.city,'السعودية'].filter(Boolean).join(' '));if(o.lines===undefined)o.lines=[]}
 if(!o.id)o.id=uid(o.kind==='site'?'s-':'ST-');return o}
function onModalInput(e){const t=e.target;if(t.id==='admF'||t.form&&t.form.id==='admF'){const m=$('merr');if(m)m.textContent=''}}
function onModalClick(e){const t=e.target.closest('button');if(!t){if(e.target.id==='admModal')closeModal();return}const a=t.dataset.mact;if(!a)return;
 if(a==='close')return closeModal();
 if(a==='save'){const o=readForm(),n=ui._f.n;const errs=validate(o);if(errs.length){$('merr').textContent='✕ '+errs.join(' · ');return}
  const d=findDup(o,o.id);if(d&&!ui._f.ok){$('merr').textContent='⚠ يوجد سجل مشابه: «'+d.name+'» ('+d.id+'). اضغط «حفظ» مرة أخرى للمتابعة رغم ذلك.';ui._f.ok=true;return}
  const r=saveRecord(o,n);if(r.ok){closeModal();FM.toast('حُفظ «'+o.name+'».');if(n&&o.kind==='street')setTimeout(()=>window.FM_ADMIN.editRoute(o.id),200)}else $('merr').textContent='✕ '+r.errs.join(' · ');return}
 if(a==='archive'||a==='rstore'){const r=ui._f.r;setStatus([r.id],a==='archive'?'archived':'draft');closeModal();return}
 if(a==='route'){const r=ui._f.r;closeModal();return window.FM_ADMIN.editRoute(r.id)}
 if(a==='pick'){const o=readForm();if(ui._f.n)o._new=true;closeModal();return window.FM_ADMIN.pickSite(o,false)}
 if(a==='dren'){const r=rec(t.dataset.id),n=$('mdn').value.trim();if(!n)return;if(DATA.records.some(x=>x.kind==='district'&&x.id!==r.id&&x.name===n&&x.city===r.city)){return FM.toast('اسم موجود.')}snap('قبل إعادة تسمية حي');const old=r.name;r.name=n;r.updated=nowIso();let c=0;for(const x of DATA.records)if(x.kind!=='district'&&x.district===old){x.district=n;x.updated=nowIso();c++}logIt(r,'rename',[['name',old,n]]);closeModal();FM.toast('أُعيدت التسمية وحُدّث '+fmtN(c)+' سجل.');return afterChange()}
 if(a==='dmerge'){const r=rec(t.dataset.id),to=rec($('mdt').value);if(!to)return;snap('قبل دمج حي');let c=0;for(const x of DATA.records)if(x.kind!=='district'&&x.district===r.name){x.district=to.name;x.updated=nowIso();c++}r.status='archived';r.updated=nowIso();logIt(r,'merge',[['district',r.name,to.name]]);closeModal();FM.toast('نُقل '+fmtN(c)+' سجل وأُرشف الحي.');return afterChange()}
 if(a==='restore'){snap('قبل الاستعادة');replaceData(ui._rd);logIt({id:'-',kind:'site',name:'البيانات'},'backup',[]);closeModal();FM.toast('استُعيدت النسخة. انشر لتظهر للمستخدمين.');return afterChange()}
 if(a==='ioapply')return window.FM_ADMIN.ioApply()}

/* ===== التحرير على الخريطة ===== */
let ed=null;
const bar=h=>{const m=$('medit');m.innerHTML=h;m.hidden=false};
function endEdit(reopen){if(ed){try{ed.cleanup()}catch(e){}}ed=null;$('medit').hidden=true;FM.setEditing(null);if(reopen)openPanel(ui.tab==='dash'?'rec':ui.tab)}
function visibleFor(r){if(r.status==='archived'){FM.toast('استعد السجل من الأرشيف أولاً.');return false}if(r.status!=='approved'&&!FM.showAll){FM.setShowAll(true);$('admAll').checked=true}return true}
const KX=111320*Math.cos(26.3*Math.PI/180),KY=110574;
function segDist(p,a,b){const px=p[1]*KX,py=p[0]*KY,ax=a[1]*KX,ay=a[0]*KY,bx=b[1]*KX,by=b[0]*KY,dx=bx-ax,dy=by-ay,l=dx*dx+dy*dy;let t=l?((px-ax)*dx+(py-ay)*dy)/l:0;t=Math.max(0,Math.min(1,t));return Math.hypot(px-ax-t*dx,py-ay-t*dy)}
const lenKm=l=>{let s=0;for(let i=1;i<l.length;i++)s+=Math.hypot((l[i][1]-l[i-1][1])*KX,(l[i][0]-l[i-1][0])*KY);return s/1000};
/* ----- اختيار/تحريك موضع موقع ----- */
function pickSite(draft,saveNow){ // draft: سجل (قد يكون جديداً)
 endEdit(false);closeModal();if(ui.open)closePanel();FM.unchoose();
 const has=hasXY(draft),c=has?[+draft.lat,+draft.lng]:[map.getCenter().lat,map.getCenter().lng];
 if(has)map.setView(c,Math.max(map.getZoom(),17));
 const m=L.marker(c,{draggable:true,zIndexOffset:5000,icon:L.divIcon({className:'',iconSize:[44,44],iconAnchor:[22,22],html:'<div class="edm">✥</div>'})}).addTo(map);
 let placed=has;
 const show=()=>{const p=m.getLatLng();bar(`<b>${esc(draft.name||'موقع جديد')}</b><span dir="ltr" class="co">${p.lat.toFixed(6)}, ${p.lng.toFixed(6)}</span><span class="muted">${placed?'اسحب العلامة أو انقر الخريطة لتغيير الموضع':'انقر الخريطة لتحديد الموضع'}</span><button class="btn pri" data-m="save">حفظ الموضع</button><button class="btn" data-m="cancel">إلغاء</button>`)};
 const onclick=e=>{m.setLatLng(e.latlng);placed=true;show()};
 m.on('drag',()=>{placed=true;show()});map.on('click',onclick);show();
 const back=(p)=>{const d=Object.assign({},draft);if(p){d.lat=+p.lat.toFixed(6);d.lng=+p.lng.toFixed(6)}return d};
 ed={cleanup(){map.off('click',onclick);m.remove()},
  save(){if(!placed)return FM.toast('حدّد الموضع أولاً.');const p=m.getLatLng();const d=back(p);const was=!!draft._new;endEdit(false);
   if(saveNow){const r=saveRecord(Object.assign({},rec(draft.id),{lat:d.lat,lng:d.lng}),false,'move');if(r.ok){FM.toast('حُفظ الموضع.');openPanel(ui.tab==='dash'?'rec':ui.tab)}else FM.toast(r.errs[0])}
   else{openPanel(ui.tab==='dash'?'rec':ui.tab);openForm(d)}},
  cancel(){endEdit(false);openPanel(ui.tab==='dash'?'rec':ui.tab);if(!saveNow)openForm(draft)}}}
function moveSite(id){const r=rec(id);if(!r||!visibleFor(r))return;pickSite(r,true)}
/* ----- محرر المسار ----- */
function editRoute(id){const r=rec(id);if(!r||!visibleFor(r))return;endEdit(false);closeModal();if(ui.open)closePanel();FM.unchoose();FM.setEditing(id);
 let lines=(r.lines||[]).map(l=>l.map(p=>[p[0],p[1]])),active=lines.length?0:-1,mode=lines.length?'insert':'append';
 const grp=L.layerGroup().addTo(map);
 const ico=(a,s,e)=>L.divIcon({className:'',iconSize:[22,22],iconAnchor:[11,11],html:`<div class="vx${a?' a':''}${s?' s':''}${e?' e':''}"></div>`});
 function insertAt(li,ll){const l=lines[li];let bi=1,bd=Infinity;for(let i=1;i<l.length;i++){const d=segDist([ll.lat,ll.lng],l[i-1],l[i]);if(d<bd){bd=d;bi=i}}l.splice(bi,0,[ll.lat,ll.lng]);draw()}
 function addPt(ll){if(active<0){lines.push([]);active=lines.length-1}lines[active].push([ll.lat,ll.lng]);draw()}
 function draw(){grp.clearLayers();lines.forEach((l,li)=>{const pl=L.polyline(l,{color:li===active?'#ff8a00':'#b3303c',weight:6,opacity:.9,dashArray:'9 6'}).addTo(grp);
   pl.on('click',ev=>{L.DomEvent.stopPropagation(ev);active=li;mode==='insert'?insertAt(li,ev.latlng):addPt(ev.latlng)});
   l.forEach((p,pi)=>{const m=L.marker(p,{draggable:true,icon:ico(li===active,pi===0,pi===l.length-1),zIndexOffset:li===active?900:800}).addTo(grp);
    m.on('dragstart',()=>{active=li});m.on('drag',ev=>{l[pi]=[ev.latlng.lat,ev.latlng.lng];pl.setLatLngs(l)});m.on('dragend',ui2);
    m.on('contextmenu dblclick',ev=>{L.DomEvent.stop(ev);l.splice(pi,1);if(!l.length){lines.splice(li,1);active=lines.length?0:-1}else active=li;draw()});
    m.on('click',ev=>{L.DomEvent.stopPropagation(ev);active=li;draw()})})});ui2()}
 function ui2(){const pts=lines.reduce((a,l)=>a+l.length,0),km=lines.reduce((a,l)=>a+lenKm(l),0);
  bar(`<b>مسار «${esc(r.name)}»</b><span class="co">${fmtN(lines.length)} مسار · ${fmtN(pts)} نقطة · ${fmtN(Math.round(km*10)/10)} كم</span>
  <div class="mb"><button class="btn${mode==='append'?' on':''}" data-m="append">＋ إضافة نقاط للنهاية</button><button class="btn${mode==='insert'?' on':''}" data-m="insert">⤵ إدراج على المسار</button><button class="btn" data-m="newline">مسار جديد</button><button class="btn" data-m="undo">↶ حذف آخر نقطة</button><button class="btn" data-m="clear">🗑 مسح</button></div>
  <span class="muted">اسحب النقاط · انقر مزدوجاً (أو نقر يمين) على نقطة لحذفها</span><div class="mb"><button class="btn pri" data-m="save">حفظ المسار</button><button class="btn" data-m="cancel">إلغاء</button></div>`)}
 const onclick=e=>addPt(e.latlng);
 const sync=()=>{map.off('click',onclick);if(mode==='append')map.on('click',onclick)};
 sync();draw();
 const b=[];lines.forEach(l=>l.forEach(p=>b.push(p)));if(b.length)map.fitBounds(L.latLngBounds(b),{padding:[60,60],maxZoom:17});
 ed={cleanup(){map.off('click',onclick);grp.remove()},
  act(a){if(a==='append'||a==='insert'){mode=a;sync();ui2()}
   else if(a==='newline'){lines.push([]);active=lines.length-1;mode='append';sync();draw()}
   else if(a==='undo'){if(active>=0){lines[active].pop();if(!lines[active].length){lines.splice(active,1);active=lines.length?lines.length-1:-1}draw()}}
   else if(a==='clear'){lines=[];active=-1;mode='append';sync();draw()}},
  save(){const ls=lines.filter(l=>l.length>=2).map(l=>l.map(p=>[+p[0].toFixed(6),+p[1].toFixed(6)]));if(lines.some(l=>l.length===1))return FM.toast('مسار يحوي نقطة واحدة؛ أضف نقطة أخرى أو احذفه.');
   let longest=null;for(const l of ls)if(!longest||l.length>longest.length)longest=l;
   const same=JSON.stringify(ls)===JSON.stringify(r.lines||[]);
   const n=Object.assign({},rec(id),{lines:ls,ends:longest?[longest[0],longest[longest.length-1]]:null});if(!same){n.seg=null}
   const res=saveRecord(n,false,'route');if(!res.ok)return FM.toast(res.errs[0]);endEdit(false);FM.toast('حُفظ المسار.');openPanel(ui.tab==='dash'?'rec':ui.tab)},
  cancel(){endEdit(false);openPanel(ui.tab==='dash'?'rec':ui.tab)}}}
document.addEventListener('click',e=>{const b=e.target.closest('#medit [data-m]');if(!b||!ed)return;const a=b.dataset.m;if(a==='save')ed.save();else if(a==='cancel')ed.cancel();else if(ed.act)ed.act(a)});
window.FM_ADMIN={moveSite,editRoute,pickSite,openEdit:id=>{const r=rec(id);if(r)openForm(r)},onMap:id=>{const r=rec(id);if(!r)return;r.kind==='site'?moveSite(id):editRoute(id)}};

/* ===== الاستيراد والتصدير (CSV / Excel) ===== */
const IOH={id:['المعرف','id','الرقم'],kind:['النوع','kind'],name:['الاسم','name'],type:['التصنيف','type','الفئة'],city:['المدينة','city'],district:['الحي','district'],lat:['خط العرض','lat','latitude'],lng:['خط الطول','lng','lon','longitude'],url:['رابط Google','رابط جوجل','الرابط','url','رابط الموقع'],placeId:['معرف Google','place id','placeid'],aliases:['أسماء بديلة','اسماء بديلة','aliases'],alias:['اسم بديل','alias'],note:['ملاحظات','ملاحظة','note','notes'],status:['الحالة','status']};
const EXC=['kind','id','name','type','city','district','lat','lng','url','placeId','aliases','alias','note','status'];
const EXH={kind:'النوع',id:'المعرّف',name:'الاسم',type:'التصنيف',city:'المدينة',district:'الحي',lat:'خط العرض',lng:'خط الطول',url:'رابط Google',placeId:'معرّف Google',aliases:'أسماء بديلة',alias:'اسم بديل',note:'ملاحظات',status:'الحالة'};
const hn=s=>String(s==null?'':s).replace(/[ً-ْـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase().replace(/[\s_\-]+/g,'');
const HMAP=(()=>{const m={};for(const k in IOH)for(const s of IOH[k])m[hn(s)]=k;return m})();
const toDigits=s=>String(s).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٫,]/g,'.');
const cell=v=>String(v==null?'':v).replace(/ /g,' ').trim();
function kindOfLabel(t){t=hn(t);if(!t)return '';if(/شارع|طريق|street/.test(t))return 'street';if(/^حي|district/.test(t))return 'district';if(/موقع|مدرسه|مجمع|site/.test(t))return 'site';return '?'}
function typeOfLabel(t){const x=hn(t);if(!x)return '';if(/متوسط|middle/.test(x))return 'middle';if(/ثانوي|high/.test(x))return 'high';if(/مجمع|تجاري|مول|mall/.test(x))return 'mall';return '?'}
function exportRows(scope){const R=DATA.records.filter(r=>scope==='all'||(scope==='approved'?r.status==='approved':r.status!=='archived'));
 const ord={site:0,street:1,district:2};R.sort((a,b)=>(ord[a.kind]-ord[b.kind])||(a.city||'').localeCompare(b.city||'','ar')||a.name.localeCompare(b.name,'ar'));
 const head=EXC.map(k=>EXH[k]);
 const safe=v=>{v=v==null?'':String(v);return /^[=+@]/.test(v)?"'"+v:v};
 const rows=R.map(r=>EXC.map(k=>{if(k==='kind')return KINDS[r.kind];if(k==='type')return r.kind==='site'?TYPES[r.type]||r.type:'';if(k==='status')return STL[r.status]||r.status;if(k==='url')return safe(r.kind==='street'?r.g:r.url);if(k==='lat'||k==='lng')return r.kind==='site'&&hasXY(r)?+r[k]:'';return safe(r[k])}));
 return [head].concat(rows)}
function toCsv(a){return '﻿'+a.map(r=>r.map(v=>{v=String(v==null?'':v);return /[",\n\r;]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}).join(',')).join('\r\n')}
function parseCsv(t){t=t.replace(/^﻿/,'');const first=t.split(/\r?\n/,1)[0]||'';const cnt=c=>first.split(c).length-1;const d=cnt('\t')>cnt(',')&&cnt('\t')>=cnt(';')?'\t':cnt(';')>cnt(',')?';':',';
 const out=[];let row=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];
  if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}
  else if(c==='"')q=true;else if(c===d){row.push(f);f=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);f='';out.push(row);row=[]}else f+=c}
 if(f!==''||row.length){row.push(f);out.push(row)}return out.filter(r=>r.some(x=>cell(x)!==''))}
function loadXlsx(){return new Promise((ok,no)=>{if(window.XLSX)return ok(window.XLSX);const s=document.createElement('script');s.src='xlsx.mini.min.js';s.onload=()=>window.XLSX?ok(window.XLSX):no(new Error('تعذّر تحميل مكتبة Excel'));s.onerror=()=>no(new Error('تعذّر تحميل مكتبة Excel (xlsx.mini.min.js)'));document.head.appendChild(s)})}
async function readTable(f){const n=f.name.toLowerCase();
 if(/\.(csv|txt|tsv)$/.test(n))return parseCsv(await f.text());
 if(/\.(xlsx|xls)$/.test(n)){const X=await loadXlsx();const wb=X.read(new Uint8Array(await f.arrayBuffer()),{type:'array'});let best=null;
  for(const sn of wb.SheetNames){const a=X.utils.sheet_to_json(wb.Sheets[sn],{header:1,defval:'',raw:true});if(a.some(r=>r.some(c=>HMAP[hn(c)]==='name'))){best=a;break}if(!best)best=a}
  return (best||[]).filter(r=>r.some(x=>cell(x)!==''))}
 throw new Error('صيغة الملف غير مدعومة. استخدم CSV أو XLSX.')}
function analyse(table){const hi=table.slice(0,8).findIndex(r=>r.some(c=>HMAP[hn(c)]==='name'));
 if(hi<0)throw new Error('لم يُعثر على عمود «الاسم» في أول الملف. نزّل القالب واستخدمه.');
 const cols=table[hi].map(c=>HMAP[hn(c)]||null);const body=table.slice(hi+1);
 if(body.length>5000)throw new Error('عدد الصفوف يتجاوز ٥٠٠٠.');
 const idx={};DATA.records.forEach(r=>{idx[r.id]=r});
 const key=(k,n,c)=>k+'|'+hn(n)+'|'+(c||'');const byKey=new Map();DATA.records.forEach(r=>byKey.set(key(r.kind,r.name,r.city),r));
 const seen=new Set(),rows=[],ign=cols.includes('status');
 body.forEach((raw,i)=>{const o={};cols.forEach((k,j)=>{if(k&&o[k]===undefined)o[k]=cell(raw[j])});const n=hi+i+2;const x={n,o,st:'err',msg:'',rec:null,old:null,ch:[]};rows.push(x);
  let city=o.city;if(city&&!FM.CITIES.includes(city))return x.msg='المدينة يجب أن تكون الخبر أو الظهران',0;
  let kind=kindOfLabel(o.kind);if(kind==='?')return x.msg='قيمة «النوع» غير معروفة: '+o.kind,0;
  if(!kind){const m=o.id&&idx[o.id]?[idx[o.id]]:DATA.records.filter(r=>r.kind!=='district'&&hn(r.name)===hn(o.name)&&(!city||r.city===city));kind=m.length===1?m[0].kind:(o.lat||o.lng||o.type)?'site':'street'}
  if(!o.name)return x.msg='الاسم فارغ',0;
  let type=o.type?typeOfLabel(o.type):'';if(type==='?')return x.msg='قيمة «التصنيف» غير معروفة: '+o.type,0;
  let lat=null,lng=null;if(o.lat||o.lng){lat=parseFloat(toDigits(o.lat));lng=parseFloat(toDigits(o.lng));if(!isFinite(lat)||!isFinite(lng))return x.msg='إحداثيات غير صالحة',0}
  let old=(o.id&&idx[o.id]&&idx[o.id].kind===kind)?idx[o.id]:byKey.get(key(kind,o.name,city))||null;
  if(!old&&!city){const c=DATA.records.filter(r=>r.kind===kind&&hn(r.name)===hn(o.name));if(c.length>1)return x.msg='الاسم مشترك بين أكثر من سجل؛ حدّد المدينة أو المعرّف',0;if(c.length===1)old=c[0]}
  const kk=old?'id:'+old.id:key(kind,o.name,city);if(seen.has(kk))return x.msg='مكرر داخل الملف',0;seen.add(kk);
  if(old){const m=Object.assign({},old);const put=(f,v)=>{if(v!==''&&v!==null&&v!==undefined)m[f]=v};
   put('name',o.name);put('city',city);put('district',o.district);put('aliases',o.aliases);put('alias',o.alias);put('note',o.note);
   if(kind==='site'){put('type',type);if(lat!==null){m.lat=lat;m.lng=lng}put('url',o.url);put('placeId',o.placeId)}
   if(kind==='street')put('g',o.url);
   const ch=diff(old,m);const e=validate(Object.assign({},m,{status:old.status==='approved'?'pending':m.status}));
   if(e.length)return x.msg=e[0],0;
   if(!ch.length&&old.status!=='archived'){x.st='same';x.msg='لا تغيير';x.old=old;return}
   if(old.status==='archived'){m.status='draft';ch.push(['status','archived','draft']);x.msg='مؤرشف: يُستعاد مسودةً'}
   else if(old.status==='approved'){m.status='pending';ch.push(['status','approved','pending']);x.msg='يعود إلى «بانتظار التحقق» لمراجعة التعديل'}
   m.updated=nowIso();x.st='upd';x.rec=m;x.old=old;x.ch=ch;return}
  const r={kind,id:uid(kind==='site'?'s':kind==='street'?'st':'d'),name:o.name,city:city||'',district:o.district||'',status:kind==='district'?'approved':'draft',updated:nowIso()};
  if(kind==='site'){r.type=type||'';r.lat=lat;r.lng=lng;r.url=o.url||'';r.placeId=o.placeId||'';r.aliases=o.aliases||'';r.note=o.note||''}
  if(kind==='street'){r.alias=o.alias||'';r.g=o.url||'';r.found=false;r.lines=[];r.note=o.note||''}
  if(kind==='district'&&!r.city)return x.msg='مدينة الحي مطلوبة',0;
  const e=validate(r);if(e.length)return x.msg=e[0],0;
  x.st='new';x.rec=r;
  if(kind==='site'&&hasXY(r)){const d=findDup(r);if(d){x.st='warn';x.msg='قريب (أقل من ٣٠ م) من «'+d.name+'»'}}});
 return {rows,ign,hdr:hi+1}}
function vIO(){const io=ui._io,sc=ui._exs||'live';
 const cnt=s=>io?io.rows.filter(x=>x.st===s).length:0;
 const exp=`<section class="pn"><h3>التصدير</h3><div class="frm"><label>النطاق<select id="exs"><option value="live"${sc==='live'?' selected':''}>السجلات الفعّالة (دون المؤرشفة)</option><option value="approved"${sc==='approved'?' selected':''}>المعتمدة فقط</option><option value="all"${sc==='all'?' selected':''}>الكل بما فيه المؤرشفة</option></select></label></div>
 <div class="ac"><button type="button" class="btn" data-io="csv">⬇ ملف CSV</button><button type="button" class="btn" data-io="xlsx">⬇ ملف Excel</button><a class="btn" href="template.xlsx" download>⬇ قالب الاستيراد (Excel)</a></div>
 <p class="hint">يتضمن التصدير بيانات الجدول فقط. أما مسارات الشوارع فتبقى في النسخة الكاملة (JSON) من تبويب «النسخ والنشر»، ولا يمسّها الاستيراد.</p></section>`;
 const imp=`<section class="pn"><h3>الاستيراد</h3><p class="hint">يقبل CSV وExcel. تُقرأ الأعمدة بأسمائها العربية (الاسم، التصنيف، المدينة، الحي، خط العرض، خط الطول، رابط Google…). تُعرض معاينة كاملة قبل أي تغيير. تدخل السجلات الجديدة «مسودة» دائماً، ويُتجاهل عمود «الحالة»، ولا يُعتمد أي سجل بالاستيراد. والتحديث يملأ الحقول غير الفارغة فقط ولا يحذف شيئاً. ويُبقي ما كان معتمداً قيد المراجعة إن تغيّر.</p>
 <div class="ac"><label class="btn pri">⬆ اختيار ملف<input type="file" id="iof" accept=".csv,.txt,.tsv,.xlsx,.xls" hidden></label>${io?'<button type="button" class="btn" data-io="clear">إلغاء المعاينة</button>':''}</div><div id="iomsg" class="pmsg${io&&io.err?' bad':''}">${io&&io.err?esc(io.err):''}</div>
 ${io&&io.rows?`<div class="kpis small"><div class="kpi ok"><b>${fmtN(cnt('new'))}</b><span>جديد</span></div><div class="kpi"><b>${fmtN(cnt('upd'))}</b><span>تحديث</span></div><div class="kpi"><b>${fmtN(cnt('same'))}</b><span>بلا تغيير</span></div><div class="kpi w"><b>${fmtN(cnt('warn'))}</b><span>تحذير (تشابه)</span></div><div class="kpi bad"><b>${fmtN(cnt('err'))}</b><span>مرفوض</span></div></div>
 <p class="hint">الملف: ${esc(io.name)} · صف الرؤوس ${fmtN(io.hdr)}${io.ign?' · عمود «الحالة» مُتجاهَل':''}</p>
 ${cnt('warn')?`<label class="ck"><input type="checkbox" data-io="incl"${io.incl?' checked':''}> استيراد صفوف التحذير أيضاً (تُضاف جديدة)</label>`:''}
 <div class="tw"><table class="iot"><thead><tr><th>#</th><th>النتيجة</th><th>النوع</th><th>الاسم</th><th>المدينة / الحي</th><th>ملاحظة</th></tr></thead><tbody>${io.rows.slice(0,200).map(x=>{const o=x.rec||x.old||{};const lab={new:'جديد',upd:'تحديث',same:'بلا تغيير',warn:'تحذير',err:'مرفوض'}[x.st];return `<tr class="${x.st}"><td>${fmtN(x.n)}</td><td><span class="stb ${x.st==='new'?'approved':x.st==='upd'?'verified':x.st==='err'?'suspended':x.st==='warn'?'pending':'archived'}">${lab}</span></td><td>${KINDS[o.kind]||esc(x.o.kind||'')}</td><td>${esc(o.name||x.o.name||'')}</td><td>${esc((o.city||x.o.city||'')+(o.district||x.o.district?' · '+(o.district||x.o.district):''))}</td><td>${esc(x.msg||(x.ch.length?x.ch.map(c=>FLD[c[0]]||c[0]).join('، '):''))}</td></tr>`}).join('')}</tbody></table></div>${io.rows.length>200?`<p class="hint">عُرض أول ٢٠٠ صف من ${fmtN(io.rows.length)}.</p>`:''}
 <div class="ac"><button type="button" class="btn pri" data-io="apply"${cnt('new')+cnt('upd')+(io.incl?cnt('warn'):0)?'':' disabled'}>تطبيق الاستيراد…</button></div>`:''}</section>`;
 return exp+imp}
function ioBind(){const body=$('admBody');
 const f=$('iof');if(f)f.onchange=async()=>{const file=f.files[0];if(!file)return;msg('iomsg','جارٍ قراءة الملف…');
  try{if(file.size>8e6)throw new Error('حجم الملف يتجاوز ٨ ميغابايت.');const t=await readTable(file);const r=analyse(t);ui._io=Object.assign({name:file.name,incl:false},r);draw()}
  catch(e){ui._io={err:e.message,rows:null};draw()}};
 const s=$('exs');if(s)s.onchange=()=>{ui._exs=s.value};
 body.querySelectorAll('[data-io]').forEach(b=>{const a=b.dataset.io;
  if(a==='incl')b.onchange=()=>{ui._io.incl=b.checked;draw()};
  else b.onclick=async()=>{
   if(a==='clear'){ui._io=null;return draw()}
   if(a==='csv'){const sc=($('exs')||{}).value||'live';return dl('سجلات-التمركز-'+stamp()+'.csv',toCsv(exportRows(sc)),'text/csv;charset=utf-8')}
   if(a==='xlsx'){try{const X=await loadXlsx();const sc=($('exs')||{}).value||'live';const A=exportRows(sc);const ws=X.utils.aoa_to_sheet(A);ws['!cols']=[8,14,34,16,10,16,11,11,40,24,22,16,30,12].map(w=>({wch:w}));const wb=X.utils.book_new();wb.Workbook={Views:[{RTL:true}]};X.utils.book_append_sheet(wb,ws,'السجلات');X.writeFile(wb,'سجلات-التمركز-'+stamp()+'.xlsx')}catch(e){FM.toast(e.message)}return}
   if(a==='apply'){const io=ui._io;const c=k=>io.rows.filter(x=>x.st===k).length;const w=io.incl?c('warn'):0;
    return openModal(`<h3>تأكيد الاستيراد</h3><p>سيُضاف <b>${fmtN(c('new')+w)}</b> سجل جديد (مسودة)، ويُحدَّث <b>${fmtN(c('upd'))}</b> سجل، ويُتخطى ${fmtN(c('same')+c('err')+(io.incl?0:c('warn')))} صف. تُحفظ نسخة محلية قبل التطبيق ويمكن الاستعادة منها.</p><div class="ac"><button type="button" class="btn pri" data-mact="ioapply">تطبيق</button><button type="button" class="btn" data-mact="close">إلغاء</button></div>`)}}})}
function ioApply(){const io=ui._io;if(!io||!io.rows)return;closeModal();snap('قبل استيراد');let a=0,u=0;
 for(const x of io.rows){if(x.st==='new'||(x.st==='warn'&&io.incl)){DATA.records.push(x.rec);logIt(x.rec,'import',[['status','',x.rec.status]]);a++}
  else if(x.st==='upd'){Object.assign(x.old,x.rec);logIt(x.old,'import',x.ch);u++}}
 const dn=new Set(DATA.records.filter(r=>r.kind==='district').map(r=>r.city+'|'+hn(r.name)));let nd=0;
 for(const r of DATA.records){if(r.kind==='district'||!r.district||!r.city)continue;const k=r.city+'|'+hn(r.district);if(!dn.has(k)){dn.add(k);DATA.records.push({kind:'district',id:uid('d'),name:r.district,city:r.city,status:'approved',updated:nowIso()});nd++}}
 ui._io=null;afterChange();FM.toast('اكتمل الاستيراد: '+fmtN(a)+' جديد، '+fmtN(u)+' محدَّث'+(nd?'، '+fmtN(nd)+' حي جديد':'')+'.')}

window.FM_ADMIN.ioApply=ioApply;
mount();
(function restoreWork(){try{const w=JSON.parse(localStorage.getItem(WK)||"null");if(!w||!w.data||!Array.isArray(w.data.records))return;
 if(w.base===ctx.baseRev){replaceData(w.data);dirty=true;FM.refreshAll();updBadge();FM.toast("استُعيدت تعديلات غير منشورة من هذا الجهاز.")}
 else{const keep=JSON.parse(localStorage.getItem(SK)||"[]");keep.unshift({t:nowIso(),label:"مسودة محلية أقدم من المنشور",rev:w.base,data:JSON.stringify(w.data)});try{localStorage.setItem(SK,JSON.stringify(keep.slice(0,8)))}catch(e){}localStorage.removeItem(WK);FM.toast("نُشرت نسخة أحدث؛ حُفظت مسودتك القديمة ضمن النسخ المحلية.")}}catch(e){}})();
};})();
