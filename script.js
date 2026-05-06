// ============================================================
// KAKINADA HOME SAMPLE - COMPLETE TEST DATA (43 tests)
// ============================================================

const testsData = [
  // ---------- BLOOD TESTS (25) ----------
  { id: 1, name: "Complete Blood Count (CBC)", description: "Evaluates red & white blood cells, platelets, hemoglobin – overall health screen.", price: 449, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778075538/ChatGPT_Image_May_6_2026_07_20_24_PM_coj2al.png" },
  { id: 2, name: "Blood Sugar Fasting", description: "Measures glucose after overnight fasting – diabetes screening.", price: 49, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778075539/ChatGPT_Image_May_6_2026_07_21_39_PM_ygpprh.png" },
  { id: 3, name: "Blood Sugar PP", description: "Glucose level 2 hours after a meal – monitors diabetes control.", price: 49, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778075808/ChatGPT_Image_May_6_2026_07_22_43_PM_kptyjf.png" },
  { id: 4, name: "HbA1c", description: "Average blood sugar over 2‑3 months – gold standard for diabetes.", price: 599, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778075808/ChatGPT_Image_May_6_2026_07_24_26_PM_dgmfjm.png" },
  { id: 5, name: "Lipid Profile", description: "Cholesterol, triglycerides, HDL, LDL – heart health assessment.", price: 499, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778075820/ChatGPT_Image_May_6_2026_07_25_57_PM_mapkdn.png" },
  { id: 6, name: "Liver Function Test (LFT)", description: "ALT, AST, ALP, bilirubin, proteins – liver health.", price: 849, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778076135/ChatGPT_Image_May_6_2026_07_27_19_PM_dhxi0w.png" },
  { id: 7, name: "Kidney Function Test (KFT)", description: "Creatinine, urea, uric acid – kidney function screen.", price: 699, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778076136/ChatGPT_Image_May_6_2026_07_29_12_PM_wxfzgt.png" },
  { id: 8, name: "Thyroid Profile (T3 T4 TSH)", description: "Thyroid hormones – detects hypo/hyperthyroidism.", price: 449, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778076135/ChatGPT_Image_May_6_2026_07_31_21_PM_jcy2nx.png" },
  { id: 9, name: "Vitamin D", description: "25‑Hydroxy Vitamin D – bone health & deficiency.", price: 849, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778076344/ChatGPT_Image_May_6_2026_07_33_01_PM_hio4fz.png" },
  { id: 10, name: "Vitamin B12", description: "Levels for nerve function & red blood cell production.", price: 849, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778076345/ChatGPT_Image_May_6_2026_07_35_00_PM_sh10wa.png" },
  { id: 11, name: "CRP", description: "C‑Reactive Protein – inflammation marker.", price: 349, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077047/ChatGPT_Image_May_6_2026_07_39_16_PM_fdxaab.png" },
  { id: 12, name: "ESR", description: "Erythrocyte Sedimentation Rate – inflammation indicator.", price: 89, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077047/ChatGPT_Image_May_6_2026_07_44_14_PM_y1afjq.png" },
  { id: 13, name: "Dengue Test", description: "NS1 antigen / IgM – early dengue detection.", price: 799, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077047/ChatGPT_Image_May_6_2026_07_46_14_PM_qqcr41.png" },
  { id: 14, name: "Malaria Test", description: "Rapid antigen or smear – malaria parasite detection.", price: 449, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077209/ChatGPT_Image_May_6_2026_07_48_17_PM_k2mswn.png" },
  { id: 15, name: "Typhoid Test", description: "Widal test or Typhidot – Salmonella typhi.", price: 299, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077378/ChatGPT_Image_May_6_2026_07_52_01_PM_ttlih1.png" },
  { id: 16, name: "HIV Test", description: "Antibody/antigen screening for HIV 1 & 2.", price: 249, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077824/ChatGPT_Image_May_6_2026_07_54_06_PM_pmfgyd.png" },
  { id: 17, name: "Hepatitis B", description: "HBsAg – surface antigen for HBV infection.", price: 149, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077824/ChatGPT_Image_May_6_2026_07_56_56_PM_fwv1yn.png" },
  { id: 18, name: "Hepatitis C", description: "Anti‑HCV antibody test.", price: 149, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778077824/ChatGPT_Image_May_6_2026_07_59_21_PM_jlmhne.png" },
  { id: 19, name: "Iron Profile", description: "Serum iron, TIBC, ferritin – iron deficiency/overload.", price: 799, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778078202/ChatGPT_Image_May_6_2026_08_02_32_PM_usiity.png" },
  { id: 20, name: "Calcium Test", description: "Total serum calcium – bone & metabolic health.", price: 249, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778078202/ChatGPT_Image_May_6_2026_08_05_34_PM_azcbyl.png" },
  { id: 21, name: "Uric Acid", description: "Monitor gout, kidney stones, or chemotherapy.", price: 199, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778078964/ChatGPT_Image_May_6_2026_08_08_38_PM_jjlxcb.png" },
  { id: 22, name: "Electrolytes", description: "Sodium, potassium, chloride – fluid balance.", price: 499, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778078965/ChatGPT_Image_May_6_2026_08_11_26_PM_jccnyb.png" },
  { id: 23, name: "Troponin I", description: "Cardiac marker – heart attack detection.", price: 899, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778078965/ChatGPT_Image_May_6_2026_08_16_43_PM_aqw2jz.png" },
  { id: 24, name: "D-Dimer", description: "Blood clotting disorder / DVT screening.", price: 599, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778079396/ChatGPT_Image_May_6_2026_08_20_36_PM_ilaq5w.png" },
  { id: 25, name: "PSA", description: "Prostate‑specific antigen – prostate health.", price: 999, category: "Blood", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778079396/ChatGPT_Image_May_6_2026_08_25_22_PM_gotlrx.png" },

  // ---------- URINE TESTS (10) ----------
  { id: 26, name: "Urine Routine Examination", description: "Physical, chemical & microscopic analysis of urine.", price: 149, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778079609/ChatGPT_Image_May_6_2026_08_28_34_PM_xgvpa6.png" },
  { id: 27, name: "Urine Culture", description: "Identifies bacterial infection & antibiotic sensitivity.", price: 1999, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778079760/ChatGPT_Image_May_6_2026_08_31_38_PM_qzvnkz.png" },
  { id: 28, name: "Urine Pregnancy Test", description: "hCG detection for early pregnancy.", price: 99, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778079917/ChatGPT_Image_May_6_2026_08_33_54_PM_bian73.png" },
  { id: 29, name: "Urine Protein Test", description: "Detects proteinuria – kidney damage marker.", price: 149, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778080371/ChatGPT_Image_May_6_2026_08_40_16_PM_gvnyz5.png" },
  { id: 30, name: "Urine Sugar Test", description: "Glucose in urine – diabetes indicator.", price: 49, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778080415/ChatGPT_Image_May_6_2026_08_42_43_PM_yf4dvy.png" },
  { id: 31, name: "Urine Ketone Test", description: "Detects ketones – diabetes ketoacidosis risk.", price: 79, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778081076/ChatGPT_Image_May_6_2026_08_46_38_PM_b6fn2q.png" },
  { id: 32, name: "24 Hours Urine Protein", description: "Quantifies protein loss over 24h – nephrology assessment.", price: 1999, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778081076/ChatGPT_Image_May_6_2026_08_48_24_PM_hazof2.png" },
  { id: 33, name: "Urine Microalbumin", description: "Early kidney damage marker (diabetic nephropathy).", price: 149, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778081076/ChatGPT_Image_May_6_2026_08_53_28_PM_dkey6x.png" },
  { id: 34, name: "Urine Creatinine", description: "Used in kidney function assessment & protein/creatinine ratio.", price: 149, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778081476/ChatGPT_Image_May_6_2026_08_56_06_PM_ictoje.png" },
  { id: 35, name: "Urine Drug Screening", description: "Detection of drug abuse substances.", price: 2099, category: "Urine", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778081495/ChatGPT_Image_May_6_2026_09_00_16_PM_alk3k9.png" },

  // ---------- STOOL TESTS (8) ----------
  { id: 36, name: "Stool Routine Examination", description: "Colour, consistency, mucus, blood, parasites.", price: 449, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082482/ChatGPT_Image_May_6_2026_09_02_47_PM_rgvg4a.png" },
  { id: 37, name: "Stool Culture", description: "Identifies bacterial pathogens (Salmonella, Shigella, E.coli).", price: 1999, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082482/ChatGPT_Image_May_6_2026_09_06_41_PM_t6h5uy.png" },
  { id: 38, name: "Occult Blood Test", description: "Hidden blood in stool – colorectal cancer screening.", price: 199, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082489/ChatGPT_Image_May_6_2026_09_08_53_PM_akki3c.png" },
  { id: 39, name: "Stool Ova & Parasite", description: "Detects intestinal parasites (Giardia, Entamoeba, worms).", price: 299, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082483/ChatGPT_Image_May_6_2026_09_10_22_PM_iu1yml.png" },
  { id: 40, name: "Reducing Substance Test", description: "Detects carbohydrate malabsorption in infants.", price: 199, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082483/ChatGPT_Image_May_6_2026_09_12_12_PM_qtvjhh.png" },
  { id: 41, name: "Stool Fat Test", description: "Steatorrhea – fat malabsorption (pancreatic/biliary issues).", price: 1499, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082483/ChatGPT_Image_May_6_2026_09_14_04_PM_scwsjg.png" },
  { id: 42, name: "H. Pylori Stool Antigen", description: "Active Helicobacter pylori infection – ulcer cause.", price: 1699, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082483/ChatGPT_Image_May_6_2026_09_16_10_PM_lzbbj3.png" },
  { id: 43, name: "Calprotectin Test", description: "Inflammatory bowel disease (IBD) marker.", price: 999, category: "Stool", imageUrl: "https://res.cloudinary.com/dahh1ibxe/image/upload/v1778082641/ChatGPT_Image_May_6_2026_09_19_56_PM_audrmw.png" }
];

let cart = [];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function showToast(msg, type) {
  const toast = document.createElement('div');
  toast.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed bottom-0 end-0 m-3 shadow`;
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function renderTests() {
  const container = document.getElementById('tests-container');
  if (!container) return;
  container.innerHTML = '';

  testsData.forEach(test => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4 col-xl-3';
    col.innerHTML = `
      <div class="card test-card h-100" data-test-id="${test.id}" data-test-name="${escapeHtml(test.name)}" data-test-desc="${escapeHtml(test.description)}" data-test-img="${test.imageUrl}">
        <img src="${test.imageUrl}" class="card-img-top" alt="${test.name}" loading="lazy" style="background: #f0f0f0; object-fit: contain; padding: 8px;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${escapeHtml(test.name)}</h5>
          <p class="card-text text-secondary small">${escapeHtml(test.description)}</p>
          <div class="mt-auto">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <span class="price-tag">₹${test.price}</span>
              <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${test.id}" data-name="${escapeHtml(test.name)}" data-price="${test.price}">
                <i class="fas fa-cart-plus me-1"></i> Add
              </button>
            </div>
            <div class="price-update-note text-center mt-2 small text-muted"><i class="fas fa-edit"></i> Click card to enlarge</div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent triggering card click
      const id = parseInt(btn.dataset.id);
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      addToCart({ id, name, price });
    });
  });

  // Card click -> open modal with larger image and full description
  document.querySelectorAll('.test-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If click originated from the Add button, modal already prevented
      if (e.target.classList && e.target.classList.contains('add-to-cart-btn')) return;
      const name = card.querySelector('.card-title').innerText;
      const desc = card.querySelector('.card-text').innerText;
      const imgSrc = card.querySelector('img').src;
      const modalTitle = document.getElementById('modalTitle');
      const modalDesc = document.getElementById('modalDescription');
      const modalImg = document.getElementById('modalImage');
      if (modalTitle && modalDesc && modalImg) {
        modalTitle.innerText = name;
        modalDesc.innerText = desc;
        modalImg.src = imgSrc;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
      } else {
        console.warn('Modal elements not found. Make sure HTML includes #imageModal, #modalTitle, #modalDescription, #modalImage');
      }
    });
  });
}

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...item, quantity: 1 });
  updateCartUI();
  showToast(`${item.name} added to cart`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateQuantity(id, delta) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) {
    const newQty = cart[idx].quantity + delta;
    if (newQty <= 0) cart.splice(idx, 1);
    else cart[idx].quantity = newQty;
    updateCartUI();
  }
}

function updateCartUI() {
  const cartCountSpan = document.getElementById('cartCount');
  const cartItemsDiv = document.getElementById('cartItemsList');
  const totalSpan = document.getElementById('cartTotalAmount');
  if (!cartCountSpan) return;

  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  cartCountSpan.innerText = itemCount;

  if (!cartItemsDiv) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p class="text-muted text-center">Your cart is empty. Add some tests.</p>';
    if (totalSpan) totalSpan.innerText = '₹0';
    return;
  }

  let total = 0;
  let html = '<ul class="list-group list-group-flush">';
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    html += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${escapeHtml(item.name)}</strong><br>
          <small>₹${item.price} x ${item.quantity}</small>
        </div>
        <div>
          <span class="fw-bold me-2">₹${itemTotal}</span>
          <button class="btn btn-sm btn-outline-secondary qty-minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
          <span class="mx-1">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary qty-plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
          <button class="btn btn-sm btn-danger ms-2 remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
        </div>
      </li>
    `;
  });
  html += '</ul>';
  cartItemsDiv.innerHTML = html;
  if (totalSpan) totalSpan.innerText = `₹${total}`;

  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.id);
      updateQuantity(id, -1);
    });
  });
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.id);
      updateQuantity(id, 1);
    });
  });
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.id);
      removeFromCart(id);
    });
  });
}

function sendOrderToWhatsApp() {
  const name = document.getElementById('customerName').value.trim();
  const mobile = document.getElementById('customerMobile').value.trim();
  const address = document.getElementById('customerAddress').value.trim();

  if (!name || !mobile || !address) {
    alert('Please fill all customer details.');
    return false;
  }
  if (!/^\d{10}$/.test(mobile)) {
    alert('Enter a valid 10-digit mobile number (e.g., 7013155130).');
    return false;
  }
  if (cart.length === 0) {
    alert('Your cart is empty. Add tests before checkout.');
    return false;
  }

  let cartDetails = cart.map(item => `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n');
  let totalAmount = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  let message = `🩸 *New Home Sample Booking* 🩸\n\n👤 *Name:* ${name}\n📞 *Mobile:* ${mobile}\n🏠 *Address:* ${address}\n\n📋 *Tests Ordered:*\n${cartDetails}\n\n💰 *Total Amount:* ₹${totalAmount}\n\n📍 *Location:* Kakinada\n📅 *Request:* Please call to confirm slot.`;

  const waLink = `https://wa.me/917013155130?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');

  cart = [];
  updateCartUI();
  document.getElementById('checkoutForm').reset();
  const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
  if (offcanvas) offcanvas.hide();
  alert('Order details sent to our WhatsApp. We will contact you shortly.');
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  renderTests();

  const cartIcon = document.getElementById('cartIconBtn');
  const viewCartBtn = document.getElementById('viewCartBtn');
  const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
  if (cartIcon) cartIcon.addEventListener('click', () => cartOffcanvas.show());
  if (viewCartBtn) viewCartBtn.addEventListener('click', () => cartOffcanvas.show());

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendOrderToWhatsApp();
  });

  const floatWa = document.getElementById('floatingWhatsappDirect');
  if (floatWa) floatWa.href = 'https://wa.me/917013155130?text=Hello%2C%20I%20want%20to%20book%20home%20sample%20collection';

  const offerClaim = document.getElementById('offerClaimBtn');
  if (offerClaim) offerClaim.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://wa.me/917013155130?text=I%20want%20to%20claim%20the%20lab%20test%20offer', '_blank');
  });
});