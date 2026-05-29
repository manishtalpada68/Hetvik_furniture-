// ==================== MULTI LANGUAGE ====================
const translations = {
  en: {
    nav_home:"Home", nav_services:"Services", nav_gallery:"Gallery", nav_process:"Process", nav_materials:"Materials", nav_reviews:"Reviews", nav_book:"Book", nav_contact:"Contact",
    hero_badge:"🏆 25+ Years Legacy", hero_title1:"Where", hero_title2:"Wood", hero_title3:"Meets Modern Soul",
    hero_desc:"Advanced carpentry by Manish Talpada — custom furniture, kitchen cabinets, bedroom sets, and premium interior woodwork.",
    stat_projects:"Projects", stat_satisfaction:"Satisfaction", stat_experience:"Experience",
    book_btn:"Book via WhatsApp", hero_tag:"Precision & Passion",
    services_title:"Our Signature Services", service1:"Bespoke Furniture", service1_desc:"Tables, Chairs, Sofas",
    service2:"Modular Kitchen", service2_desc:"Cabinets & Shutters", service3:"Bedroom Suites", service3_desc:"Wardrobes, Headboards",
    service4:"Premium Doors", service4_desc:"Solid Wood Designs",
    gallery_title:"📸 Our Craftsmanship", gallery_desc:"Images auto-loaded from upload/ folder", gallery_empty:"Images will appear here from the upload/ folder.<br>Place your JPG/PNG images as upload/1.jpg, upload/2.jpg, etc.",
    process_title:"Our Process", process1:"Consultation", process1_desc:"Discuss your vision, needs & budget",
    process2:"Design & Measure", process2_desc:"Precise measurements & 3D design",
    process3:"Crafting", process3_desc:"Expert woodworking with finest materials",
    process4:"Finishing", process4_desc:"Polish, paint & quality check",
    process5:"Delivery", process5_desc:"Safe delivery & installation at your home",
    materials_title:"Premium Materials", comparison_title:"Transformations",
    comp1_title:"Modern Kitchen Transformation", comp1_desc:"Complete modular kitchen with premium cabinets, soft-close drawers, and elegant granite countertop.",
    comp2_title:"Luxury Bedroom Suite", comp2_desc:"Custom wardrobe with sliding doors, king-size bed with storage, and matching side tables.",
    comp3_title:"Living Room Makeover", comp3_desc:"Designer sofa set, TV unit with LED backlight, and center table with glass top.",
    reviews_title:"Client Love",
    review1_text:'"Outstanding craftsmanship! Manish bhai is a legend."', review2_text:'"Perfect finish & timely delivery. Highly recommend!"',
    review3_text:'"Modular kitchen is stunning! Thank you Hetvik Furniture."', review4_text:'"Best carpentry service in Gujarat! Very professional."',
    booking_title:"Book Your Consultation", booking_desc:"Name, Mobile, Address, Work details — sab WhatsApp pe aa jayegi",
    opt_furniture:"Custom Furniture", opt_kitchen:"Kitchen Cabinetry", opt_bedroom:"Bedroom & Wardrobe", opt_flooring:"Wooden Flooring", opt_interior:"Complete Home Interior",
    send_btn:"Send on WhatsApp", contact_title:"Let's Craft Your Dream", call_btn:"Call Now",
    counter_projects:"Projects Completed", counter_clients:"Happy Clients", counter_years:"Years Experience", counter_team:"Expert Craftsmen", counter_satisfaction:"% Satisfaction"
  },
  hi: {
    nav_home:"होम", nav_services:"सेवाएं", nav_gallery:"गैलरी", nav_process:"प्रक्रिया", nav_materials:"सामग्री", nav_reviews:"समीक्षा", nav_book:"बुकिंग", nav_contact:"संपर्क",
    hero_badge:"🏆 25+ वर्षों की विरासत", hero_title1:"जहाँ", hero_title2:"लकड़ी", hero_title3:"आधुनिक आत्मा से मिलती है",
    hero_desc:"मनीष तलपड़ा द्वारा उन्नत बढ़ईगीरी - कस्टम फर्नीचर, मॉड्यूलर किचन, बेडरूम सेट और प्रीमियम इंटीरियर वुडवर्क।",
    stat_projects:"प्रोजेक्ट्स", stat_satisfaction:"संतुष्टि", stat_experience:"अनुभव",
    book_btn:"व्हाट्सएप पर बुक करें", hero_tag:"सटीकता और जुनून",
    services_title:"हमारी विशेष सेवाएं", service1:"कस्टम फर्नीचर", service1_desc:"टेबल, कुर्सियाँ, सोफे",
    service2:"मॉड्यूलर किचन", service2_desc:"कैबिनेट और शटर", service3:"बेडरूम सूट", service3_desc:"अलमारी, हेडबोर्ड",
    service4:"प्रीमियम दरवाजे", service4_desc:"ठोस लकड़ी डिजाइन",
    gallery_title:"📸 हमारी कारीगरी", gallery_desc:"upload/ फोल्डर से ऑटो लोड", gallery_empty:"upload/ फोल्डर से छवियां यहां दिखेंगी।<br>अपनी JPG/PNG छवियां upload/ फोल्डर में रखें।",
    process_title:"हमारी प्रक्रिया", process1:"परामर्श", process1_desc:"अपनी दृष्टि, जरूरतों और बजट पर चर्चा करें",
    process2:"डिजाइन और माप", process2_desc:"सटीक माप और 3D डिजाइन",
    process3:"कारीगरी", process3_desc:"बेहतरीन सामग्री के साथ विशेषज्ञ लकड़ी कारीगरी",
    process4:"फिनिशिंग", process4_desc:"पॉलिश, पेंट और गुणवत्ता जांच",
    process5:"डिलीवरी", process5_desc:"आपके घर पर सुरक्षित डिलीवरी और स्थापना",
    materials_title:"प्रीमियम सामग्री", comparison_title:"परिवर्तन",
    comp1_title:"आधुनिक किचन परिवर्तन", comp1_desc:"प्रीमियम कैबिनेट, सॉफ्ट-क्लोज ड्रॉअर और एलिगेंट ग्रेनाइट काउंटरटॉप के साथ पूर्ण मॉड्यूलर किचन।",
    comp2_title:"लक्जरी बेडरूम सूट", comp2_desc:"स्लाइडिंग दरवाजों के साथ कस्टम वार्डरोब, स्टोरेज वाला किंग-साइज बेड और मैचिंग साइड टेबल।",
    comp3_title:"लिविंग रूम मेकओवर", comp3_desc:"डिजाइनर सोफा सेट, LED बैकलाइट के साथ TV यूनिट और ग्लास टॉप सेंटर टेबल।",
    reviews_title:"ग्राहक प्रेम",
    review1_text:'"शानदार शिल्प कौशल! मनीष भाई एक दिग्गज हैं।"', review2_text:'"बिल्कुल सही फिनिश और समय पर डिलीवरी।"',
    review3_text:'"मॉड्यूलर किचन शानदार है! धन्यवाद।"', review4_text:'"गुजरात में सबसे अच्छी बढ़ईगीरी सेवा!"',
    booking_title:"अपनी सलाह बुक करें", booking_desc:"नाम, मोबाइल, पता, काम की जानकारी — सब WhatsApp पर",
    opt_furniture:"कस्टम फर्नीचर", opt_kitchen:"किचन कैबिनेटरी", opt_bedroom:"बेडरूम और अलमारी", opt_flooring:"लकड़ी की फर्श", opt_interior:"पूरा घर इंटीरियर",
    send_btn:"व्हाट्सएप पर भेजें", contact_title:"अपना सपना साकार करें", call_btn:"अभी कॉल करें",
    counter_projects:"पूरे प्रोजेक्ट्स", counter_clients:"खुश ग्राहक", counter_years:"वर्ष अनुभव", counter_team:"विशेषज्ञ कारीगर", counter_satisfaction:"% संतुष्टि"
  },
  gu: {
    nav_home:"હોમ", nav_services:"સેવાઓ", nav_gallery:"ગેલેરી", nav_process:"પ્રક્રિયા", nav_materials:"સામગ્રી", nav_reviews:"સમીક્ષાઓ", nav_book:"બુકિંગ", nav_contact:"સંપર્ક",
    hero_badge:"🏆 25+ વર્ષનો વારસો", hero_title1:"જ્યાં", hero_title2:"લાકડું", hero_title3:"આધુનિક આત્માને મળે છે",
    hero_desc:"મનીષ તલપડા દ્વારા એડવાન્સ્ડ સુથારીકામ",
    stat_projects:"પ્રોજેક્ટ્સ", stat_satisfaction:"સંતોષ", stat_experience:"અનુભવ",
    book_btn:"વોટ્સએપ પર બુક કરો", hero_tag:"ચોકસાઈ અને જુસ્સો",
    services_title:"અમારી સિગ્નેચર સેવાઓ", service1:"કસ્ટમ ફર્નિચર", service1_desc:"ટેબલ, ખુરશીઓ", service2:"મોડ્યુલર કિચન", service2_desc:"કેબિનેટ", service3:"બેડરૂમ સ્યુટ્સ", service3_desc:"વોર્ડરોબ", service4:"પ્રીમિયમ દરવાજા", service4_desc:"સોલિડ વુડ",
    gallery_title:"📸 અમારી કારીગરી", gallery_desc:"upload/ ફોલ્ડરમાંથી ઓટો લોડ", gallery_empty:"upload/ ફોલ્ડરમાંથી છબીઓ અહીં દેખાશે.<br>તમારી JPG/PNG છબીઓ upload/ ફોલ્ડરમાં મૂકો.",
    process_title:"અમારી પ્રક્રિયા", process1:"પરામર્શ", process1_desc:"તમારા દ્રષ્ટિકોણ, જરૂરિયાતો અને બજેટ પર ચર્ચા",
    process2:"ડિઝાઇન અને માપ", process2_desc:"ચોકસાઈપૂર્વક માપ અને 3D ડિઝાઇન",
    process3:"કારીગરી", process3_desc:"ઉત્તમ સામગ્રી સાથે નિષ્ણાત લાકડાની કારીગરી",
    process4:"ફિનિશિંગ", process4_desc:"પોલિશ, પેઇન્ટ અને ગુણવત્તા તપાસ",
    process5:"ડિલિવરી", process5_desc:"તમારા ઘરે સલામત ડિલિવરી અને સ્થાપના",
    materials_title:"પ્રીમિયમ સામગ્રી", comparison_title:"ટ્રાન્સફોર્મેશન",
    comp1_title:"આધુનિક કિચન ટ્રાન્સફોર્મેશન", comp1_desc:"પ્રીમિયમ કેબિનેટ, સોફ્ટ-ક્લોઝ ડ્રોઅર અને એલિગેન્ટ ગ્રેનાઇટ કાઉન્ટરટોપ સાથે સંપૂર્ણ મોડ્યુલર કિચન.",
    comp2_title:"લક્ઝરી બેડરૂમ સ્યુટ", comp2_desc:"સ્લાઇડિંગ દરવાજા સાથે કસ્ટમ વોર્ડરોબ, સ્ટોરેજ વાળું કિંગ-સાઇઝ બેડ અને મેચિંગ સાઇડ ટેબલ.",
    comp3_title:"લિવિંગ રૂમ મેકઓવર", comp3_desc:"ડિઝાઇનર સોફા સેટ, LED બેકલાઇટ સાથે TV યુનિટ અને ગ્લાસ ટોપ સેન્ટર ટેબલ.",
    reviews_title:"ગ્રાહક પ્રેમ",
    review1_text:'"શાનદાર કારીગરી! મનીષ ભાઈ દિગ્ગજ છે."', review2_text:'"સંપૂર્ણ ફિનિશ!"',
    review3_text:'"મોડ્યુલર કિચન અદ્ભુત છે!"', review4_text:'"ગુજરાતમાં શ્રેષ્ઠ સેવા!"',
    booking_title:"તમારી સલાહ બુક કરો", booking_desc:"નામ, મોબાઇલ, સરનામું — WhatsApp પર",
    opt_furniture:"કસ્ટમ ફર્નિચર", opt_kitchen:"કિચન કેબિનેટરી", opt_bedroom:"બેડરૂમ", opt_flooring:"લાકડાનું ફ્લોરિંગ", opt_interior:"સંપૂર્ણ ઘર",
    send_btn:"વોટ્સએપ પર મોકલો", contact_title:"તમારા સપનાને આકાર આપો", call_btn:"હવે કૉલ કરો",
    counter_projects:"પૂર્ણ પ્રોજેક્ટ્સ", counter_clients:"ખુશ ગ્રાહકો", counter_years:"વર્ષ અનુભવ", counter_team:"નિષ્ણાત કારીગર", counter_satisfaction:"% સંતોષ"
  }
};

let currentLang = 'en';
function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') el.placeholder = translations[lang][key];
      else el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn-drag').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ==================== LOADER ====================
window.addEventListener('load', () => {
  setTimeout(() => {
    const ld = document.getElementById('loaderMaster');
    ld.style.opacity = '0';
    setTimeout(() => { ld.style.display = 'none'; initCounters(); }, 800);
  }, 2500);
});

// ==================== DRAGGABLE WIDGETS ====================
$("#darkModeDrag").draggable({ containment: "window", scroll: false });
$("#langDrag").draggable({ containment: "window", scroll: false });

// ==================== DARK MODE ====================
const darkBtn = document.getElementById('darkModeDrag');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = darkBtn.querySelector('i');
  icon.classList.toggle('fa-moon', !document.body.classList.contains('light-mode'));
  icon.classList.toggle('fa-sun', document.body.classList.contains('light-mode'));
});

// ==================== LANGUAGE ====================
document.querySelectorAll('.lang-btn-drag').forEach(btn => {
  btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
});

// ==================== COUNTER ANIMATION ====================
function initCounters() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
}

// ==================== AUTO-LOAD GALLERY FROM upload/ FOLDER ====================
let foundImages = [];
let currentLightboxIndex = 0;
const labels = ["Custom Furniture","Modular Kitchen","Bedroom Suite","Premium Door","Living Room","Dining Set","Wardrobe","TV Unit","Study Table","Center Table","Sofa Set","Bed Frame","Kitchen Cabinet","Shutter Design","Wooden Flooring","Pooja Mandir","Shoe Rack","False Ceiling","Wall Paneling","Storage Unit"];

function tryLoadImage(index) {
  if (index > 200) { renderFolderGallery(); return; }
  const img = new Image();
  const src = 'upload/' + index + '.jpg';
  img.onload = () => { foundImages.push({src, num:index}); tryLoadImage(index + 1); };
  img.onerror = () => {
    const img2 = new Image();
    img2.onload = () => { foundImages.push({src:'upload/' + index + '.png', num:index}); tryLoadImage(index + 1); };
    img2.onerror = () => {
      const img3 = new Image();
      img3.onload = () => { foundImages.push({src:'upload/' + index + '.jpeg', num:index}); tryLoadImage(index + 1); };
      img3.onerror = () => { tryLoadImage(index + 1); };
      img3.src = 'upload/' + index + '.jpeg';
    };
    img2.src = 'upload/' + index + '.png';
  };
  img.src = src;
}

function renderFolderGallery() {
  const container = document.getElementById('folderGallery');
  if (!container) return;
  if (foundImages.length === 0) {
    container.innerHTML = '<div class="gallery-empty"><i class="fas fa-folder-open"></i><p data-key="gallery_empty">Images will appear here from the upload/ folder.<br>Place your JPG/PNG images as upload/1.jpg, upload/2.jpg, etc.</p></div>';
    return;
  }
  container.innerHTML = '';
  foundImages.forEach((img, idx) => {
    const card = document.createElement('div');
    card.className = 'gallery-item-new';
    const label = labels[idx % labels.length];
    card.innerHTML = '<img src="' + img.src + '" alt="Work ' + img.num + '" loading="lazy"><div class="gallery-overlay"><h4>' + label + '</h4><p>Project #' + img.num + '</p></div>';
    card.addEventListener('click', () => openLightbox(idx));
    container.appendChild(card);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCap = document.getElementById('lightboxCaption');
  const img = foundImages[index];
  lbImg.src = img.src;
  lbCap.textContent = labels[index % labels.length] + ' — Project #' + img.num;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % foundImages.length;
  openLightbox(currentLightboxIndex);
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + foundImages.length) % foundImages.length;
  openLightbox(currentLightboxIndex);
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });
document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// Also try common names
const commonNames = ['image1','image2','image3','image4','image5','photo1','photo2','photo3','photo4','photo5','work1','work2','work3','work4','work5','furniture1','furniture2','kitchen1','kitchen2','bedroom1','bedroom2','door1','door2','living1','living2','dining1','dining2'];
commonNames.forEach(name => {
  const img = new Image();
  img.onload = () => { if (!foundImages.find(f => f.src === img.src)) { foundImages.push({src:img.src, num:name}); } };
  img.src = 'upload/' + name + '.jpg';
});

tryLoadImage(1);

// ==================== WHATSAPP BOOKING ====================
document.getElementById('whatsappBookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('fullname').value.trim();
  const mobile = document.getElementById('mobileno').value.trim();
  const addr = document.getElementById('address').value.trim();
  const work = document.getElementById('workType').options[document.getElementById('workType').selectedIndex].text;
  const detail = document.getElementById('workDetail').value.trim();
  if (!name || !mobile || !addr || !detail) { alert("Please fill all fields"); return; }
  const msg = '🪵 NEW BOOKING - HETVIK FURNITURE%0A👤 Name: ' + name + '%0A📞 Mobile: ' + mobile + '%0A🏠 Address: ' + addr + '%0A🔨 Service: ' + work + '%0A📝 Details: ' + detail;
  window.open('https://wa.me/919023449884?text=' + msg, '_blank');
  alert("✅ Booking sent to Manish Talpada!");
  e.target.reset();
});

// ==================== MOBILE MENU ====================
const menuBtn = document.getElementById('mobileMenuBtn');
const panel = document.getElementById('mobilePanel');
const closeMb = document.getElementById('closeMobile');
const overlay = document.getElementById('mobileOverlay');

menuBtn.onclick = () => { panel.style.left = '0'; overlay.classList.add('active'); };
closeMb.onclick = () => { panel.style.left = '-100%'; overlay.classList.remove('active'); };
overlay.onclick = () => { panel.style.left = '-100%'; overlay.classList.remove('active'); };

document.querySelectorAll('.nav-links a, .mobile-nav-panel a').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      panel.style.left = '-100%';
      overlay.classList.remove('active');
    }
  });
});

document.getElementById('heroBookBtn')?.addEventListener('click', () => {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});

// ==================== GSAP SCROLL ANIMATIONS ====================
gsap.registerPlugin(ScrollTrigger);

const animateElements = '.service-card-unique, .gallery-item-new, .person-review, .process-card, .material-card, .comparison-card, .counter-item, .trust-item';
gsap.utils.toArray(animateElements).forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
    opacity: 0, y: 50, duration: 0.7, ease: 'power2.out'
  });
});

// Stagger animations for grids
gsap.utils.toArray('.services-show, .process-grid, .materials-grid, .comparison-grid, .reviews-unique').forEach(grid => {
  gsap.from(grid.children, {
    scrollTrigger: { trigger: grid, start: 'top 85%' },
    opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'power2.out'
  });
});

// Parallax effect on hero
if (window.innerWidth > 900) {
  gsap.to('.hero-left', {
    scrollTrigger: { trigger: '.hero-wrap', start: 'top top', end: 'bottom top', scrub: 1 },
    y: 100, ease: 'none'
  });
  gsap.to('.hero-right', {
    scrollTrigger: { trigger: '.hero-wrap', start: 'top top', end: 'bottom top', scrub: 1 },
    y: 50, ease: 'none'
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    navbar.style.padding = '0.8rem 5%';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '1.2rem 5%';
  }
  lastScroll = currentScroll;
});
