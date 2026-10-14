const ALL_PRODUCTS = [
 {id:1,off:42,cat:"leather",loc:"Ariaria Market, Aba",name:"[Test Product] Aba Handcrafted Italian-Cut Boots",price:24500,old:42000,rating:4.8,rev:312,img:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400"},
 {id:2,off:34,cat:"leather",loc:"Ariaria Market, Aba",name:"[Test Product] Aba Handcrafted Full-Grain Backpack",price:36000,old:55000,rating:4.9,rev:164,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"},
 {id:3,off:30,cat:"leather",loc:"Kano Tannery District",name:"[Test Product] Kano Tanned Suede Sneakers",price:19500,old:28000,rating:4.9,rev:76,img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"},
 {id:4,off:27,cat:"leather",loc:"Iseyin, Oyo State",name:"[Test Product] Hand-Woven Yoruba Aso-Oke Agbada Royal Fabric",price:62000,old:85000,rating:5,rev:98,img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"},
 {id:5,off:26,cat:"appliances",loc:"Ikeja Industrial Estate, Lagos",name:"[Test Product] Century 18-Inch Dual Battery Rechargeable Fan",price:48000,old:65000,rating:4.7,rev:428,img:"https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400"},
 {id:6,off:25,cat:"appliances",loc:"Alaba International, Lagos",name:"[Test Product] Maxi 43-Inch Frameless Full HD Smart TV",price:145000,old:195000,rating:4.6,rev:189,img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400"},
 {id:7,off:28,cat:"appliances",loc:"Ikeja Industrial Estate, Lagos",name:"[Test Product] Century Heavy-Duty 12-Cup Coffee Maker",price:38500,old:53000,rating:4.7,rev:210,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"},
 {id:8,off:23,cat:"appliances",loc:"Alaba International, Lagos",name:"[Test Product] Polystar 300L Chest Freezer",price:210000,old:272000,rating:4.5,rev:98,img:"https://images.unsplash.com/photo-1584568694244-14fbdf83bed8?w=400"},
 {id:9,off:25,cat:"foodstuff",loc:"Apapa Mills, Lagos",name:"[Test Product] Dangote Premium Destoned Ofada Rice 50kg",price:10500,old:14000,rating:4.9,rev:680,img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"},
 {id:10,off:25,cat:"foodstuff",loc:"Makurdi, Benue State",name:"[Test Product] Benue Cold-Pressed Virgin Palm Oil 5L",price:8900,old:12000,rating:4.8,rev:140,img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400"},
 {id:11,off:24,cat:"foodstuff",loc:"Nsukka, Enugu State",name:"[Test Product] Nsukka Sun-Dried Aromatic Tomatoes 5kg",price:7200,old:9500,rating:5,rev:220,img:"https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400"},
 {id:12,off:21,cat:"foodstuff",loc:"Lafia, Nasarawa State",name:"[Test Product] Nasarawa Grade-A Ginger &amp; Herbal Tea",price:14200,old:18000,rating:4.8,rev:95,img:"https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400"},
 {id:13,off:20,cat:"solar",loc:"Alaba International, Lagos",name:"[Test Product] EcoFlow River 2 Pro 768Wh / 800W Portable Solar Generator",price:620000,old:780000,rating:4.9,rev:94,img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"},
 {id:14,off:22,cat:"solar",loc:"Alaba International, Lagos",name:"[Test Product] Felicity Solar 5KVA 48V Pure Sine Inverter",price:530000,old:680000,rating:4.8,rev:65,img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400"},
 {id:15,off:16,cat:"solar",loc:"Ikeja, Lagos",name:"[Test Product] Simba 220AH 12V Tall Tubular Battery",price:210000,old:250000,rating:4.6,rev:52,img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"},
 {id:16,off:25,cat:"solar",loc:"Trade Fair Complex, Lagos",name:"[Test Product] Astronergy 400W Monocrystalline High-Efficiency Solar Panel",price:180000,old:240000,rating:4.7,rev:41,img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"},
 {id:17,off:18,cat:"phones",loc:"Computer Village, Lagos",name:"[Test Product] Zinox Z-Book 14-Inch Laptop",price:265000,old:320000,rating:4.6,rev:73,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"},
 {id:18,off:15,cat:"phones",loc:"Computer Village, Lagos",name:"[Test Product] Naija Fast-Charge 20W Power Bank 20000mAh",price:9800,old:11500,rating:4.5,rev:311,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400"},
 {id:19,off:33,cat:"footwear",loc:"Aba, Abia State",name:"[Test Product] Aba Woven Palm-Fibre Slides",price:6200,old:9200,rating:4.7,rev:58,img:"https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400"},
 {id:20,off:29,cat:"footwear",loc:"Kano, Kano State",name:"[Test Product] Kano Hausa Embroidered Leather Sandals",price:11500,old:16200,rating:4.8,rev:44,img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"},
];
ALL_PRODUCTS.forEach(p=>{ p.test = true; });   // catalog items are TEST data: visible to Super Admin only

let sessionToken = "";
async function api(method, body){
  const r = await fetch("/api/products", { method, headers:{ "Content-Type":"application/json", ...(sessionToken?{Authorization:"Bearer "+sessionToken}:{}) }, body: body?JSON.stringify(body):undefined });
  const data = await r.json().catch(()=>({}));
  if(!r.ok) throw new Error(data.error || "Something went wrong.");
  return data;
}
async function loadSellerProducts(){
  try{
    const list = await api("GET");
    for(let i=ALL_PRODUCTS.length-1;i>=0;i--) if(ALL_PRODUCTS[i].sellerUpload) ALL_PRODUCTS.splice(i,1);
    ALL_PRODUCTS.unshift(...list); render();
  }catch(e){}
}
async function approveProduct(id){ try{ await api("PATCH",{id,status:"approved"}); await loadSellerProducts(); showToast('Listing approved'); }catch(e){ showToast(e.message); } }
async function removeProduct(id){ try{ await api("DELETE",{id}); state.view="home"; await loadSellerProducts(); showToast('Listing removed'); }catch(e){ showToast(e.message); } }
function isAdminUser(){ return state.loggedIn && state.role==="admin"; }
function shownProducts(){ return ALL_PRODUCTS.filter(p=>!p.test || isAdminUser()); }
const CATS = [
 {key:"all",label:"All",icon:"◎"},
 {key:"leather",label:"Fashion & Leather",icon:"👕"},
 {key:"appliances",label:"Appliances & Cooling",icon:"📺"},
 {key:"solar",label:"Solar & Power",icon:"⚡"},
 {key:"phones",label:"Phones & Tech",icon:"📱"},
 {key:"foodstuff",label:"Foodstuff & Agro",icon:"🌾"},
 {key:"footwear",label:"Artisan Footwear",icon:"👣"},
];
const PAGE_SIZE = 16;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
let state = { orders:[], notes:[], lastOrder:null, payoutDraft:{}, view:"home", catFilter:"all", cart:{}, wish:{}, catSide:"leather", visibleCount:PAGE_SIZE, query:"", deliveryState:"Lagos",
  bizRecord:{name:"", category:"leather", monthlySales:"", years:""},
  docs:{cac:false, validId:false, bankStatement:false, guarantor:false, taxCert:false},
  loanAmount:"", loanPurpose:"",
  loggedIn:false, userName:"", authMode:"signin", signupName:"", storeName:"", storeLoc:"", myStore:null, mustChange:false, remember:true, userPhone:"", twofa:null, emailVerified:true, verifyRequired:false, evCode:"", evSent:false, addresses:[], addrSel:null, addrDraft:{line1:"",city:"",state:"Bayelsa",phone:""}, profileDraft:null, isSuper:false, rst:{email:"",code:"",pw:"",step:1}, earn:null, myApps:[], disputeDraft:{}, ship:{}, at:{disputes:[],payouts:[],funding:[],staff:null,platform:null,health:null,ref:{},note:{},na:{name:"",email:"",password:""}}, docs:[], docView:null, docChecks:{}, imageNote:"", listening:false, ob:{idCardType:"",nokName:"",nokRelationship:"",nokPhone:"",nokAddress:"",gName:"",gRelationship:"",gOccupation:"",gPhone:"",gAddress:"",guarantorConsent:false,businessName:"",category:"leather",newCategory:"",idType:"cac",phone:"",address:"",cac:"",nin:"",bank:"",accountName:"",accountNumber:"",consent:false}, reviewing:null, rejectReason:{}, sellers:[], loginEmail:"", loginPassword:"", loginError:"", role:"",
  aiMode:"shopper", aiInput:"", aiLoading:false, aiError:"", aiStreaming:"" };

let aiTurns = { shopper:[], business:[] };     // full turns sent to Claude (includes hidden rules in turn 0)
let aiDisplay = { shopper:[], business:[] };   // what's actually rendered in the chat bubbles
let commentsData = {
  1: [{id:9001, fake:true, name:"Test Reviewer (TEST)", text:"Great quality boots, fast delivery! (TEST)", ts:Date.now()-1000*60*60*24*2, aiReply:null}],
  4: [{id:9002, fake:true, name:"Test Reviewer 2 (TEST)", text:"Beautiful fabric, exactly as pictured. (TEST)", ts:Date.now()-1000*60*60*24*5, aiReply:null}],
};
let sampleApi = null, sampleChecked = false, aiAbortCtl = null;
let selectedProductId = null;
sampleApi = true; sampleChecked = true;

let PAYOUT = { bank:"Loading...", accountName:"", accountNumber:"", phone:"", whatsapp:"" };
async function loadPayout(){
  try{ if(!sessionToken) return; const r = await fetch("/api/payout",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ PAYOUT = await r.json(); render(); } }catch(e){}
}
function waLink(n){ return "https://wa.me/234" + n.replace(/^0/,""); }
function telLink(n){ return "tel:+234" + n.replace(/^0/,""); }

let communityData = {
  groups: [
    {id:1, fake:true, name:"Bayelsa: Fashion & Leather Guild", leader:"Chidi N. (TEST)", members:4},
    {id:2, fake:true, name:"Bayelsa: Foodstuff & Agro Guild", leader:"Fere O. (TEST)", members:3},
  ],
  rescue: [
    {id:1, fake:true, business:"Yenagoa Fabric Weavers (TEST)", score:38, status:"Diagnosing"},
    {id:2, fake:true, business:"Swali Leather Co. (TEST)", score:45, status:"Improvement Plan Active"},
  ],
  library: [
    {id:1, fake:true, type:"Recording", title:"Monthly Guild Call: August (TEST)", addedBy:"Chidi N."},
    {id:2, fake:true, type:"Book", title:"Pricing for Small Manufacturers (TEST)", addedBy:"Fere O."},
  ],
};
let COMMUNITY_LINKS = { whatsapp:"", telegram:"" };

function shippingFor(st){
  const near = ["Bayelsa","Rivers","Delta","Akwa Ibom","Cross River","Edo"];
  const mid = ["Lagos","Ogun","Ondo","Imo","Abia","Anambra","Enugu","Ebonyi"];
  if(near.includes(st)) return 2000;
  if(mid.includes(st)) return 3000;
  return 4500;
}
const NG_STATES = ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT (Abuja)","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"];

function money(n){ return "\u20a6"+n.toLocaleString(); }

function visibleProducts(){
  let list = state.catFilter==="all" ? shownProducts() : shownProducts().filter(p=>p.cat===state.catFilter);
  const tokens=String(state.query||'').toLowerCase().split(/[^a-z0-9]+/).filter(t=>t.length>1&&!STOP.includes(t));
  if(tokens.length){ list=list.map(p=>({p,s:searchScore(p,tokens)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).map(x=>x.p); }
  return list;
}

function renderProductCard(p){
  const inWish = !!state.wish[p.id];
  const hasDiscount = p.off && p.old && p.old > p.price;
  return `<div class="pcard" onclick="viewProduct(${p.id})" style="cursor:pointer;">
    <div class="pimg-wrap"><img src="${esc(p.img)}" alt="" loading="lazy">${hasDiscount ? `<span class="off-badge">-${p.off}%</span>` : ''}<span class="test-badge">${p.sellerUpload ? (p.status==='pending' ? 'PENDING REVIEW' : (p.sellerVerified ? 'VERIFIED SELLER' : 'NEW SELLER')) : 'TEST PRODUCT'}</span>
      <button class="wish-btn ${inWish?'on':''}" onclick="event.stopPropagation();toggleWish(${p.id})" aria-label="Wishlist">${inWish?'♥':'♡'}</button>
      <span class="maker-tag">Official Maker</span>
    </div>
    <div class="pinfo">
      <div class="ploc">📍 ${p.loc}</div>
      <div class="pname">${esc(p.name)}</div>
      <div class="pprice-row"><span class="pprice">${money(p.price)}</span></div>
      <div style="font-size:14px;">${hasDiscount ? `<span class="pold">${money(p.old)}</span>` : '&nbsp;'}</div>
      <div class="prate-row"><span class="stars">${p.rev>0 ? `★ <b>${p.rating}</b> (${p.rev})` : 'New Listing'}</span><button class="addbtn" onclick="event.stopPropagation();addToCart(${p.id})">+</button></div>
    </div>
  </div>`;
}

function viewHome(){
  const matched = visibleProducts();
  const shown = matched.slice(0, state.visibleCount);
  const allShown = shown.length >= matched.length;
  return `
  ${state.imageNote?`<div class="acct-card" style="display:block;margin:12px 16px 0;font-size:14px;">Photo search: <b>${state.imageNote}</b> <button class="listrow" style="display:inline;margin:0 0 0 6px;font-size:14px;" onclick="state.imageNote='';clearSearch()">Clear</button></div>`:''}
  <div class="banner">
    <h2>Made in Bayelsa Marketplace</h2>
    <p>Bayelsa artisans &amp; makers, selling directly to buyers in all 36 states + FCT</p>
    <button class="explore-btn" onclick="setView('categories')">Explore →</button>
  </div>
  <div class="section-head"><h3>Our Market</h3><span style="color:var(--sub);font-size:14px;">${shownProducts().length} products</span></div>
  <p class="section-sub">Explore authentic Nigerian-made products ready for fast dispatch</p>
  <div class="chip-row">
    ${CATS.map(c=>`<button class="chip ${state.catFilter===c.key?'active':''}" onclick="filterCat('${c.key}')">${esc(c.label)}${c.key==='all'?' ('+shownProducts().length+')':''}</button>`).join('')}
  </div>
  ${isAdminUser() ? `<p class="section-sub" style="color:#c0392b;font-weight:700;padding-top:8px;">Admin view: test products are visible only to you.</p>` : ''}
  ${matched.length===0 ? (state.query||state.catFilter!=='all' ? `<div class="emptystate"><div class="ic">🔍</div><h3>No products found</h3><p>Try a different search term or category.</p><button onclick="clearSearch()">Clear Search</button></div>` : `<div class="emptystate"><div class="ic">🛍️</div><h3>Products are coming soon</h3><p>Verified Bayelsa sellers are getting ready to list. Check back shortly!</p></div>`)
  : `<div class="grid2">${shown.map(renderProductCard).join('')}</div>
  <button class="loadmore" onclick="loadMore()" ${allShown?'disabled':''}>
    ${allShown ? "✔ All products loaded" : "Load Some More Authentic Nigerian Products"}
    <small>Showing ${shown.length} of ${matched.length} verified Nigerian test products${allShown?'':' • Tap to load more'}</small>
  </button>`}
  ${storiesSection()}
  <div class="section-head" style="padding-top:8px;"><h3>Explore Categories</h3><a onclick="setView('categories')">See All ›</a></div>
  <div class="cat-grid">${CATS.filter(c=>c.key!=='all').map(c=>`<button class="catbtn" onclick="filterCat('${c.key}');setView('home')"><div class="ic">${c.icon}</div>${esc(c.label)}</button>`).join('')}</div>
  `;
}

function viewCategories(){
  const sub = {
    leather:[["Shoes","2 items"],["Bags & Backpacks","1 item"],["Ankara Fabric","1 item"]],
    appliances:[["Fans & Cooling","1 item"],["TVs & Electronics","1 item"],["Kitchen","1 item"],["Freezers","1 item"]],
    solar:[["Generators","1 item"],["Inverters","1 item"],["Batteries","1 item"],["Panels","1 item"]],
    phones:[["Laptops","1 item"],["Accessories","1 item"]],
    foodstuff:[["Grains","1 item"],["Oils","1 item"],["Vegetables","1 item"],["Tea & Spices","1 item"]],
    footwear:[["Slides","1 item"],["Sandals","1 item"]],
  }[state.catSide] || [];
  const list = shownProducts().filter(p=>p.cat===state.catSide);
  return `<div class="catlayout">
    <div class="catside">
      ${CATS.filter(c=>c.key!=='all').map(c=>`<button class="${state.catSide===c.key?'active':''}" onclick="setCatSide('${c.key}')">${esc(c.label)}</button>`).join('')}
    </div>
    <div class="catmain">
      <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:700;color:var(--sub);margin-bottom:6px;">
        <span style="color:var(--ink)">${CATS.find(c=>c.key===state.catSide)?.label}</span><span style="color:var(--green)">All Products</span>
      </div>
      <h4>Browse sub-departments</h4>
      <div class="subdept">${sub.map(s=>`<button><div class="sw"></div><div><b style="font-size:14px;">${s[0]}</b><br><span style="color:var(--sub)">${s[1]}</span></div></button>`).join('')}</div>
      <h4>All in ${CATS.find(c=>c.key===state.catSide)?.label} · ${list.length} items</h4>
      <div class="grid2" style="padding:0;">${list.map(renderProductCard).join('')}</div>
    </div>
  </div>`;
}

function viewCart(){
  const items = Object.keys(state.cart).map(id=>({p:shownProducts().find(p=>p.id==id), qty:state.cart[id]})).filter(x=>x.qty>0 && x.p);
  if(items.length===0){
    return `<div class="emptystate"><div class="ic">🛒</div><h3>Your cart is empty</h3><p>Add products you like to review and buy later.</p><button onclick="setView('home')">Browse Products</button></div>`;
  }
  const subtotal = items.reduce((s,x)=>s+x.p.price*x.qty,0);
  const shipping = shippingFor(state.deliveryState);
  return `
  <div style="padding:16px;"><b style="font-size:15px;">Shopping Cart (${items.length} items)</b>
    <p style="font-size:14px;color:var(--sub);margin-top:2px;">Dispatched from Bayelsa makers to any state in Nigeria</p></div>
  ${items.map(x=>`<div class="cartitem">
    <img src="${esc(x.p.img)}" alt="">
    <div class="ci-body">
      <div class="ci-name">${esc(x.p.name)}</div>
      <div class="ci-maker">Official Maker · ${x.p.loc}</div>
      <div class="ci-bottom">
        <span class="ci-price">${money(x.p.price)}</span>
        <div class="qty"><button onclick="changeQty(${x.p.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${x.p.id},1)">+</button></div>
      </div>
    </div>
    <button class="trash" onclick="changeQty(${x.p.id},-99)">🗑️</button>
  </div>`).join('')}
  <div style="padding:16px 16px 0;"><b style="font-size:14px;">Delivery State (Nigeria)</b></div>
  <div style="padding:0 16px 14px;">
    <select id="deliverySelect" onchange="setDeliveryState(this.value)" style="width:100%;padding:12px;border-radius:12px;border:1px solid var(--line);font-size:14px;color:var(--ink);background:#fff;">
      ${NG_STATES.map(s=>`<option value="${esc(s)}" ${state.deliveryState===s?'selected':''}>${s}</option>`).join('')}
    </select>
  </div>
  <div class="cartsum">
    <b style="font-size:14px;">ORDER SUMMARY</b>
    <div class="sumrow"><span>Subtotal</span><span>${money(subtotal)}</span></div>
    <div class="sumrow"><span>Shipping to ${state.deliveryState}</span><span>${money(shipping)}</span></div>
    <div class="sumrow"><span>Delivery time</span><span>${etaFor(state.deliveryState)}</span></div>
    <div class="sumrow total"><span>Total</span><span>${money(subtotal+shipping)}</span></div>
    <button class="checkoutbtn" onclick="checkout()">Proceed to Checkout →</button>
  </div>`;
}

function viewWishlist(){
  const ids = Object.keys(state.wish).filter(id=>state.wish[id]);
  if(ids.length===0){
    return `<div class="emptystate"><div class="ic">♥</div><h3>Your wishlist is empty</h3><p>Save products you are interested in to review and purchase later.</p><button onclick="setView('home')">Browse Products</button></div>`;
  }
  const items = ids.map(id=>shownProducts().find(p=>p.id==id)).filter(Boolean);
  return `<div class="grid2">${items.map(renderProductCard).join('')}</div>`;
}

function viewAccount(){
  if(!state.loggedIn){
    if(state.twofa) return twofaCard();
    if(state.authMode==='reset') return resetCard();
    const up = state.authMode!=='signin', sell = state.authMode==='seller';
    const fld=(l,v,k,t)=>`<label style="font-size:14px;color:var(--sub);">${l}</label><input type="${t||'text'}" value="${esc(v)}" oninput="state.${k}=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`;
    return `
    <div class="acct-card" style="display:block;"><form onsubmit="event.preventDefault();${up ? 'doRegister()' : 'doLogin()'}">
      <b style="font-size:16px;">${sell ? 'Create a business owner account' : up ? 'Create your account' : 'Sign in'}</b>
      <p style="font-size:14px;color:var(--sub);margin:4px 0 12px;">${sell ? 'Sign up with your email and a password. Next you will send your business details (CAC, NIN, address and bank account) for approval.' : up ? 'Shop, save favourites and track orders.' : 'Welcome back.'}</p>
      ${up ? fld('Full name',state.signupName,'signupName') : ''}
      <label style="font-size:14px;color:var(--sub);">Email</label>
      <input id="loginEmailInput" type="email" name="email" autocomplete="username" value="${esc(state.loginEmail)}" oninput="state.loginEmail=this.value" placeholder="you@email.com" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
      <label style="font-size:14px;color:var(--sub);">Password${up ? ' (8 or more characters)' : ''}</label>
      <input id="loginPasswordInput" type="password" name="password" autocomplete="${up ? 'new-password' : 'current-password'}" value="${esc(state.loginPassword)}" oninput="state.loginPassword=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
      ${state.loginError ? `<p style="font-size:14px;color:#c0392b;margin-bottom:8px;">${state.loginError}</p>` : ''}
      <label style="display:flex;gap:8px;align-items:center;font-size:14px;margin:0 0 12px;"><input type="checkbox" ${state.remember?'checked':''} onchange="state.remember=this.checked"> Keep me signed in on this phone</label>
      <button type="submit" class="checkoutbtn">${sell ? 'Create business account' : up ? 'Create account' : 'Sign in'}</button>
      <button type="button" class="listrow" style="margin:10px 0 0;font-size:14px;" onclick="state.authMode='${up ? 'signin' : 'signup'}';state.loginError='';render()">${up ? 'Already have an account? Sign in' : 'New here? Create an account'}</button>
      ${up ? '' : `<button type="button" class="listrow" style="margin:4px 0 0;font-size:14px;" onclick="state.rst.email=state.loginEmail;state.authMode='reset';state.loginError='';render()">Forgot password?</button>`}
      ${up ? `<p style="font-size:14px;color:var(--sub);margin:8px 0 0;">By creating an account you agree to our <a href="/terms.html" target="_blank" style="color:var(--green-dark);">Terms</a> and <a href="/privacy.html" target="_blank" style="color:var(--green-dark);">Privacy Policy</a>.</p>` : ''}
      ${sell ? '' : `<button type="button" class="listrow" style="margin:4px 0 0;font-size:14px;" onclick="state.authMode='seller';state.loginError='';render()">Want to sell? Create a business owner account</button>`}
    </form></div>`;
  }
  return `
  <div class="acct-card">
    <div class="avatar">${(state.userName||'?').charAt(0).toUpperCase()}</div>
    <div style="flex:1"><span class="nm">${esc(state.userName)}${state.role==='admin' ? ' (Admin)' : ''}</span><div class="em">${esc(state.loginEmail)}</div></div>
    <button class="listrow" style="width:auto;margin:0;padding:6px 10px;border:1px solid var(--line);border-radius:10px;font-size:14px;" onclick="doLogout()">Sign Out</button>
  </div>

  ${emailVerifyCard()}
  ${vendorsBlock()}
  ${sellerStatusCard()}
  ${buyerCards()}
  ${passwordCard()}
  ${adminTools()}
  ${legalLinks()}

  ${isApproved() ? `
  <div class="acct-card" style="align-items:flex-start;">
    <div class="avatar" style="background:var(--green-dark);">👥</div>
    <div style="flex:1">
      <div class="nm">Community</div>
      <div class="em" style="margin:4px 0 10px;">Join the WhatsApp or Telegram group to learn from other Bayelsa makers and post updates.</div>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="setView('communityhub')">Open Community →</button>
    </div>
  </div>

  <div class="acct-card" style="align-items:flex-start;">
    <div class="avatar" style="background:var(--green-dark);">🏦</div>
    <div style="flex:1">
      <div class="nm">Business Records &amp; Loan Access</div>
      <div class="em" style="margin:4px 0 10px;">Record your business, prepare loan documents, and apply for financing as a Bayelsa maker.</div>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="setView('finance')">Open Business &amp; Loans →</button>
    </div>
  </div>` : ''}
  ${approvalsBlock()}
  ${communityEditor()}
  ${payoutEditor()}
  ${ordersBlock()}
  <button class="listrow" onclick="setView('wishlist')">♡ Saved Wishlist <span class="sub">${Object.values(state.wish).filter(Boolean).length} items ›</span></button>
  <button class="listrow" onclick="showToast('Delivery address editing coming soon')">📍 Delivery Address <span class="sub">Not set ›</span></button>
  <button class="logoutbtn" onclick="resetApp()">Reset Test Data</button>
  `;
}

function docProgress(){
  const vals = Object.values(state.docs);
  return Math.round(vals.filter(Boolean).length / vals.length * 100);
}

function viewFinance(){
  if(!state.loggedIn){ state.view="account"; return viewAccount(); }
  const b = state.bizRecord;
  const docList = [
    ["cac","CAC Business Registration Certificate"],
    ["validId","Valid Government-Issued ID"],
    ["bankStatement","6-Month Bank Statement"],
    ["guarantor","Guarantor Form"],
    ["taxCert","Tax Identification / Clearance Certificate"],
  ];
  const pct = docProgress();
  return `
  <div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
    <button onclick="setView('account')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
    <div><b style="font-size:15px;">Business Records &amp; Loan Access</b><div style="font-size:14px;color:var(--sub);">For verified Bayelsa makers on this marketplace</div></div>
  </div>

  <div class="acct-card" style="align-items:flex-start;">
    <div class="avatar" style="background:var(--green-dark);">📦</div>
    <div style="flex:1">
      <div class="nm">List a Product</div>
      <div class="em" style="margin:4px 0 10px;">Upload a photo of your product so customers can preview it before buying.</div>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="setView('listproduct')">Upload a Product →</button>
    </div>
  </div>

  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Business Record</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">This information is what lenders and the platform use to verify your business.</p>
    <label style="font-size:14px;color:var(--sub);">Business name</label>
    <input value="${esc(b.name)}" oninput="updateBiz('name',this.value)" placeholder="e.g. Yenagoa Fabric Weavers" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Product category</label>
    <select onchange="updateBiz('category',this.value)" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:14px;background:#fff;">
      ${CATS.filter(c=>c.key!=='all').map(c=>`<option value="${esc(c.key)}" ${b.category===c.key?'selected':''}>${esc(c.label)}</option>`).join('')}
    </select>
    <label style="font-size:14px;color:var(--sub);">Average monthly sales (₦)</label>
    <input type="number" value="${esc(b.monthlySales)}" oninput="updateBiz('monthlySales',this.value)" placeholder="e.g. 350000" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Years in operation</label>
    <input type="number" value="${esc(b.years)}" oninput="updateBiz('years',this.value)" placeholder="e.g. 3" style="width:100%;padding:10px;margin:4px 0 4px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" style="margin-top:10px;" onclick="showToast('Business record saved')">Save Business Record</button>
  </div>

  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Investment Partner</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Royal Allison Investment Ltd is our confirmed investment partner for eligible Bayelsa businesses.</p>
    <div style="font-size:14px;color:var(--sub);line-height:1.7;margin-bottom:12px;">
      <b style="color:var(--ink);">To be considered, a business should have:</b><br>
      • A completed Business Record (above)<br>
      • CAC registration (or proof of a registered/registrable business)<br>
      • At least 3 months of visible sales activity on this marketplace<br>
      • A simple business plan: what you sell, your market, and what funding would be used for
    </div>
    <button class="checkoutbtn" onclick="showToast('Interest sent: Royal Allison will review your Business Record')">Express Interest to Royal Allison</button>
  </div>

  <p class="section-sub" style="padding:0 16px;">We're finalizing a partnership with a microfinance bank for seller loans. The checklist below gets you ready to apply the moment it's confirmed.</p>
  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Loan Document Checklist</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Tick off each document as you prepare it. ${pct}% ready.</p>
    <div style="height:8px;background:var(--green-light);border-radius:6px;overflow:hidden;margin-bottom:12px;"><div style="height:100%;width:${pct}%;background:var(--green);"></div></div>
    ${docList.map(([key,label])=>`
      <label style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:14px;">
        <input type="checkbox" ${state.docs[key]?'checked':''} onchange="toggleDoc('${key}')" style="width:17px;height:17px;accent-color:var(--green);">
        ${esc(label)}
      </label>`).join('')}
  </div>

  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Apply for a Loan</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Admins review your request and pass it to our partner. The partner decides, so approval is never guaranteed.</p>
    <label style="font-size:14px;color:var(--sub);">Amount requested (₦)</label>
    <input type="number" value="${esc(state.loanAmount)}" oninput="state.loanAmount=this.value" placeholder="e.g. 500000" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Purpose</label>
    <textarea oninput="state.loanPurpose=this.value" placeholder="e.g. Buy raw leather for the next production run" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:70px;">${state.loanPurpose}</textarea>
    <button class="checkoutbtn" onclick="submitLoan()">Submit Loan Application</button>
  </div>
  `;
}

function aiRules(mode){
  if(mode==="shopper"){
    const catalog = shownProducts().map(p=>`${esc(p.name)}: ₦${p.price.toLocaleString()} (category: ${p.cat}, rating ${p.rating}/5)`).join("; ");
    return `You are "Made in Bayelsa AI", the shopping assistant inside the Made in Bayelsa Marketplace app (Bayelsa-made products, sold to buyers across all of Nigeria). Help the shopper find what they need. Only recommend products from this real catalog. Never invent a product: ${catalog}. If nothing matches exactly, say so honestly and suggest the closest real alternative from the list above. If the shopper gives a budget, prioritize items within it; if nothing fits, say so and suggest the nearest option. Keep replies short, warm, and practical. A few sentences or a short list, not an essay.`;
  }
  return `You are "Made in Bayelsa AI", the business strategy assistant inside the Made in Bayelsa Marketplace app, helping small business owners in Bayelsa State (and Nigeria generally) decide what to sell, how to start, pricing, and marketing structure. This app has: a Business Record form, a loan document checklist (the actual lender/microfinance partner isn't confirmed yet), an investment partner called Royal Allison Investment Ltd for qualifying businesses, and a WhatsApp/Telegram seller community. Mention these when genuinely relevant, but never promise loan approval, investment, or guaranteed results, since those aren't decided by this app. Keep replies short, practical and encouraging. A few sentences or a short list, not an essay.`;
}

function aiErrorCopy(code){
  const hide = ["not_granted","sampling_disabled","not_declared","capability_disabled","capability_removed"];
  if(hide.includes(code)) return "The AI assistant isn't available for this account right now.";
  if(code==="rate_limited") return "That's a lot of questions at once. Please wait a moment and try again.";
  if(code==="session_expired") return "Please sign in again to keep chatting.";
  if(code==="refused") return "I can't help with that one. Try rephrasing.";
  if(code==="empty_completion") return "I didn't get a reply. Try asking in a shorter or simpler way.";
  if(code==="prompt_too_large") return "That's too long for me to read at once. Try a shorter message.";
  if(code==="cancelled") return "";
  return "Something went wrong reaching the AI assistant. Please try again.";
}

function setAiMode(m){ state.aiMode=m; state.aiError=""; render(); }

function aiSend(){
  const box = document.getElementById('aiInputBox');
  const msg = (box ? box.value : state.aiInput).trim();
  if(!msg || state.aiLoading) return;
  const mode = state.aiMode;
  aiTurns[mode].push({role:"user", content:msg});
  aiDisplay[mode].push({role:"user", content:msg});
  state.aiInput=""; state.aiLoading=true; state.aiError=""; state.aiStreaming="";
  render();
  aiAbortCtl = new AbortController();
  fetch("/api/assistant",{method:"POST",signal:aiAbortCtl.signal,headers:{"Content-Type":"application/json",...(sessionToken?{Authorization:"Bearer "+sessionToken}:{})},body:JSON.stringify({mode,messages:aiTurns[mode]})})
  .then(async r=>{ const d=await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong reaching the AI assistant. Please try again.");
    aiTurns[mode].push({role:"assistant", content:d.reply}); aiDisplay[mode].push({role:"assistant", content:d.reply}); state.aiLoading=false; render(); })
  .catch(e=>{ state.aiLoading=false; if(e.name!=="AbortError") state.aiError=e.message; render(); });
}
function aiStop(){ if(aiAbortCtl) aiAbortCtl.abort(); }

function renderAiChatOnly(){
  const el = document.getElementById('aiChatScroll');
  if(el) el.innerHTML = aiChatBubbles();
}
function aiChatBubbles(){
  const mode = state.aiMode;
  let html = aiDisplay[mode].map(t=>`<div class="ai-bubble ${t.role}">${t.content.replace(/</g,'&lt;')}</div>`).join('');
  if(state.aiLoading){ html += `<div class="ai-bubble assistant">${(state.aiStreaming||"Thinking…").replace(/</g,'&lt;')}</div>`; }
  return html || `<div class="ai-empty">${mode==='shopper' ? "Ask me what you're looking for, your budget, or say “I can't find X.”" : "Ask me what to sell, how to start, pricing, or marketing ideas."}</div>`;
}

function viewAI(){
  if(!sampleChecked){
    return `<div class="ai-header"><button class="back" onclick="setView('home')">←</button><div><b>Made in Bayelsa AI</b><div style="font-size:14px;opacity:.85;">Checking availability…</div></div></div>
    <p class="ai-empty">Connecting to the AI assistant…</p>`;
  }
  if(!sampleApi){
    return `<div class="ai-header"><button class="back" onclick="setView('home')">←</button><div><b>Made in Bayelsa AI</b></div></div>
    <p class="ai-empty">The AI assistant isn't available in this preview window. Open this page directly on claude.ai to use it.</p>`;
  }
  return `
  <div class="ai-header">
    <button class="back" onclick="setView('home')">←</button>
    <div><b>Made in Bayelsa AI</b><div style="font-size:14px;opacity:.85;">Your shopping &amp; business assistant</div></div>
  </div>
  <div class="ai-modes">
    <button class="${state.aiMode==='shopper'?'active':''}" onclick="setAiMode('shopper')">🛍️ Shopping Assistant</button>
    <button class="${state.aiMode==='business'?'active':''}" onclick="setAiMode('business')">📈 Business Advisor</button>
  </div>
  <div class="ai-chat" id="aiChatScroll">${aiChatBubbles()}</div>
  ${state.aiError ? `<p style="color:#c0392b;font-size:14px;padding:0 16px 90px;">${state.aiError}</p>` : ''}
  <div class="ai-inputbar">
    <div class="ai-inputbar-inner">
      <textarea id="aiInputBox" rows="1" placeholder="${state.aiMode==='shopper' ? 'e.g. Leather boots under ₦20,000' : 'e.g. I want to start a food business'}" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();aiSend();}">${state.aiInput}</textarea>
      ${state.aiLoading ? `<button class="ai-stopbtn" onclick="aiStop()">Stop</button>` : `<button class="ai-sendbtn" onclick="aiSend()">→</button>`}
    </div>
  </div>`;
}

function render(){
  const main = document.getElementById('main');
  if(state.loggedIn && state.mustChange) main.innerHTML = viewMustChange();
  else if(state.view==="home") main.innerHTML = viewHome();
  else if(state.view==="categories") main.innerHTML = viewCategories();
  else if(state.view==="cart") main.innerHTML = viewCart();
  else if(state.view==="wishlist") main.innerHTML = viewWishlist();
  else if(state.view==="account") main.innerHTML = viewAccount();
  else if(state.view==="finance") main.innerHTML = viewFinance();
  else if(state.view==="checkout") main.innerHTML = viewCheckout();
  else if(state.view==="communityhub") main.innerHTML = viewCommunityHub();
  else if(state.view==="ai") main.innerHTML = viewAI();
  else if(state.view==="product") main.innerHTML = viewProductDetail();
  else if(state.view==="listproduct") main.innerHTML = viewListProduct();
  else if(state.view==="dashboard") main.innerHTML = viewDashboard();

  document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active', b.dataset.view===state.view));
  const visIds = new Set(shownProducts().map(p=>String(p.id)));
  const cartTotal = Object.entries(state.cart).filter(([id])=>visIds.has(id)).reduce((a,[,q])=>a+q,0);
  const wishTotal = Object.values(state.wish).filter(Boolean).length;
  document.getElementById('cartcount').textContent = cartTotal;
  document.getElementById('wishcount').textContent = wishTotal;
  const fab = document.getElementById('aiFab');
  const nav = document.querySelector('.bottomnav');
  const topbar = document.querySelector('.topbar');
  const hideChrome = state.view==="ai";
  if(fab) fab.style.display = (hideChrome || (sampleChecked && !sampleApi)) ? "none" : "flex";
  if(nav) nav.style.display = hideChrome ? "none" : "flex";
  if(topbar) topbar.style.display = hideChrome ? "none" : "";
  main.scrollTop = 0;
}


const NEAR_STATES = ["Rivers","Delta","Akwa Ibom","Cross River","Edo"];
function etaFor(st){ return st==="Bayelsa" ? "under 24 hours" : NEAR_STATES.includes(st) ? "within 48 hours" : "3 to 5 days"; }
const STATUS_TEXT = { awaiting_payment:"Waiting for your transfer", payment_submitted:"Payment sent, waiting for confirmation", paid:"Payment confirmed", shipped:"On the way", delivered:"Delivered", cancelled:"Cancelled" };
async function loadOrders(){
  if(!sessionToken) return;
  try{ const r = await fetch("/api/orders",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ const d=await r.json(); state.orders=d.orders; state.notes=d.notes; render(); } }catch(e){}
}
async function orderCall(method, body){
  const r = await fetch("/api/orders",{method,headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify(body)});
  const d = await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong."); return d;
}
async function placeOrder(){
  if(!state.addrSel){ showToast('Choose or add a delivery address first'); return; }
  const items = Object.keys(state.cart).filter(id=>state.cart[id]>0).map(id=>{ const p=ALL_PRODUCTS.find(x=>x.id==id); return { productId:Number(id), qty:state.cart[id], name:p&&p.name, price:p&&p.price }; });
  try{ state.lastOrder = await orderCall("POST",{ items, state:state.deliveryState, addressId:state.addrSel }); state.cart={}; await loadOrders(); render(); }
  catch(e){ showToast(e.message); }
}
async function claimPaid(id){ try{ await orderCall("PATCH",{id,action:"paid_claim"}); if(state.lastOrder&&state.lastOrder.id===id) state.lastOrder.status="payment_submitted"; await loadOrders(); showToast('Thanks. We will confirm your payment'); }catch(e){ showToast(e.message); } }
async function adminOrder(id,action){ try{ await orderCall("PATCH",{id,action,...(action==='shipped'?(state.ship[id]||{}):{})}); await loadOrders(); showToast('Order updated, buyer messaged'); }catch(e){ showToast(e.message); } }
function payNow(id){ const o=state.orders.find(x=>x.id===id); if(o){ state.lastOrder=o; setView('checkout'); } }
async function savePayout(){
  try{ const r=await fetch("/api/payout",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({...PAYOUT,...state.payoutDraft})}); const d=await r.json(); if(!r.ok) throw new Error(d.error); PAYOUT=d; state.payoutDraft={}; render(); showToast('Payment details saved'); }
  catch(e){ showToast(e.message||'Could not save'); }
}
function payoutLines(){ return `<div style="font-size:16px;line-height:1.9;">
  <div><span style="color:var(--sub);">Bank</span>: <b>${esc(PAYOUT.bank||'Loading...')}</b></div>
  <div><span style="color:var(--sub);">Account name</span>: <b>${esc(PAYOUT.accountName||'')}</b></div>
  <div><span style="color:var(--sub);">Account number</span>: <b>${esc(PAYOUT.accountNumber||'')}</b></div>
  ${PAYOUT.phone?`<div><span style="color:var(--sub);">Phone</span>: <a href="${esc(telLink(PAYOUT.phone))}" style="color:var(--green-dark);font-weight:700;text-decoration:none;">${esc(PAYOUT.phone)}</a></div>`:''}</div>`; }
function ordersBlock(){
  if(!state.loggedIn) return '';
  const admin = state.role==='admin';
  const rows = state.orders.map(o=>`<div style="padding:12px 0;border-top:1px solid var(--line);font-size:14px;">
    <b>${esc(o.reference)}</b> · ${money(o.total)}${admin?` · ${esc(o.customer)}`:''}<br>
    <span style="color:var(--sub);">${o.items.map(i=>i.qty+' x '+esc(i.name)).join(', ')}</span><br>
    ${STATUS_TEXT[o.status]||o.status}${o.status==='paid'||o.status==='shipped'?` · arrives ${o.eta}`:''}${o.rider?`<br>Rider: ${esc(o.rider.name)}${o.rider.phone?', '+esc(o.rider.phone):''}`:''}${o.dispute?`<br><b>Problem reported: ${o.dispute==='open'?'we are looking at it':'decided'}</b>`:''}<br>
    ${!admin && ['paid','shipped','delivered'].includes(o.status) && !o.dispute ? (state.disputeDraft[o.id]===undefined ? `<button class="listrow" style="margin:6px 0 0;font-size:14px;" onclick="state.disputeDraft[${o.id}]='';render()">Report a problem</button>` : `<textarea oninput="state.disputeDraft[${o.id}]=this.value" placeholder="What went wrong?" style="width:100%;padding:10px;margin-top:6px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:60px;">${state.disputeDraft[o.id]}</textarea><button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 6px 0 0;" onclick="sendDispute(${o.id})">Send</button><button class="logoutbtn" style="margin:6px 0 0;" onclick="delete state.disputeDraft[${o.id}];render()">Cancel</button>`) : ''}
    ${!admin && o.status==='awaiting_payment' ? `<button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 0 0;" onclick="payNow(${o.id})">Pay now</button>` : ''}
    ${admin && (o.status==='awaiting_payment'||o.status==='payment_submitted') ? `<button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 6px 0 0;" onclick="adminOrder(${o.id},'confirm')">Confirm payment</button><button class="explore-btn" style="background:#fff;border:1.5px solid var(--green);color:var(--green);margin:6px 0 0;" onclick="document.getElementById('proof${o.id}').click()">Check payment proof</button><input type="file" accept="image/*" id="proof${o.id}" style="display:none" onchange="proofChosen(${o.id},this)">${checksHtml(state.payChecks[o.id])}` : ''}
    ${admin && o.status==='paid' ? `<div style="margin-top:8px;"><input type="text" placeholder="Rider name" oninput="state.ship[${o.id}]={...(state.ship[${o.id}]||{}),riderName:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><input type="tel" placeholder="Rider phone" oninput="state.ship[${o.id}]={...(state.ship[${o.id}]||{}),riderPhone:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><input type="text" placeholder="Note for the buyer (optional)" oninput="state.ship[${o.id}]={...(state.ship[${o.id}]||{}),note:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="adminOrder(${o.id},'shipped')">Mark shipped</button></div>` : ''}
    ${admin && o.status==='shipped' ? `<button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 0 0;" onclick="adminOrder(${o.id},'delivered')">Mark delivered</button>` : ''}
  </div>`).join('');
  const msgs = state.notes.map(n=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;">${n.body.replace(/</g,'&lt;')}</div>`).join('');
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">${admin?'All orders':'My orders'}</b>
    <button class="listrow" style="margin:6px 0;font-size:14px;" onclick="loadOrders()">Refresh</button>
    ${rows || '<p style="font-size:14px;color:var(--sub);">No orders yet.</p>'}</div>
    ${state.notes.length ? `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Messages</b>${msgs}</div>` : ''}`;
}
function payoutEditor(){
  if(state.role!=='admin') return '';
  const f=(k,l)=>`<label style="font-size:14px;color:var(--sub);">${l}</label><input type="text" value="${esc((state.payoutDraft[k]!==undefined?state.payoutDraft[k]:PAYOUT[k])||'')}" oninput="state.payoutDraft.${k}=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`;
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Payment details buyers see</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Only admins can change these. Buyers see them at checkout.</p>
    ${f('bank','Bank')}${f('accountName','Account name')}${f('accountNumber','Account number')}${f('phone','Phone')}${f('whatsapp','WhatsApp number')}
    <button class="checkoutbtn" onclick="savePayout()">Save payment details</button></div>`;
}
function setView(v){ state.view=v; if(v==='communityhub') loadCommunity(); if(v==='checkout') loadAddresses(); if(v==='dashboard') loadDashboard(); if(v==='checkout' && !PAYOUT.accountNumber) loadPayout(); render(); }
function filterCat(c){ state.catFilter=c; state.visibleCount=PAGE_SIZE; render(); }
function setCatSide(c){ state.catSide=c; render(); }
function addToCart(id){ state.cart[id]=(state.cart[id]||0)+1; render(); showToast('Added to cart'); }
function changeQty(id,d){ let q=(state.cart[id]||0)+d; if(q<0)q=0; state.cart[id]=q; render(); }
function toggleWish(id){ state.wish[id]=!state.wish[id]; render(); }
function setDeliveryState(s){ state.deliveryState=s; render(); }
function loadMore(){ state.visibleCount += PAGE_SIZE; render(); }

function docRow(kind,label,hint){
  const have=(state.myStore&&state.myStore.docs||[]).includes(kind);
  return `<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 0;border-top:1px solid var(--line);font-size:14px;"><span><b>${esc(label)}</b><br><span style="color:var(--sub);">${esc(hint)}</span></span>
    <span style="text-align:right;white-space:nowrap;">${have?'<b style="color:var(--green-dark);">Uploaded</b><br>':''}<button type="button" class="explore-btn" style="background:#fff;border:1.5px solid var(--green);color:var(--green);margin:4px 0 0;" onclick="document.getElementById('doc_${kind}').click()">${have?'Change':'Upload'}</button><input type="file" id="doc_${kind}" accept="image/*,application/pdf" style="display:none" onchange="docChosen('${kind}',this)"></span></div>`;
}
function fileToDataUrl(file,maxSide,quality){
  return new Promise((ok,no)=>{
    const rd=new FileReader();
    rd.onerror=()=>no(new Error('Could not read that file.'));
    rd.onload=()=>{
      if(file.type==='application/pdf') return file.size>1600000 ? no(new Error('That PDF is too big. Take a clear photo of the page instead.')) : ok(rd.result);
      const img=new Image(); img.onerror=()=>no(new Error('Choose a photo (JPG or PNG) or a PDF.'));
      img.onload=()=>{ const sc=Math.min(1,maxSide/Math.max(img.width,img.height)), cv=document.createElement('canvas'); cv.width=Math.round(img.width*sc); cv.height=Math.round(img.height*sc); cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height); ok(cv.toDataURL('image/jpeg',quality)); };
      img.src=rd.result;
    };
    rd.readAsDataURL(file);
  });
}
async function docChosen(kind,input){
  const f=input.files&&input.files[0]; if(!f) return;
  try{ const file=await fileToDataUrl(f,1600,0.8); await authCall("documents",{kind,file});
    state.myStore={...(state.myStore||{}),docs:[...new Set([...(state.myStore&&state.myStore.docs||[]),kind])]}; render(); showToast('Uploaded'); }
  catch(e){ showToast(e.message); }
  input.value='';
}
const DOC_NAMES={id_card:'Valid ID card',passport_photo:'Passport photograph',nin_slip:'NIN slip or document',cac_certificate:'CAC certificate'};
async function viewDoc(id){
  try{ const r=await fetch("/api/documents?id="+id,{headers:{Authorization:"Bearer "+sessionToken}}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.docView={id,...d}; render(); }catch(e){ showToast(e.message||'Could not open'); }
}
async function openPdf(){ const b=await (await fetch(state.docView.file)).blob(); window.open(URL.createObjectURL(b),'_blank'); }
async function checkDoc(id){
  state.docChecks[id]={loading:true}; render();
  try{ const r=await fetch("/api/check-document",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({docId:id})}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.docChecks[id]=d; }
  catch(e){ state.docChecks[id]={error:e.message||'Could not check the document'}; }
  render();
}
function docChecksHtml(c){ return !c ? '' : (c.loading||c.error) ? checksHtml(c) : checksHtml({...c,ai:{summary:(c.ai&&c.ai.notes)||'',recommendation:null},aiNote:c.note}); }
function reviewExtras(rv){
  const fam=(t,o)=>o&&o.name?`<div style="margin-top:6px;"><b>${t}</b>: ${esc(o.name)}${o.rel?', '+esc(o.rel):''}${o.job?', '+esc(o.job):''}<br>${esc(o.phone||'')} · ${esc(o.addr||'')}</div>`:'';
  return `${rv.idCardType?`<div>ID card type: <b>${esc(rv.idCardType.replace(/_/g,' '))}</b></div>`:''}${fam('Next of kin',rv.nok)}${fam('Guarantor',rv.guarantor)}
    <div style="margin-top:8px;"><b>Documents</b></div>
    ${(rv.docs||[]).map(d=>`<div style="padding:6px 0;border-top:1px solid var(--line);">${DOC_NAMES[d.kind]||d.kind}<br>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:4px 6px 0 0;" onclick="viewDoc(${d.id})">View</button><button class="explore-btn" style="background:#fff;border:1.5px solid var(--green);color:var(--green);margin:4px 0 0;" onclick="checkDoc(${d.id})">AI check</button>
      ${state.docView&&state.docView.id===d.id?`<div style="margin-top:8px;">${/^data:application\/pdf/.test(state.docView.file)?`<button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="openPdf()">Open the PDF</button>`:`<img src="${state.docView.file}" alt="" style="max-width:100%;border-radius:8px;">`}<br><button class="logoutbtn" style="margin:6px 0 0;" onclick="state.docView=null;render()">Close</button></div>`:''}
      ${docChecksHtml(state.docChecks[d.id]||(d.check?{...d.check,old:true}:null))}</div>`).join('') || '<div style="color:var(--sub);">No documents uploaded.</div>'}`;
}
const STOP=['the','and','for','with','please','show','want','need','buy','looking','some','any','find','get','me','my'];
function searchScore(p,tokens){
  const hay=(p.name+' '+((CATS.find(c=>c.key===p.cat)||{}).label||'')+' '+(p.store||'')).toLowerCase();
  return tokens.reduce((n,t)=>n+(hay.includes(t)||hay.includes(t.replace(/s$/,''))?1:0),0);
}
function setMic(on){ state.listening=on; const b=document.getElementById('micBtn'); if(b) b.classList.toggle('on',on); }
function applySearch(q,note){ state.query=q; state.imageNote=note||''; const i=document.getElementById('searchInput'); if(i) i.value=q; state.view='home'; state.visibleCount=PAGE_SIZE; render(); window.scrollTo(0,0); }
function voiceSearch(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ showToast('Voice search is not available in this browser. Try Chrome.'); return; }
  if(state.listening) return;
  const r=new SR(); r.lang='en-NG'; r.interimResults=false; r.maxAlternatives=1;
  r.onresult=e=>applySearch(e.results[0][0].transcript.trim(),'');
  r.onerror=e=>showToast(/not-allowed|service-not-allowed/.test(e.error)?'Allow the microphone to use voice search.':'I could not hear you. Try again.');
  r.onend=()=>setMic(false);
  try{ setMic(true); showToast('Listening... say what you want'); r.start(); }catch(e){ setMic(false); }
}
async function imageSearch(input){
  const f=input.files&&input.files[0]; if(!f) return; input.value='';
  showToast('Looking at your photo...');
  try{ const image=await fileToDataUrl(f,800,0.7);
    const r=await fetch("/api/image-search",{method:"POST",headers:{"Content-Type":"application/json",...(sessionToken?{Authorization:"Bearer "+sessionToken}:{})},body:JSON.stringify({image,cats:CATS.map(c=>c.key).filter(k=>k!=='all')})});
    const d=await r.json(); if(!r.ok) throw new Error(d.error);
    if(!d.keywords.length){ showToast(d.description||'I could not see a product in that photo.'); return; }
    applySearch(d.keywords.join(' '),d.description);
  }catch(e){ showToast(e.message||'Photo search did not work'); }
}
function doSearch(e){ e.preventDefault(); state.imageNote=''; state.query = document.getElementById('searchInput').value.trim(); state.view='home'; state.visibleCount=PAGE_SIZE; render(); document.getElementById('searchInput').focus(); return false; }
function clearSearch(){ state.query=''; state.imageNote=''; document.getElementById('searchInput').value=''; render(); }
function viewCheckout(){
  const lo = state.lastOrder;
  const head = `<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
    <button onclick="setView('${lo?'home':'cart'}')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
    <b style="font-size:16px;">Checkout</b></div>`;
  if(lo){
    const waMsg = encodeURIComponent(`Hi, I have paid ${money(lo.total)} for order ${esc(lo.reference)}. Please confirm.`);
    return head+`<div class="cartsum"><b style="font-size:14px;">ORDER ${esc(lo.reference)}</b>
      <div class="sumrow total"><span>Amount to pay</span><span>${money(lo.total)}</span></div>
      <div class="sumrow"><span>Delivery to ${esc(lo.state)}</span><span>${lo.eta}</span></div></div>
    <div class="acct-card" style="display:block;"><b style="font-size:16px;">Pay by bank transfer</b>
      <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Transfer exactly ${money(lo.total)} and put ${esc(lo.reference)} as the reference. Your order is confirmed after an admin sees the payment.</p>
      ${payoutLines()}
      ${lo.status==='awaiting_payment' ? `<button class="checkoutbtn" style="margin-top:12px;" onclick="claimPaid(${lo.id})">I have made the transfer</button>` : `<p style="font-size:14px;margin-top:12px;"><b>${STATUS_TEXT[lo.status]||lo.status}</b></p>`}
      ${PAYOUT.whatsapp ? `<a href="${esc(waLink(PAYOUT.whatsapp))}?text=${waMsg}" target="_blank" rel="noopener" class="listrow" style="display:block;text-align:center;margin-top:10px;font-size:14px;text-decoration:none;">Send proof on WhatsApp</a>` : ''}
    </div>`;
  }
  const items = Object.keys(state.cart).map(id=>({p:shownProducts().find(p=>p.id==id), qty:state.cart[id]})).filter(x=>x.qty>0 && x.p);
  const subtotal = items.reduce((s,x)=>s+x.p.price*x.qty,0);
  const shipping = shippingFor(state.deliveryState);
  return head+`<div class="cartsum"><b style="font-size:14px;">ORDER TOTAL</b>
    <div class="sumrow"><span>Subtotal</span><span>${money(subtotal)}</span></div>
    <div class="sumrow"><span>Shipping to ${state.deliveryState}</span><span>${money(shipping)}</span></div>
    <div class="sumrow"><span>Delivery time</span><span>${etaFor(state.deliveryState)}</span></div>
    <div class="sumrow total"><span>Total to pay</span><span>${money(subtotal+shipping)}</span></div></div>
  <div class="acct-card" style="display:block;">
    ${state.loggedIn ? `<b style="font-size:14px;">Deliver to</b>${state.addresses.length ? state.addresses.map(x=>`<label style="display:flex;gap:8px;padding:8px 0;font-size:14px;"><input type="radio" name="addr" ${state.addrSel===x.id?'checked':''} onchange="pickAddress(${x.id})"><span><b>${esc(x.line1)}</b>, ${esc(x.city)}, ${esc(x.state)}<br><span style="color:var(--sub);">${esc(x.phone)}</span></span></label>`).join('') : '<p style="font-size:14px;color:var(--sub);margin:6px 0;">Add a delivery address in your account first.</p><button class="listrow" style="font-size:14px;" onclick="setView(\'account\')">Add an address</button>'}<p style="font-size:14px;color:var(--sub);margin:8px 0 10px;">Next you will see the account to pay into.</p><button class="checkoutbtn" onclick="placeOrder()">Place order</button>`
      : `<p style="font-size:14px;color:var(--sub);margin:0 0 10px;">Sign in or create an account to place your order.</p><button class="checkoutbtn" onclick="setView('account')">Sign in</button>`}
  </div>`;
}

function viewProduct(id){ selectedProductId = id; state.view = "product"; render(); }

function visibleComments(pid){
  const list = commentsData[pid] || [];
  const isAdmin = state.loggedIn && state.role==="admin";
  return isAdmin ? list : list.filter(c=>!c.fake);
}

function postComment(pid){
  const nameBox = document.getElementById('commentName');
  const textBox = document.getElementById('commentText');
  const name = (nameBox && nameBox.value.trim()) || "Guest Customer";
  const text = textBox ? textBox.value.trim() : "";
  if(!text) return;
  const c = { id: Date.now(), fake:false, name, text, ts: Date.now(), aiReply:null, aiLoading:!!sampleApi };
  if(!commentsData[pid]) commentsData[pid] = [];
  commentsData[pid].push(c);
  if(textBox) textBox.value = "";
  render();
  if(sampleApi) aiReplyToComment(pid, c);
}

function aiReplyToComment(pid, c){
  const product = ALL_PRODUCTS.find(p=>p.id===pid);
  const prompt = `You are "Made in Bayelsa AI" replying briefly to a customer comment on the product "${product ? esc(product.name) : 'this product'}" in the Made in Bayelsa Marketplace. The customer, ${esc(c.name)}, wrote: "${c.text}". Reply in 1-2 short sentences: thank them warmly for their patronage, and if they asked a question or raised a concern, address it helpfully and honestly. Never invent order details, delivery dates, or facts you don't actually know.`;
  sampleApi(prompt, { modelTier:"quick" }).then(({text})=>{
    c.aiReply = text; c.aiLoading = false; render();
  }).catch(()=>{
    c.aiLoading = false; c.aiReplyFailed = true; render();
  });
}

function deleteComment(pid, cid){
  if(!(state.loggedIn && state.role==="admin")){ showToast('Only the Super Admin can delete comments'); return; }
  commentsData[pid] = (commentsData[pid]||[]).filter(c=>c.id!==cid);
  render(); showToast('Comment deleted');
}

function timeAgo(ts){
  const mins = Math.round((Date.now()-ts)/60000);
  if(mins < 60) return mins<=1 ? "just now" : mins+"m ago";
  const hrs = Math.round(mins/60); if(hrs<24) return hrs+"h ago";
  return Math.round(hrs/24)+"d ago";
}

function viewProductDetail(){
  const p = shownProducts().find(x=>x.id===selectedProductId);
  if(!p) return `<div class="emptystate"><h3>Product not found</h3><button onclick="setView('home')">Back to Home</button></div>`;
  const isAdmin = state.loggedIn && state.role==="admin";
  const comments = visibleComments(p.id);
  const inWish = !!state.wish[p.id];
  const hasDiscount = p.off && p.old && p.old > p.price;
  return `
  <div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
    <button onclick="setView('home')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
    <b style="font-size:15px;">Product Details</b>
  </div>
  <div style="padding:0 16px;">
    <div class="pimg-wrap" style="height:220px;border-radius:14px;">
      <img src="${esc(p.img)}" alt="">${hasDiscount ? `<span class="off-badge">-${p.off}%</span>` : ''}<span class="test-badge">${p.sellerUpload ? (p.status==='pending' ? 'PENDING REVIEW' : (p.sellerVerified ? 'VERIFIED SELLER' : 'NEW SELLER')) : 'TEST PRODUCT'}</span>
      <button class="wish-btn ${inWish?'on':''}" onclick="toggleWish(${p.id})">${inWish?'♥':'♡'}</button>
      <span class="maker-tag">Official Maker</span>
    </div>
    <div class="ploc" style="margin-top:10px;">📍 ${p.loc}</div>
    <div style="font-size:15px;font-weight:700;margin-top:4px;">${esc(p.name)}</div>
    <div style="margin-top:6px;"><span class="pprice" style="font-size:18px;">${money(p.price)}</span> ${hasDiscount ? `<span class="pold">${money(p.old)}</span>` : ''}</div>
    <div style="font-size:14px;color:var(--sub);margin-top:4px;">${p.rev>0 ? `★ ${p.rating} (${p.rev} ratings)` : 'New listing. No ratings yet'}</div>
    <button class="checkoutbtn" style="margin-top:12px;" onclick="addToCart(${p.id})">Add to Cart: ${money(p.price)}</button>
    ${p.sellerUpload && p.status==='pending' && state.role==='admin' ? `<button class="checkoutbtn" style="margin-top:8px;" onclick="approveProduct(${p.id})">Approve this listing</button>` : ''}
    ${p.sellerUpload && state.loggedIn && (state.role==='admin' || p.owner===state.loginEmail.trim().toLowerCase()) ? `<button class="logoutbtn" style="margin:8px 0 0;width:100%;" onclick="removeProduct(${p.id})">Remove this listing</button>` : ''}
    ${reviewBlock(p)}
  </div>

  <div class="section-head" style="padding-top:20px;"><h3>Comments (${comments.length})</h3></div>
  <div class="acct-card" style="display:block;">
    <input id="commentName" placeholder="Your name (optional)" style="width:100%;padding:10px;margin-bottom:8px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <textarea id="commentText" placeholder="Share your experience with this product…" style="width:100%;padding:10px;margin-bottom:8px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:60px;"></textarea>
    <button class="checkoutbtn" onclick="postComment(${p.id})">Post Comment</button>
    <p style="font-size:14px;color:var(--sub);margin-top:8px;">Comments are visible during this session${sampleApi ? ' and get a reply from Made in Bayelsa AI.' : '.'}</p>
  </div>

  ${comments.length===0 ? `<p class="section-sub">No comments yet. Be the first to share your experience.</p>` : comments.slice().reverse().map(c=>`
    <div class="acct-card" style="display:block;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <b style="font-size:14px;">${esc(c.name)}</b> ${c.fake ? `<span style="font-size:12px;font-weight:800;background:#fdecea;color:#c0392b;padding:2px 7px;border-radius:8px;">TEST / FAKE DATA</span>` : ''}
          <span style="font-size:14px;color:var(--sub);margin-left:6px;">${timeAgo(c.ts)}</span>
          <div style="font-size:14px;margin-top:4px;">${c.text.replace(/</g,'&lt;')}</div>
        </div>
        ${isAdmin ? `<button onclick="deleteComment(${p.id},${c.id})" style="background:none;border:none;color:#c0392b;font-size:14px;font-weight:700;">Delete</button>` : ''}
      </div>
      ${c.aiLoading ? `<div class="ai-bubble assistant" style="margin-top:10px;">Thinking…</div>` :
        c.aiReply ? `<div class="ai-bubble assistant" style="margin-top:10px;"><b>Made in Bayelsa AI:</b> ${c.aiReply.replace(/</g,'&lt;')}</div>` :
        c.aiReplyFailed ? `<p style="font-size:14px;color:var(--sub);margin-top:6px;">AI reply unavailable right now.</p>` : ''}
    </div>`).join('')}
  `;
}

let newProductDraft = { name:"", category:"leather", price:"", desc:"", imageData:null };

function handleProductImage(input){
  const file = input.files && input.files[0];
  if(!file) return;
  if(!file.type.startsWith("image/")){ showToast('Please choose an image file'); return; }
  const reader = new FileReader();
  reader.onload = (e)=>{
    const img = new Image();
    img.onload = ()=>{
      const size = 800;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      const s = Math.min(img.width, img.height);
      const sx = (img.width - s)/2, sy = (img.height - s)/2;
      ctx.drawImage(img, sx, sy, s, s, 0, 0, size, size);
      newProductDraft.imageData = canvas.toDataURL('image/jpeg', 0.85);
      render();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function updateDraft(key,val){ newProductDraft[key] = val; }

async function publishNewProduct(){
  const d = newProductDraft;
  if(!d.imageData){ showToast('Please upload a product photo first'); return; }
  if(!d.name.trim()){ showToast('Please enter a product name'); return; }
  const price = Number(d.price);
  if(!price || price<=0){ showToast('Please enter a valid price'); return; }
  try{
    await api("POST",{ name:d.name, price, cat:d.category, img:d.imageData });
    newProductDraft = { name:"", category:"leather", price:"", desc:"", imageData:null };
    state.view = "home"; state.catFilter = "all"; state.visibleCount = PAGE_SIZE;
    await loadSellerProducts();
    showToast(state.role==="admin" ? 'Product listed' : 'Sent for review. It goes live once approved');
  }catch(e){ showToast(e.message); }
}


state.dash = { tab:"overview", data:null, edit:{}, reply:{}, notes:null, pw:{cur:"",n1:"",n2:""} };
async function dashCall(method, body){
  const r = await fetch("/api/dashboard",{method,headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:body?JSON.stringify(body):undefined});
  const d = await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong."); return d;
}
async function loadDashboard(){ try{ state.dash.data = await dashCall("GET"); if(state.dash.notes===null) state.dash.notes = state.dash.data.reportNotes||""; render(); }catch(e){ showToast(e.message); } }
function dashTab(t){ state.dash.tab=t; if(t==='story') loadMyStories(); if(t==='earnings') loadEarnings(); if(t==='funding') loadFunding(); render(); }
async function saveProduct(id){
  const e=state.dash.edit[id]||{}, p=state.dash.data.products.find(x=>x.id===id);
  try{ await dashCall("PATCH",{action:"product",id,price:e.price!==undefined?e.price:p.price,stock:e.stock!==undefined?e.stock:p.stock}); delete state.dash.edit[id]; await loadDashboard(); await loadSellerProducts(); showToast('Product updated'); }catch(x){ showToast(x.message); }
}
async function sendReply(id){ try{ await dashCall("PATCH",{action:"reply",reviewId:id,reply:state.dash.reply[id]||""}); await loadDashboard(); showToast('Reply posted'); }catch(x){ showToast(x.message); } }
async function submitReport(){ try{ await dashCall("POST",{notes:state.dash.notes}); await loadDashboard(); showToast('Report submitted'); }catch(x){ showToast(x.message); } }
async function changePassword(){
  const p=state.dash.pw; if(p.n1!==p.n2){ showToast('The new passwords do not match'); return; }
  try{ const d=await authCall("change-password",{currentPassword:p.cur,newPassword:p.n1}); state.dash.pw={cur:"",n1:"",n2:""};
    if(d.token){ state.mustChange=false; startSession({token:d.token,role:state.role,name:state.userName}); }
    render(); showToast('Password updated'); }catch(x){ showToast(x.message); }
}
function viewDashboard(){
  const D=state.dash, d=D.data;
  const tabs=[['overview','Overview'],['products','Products'],['earnings','Earnings'],['reviews','Reviews'],['story','Story'],['funding','Funding'],['reports','Reports'],['account','My account']];
  const head=`<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;"><button onclick="setView('account')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button><b style="font-size:16px;">Seller dashboard</b></div>
  <div style="display:flex;gap:6px;overflow-x:auto;padding:8px 16px;">${tabs.map(t=>`<button onclick="dashTab('${t[0]}')" style="white-space:nowrap;padding:8px 14px;border-radius:999px;border:1px solid var(--line);font-size:14px;background:${D.tab===t[0]?'var(--green)':'#fff'};color:${D.tab===t[0]?'#fff':'var(--ink,#222)'};">${t[1]}</button>`).join('')}</div>`;
  if(D.tab==='account') return head+`<div class="acct-card" style="display:block;margin:8px 16px;"><b style="font-size:16px;">Change your password</b>
    <label style="font-size:14px;color:var(--sub);">Current password</label><input type="password" value="${esc(D.pw.cur)}" oninput="state.dash.pw.cur=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">New password (10 or more characters, with a capital letter, a small letter and a number)</label><input type="password" value="${esc(D.pw.n1)}" oninput="state.dash.pw.n1=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Repeat new password</label><input type="password" value="${esc(D.pw.n2)}" oninput="state.dash.pw.n2=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="changePassword()">Update password</button></div>`;
  if(!d) return head+'<p style="padding:16px;font-size:14px;color:var(--sub);">Loading...</p>';
  const stat=(l,v,c)=>`<div class="acct-card" style="display:block;margin:0;"><div style="font-size:14px;color:var(--sub);">${l}</div><div style="font-size:26px;font-weight:700;${c?'color:'+c+';':''}">${v}</div></div>`;
  const bars=(list)=>{ const m=Math.max(1,...list.map(x=>x.sold)); return list.map(x=>`<div style="font-size:14px;margin:10px 0;"><div style="display:flex;justify-content:space-between;"><span>${esc(x.name)}</span><span>${x.sold} sold</span></div><div style="height:8px;background:var(--green-light);border-radius:6px;margin-top:4px;"><div style="height:8px;width:${Math.round(x.sold/m*100)}%;background:var(--green);border-radius:6px;"></div></div></div>`).join('')||'<p style="font-size:14px;color:var(--sub);">No products yet.</p>'; };
  let body='';
  if(D.tab==='overview') body=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 16px;">${stat('Orders today',d.today.orders)}${stat('Revenue today',money(d.today.revenue))}${stat('Units sold (all time)',d.unitsAll)}${stat('Low stock items',d.lowStock,d.lowStock?'#b4481a':'')}</div>
    <div style="padding:8px 16px;"><b style="font-size:16px;">Best sellers this week</b>${bars(d.best)}</div>`;
  if(D.tab==='products') body=`<div style="padding:8px 16px;"><button class="checkoutbtn" onclick="setView('listproduct')">+ Add product</button>
    <div class="acct-card" style="display:block;margin:10px 0 0;"><b style="font-size:16px;">+ Add category</b><input type="text" placeholder="New category name" value="${esc(state.draft2.cat)}" oninput="state.draft2.cat=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><button class="explore-btn" style="background:var(--green);color:#fff;margin:0;" onclick="requestCategory()">Send request</button><p style="font-size:14px;color:var(--sub);margin:8px 0 0;">New categories need admin approval, within 24 to 48 hours.</p></div>
    ${d.products.map(p=>{const e=D.edit[p.id]||{};return `<div class="acct-card" style="display:block;margin:10px 0 0;"><b>${esc(p.name)}</b><div style="font-size:14px;color:var(--sub);margin:2px 0 8px;">${p.status==='approved'?'Live':p.status==='pending'?'Waiting for admin approval':p.status}</div>
      <div style="display:flex;gap:8px;"><div style="flex:1;"><label style="font-size:14px;color:var(--sub);">Price</label><input type="number" value="${e.price!==undefined?e.price:p.price}" oninput="state.dash.edit[${p.id}]={...(state.dash.edit[${p.id}]||{}),price:this.value}" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"></div>
      <div style="flex:1;"><label style="font-size:14px;color:var(--sub);">In stock</label><input type="number" value="${e.stock!==undefined?e.stock:p.stock}" oninput="state.dash.edit[${p.id}]={...(state.dash.edit[${p.id}]||{}),stock:this.value}" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"></div></div>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:10px 8px 0 0;" onclick="saveProduct(${p.id})">Save</button><button class="logoutbtn" style="margin:10px 0 0;" onclick="removeProduct(${p.id}).then(loadDashboard)">Remove</button></div>`;}).join('') || '<p style="font-size:14px;color:var(--sub);margin-top:12px;">No products yet. Tap Add product.</p>'}</div>`;
  if(D.tab==='reviews') body=`<div style="padding:8px 16px;"><p style="font-size:14px;color:var(--sub);">Reply to customer reviews. Your reply shows under the review on the product page.</p>
    ${d.reviews.map(r=>`<div class="acct-card" style="display:block;margin:10px 0 0;"><b>${esc(r.product)}</b><div style="font-size:14px;">${esc(r.name)} · ${r.rating} out of 5</div><div style="font-size:14px;margin:4px 0 8px;">${(r.body||'').replace(/</g,'&lt;')}</div>
      ${r.reply?`<div style="font-size:14px;color:var(--green-dark);">Your reply: ${r.reply.replace(/</g,'&lt;')}</div>`:''}
      <textarea oninput="state.dash.reply[${r.id}]=this.value" placeholder="Write a reply" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:60px;">${esc(D.reply[r.id]!==undefined?D.reply[r.id]:(r.reply||''))}</textarea><button class="explore-btn" style="background:var(--green);color:#fff;margin:8px 0 0;" onclick="sendReply(${r.id})">${r.reply?'Update reply':'Reply'}</button></div>`).join('') || '<p style="text-align:center;font-size:14px;color:var(--sub);margin-top:30px;">No reviews yet.</p>'}</div>`;
  if(D.tab==='story') body=`<div style="padding:8px 16px;"><div class="acct-card" style="display:block;margin:0;"><b style="font-size:16px;">Share your story</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Post your video on YouTube, TikTok or Facebook, then paste the link here. After an admin approves it, it shows on our home page. Admins review it within 24 to 48 hours.</p>
    <label style="font-size:14px;color:var(--sub);">Story title</label><input type="text" value="${esc(state.draft2.st)}" oninput="state.draft2.st=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Video link (starts with https://)</label><input type="text" value="${esc(state.draft2.su)}" oninput="state.draft2.su=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="submitStory()">Send for approval</button></div>
    ${state.myStories.map(x=>`<div class="acct-card" style="display:block;margin:10px 0 0;"><b>${esc(x.title)}</b><div style="font-size:14px;color:var(--sub);">${x.status==='approved'?'Live on the home page':x.status==='pending'?'Waiting for admin approval':'Not approved'}</div><button class="logoutbtn" style="margin:8px 0 0;" onclick="removeStory(${x.id})">Remove</button></div>`).join('')}</div>`;
  if(D.tab==='earnings'){ const e=state.earn; body=!e?'<p style="padding:16px;font-size:14px;color:var(--sub);">Loading...</p>':`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 16px;">${stat('Available to withdraw',money(e.available))}${stat('Waiting to be released',money(e.waiting))}${stat('Total sales',money(e.sales))}${stat('Platform share ('+e.commissionPercent+' percent)',money(e.fees))}${stat('Paid to you so far',money(e.paidOut))}</div>
    <div style="padding:8px 16px;"><p style="font-size:14px;color:var(--sub);">Money is released ${e.holdDays} days after the buyer receives the order, unless the buyer reports a problem. The smallest payout is ${money(e.min)}. Payouts go to the bank account you gave us.</p>
    <label style="font-size:14px;color:var(--sub);">Amount to withdraw (₦)</label><input type="number" value="${state.earnAmt!==undefined&&state.earnAmt!==''?state.earnAmt:e.available}" oninput="state.earnAmt=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><button class="checkoutbtn" onclick="requestPayout()">Request payout</button>
    <b style="font-size:16px;display:block;margin-top:16px;">Payout history</b>${e.history.map(h=>`<div style="padding:8px 0;border-top:1px solid var(--line);font-size:14px;"><b>${money(h.amount)}</b> · ${h.status==='paid'?'Paid, ref '+esc(h.reference):h.status==='pending'?'Waiting for admins':'Not paid: '+esc(h.note||'')}</div>`).join('')||'<p style="font-size:14px;color:var(--sub);">No payouts yet.</p>'}</div>`; }
  if(D.tab==='funding'){ const F=state.fund||{}; body=`<div style="padding:8px 16px;"><p style="font-size:14px;color:var(--sub);">Admins review your request and pass it to our partner. The partner decides, so nothing is guaranteed.</p>
    <div class="acct-card" style="display:block;margin:0 0 10px;"><b style="font-size:16px;">Ask for a loan</b><label style="font-size:14px;color:var(--sub);">Amount (₦)</label><input type="number" value="${esc(F.loanAmount||'')}" oninput="state.fund={...state.fund,loanAmount:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><label style="font-size:14px;color:var(--sub);">What is it for?</label><textarea oninput="state.fund={...state.fund,loanPurpose:this.value}" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:60px;">${F.loanPurpose||''}</textarea><button class="checkoutbtn" style="margin-top:8px;" onclick="submitFunding('loan')">Send loan request</button></div>
    <div class="acct-card" style="display:block;margin:0 0 10px;"><b style="font-size:16px;">Ask for a grant</b><label style="font-size:14px;color:var(--sub);">Amount (₦, optional)</label><input type="number" value="${esc(F.grantAmount||'')}" oninput="state.fund={...state.fund,grantAmount:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><label style="font-size:14px;color:var(--sub);">What is it for?</label><textarea oninput="state.fund={...state.fund,grantPurpose:this.value}" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:60px;">${F.grantPurpose||''}</textarea><button class="checkoutbtn" style="margin-top:8px;" onclick="submitFunding('grant')">Send grant request</button></div>
    <b style="font-size:16px;">Your requests</b>${state.myApps.map(a=>`<div style="padding:8px 0;border-top:1px solid var(--line);font-size:14px;"><b>${a.type==='loan'?'Loan':'Grant'}</b>${a.amount?' · '+money(a.amount):''} · ${a.status==='submitted'?'Waiting for admins':a.status==='approved'?'Passed to the partner':'Not taken forward'}${a.note?'<br><span style="color:var(--sub);">'+esc(a.note)+'</span>':''}</div>`).join('')||'<p style="font-size:14px;color:var(--sub);">None yet.</p>'}</div>`; }
  if(D.tab==='reports') body=`<div style="padding:8px 16px;"><b style="font-size:16px;">Today's sales report</b>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0;">${stat('Orders today',d.today.orders)}${stat('Revenue today',money(d.today.revenue))}${stat('Units sold today',d.today.units)}</div>
    <p style="font-size:14px;color:var(--sub);">These numbers come from confirmed orders and cannot be edited.</p>
    <label style="font-size:14px;color:var(--sub);">Notes for today</label><textarea oninput="state.dash.notes=this.value" placeholder="Anything worth flagging: busy period, feedback, stock issues" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:80px;">${D.notes||''}</textarea>
    <button class="checkoutbtn" style="margin-top:8px;" onclick="submitReport()">${d.reportSubmitted?'Update':'Submit'} today's report</button>
    <b style="font-size:16px;display:block;margin-top:18px;">Products doing well</b>${bars(d.best)}
    <b style="font-size:16px;display:block;margin-top:14px;">Other insights</b><p style="font-size:14px;">${d.lowStock} products need restocking</p><p style="font-size:14px;">All confirmed orders are checked by an admin before dispatch</p></div>`;
  return head+body;
}

state.appr = null; state.stories = []; state.myStories = []; state.draft2 = { cat:"", st:"", su:"" };
async function loadCategories(){
  try{ const list = await (await fetch("/api/categories")).json();
    list.forEach(c=>{ if(c.slug!=='other' && !CATS.find(x=>x.key===c.slug)) CATS.push({key:c.slug,label:c.name,icon:"🏷"}); }); render(); }catch(e){}
}
async function loadStories(){ try{ state.stories = await (await fetch("/api/stories")).json(); render(); }catch(e){} }
async function loadMyStories(){ try{ const r=await fetch("/api/stories?mine=1",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ state.myStories=await r.json(); render(); } }catch(e){} }
async function requestCategory(){
  try{ await authCall("categories",{name:state.draft2.cat}); state.draft2.cat=""; render(); showToast('Category request sent. Admins review it within 24 to 48 hours'); }catch(e){ showToast(e.message); }
}
async function submitStory(){
  try{ await authCall("stories",{title:state.draft2.st,url:state.draft2.su}); state.draft2.st=""; state.draft2.su=""; await loadMyStories(); showToast('Story sent. Admins review it within 24 to 48 hours'); }catch(e){ showToast(e.message); }
}
async function removeStory(id){
  try{ const r=await fetch("/api/stories",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({id})}); if(!r.ok) throw new Error(); await loadMyStories(); loadStories(); }catch(e){ showToast('Could not remove'); }
}
async function loadApprovals(){ try{ const r=await fetch("/api/approvals",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ state.appr=await r.json(); render(); } }catch(e){} }
async function decide(type,id,status){
  try{ const r=await fetch("/api/approvals",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({type,id,status})}); if(!r.ok) throw new Error(); await loadApprovals(); loadSellerProducts(); loadStories(); loadCategories(); showToast(status==='approved'?'Approved. The seller was messaged':'Not approved. The seller was messaged'); }catch(e){ showToast('Could not update'); }
}
function approvalsBlock(){
  if(state.role!=='admin') return '';
  const a=state.appr, n=a?a.products.length+a.categories.length+a.stories.length:0;
  const row=(title,sub,type,id,extra)=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;">${extra||''}<b>${esc(title)}</b><br><span style="color:var(--sub);">${sub}</span><br>
    <button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 6px 0 0;" onclick="decide('${type}','${id}','approved')">Approve</button><button class="logoutbtn" style="margin:6px 0 0;" onclick="decide('${type}','${id}','rejected')">Reject</button></div>`;
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Waiting for approval${a?` (${n})`:''}</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0;">Aim to decide within 24 to 48 hours.</p>
    <button class="listrow" style="margin:4px 0;font-size:14px;" onclick="loadApprovals()">Refresh list</button>
    ${a ? (n? a.products.map(p=>row(p.name+' · '+money(p.price),'Product from '+p.store,'product',p.id,`<img src="${esc(p.img)}" alt="" style="width:64px;height:64px;object-fit:cover;border-radius:8px;float:right;margin-left:8px;">`)).join('')
      + a.categories.map(c=>row(c.name,'Category requested by '+(c.email||'a seller'),'category',c.slug)).join('')
      + a.stories.map(s=>row(s.title,'Story from '+s.store+' · <a href="'+s.url+'" target="_blank" rel="noopener" style="color:var(--green-dark);">Watch the video</a>','story',s.id)).join('') : '<p style="font-size:14px;color:var(--sub);">Nothing waiting.</p>') : '<p style="font-size:14px;color:var(--sub);">Tap Refresh list to load.</p>'}</div>`;
}
function storiesSection(){
  if(!state.stories.length) return '';
  return `<div class="section-head" style="padding-top:8px;"><h3>Maker stories</h3></div><div style="padding:0 16px 8px;">${state.stories.map(s=>`<div class="acct-card" style="display:block;margin:0 0 10px;"><b>${esc(s.title)}</b><div style="font-size:14px;color:var(--sub);margin:2px 0 8px;">${esc(s.store)}</div><a class="explore-btn" href="${esc(s.url)}" target="_blank" rel="noopener" style="background:var(--green);color:#fff;margin:0;text-decoration:none;display:inline-block;">Watch the video</a></div>`).join('')}</div>`;
}
function viewListProduct(){
  if(state.role==='owner' && !isApproved()) return `<div class="acct-card" style="display:block;margin:16px;"><b style="font-size:16px;">Approval needed first</b><p style="font-size:14px;color:var(--sub);margin:6px 0 12px;">You can list products after we approve your business details. This takes up to 2 working days.</p><button class="checkoutbtn" onclick="setView('account')">Back to my account</button></div>`;
  if(!state.loggedIn || (state.role!=='owner' && state.role!=='admin')) return `<div class="acct-card" style="display:block;margin:16px;"><b style="font-size:16px;">Selling needs a seller account</b><p style="font-size:14px;color:var(--sub);margin:6px 0 12px;">Create a seller account or sign in to add products.</p><button class="checkoutbtn" onclick="state.authMode='seller';setView('account')">Create a seller account</button></div>`;
  const d = newProductDraft;
  return `
  <div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
    <button onclick="setView('finance')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
    <b style="font-size:15px;">List a Product</b>
  </div>
  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Product Photo</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Any photo works. We automatically crop and resize it to a clean square so it looks consistent next to every other product.</p>
    <div class="pimg-wrap" style="height:180px;border-radius:12px;margin-bottom:10px;">
      ${d.imageData ? `<img src="${d.imageData}" alt="">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--sub);font-size:14px;">No photo yet</div>`}
    </div>
    <input type="file" accept="image/*" onchange="handleProductImage(this)" style="width:100%;font-size:14px;">
  </div>
  <div class="acct-card" style="display:block;">
    <label style="font-size:14px;color:var(--sub);">Product name</label>
    <input value="${esc(d.name)}" oninput="updateDraft('name',this.value)" placeholder="e.g. Yenagoa Ankara Tote Bag" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Category</label>
    <select onchange="if(this.value==='__new__'){state.dash.tab='products';setView('dashboard');showToast('Request your new category here. Add the product once it is approved');}else{updateDraft('category',this.value);}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:14px;background:#fff;">
      ${CATS.filter(c=>c.key!=='all').map(c=>`<option value="${esc(c.key)}" ${d.category===c.key?'selected':''}>${esc(c.label)}</option>`).join('')}<option value="__new__">+ Add a new category</option>
    </select>
    <label style="font-size:14px;color:var(--sub);">Price (₦)</label>
    <input type="number" value="${esc(d.price)}" oninput="updateDraft('price',this.value)" placeholder="e.g. 15000" style="width:100%;padding:10px;margin:4px 0 4px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" style="margin-top:10px;" onclick="publishNewProduct()">Send for approval</button>
    <p style="font-size:14px;color:var(--sub);margin:8px 0 0;">Admins review new products within 24 to 48 hours. You will get a message when it is decided.</p>
    <p style="font-size:14px;color:var(--sub);margin-top:8px;">This preview publishes instantly to this browser session so you can see exactly how customers will view it. It isn't saved to a shared database yet.</p>
  </div>`;
}

function viewCommunityHub(){
  if(!state.loggedIn){ state.view="account"; return viewAccount(); }
  if(!isApproved()) return `<div class="acct-card" style="display:block;margin:16px;"><b style="font-size:16px;">Community opens after approval</b><p style="font-size:14px;color:var(--sub);margin:6px 0 12px;">Once your business is approved you can join our business community to learn about AI, marketing and finance.</p><button class="checkoutbtn" onclick="setView('account')">Back to my account</button></div>`;
  const isAdmin = state.role==="admin";
  const delBtn = (section,id) => isAdmin ? `<button onclick="deleteTestItem('${section}',${id})" style="background:none;border:none;color:#c0392b;font-size:14px;font-weight:700;">Delete</button>` : '';
  const fakeTag = `<span style="font-size:12px;font-weight:800;background:#fdecea;color:#c0392b;padding:2px 7px;border-radius:8px;">TEST / FAKE DATA</span>`;

  const communityCard = `
  <div class="acct-card" style="display:block;">
    <b style="font-size:14px;">Join Our Community</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Learn from other Bayelsa makers and post updates.</p>
    <a href="${esc(COMMUNITY_LINKS.whatsapp||'#')}" target="_blank" rel="noopener" class="checkoutbtn" style="display:block;text-align:center;text-decoration:none;margin-bottom:8px;">Join WhatsApp Community ↗</a>
    <a href="${esc(COMMUNITY_LINKS.telegram||'#')}" target="_blank" rel="noopener" class="explore-btn" style="display:block;width:100%;text-align:center;text-decoration:none;background:#fff;border:1.5px solid var(--green);color:var(--green);margin:0;">Join Telegram Group ↗</a>
  </div>`;

  if(!isAdmin){
    return `
    <div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
      <button onclick="setView('account')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
      <b style="font-size:15px;">Community</b>
    </div>
    ${communityCard}`;
  }

  return `
  <div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px;">
    <button onclick="setView('account')" style="background:var(--green-light);border:none;color:var(--green-dark);width:32px;height:32px;border-radius:50%;font-size:16px;">←</button>
    <b style="font-size:15px;">Business Hub: Community Preview (Admin View)</b>
  </div>
  <div class="alertbox" style="background:#fdecea;border:1px solid #f3c6c1;">
    <span class="aic">⚠️</span>
    <div><b>Only Super Admin sees this section</b><p>Groups, Rescue Cases &amp; Library below are fake sample data. Visible only to you, never to business owners or customers. Our Investor partner (Royal Allison) is real. See the Business &amp; Loans page.</p></div>
  </div>
  <div style="padding:0 16px 8px;"><button class="checkoutbtn" style="background:#c0392b;" onclick="deleteAllTestData()">Delete All Test Data</button></div>

  ${communityCard}

  <div class="section-head" style="padding-top:10px;"><h3>Community Groups</h3></div>
  ${communityData.groups.length===0 ? `<p class="section-sub">No groups. Test data was deleted.</p>` : communityData.groups.map(g=>`
    <div class="acct-card" style="display:block;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div><b style="font-size:14px;">${esc(g.name)}</b> ${fakeTag}<div style="font-size:14px;color:var(--sub);margin-top:4px;">Leader: ${g.leader} · ${g.members} members</div></div>
        ${delBtn('groups',g.id)}
      </div>
    </div>`).join('')}

  <div class="section-head"><h3>Save My Business: Rescue Cases</h3></div>
  ${communityData.rescue.length===0 ? `<p class="section-sub">No rescue cases. Test data was deleted.</p>` : communityData.rescue.map(r=>`
    <div class="acct-card" style="display:block;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div><b style="font-size:14px;">${r.business}</b> ${fakeTag}<div style="font-size:14px;color:var(--sub);margin-top:4px;">Health Score: ${r.score}/100 · Status: ${esc(r.status)}</div></div>
        ${delBtn('rescue',r.id)}
      </div>
    </div>`).join('')}

  <div class="section-head"><h3>Group Library</h3></div>
  ${communityData.library.length===0 ? `<p class="section-sub">No items. Test data was deleted.</p>` : communityData.library.map(l=>`
    <div class="acct-card" style="display:block;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div><b style="font-size:14px;">${esc(l.title)}</b> ${fakeTag}<div style="font-size:14px;color:var(--sub);margin-top:4px;">${l.type} · Added by ${l.addedBy}</div></div>
        ${delBtn('library',l.id)}
      </div>
    </div>`).join('')}
  `;
}

function deleteTestItem(section,id){
  if(state.role!=="admin"){ showToast('Only the Super Admin can delete test data'); return; }
  communityData[section] = communityData[section].filter(x=>x.id!==id);
  render(); showToast('Test item deleted');
}
function deleteAllTestData(){
  if(state.role!=="admin"){ showToast('Only the Super Admin can delete test data'); return; }
  communityData = { groups:[], rescue:[], library:[] };
  render(); showToast('All test data deleted');
}

function checkout(){
  const hasItems = Object.values(state.cart).some(q=>q>0);
  if(!hasItems){ showToast('Your cart is empty'); return; }
  state.view = "checkout"; state.lastOrder = null; render();
}


state.reviews = {}; state.reviewDraft = { rating:5, body:"" };
async function loadReviews(id){
  try{ const r = await fetch("/api/reviews?product="+id); state.reviews[id] = await r.json(); render(); }catch(e){ showToast('Could not load reviews'); }
}
async function submitReview(id){
  try{ await authCall("reviews",{ productId:id, rating:state.reviewDraft.rating, body:state.reviewDraft.body }); state.reviewDraft={rating:5,body:""}; await loadReviews(id); await loadSellerProducts(); showToast('Thanks for your review'); }
  catch(e){ showToast(e.message); }
}
function reviewBlock(p){
  if(!p.sellerUpload) return '';
  const list = state.reviews[p.id];
  return `<div style="margin-top:18px;border-top:1px solid var(--line);padding-top:14px;">
    <b style="font-size:16px;">Reviews${p.rev ? ` (${p.rev}) · ${p.rating} out of 5` : ''}</b>
    ${list ? (list.length ? list.map(r=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;"><b>${esc(r.name)}</b> · ${r.rating} out of 5 · <span style="color:var(--green-dark);">Verified purchase</span><br>${(r.body||'').replace(/</g,'&lt;')}${r.reply?`<div style="margin-top:6px;padding-left:10px;border-left:2px solid var(--line);color:var(--sub);">Seller reply: ${r.reply.replace(/</g,'&lt;')}</div>`:''}</div>`).join('') : '<p style="font-size:14px;color:var(--sub);">No reviews yet.</p>') : `<button class="listrow" style="margin:6px 0;font-size:14px;" onclick="loadReviews(${p.id})">Show reviews</button>`}
    ${state.loggedIn ? `<div style="margin-top:10px;"><label style="font-size:14px;color:var(--sub);">Your rating</label>
      <select onchange="state.reviewDraft.rating=Number(this.value)" style="width:100%;padding:10px;margin:4px 0 8px;border:1px solid var(--line);border-radius:10px;font-size:16px;">${[5,4,3,2,1].map(n=>`<option value="${esc(n)}">${n} out of 5</option>`).join('')}</select>
      <textarea oninput="state.reviewDraft.body=this.value" placeholder="What was it like? Only buyers can post." style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:16px;min-height:70px;">${esc(state.reviewDraft.body)}</textarea>
      <button class="checkoutbtn" style="margin-top:8px;" onclick="submitReview(${p.id})">Post review</button></div>` : '<p style="font-size:14px;color:var(--sub);margin-top:8px;">Sign in to review a product you bought.</p>'}
  </div>`;
}

async function loadMyStore(){
  if(state.role!=='owner'||!sessionToken) return;
  try{ const r=await fetch("/api/seller?me=1",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ state.myStore=await r.json(); render(); } }catch(e){}
}

function isApproved(){ return state.role==='admin' || (state.role==='owner' && state.myStore && state.myStore.status==='verified'); }
async function loadCommunity(){
  if(!isApproved()) return;
  try{ const r=await fetch("/api/community",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ COMMUNITY_LINKS=await r.json(); render(); } }catch(e){}
}
async function saveCommunity(){
  try{ const r=await fetch("/api/community",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify(COMMUNITY_LINKS)}); if(!r.ok) throw new Error(); showToast('Group links saved'); }catch(e){ showToast('Could not save'); }
}
function communityEditor(){
  if(state.role!=='admin') return '';
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Community group links</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Only approved sellers see these. Change them here any time.</p>
    <label style="font-size:14px;color:var(--sub);">WhatsApp group link</label><input type="text" value="${esc(COMMUNITY_LINKS.whatsapp||'')}" oninput="COMMUNITY_LINKS.whatsapp=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Telegram group link</label><input type="text" value="${esc(COMMUNITY_LINKS.telegram||'')}" oninput="COMMUNITY_LINKS.telegram=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="saveCommunity()">Save group links</button></div>`;
}
function obField(label,key,type,ph){ return `<label style="font-size:14px;color:var(--sub);">${esc(label)}</label><input type="${type||'text'}" inputmode="${type==='number'?'numeric':'text'}" value="${esc(state.ob[key])}" placeholder="${ph||''}" oninput="state.ob.${key}=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`; }
async function submitOnboarding(){
  try{ await authCall("seller",state.ob); state.ob.nin=""; state.ob.accountNumber=""; await loadMyStore(); showToast('Submitted. We review within 2 working days'); }catch(e){ showToast(e.message); }
}
function sellerStatusCard(){
  if(state.role!=='owner') return '';
  const m=state.myStore;
  const pre=stepsCard(m);
  if(!m) return '<div class="acct-card" style="display:block;"><p style="font-size:14px;color:var(--sub);margin:0;">Loading...</p></div>';
  if(m.status==='pending') return pre+`<div class="acct-card" style="display:block;"><b style="font-size:16px;">Your business is being checked</b>
    <p style="font-size:14px;color:var(--sub);margin:6px 0;">We review new businesses within 2 working days (48 hours). You will get a message here when it is decided. You can list products after approval.</p>
    <div style="font-size:14px;line-height:1.8;"><div><span style="color:var(--sub);">Business</span>: <b>${esc(m.businessName)}</b></div><div><span style="color:var(--sub);">${m.idType==='nin'?'NIN':'CAC'}</span>: <b>${m.idType==='nin'?'ending '+esc(m.ninLast4):esc(m.cac)}</b></div><div><span style="color:var(--sub);">Payout account</span>: <b>${esc(m.bank)}, ending ${esc(m.accountLast4)}</b></div></div></div>`;
  if(m.status==='verified') return pre+`<div class="acct-card" style="display:block;"><b style="font-size:16px;">${esc(m.businessName)}</b>
    <p style="font-size:14px;color:var(--green-dark);margin:4px 0 12px;">Approved business. You can list products and join the community.</p>
    <button class="checkoutbtn" onclick="setView('dashboard')">Open seller dashboard</button>
    <button class="listrow" style="margin:8px 0 0;font-size:14px;" onclick="setView('listproduct')">Add a product</button></div>`;
  return pre+`<div class="acct-card" style="display:block;"><b style="font-size:16px;">Send your business details</b>
    ${m.status==='rejected' ? `<p style="font-size:14px;color:#c0392b;margin:6px 0;">Not approved: ${esc(m.reason||'')}. Please fix this and send again.</p>` : '<p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">Approval takes up to 2 working days (48 hours). You can list products once approved.</p>'}
    ${obField('Business name','businessName')}
    <label style="font-size:14px;color:var(--sub);">Business category</label><select onchange="state.ob.category=this.value;render()" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;background:#fff;">${CATS.filter(c=>c.key!=='all').map(c=>`<option value="${esc(c.key)}" ${state.ob.category===c.key?'selected':''}>${esc(c.label)}</option>`).join('')}<option value="__new__" ${state.ob.category==='__new__'?'selected':''}>+ Add a new category</option></select>
    ${state.ob.category==='__new__' ? obField('Your new category name','newCategory','text','e.g. Hand-woven baskets')+'<p style="font-size:14px;color:var(--sub);margin:-4px 0 10px;">Not on our list? An admin will review your new category.</p>' : ''}
    ${obField('Business address','address','text','Street, town, state')}
    ${obField('Business phone number','phone','tel','e.g. 0803 123 4567')}
    <label style="font-size:14px;color:var(--sub);">Do you have a CAC number?</label>
    <div style="display:flex;gap:16px;margin:6px 0 10px;font-size:16px;"><label><input type="radio" name="idt" ${state.ob.idType==='cac'?'checked':''} onchange="state.ob.idType='cac';render()"> Yes</label><label><input type="radio" name="idt" ${state.ob.idType==='nin'?'checked':''} onchange="state.ob.idType='nin';render()"> No, use my NIN</label></div>
    ${state.ob.idType==='cac' ? obField('CAC number','cac','text','e.g. RC1234567 or BN1234567') : obField('NIN (11 digits)','nin','number')}
    <b style="font-size:14px;">Account we will pay your sales into</b>
    ${obField('Bank name','bank')}${obField('Account name','accountName')}${obField('Account number (10 digits)','accountNumber','number')}
    <b style="font-size:14px;display:block;margin-top:6px;">Your documents</b>
    <p style="font-size:14px;color:var(--sub);margin:2px 0 6px;">Clear photos or PDFs. Each file under about 1.5 MB. They are stored encrypted and only admins can open them.</p>
    <label style="font-size:14px;color:var(--sub);">Type of valid ID card</label><select onchange="state.ob.idCardType=this.value" style="width:100%;padding:10px;margin:4px 0 6px;border:1px solid var(--line);border-radius:10px;font-size:16px;background:#fff;"><option value="">Choose one</option>${[['national_id','National ID card'],['drivers_licence',"Driver's licence"],['voters_card',"Voter's card"],['intl_passport','International passport']].map(x=>`<option value="${esc(x[0])}" ${state.ob.idCardType===x[0]?'selected':''}>${x[1]}</option>`).join('')}</select>
    ${docRow('id_card','Valid ID card','Front of the card, or the photo page of the passport')}
    ${docRow('passport_photo','Passport photograph','A clear photo of your face')}
    ${state.ob.idType==='nin' ? docRow('nin_slip','NIN slip or document','The slip or card that shows your NIN') : docRow('cac_certificate','CAC certificate','Certificate of registration or incorporation')}
    <b style="font-size:14px;display:block;margin-top:14px;">Next of kin</b>
    ${obField('Full name','nokName')}${obField('Relationship (for example brother, wife)','nokRelationship')}${obField('Phone number','nokPhone','tel')}${obField('Address','nokAddress')}
    <b style="font-size:14px;display:block;margin-top:6px;">Guarantor</b>
    <p style="font-size:14px;color:var(--sub);margin:2px 0 6px;">Someone who knows you and will vouch for you. We may call them.</p>
    ${obField('Full name','gName')}${obField('Relationship','gRelationship')}${obField('Occupation','gOccupation')}${obField('Phone number','gPhone','tel')}${obField('Address','gAddress')}
    <label style="display:flex;gap:8px;font-size:14px;margin:4px 0 12px;"><input type="checkbox" ${state.ob.guarantorConsent?'checked':''} onchange="state.ob.guarantorConsent=this.checked" style="margin-top:3px;"><span>My next of kin and guarantor agreed that Made in Bayelsa may contact them.</span></label>
    <label style="display:flex;gap:8px;font-size:14px;margin:4px 0 12px;"><input type="checkbox" ${state.ob.consent?'checked':''} onchange="state.ob.consent=this.checked" style="margin-top:3px;"><span>I agree that Made in Bayelsa may use these details only to verify my business and pay me. Documents may be checked with automated tools. Everything is stored encrypted. I have read the <a href="/seller-agreement.html" target="_blank" style="color:var(--green-dark);">Seller agreement</a>.</span></label>
    <button class="checkoutbtn" onclick="submitOnboarding()">Send for approval</button></div>`;
}
async function reviewSeller(id){
  try{ const r=await fetch("/api/seller?review="+id,{headers:{Authorization:"Bearer "+sessionToken}}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.reviewing={id,...d}; render(); }catch(e){ showToast(e.message||'Could not load'); }
}
async function decideSeller(id,status){
  const reason=state.rejectReason[id]||"";
  try{ const r=await fetch("/api/seller",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({userId:id,status,reason})}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.reviewing=null; await loadSellers(); showToast(status==='verified'?'Business approved. The owner was messaged':'Rejected. The owner was messaged'); }
  catch(e){ showToast(e.message||'Could not update'); }
}
function vendorsBlock(){
  if(state.role!=='admin') return '';
  const rv=state.reviewing;
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Businesses to approve</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0;">Aim to decide within 2 working days. Opening details is recorded in the audit log.</p>
    <button class="listrow" style="margin:4px 0;font-size:14px;" onclick="loadSellers()">Refresh list</button>
    ${state.sellers.length ? state.sellers.map(v=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;"><b>${esc(v.store_name)}</b> · ${esc(v.category||'')}<br><span style="color:var(--sub);">${esc(v.email)}</span><br>
      <button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 0 0;" onclick="reviewSeller('${v.id}')">Review details</button>
      ${rv && rv.id===v.id ? `<div style="margin-top:10px;padding:10px;background:var(--green-light);border-radius:10px;line-height:1.7;">
        <div>Owner: <b>${esc(rv.owner)}</b></div><div>Business: <b>${esc(rv.businessName)}</b></div><div>Address: <b>${esc(rv.address)}</b></div><div>Phone: <b>${esc(rv.phone||'')}</b></div>${rv.cac?`<div>CAC: <b>${esc(rv.cac)}</b></div>`:''}${rv.nin?`<div>NIN: <b>${esc(rv.nin)}</b></div>`:''}<div>Bank: <b>${esc(rv.bank)}</b>, ${esc(rv.accountName)}, <b>${esc(rv.accountNumber)}</b></div>${reviewExtras(rv)}
        <button class="explore-btn" style="background:#fff;border:1.5px solid var(--green);color:var(--green);margin:8px 0;" onclick="runChecks('${v.id}')">Run AI checks</button>${checksHtml(state.checks[v.id]||(rv.lastCheck?{...rv.lastCheck,old:true}:null))}
        <input type="text" placeholder="Reason, only needed if you reject" value="${esc(state.rejectReason[v.id]||'')}" oninput="state.rejectReason['${v.id}']=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
        <button class="explore-btn" style="background:var(--green);color:#fff;margin:0 6px 0 0;" onclick="decideSeller('${v.id}','verified')">Approve</button><button class="logoutbtn" style="margin:0;" onclick="decideSeller('${v.id}','rejected')">Reject</button></div>` : ''}</div>`).join('') : '<p style="font-size:14px;color:var(--sub);">Nothing waiting. Tap Refresh list.</p>'}</div>`;
}
async function loadAddresses(){ try{ const r=await fetch("/api/addresses",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ state.addresses=await r.json(); const d=state.addresses.find(a=>a.isDefault)||state.addresses[0]; if(!state.addrSel||!state.addresses.find(a=>a.id===state.addrSel)) state.addrSel=d?d.id:null; if(d&&state.addrSel){ const sel=state.addresses.find(a=>a.id===state.addrSel); if(sel) state.deliveryState=sel.state; } render(); } }catch(e){} }
async function addrCall(method,body){ const r=await fetch("/api/addresses",{method,headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify(body)}); const d=await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong."); return d; }
async function addAddress(){ try{ await addrCall("POST",state.addrDraft); state.addrDraft={line1:"",city:"",state:"Bayelsa",phone:""}; await loadAddresses(); showToast('Address saved'); }catch(e){ showToast(e.message); } }
async function removeAddress(id){ try{ await addrCall("DELETE",{id}); await loadAddresses(); }catch(e){ showToast(e.message); } }
async function defaultAddress(id){ try{ await addrCall("PATCH",{id}); state.addrSel=id; await loadAddresses(); }catch(e){ showToast(e.message); } }
function pickAddress(id){ state.addrSel=id; const a=state.addresses.find(x=>x.id===id); if(a) state.deliveryState=a.state; render(); }
async function saveProfile(){
  const p=state.profileDraft||{name:state.userName,phone:state.userPhone};
  try{ const r=await fetch("/api/me",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify(p)}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.userName=d.name; state.userPhone=d.phone||""; state.profileDraft=null; render(); showToast('Details saved'); }catch(e){ showToast(e.message||'Could not save'); }
}
function buyerCards(){
  if(state.role!=='customer') return '';
  const p=state.profileDraft||{name:state.userName,phone:state.userPhone}, a=state.addrDraft;
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">My details</b>
    <label style="font-size:14px;color:var(--sub);">Full name</label><input type="text" value="${esc(p.name)}" oninput="state.profileDraft={...(state.profileDraft||{name:state.userName,phone:state.userPhone}),name:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Phone number</label><input type="tel" value="${esc(p.phone)}" oninput="state.profileDraft={...(state.profileDraft||{name:state.userName,phone:state.userPhone}),phone:this.value}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="saveProfile()">Save details</button></div>
  <div class="acct-card" style="display:block;"><b style="font-size:16px;">Delivery addresses</b>
    ${state.addresses.map(x=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;"><b>${esc(x.line1)}</b>, ${esc(x.city)}, ${esc(x.state)}<br><span style="color:var(--sub);">${esc(x.phone)}${x.isDefault?' · Default':''}</span><br>
      ${x.isDefault?'':`<button class="explore-btn" style="background:var(--green);color:#fff;margin:6px 6px 0 0;" onclick="defaultAddress(${x.id})">Make default</button>`}<button class="logoutbtn" style="margin:6px 0 0;" onclick="removeAddress(${x.id})">Remove</button></div>`).join('') || '<p style="font-size:14px;color:var(--sub);">No saved address yet.</p>'}
    <b style="font-size:14px;display:block;margin-top:10px;">Add an address</b>
    <input type="text" placeholder="Street address" value="${esc(a.line1)}" oninput="state.addrDraft.line1=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <input type="text" placeholder="Town or city" value="${esc(a.city)}" oninput="state.addrDraft.city=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <select onchange="state.addrDraft.state=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;background:#fff;">${NG_STATES.map(s=>`<option ${a.state===s?'selected':''}>${s}</option>`).join('')}</select>
    <input type="tel" placeholder="Phone number for delivery" value="${esc(a.phone)}" oninput="state.addrDraft.phone=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="addAddress()">Save address</button></div>`;
}

state.checks = {}; state.payChecks = {};
function checksHtml(c){
  if(!c) return '';
  if(c.loading) return '<p style="font-size:14px;color:var(--sub);">Running checks...</p>';
  if(c.error) return `<p style="font-size:14px;color:#c0392b;">${c.error}</p>`;
  const col={pass:'var(--green-dark)',warn:'#b4481a',fail:'#c0392b',skipped:'var(--sub)'}, lab={pass:'Pass',warn:'Check',fail:'Problem',skipped:'Not checked'};
  const rl={low:'Low risk',medium:'Medium risk, look closely',high:'High risk'};
  return `<div style="margin:8px 0;padding:10px;background:#fff;border-radius:10px;font-size:14px;">
    <b>${rl[c.risk]||''}</b>${c.old?' <span style="color:var(--sub);">(earlier run)</span>':''}
    ${c.ai?`<p style="margin:6px 0;">${c.ai.summary||''}</p>${c.ai.recommendation?`<p style="margin:0 0 6px;"><b>Suggested:</b> ${({approve:'Approve',ask_for_more_info:'Ask for more information',reject:'Reject'})[c.ai.recommendation]||''}</p>`:''}`:`<p style="margin:6px 0;color:var(--sub);">${esc(c.aiNote||c.note||'')}</p>`}
    ${c.checks.map(k=>`<div style="padding:5px 0;border-top:1px solid var(--line);"><b style="color:${col[k.status]};">${lab[k.status]}</b> · ${esc(k.name)}<br><span style="color:var(--sub);">${k.detail}</span></div>`).join('')}
    <p style="margin:6px 0 0;color:var(--sub);">This is advice. You decide.</p></div>`;
}
async function runChecks(id){
  state.checks[id]={loading:true}; render();
  try{ const r=await fetch("/api/verify",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({userId:id})}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.checks[id]=d; }
  catch(e){ state.checks[id]={error:e.message||'Could not run the checks'}; }
  render();
}
function proofChosen(orderId,input){
  const f=input.files&&input.files[0]; if(!f) return;
  state.payChecks[orderId]={loading:true}; render();
  const img=new Image(), rd=new FileReader();
  rd.onload=()=>{ img.onload=async()=>{
    const sc=Math.min(1,1280/Math.max(img.width,img.height)), cv=document.createElement('canvas'); cv.width=Math.round(img.width*sc); cv.height=Math.round(img.height*sc); cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
    try{ const r=await fetch("/api/check-payment",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionToken},body:JSON.stringify({orderId,image:cv.toDataURL('image/jpeg',0.85)})}); const d=await r.json(); if(!r.ok) throw new Error(d.error); state.payChecks[orderId]=d; }
    catch(e){ state.payChecks[orderId]={error:e.message||'Could not check the receipt'}; }
    render(); }; img.src=rd.result; };
  rd.readAsDataURL(f);
}

function pwFields(){ return `<label style="font-size:14px;color:var(--sub);">Current password</label><input type="password" autocomplete="current-password" value="${esc(state.dash.pw.cur)}" oninput="state.dash.pw.cur=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">New password (10 or more characters, with a capital letter, a small letter and a number)</label><input type="password" autocomplete="new-password" value="${esc(state.dash.pw.n1)}" oninput="state.dash.pw.n1=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Repeat new password</label><input type="password" autocomplete="new-password" value="${esc(state.dash.pw.n2)}" oninput="state.dash.pw.n2=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`; }
function passwordCard(){
  if(!state.loggedIn) return '';
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Change password</b>${pwFields()}<button class="checkoutbtn" onclick="changePassword()">Update password</button></div>`;
}
function viewMustChange(){
  return `<div class="acct-card" style="display:block;margin:16px;"><b style="font-size:16px;">Choose your own password</b>
    <p style="font-size:14px;color:var(--sub);margin:6px 0 12px;">You signed in with a temporary password. Set your own now. Nothing else works until you do.</p>${pwFields()}
    <button class="checkoutbtn" onclick="changePassword()">Save my password</button>
    <button class="listrow" style="margin:10px 0 0;font-size:14px;" onclick="doLogout()">Sign out</button></div>`;
}

async function api2(path,method,body){
  const r=await fetch("/api/"+path,{method:method||"GET",headers:{"Content-Type":"application/json",...(sessionToken?{Authorization:"Bearer "+sessionToken}:{})},body:body?JSON.stringify(body):undefined});
  const d=await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong."); return d;
}
async function sendDispute(id){ try{ await api2("disputes","POST",{orderId:id,reason:state.disputeDraft[id]||""}); delete state.disputeDraft[id]; await loadOrders(); showToast('Sent. An admin will look at it'); }catch(e){ showToast(e.message); } }
async function loadEarnings(){ try{ state.earn=await api2("payouts"); render(); }catch(e){ showToast(e.message); } }
async function requestPayout(){ try{ await api2("payouts","POST",{amount:(state.earnAmt!==undefined&&state.earnAmt!=='')?state.earnAmt:(state.earn&&state.earn.available)}); state.earnAmt=""; await loadEarnings(); showToast('Payout requested. Admins will pay you'); }catch(e){ showToast(e.message); } }
async function loadFunding(){ try{ state.myApps=await api2("applications"); render(); }catch(e){ showToast(e.message); } }
async function submitFunding(type){
  const f=state.fund||{};
  try{ await api2("applications","POST",type==='loan'?{type,amount:f.loanAmount,purpose:f.loanPurpose}:{type,amount:f.grantAmount,purpose:f.grantPurpose}); state.fund={}; await loadFunding(); showToast('Sent to the admins'); }catch(e){ showToast(e.message); }
}
function submitLoan(){
  if(!state.loggedIn||state.role!=='owner'){ showToast('Sign in with an approved seller account to apply'); return; }
  api2("applications","POST",{type:'loan',amount:state.loanAmount,purpose:state.loanPurpose}).then(()=>{ state.loanAmount=''; state.loanPurpose=''; render(); showToast('Sent to the admins'); }).catch(e=>showToast(e.message));
}
async function loadAdminTools(){
  if(state.role!=='admin') return;
  const g=async(p,k)=>{ try{ state.at[k]=await api2(p); }catch(e){} };
  await Promise.all([g("disputes","disputes"),g("payouts","payouts"),g("applications","funding"),g("settings","platform"),g("health","health"),...(state.isSuper?[g("staff","staff")]:[])]);
  render();
}
async function adminDo(path,method,body,msg){ try{ await api2(path,method,body); await loadAdminTools(); showToast(msg||'Done'); }catch(e){ showToast(e.message); } }
function adminTools(){
  if(state.role!=='admin') return '';
  const A=state.at, card=(t,b)=>`<div class="acct-card" style="display:block;"><b style="font-size:16px;">${t}</b>${b}</div>`;
  const btn=(l,fn,solid)=>`<button class="explore-btn" style="${solid?'background:var(--green);color:#fff;':'background:#fff;border:1.5px solid var(--green);color:var(--green);'}margin:6px 6px 0 0;" onclick="${fn}">${l}</button>`;
  const txt=(ph,k,id)=>`<input type="text" placeholder="${ph}" value="${esc(A[k][id]||'')}" oninput="state.at.${k}['${id}']=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`;
  const row=h=>`<div style="padding:10px 0;border-top:1px solid var(--line);font-size:14px;">${h}</div>`;
  const dis=A.disputes.map(d=>row(`<b>${esc(d.reference)}</b> · ${money(d.total)} · ${esc(d.customer)}<br><span style="color:var(--sub);">${(d.reason||'').replace(/</g,'&lt;')}</span><br>${d.status==='open'?txt('Short note for the buyer','note',d.id)+btn('Refund',`adminDo('disputes','PATCH',{id:${d.id},outcome:'refund',note:state.at.note[${d.id}]||''},'Decided')`,true)+btn('No refund',`adminDo('disputes','PATCH',{id:${d.id},outcome:'no_refund',note:state.at.note[${d.id}]||''},'Decided')`):`<b>${esc(d.resolution||'')}</b>${d.refund==='pending'?'<br>'+btn('Mark refund sent',`adminDo('disputes','PATCH',{id:${d.id},action:'refund_sent'},'Buyer messaged')`,true):''}`}`)).join('');
  const pay=A.payouts.map(p=>row(`<b>${esc(p.store||p.email)}</b> asked for <b>${money(p.amount)}</b><br>${esc(p.bank)}, ${esc(p.accountName)}, <b>${esc(p.accountNumber)}</b><br>${txt('Transfer reference (or the reason, to reject)','ref',p.id)}${btn('Mark paid',`adminDo('payouts','PATCH',{id:${p.id},action:'paid',reference:state.at.ref[${p.id}]||''},'Seller messaged')`,true)}${btn('Reject',`adminDo('payouts','PATCH',{id:${p.id},action:'reject',note:state.at.ref[${p.id}]||''},'Seller messaged')`)}`)).join('');
  const fun=A.funding.map(f=>row(`<b>${f.type==='loan'?'Loan':'Grant'}</b>${f.amount?' · '+money(f.amount):''} · ${esc(f.store||'')}<br><span style="color:var(--sub);">${(f.purpose||'').replace(/</g,'&lt;')}</span><br>${txt('Note (optional)','note','f'+f.type+f.id)}${btn('Pass to partner',`adminDo('applications','PATCH',{type:'${f.type}',id:${f.id},status:'approved',note:state.at.note['f${f.type}${f.id}']||''})`,true)}${btn('Decline',`adminDo('applications','PATCH',{type:'${f.type}',id:${f.id},status:'rejected',note:state.at.note['f${f.type}${f.id}']||''})`)}`)).join('');
  const P=A.platform||{commissionPercent:10,holdDays:3};
  let out=card('System check','<p style="font-size:14px;color:var(--sub);margin:4px 0;">Everything should show Ready before you open to the public.</p>'+(A.health?A.health.map(h=>row(`${h.ok?'<b style="color:var(--green-dark);">Ready</b>':'<b style="color:#c0392b;">Fix</b>'} · ${esc(h.name)}${h.ok?'':`<br><span style="color:var(--sub);">${esc(h.help)}</span>`}`)).join(''):'<p style="font-size:14px;color:var(--sub);">Tap Refresh below.</p>'));
  out+=card('Problems and refunds',(dis||'<p style="font-size:14px;color:var(--sub);">Nothing reported.</p>'));
  out+=card('Payout requests',(pay||'<p style="font-size:14px;color:var(--sub);">No payout requests.</p>'));
  out+=card('Loan and grant requests',(fun||'<p style="font-size:14px;color:var(--sub);">No requests waiting.</p>')+'<p style="font-size:14px;color:var(--sub);margin-top:8px;">Passing a request on does not promise money. The partner decides.</p>');
  out+=card('Platform settings',`<p style="font-size:14px;color:var(--sub);margin:4px 0;">${state.isSuper?'Only you, the super admin, can change these.':'Only the super admin can change these.'}</p>
    <label style="font-size:14px;color:var(--sub);">Percentage the platform keeps from each sale</label><input type="number" value="${esc(P.commissionPercent)}" ${state.isSuper?'':'disabled'} oninput="state.at.platform={...state.at.platform,commissionPercent:Number(this.value)}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">Days after delivery before the seller can withdraw</label><input type="number" value="${esc(P.holdDays)}" ${state.isSuper?'':'disabled'} oninput="state.at.platform={...state.at.platform,holdDays:Number(this.value)}" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    ${state.isSuper?`<button class="checkoutbtn" onclick="adminDo('settings','PUT',{commissionPercent:state.at.platform.commissionPercent,holdDays:state.at.platform.holdDays},'Saved')">Save settings</button>`:''}`);
  if(state.isSuper&&A.staff){ const S=A.staff;
    out+=card('Admins and sellers',`<b style="font-size:14px;">Admins</b>${S.admins.map(a=>row(`${esc(a.name)} · ${esc(a.email)} · ${a.role==='super_admin'?'Super admin':'Admin'}${a.suspended?' · suspended':''}${a.role==='admin'?'<br>'+btn('Remove as admin',`adminDo('staff','PATCH',{userId:'${a.id}',action:'remove_admin'},'Removed')`):''}`)).join('')}
      <b style="font-size:14px;display:block;margin-top:10px;">Add an admin</b>
      <input type="text" placeholder="Name" value="${esc(A.na.name)}" oninput="state.at.na.name=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><input type="email" placeholder="Email" value="${esc(A.na.email)}" oninput="state.at.na.email=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><input type="text" placeholder="Temporary password (8 or more)" value="${esc(A.na.password)}" oninput="state.at.na.password=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
      <button class="checkoutbtn" onclick="adminDo('staff','POST',state.at.na,'Admin added. They must choose their own password at first sign-in').then(()=>{state.at.na={name:'',email:'',password:''}})">Add admin</button>
      <b style="font-size:14px;display:block;margin-top:14px;">Sellers</b>${S.sellers.map(x=>row(`${esc(x.store_name||x.name)} · ${esc(x.email)} · ${esc(x.status||'')}${x.suspended?' · <b>suspended</b>':''}<br>${x.suspended?btn('Restore',`adminDo('staff','PATCH',{userId:'${x.id}',action:'restore'},'Restored')`,true):btn('Suspend',`adminDo('staff','PATCH',{userId:'${x.id}',action:'suspend'},'Suspended')`)}`)).join('')||'<p style="font-size:14px;color:var(--sub);">No sellers yet.</p>'}`);
  }
  out+=`<button class="listrow" style="margin:0 0 12px;font-size:14px;" onclick="loadAdminTools()">Refresh admin tools</button>`;
  return out;
}
function resetCard(){
  const R=state.rst;
  return `<div class="acct-card" style="display:block;"><form onsubmit="event.preventDefault();${R.step===1?'requestReset()':'confirmReset()'}"><b style="font-size:16px;">Forgot your password?</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 12px;">${R.step===1?'Type your email and we will send a 6-digit code.':'We sent a code to your email. Type it with your new password.'}</p>
    <label style="font-size:14px;color:var(--sub);">Email</label><input type="email" name="email" autocomplete="username" value="${esc(R.email)}" oninput="state.rst.email=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    ${R.step===2?`<label style="font-size:14px;color:var(--sub);">6-digit code</label><input type="text" inputmode="numeric" autocomplete="one-time-code" value="${esc(R.code)}" oninput="state.rst.code=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <label style="font-size:14px;color:var(--sub);">New password (10 or more characters, with a capital letter, a small letter and a number)</label><input type="password" autocomplete="new-password" value="${esc(R.pw)}" oninput="state.rst.pw=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">`:''}
    ${state.loginError?`<p style="font-size:14px;color:#c0392b;margin-bottom:8px;">${state.loginError}</p>`:''}
    <button type="submit" class="checkoutbtn">${R.step===1?'Send code':'Save new password'}</button>
    <button type="button" class="listrow" style="margin:10px 0 0;font-size:14px;" onclick="state.authMode='signin';state.loginError='';render()">Back to sign in</button></form></div>`;
}
async function requestReset(){
  try{ const d=await api2("reset-password","POST",{action:"request",email:state.rst.email}); state.rst.step=2; state.loginError=""; render(); showToast(d.previewNote||'If that email has an account, a code is on its way'); }
  catch(e){ state.loginError=e.message; render(); }
}
async function confirmReset(){
  try{ await api2("reset-password","POST",{action:"confirm",email:state.rst.email,code:state.rst.code,newPassword:state.rst.pw}); state.loginEmail=state.rst.email; state.rst={email:"",code:"",pw:"",step:1}; state.authMode='signin'; state.loginError=""; render(); showToast('Password changed. Sign in with it now'); }
  catch(e){ state.loginError=e.message; render(); }
}
function legalLinks(){ return `<p style="text-align:center;font-size:14px;color:var(--sub);margin:16px 16px 24px;"><a href="/terms.html" target="_blank" style="color:var(--green-dark);">Terms</a> · <a href="/privacy.html" target="_blank" style="color:var(--green-dark);">Privacy</a> · <a href="/seller-agreement.html" target="_blank" style="color:var(--green-dark);">Seller agreement</a></p>`; }
function stepsCard(m){
  const st=m?m.status:'', steps=[['Confirm your email',state.emailVerified!==false],['Send your business details',st==='pending'||st==='verified'],['Admins check your business (up to 2 working days)',st==='verified'],['Add your first product (checked in 24 to 48 hours)',false],['Join the business community',false]];
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Getting started</b>${steps.map((x,i)=>`<div style="font-size:14px;padding:6px 0;border-top:1px solid var(--line);margin-top:${i?0:8}px;">${x[1]?'<b style="color:var(--green-dark);">Done</b>':'<b style="color:var(--sub);">To do</b>'} · ${x[0]}</div>`).join('')}</div>`;
}
async function authCall(path, body){
  const r = await fetch("/api/"+path, { method:"POST", headers:{ "Content-Type":"application/json", ...(sessionToken?{Authorization:"Bearer "+sessionToken}:{}) }, body:JSON.stringify(body) });
  const d = await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.error||"Something went wrong."); return d;
}
function saveToken(t){ try{ localStorage.removeItem('mib_t'); sessionStorage.removeItem('mib_t'); (state.remember?localStorage:sessionStorage).setItem('mib_t',t); }catch(e){} }
function clearToken(){ try{ localStorage.removeItem('mib_t'); sessionStorage.removeItem('mib_t'); }catch(e){} }
function startSession(d){ state.mustChange=!!d.mustChange; state.isSuper=!!d.super; sessionToken=d.token; saveToken(d.token); state.loggedIn=true; state.role=d.role; if(d.name) state.userName=d.name; if(d.role==='customer') loadAddresses(); refreshMe(); state.loginError=""; state.loginPassword=""; if(!PAYOUT.accountNumber) loadPayout(); loadSellerProducts(); loadOrders(); loadMyStore(); if(d.role==='admin'){ loadApprovals(); loadSellers(); loadAdminTools(); } render(); }
async function doRegister(){
  try{ const sell=state.authMode==='seller'; startSession(await authCall("register",{ name:state.signupName, email:state.loginEmail, password:state.loginPassword, seller:sell, remember:state.remember })); state.authMode="signin"; showToast(sell ? 'Account created. Now send your business details for approval' : 'Account created'); }
  catch(e){ state.loginError=e.message; render(); }
}
async function openStore(){
  try{ const d=await authCall("seller",{ storeName:state.storeName, location:state.storeLoc }); sessionToken=d.token; saveToken(d.token); state.role=d.role; render(); showToast('Store opened. An admin will verify it'); }
  catch(e){ showToast(e.message); }
}
async function loadSellers(){
  try{ const r=await fetch("/api/seller",{headers:{Authorization:"Bearer "+sessionToken}}); state.sellers=await r.json(); render(); }catch(e){}
}

function twofaCard(){
  const t=state.twofa;
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Enter your sign-in code</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 12px;">We sent a 6-digit code to ${esc(t.hint)}. It lasts 10 minutes.${t.note?' <b>'+esc(t.note)+'</b>':''}</p>
    <input type="text" inputmode="numeric" maxlength="6" value="${esc(t.code)}" oninput="state.twofa.code=this.value" placeholder="123456" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;">
    <button class="checkoutbtn" onclick="verify2fa()">Sign in</button>
    <button class="listrow" style="margin:8px 0 0;font-size:14px;" onclick="resend2fa()">Send a new code</button>
    <button class="listrow" style="margin:4px 0 0;font-size:14px;" onclick="state.twofa=null;render()">Back</button></div>`;
}
function emailVerifyCard(){
  if(!state.loggedIn || !state.verifyRequired || state.emailVerified) return '';
  return `<div class="acct-card" style="display:block;"><b style="font-size:16px;">Confirm your email</b>
    <p style="font-size:14px;color:var(--sub);margin:4px 0 10px;">You need to confirm your email before you can place orders or send business details.</p>
    ${state.evSent ? `<input type="text" inputmode="numeric" maxlength="6" placeholder="6-digit code" value="${esc(state.evCode)}" oninput="state.evCode=this.value" style="width:100%;padding:10px;margin:4px 0 10px;border:1px solid var(--line);border-radius:10px;font-size:16px;"><button class="checkoutbtn" onclick="confirmEmail()">Confirm email</button><button class="listrow" style="margin:8px 0 0;font-size:14px;" onclick="sendVerify()">Send a new code</button>` : `<button class="checkoutbtn" onclick="sendVerify()">Send me a code</button>`}</div>`;
}
async function doLogin(){
  try{
    const d = await authCall("login",{ email:state.loginEmail.trim().toLowerCase(), password:state.loginPassword, remember:state.remember });
    if(d.twoFactor){ state.twofa={ challenge:d.challenge, hint:d.hint, code:"", note:d.previewNote||"" }; state.loginPassword=""; state.loginError=""; render(); return; }
    startSession(d); showToast('Signed in');
  }catch(e){ state.loginError=e.message; state.loginPassword=""; render(); }
}
async function verify2fa(){
  try{ const d=await authCall("codes",{action:"verify_2fa",challenge:state.twofa.challenge,code:state.twofa.code}); state.twofa=null; startSession(d); showToast('Signed in'); }
  catch(e){ showToast(e.message); if(/timed out/.test(e.message)){ state.twofa=null; render(); } }
}
async function resend2fa(){ try{ const d=await authCall("codes",{action:"resend_2fa",challenge:state.twofa.challenge}); if(d.previewNote) state.twofa.note=d.previewNote; render(); showToast('A new code was sent'); }catch(e){ showToast(e.message); } }
async function refreshMe(){ try{ const r=await fetch("/api/me",{headers:{Authorization:"Bearer "+sessionToken}}); if(r.ok){ const d=await r.json(); state.emailVerified=d.emailVerified!==false; state.verifyRequired=!!d.verifyRequired; render(); } }catch(e){} }
async function sendVerify(){ try{ const d=await authCall("codes",{action:"send_verify"}); state.evSent=true; render(); showToast(d.previewNote||'Code sent. Check your email'); }catch(e){ showToast(e.message); } }
async function confirmEmail(){ try{ await authCall("codes",{action:"verify_email",code:state.evCode}); state.evCode=""; await refreshMe(); showToast('Email confirmed'); }catch(e){ showToast(e.message); } }
function doLogout(){ sessionToken=""; clearToken(); loadSellerProducts(); state.loggedIn = false; state.role=""; state.userName=""; state.twofa=null; state.emailVerified=true; state.verifyRequired=false; state.evSent=false; state.sellers=[]; state.orders=[]; state.notes=[]; state.lastOrder=null; state.myStore=null; PAYOUT={bank:"Loading...",accountName:"",accountNumber:"",phone:"",whatsapp:""}; state.loginEmail=""; state.loginPassword=""; render(); }
function updateBiz(key,val){ state.bizRecord[key]=val; }
function toggleDoc(key){ state.docs[key] = !state.docs[key]; render(); }
function submitLoan(){
  if(!state.loanAmount){ showToast('Enter an amount before submitting'); return; }
  showToast('Loan application submitted for review (test preview)');
}
function resetApp(){ state.cart={}; state.wish={}; state.query=''; state.visibleCount=PAGE_SIZE; render(); showToast('Test data reset'); }
function showToast(msg){
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(window._toastTimer); window._toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}

document.querySelectorAll('.navbtn').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));

render();
(async function restoreSession(){
  try{
    const t = localStorage.getItem('mib_t')||sessionStorage.getItem('mib_t'); if(t){ state.remember=!!localStorage.getItem('mib_t');
      const r = await fetch("/api/me",{headers:{Authorization:"Bearer "+t}});
      if(r.ok){ const d = await r.json(); sessionToken=t; state.loggedIn=true; state.role=d.role; state.userName=d.name; state.mustChange=!!d.mustChange; state.isSuper=!!d.super; state.userPhone=d.phone||''; state.emailVerified=d.emailVerified!==false; state.verifyRequired=!!d.verifyRequired; state.loginEmail=d.email; if(d.role==='customer') loadAddresses(); if(d.role==='admin'){ loadSellers(); loadAdminTools(); } loadPayout(); loadOrders(); loadMyStore(); if(d.role==='admin') loadApprovals(); }
      else clearToken();
    }
  }catch(e){}
  loadSellerProducts();
})();
loadCategories(); loadStories();

/* Remove the "Powered by Netlify" badge Netlify injects, so it never covers the menu or buttons */
(function(){
  function isBadge(el){
    try{
      if(!el||el.nodeType!==1||el===document.body||el===document.documentElement) return false;
      if(/netlify/i.test(el.tagName||"")||/netlify/i.test(el.id||"")||/netlify/i.test(typeof el.className==="string"?el.className:"")) return true;
      var t=(el.shadowRoot?el.shadowRoot.textContent:el.textContent)||"";
      return /powered by netlify/i.test(t)&&t.length<120;
    }catch(e){return false;}
  }
  function sweep(){
    try{ Array.prototype.slice.call(document.body.children).forEach(function(el){ if(isBadge(el)) el.style.setProperty("display","none","important"); }); }catch(e){}
  }
  try{
    new MutationObserver(sweep).observe(document.documentElement,{childList:true,subtree:false});
    new MutationObserver(sweep).observe(document.body||document.documentElement,{childList:true});
  }catch(e){}
  sweep(); setTimeout(sweep,1000); setTimeout(sweep,4000);
})();
