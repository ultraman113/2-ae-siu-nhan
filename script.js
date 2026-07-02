// ============================================================
// DATA – ĐÃ THAY EMOJI BẰNG ẢNH THẬT
// ============================================================

const PRODUCTS = [
    { id: 1, name: 'Đá bào dưa hấu', price: 30000, desc: 'Đá bào dưa hấu mát lạnh, ngọt thanh', category: 'da-bao', imageUrl: 'menu/da-bao dưa hấu.jpg', featured: true },
    { id: 2, name: 'Kem ốc quế Dâu tây', price: 25000, desc: 'Kem ốc quế vị dâu tây tươi mát, ngọt dịu.', category: 'kem', imageUrl: 'menu/kem ocque dâu.jpg', featured: true },
    { id: 3, name: 'Kem ốc quế Vani', price: 25000, desc: 'Kem ốc quế vani thơm nhẹ, béo mịn.', category: 'kem', imageUrl: 'menu/kem ocque vani.jpg', featured: true },
    { id: 4, name: 'Kem ly Trà xanh', price: 30000, desc: 'Kem ly vị trà xanh Nhật Bản, thanh mát.', category: 'kem', imageUrl: 'menu/kem ly traxanh.jpg', featured: false },
    { id: 5, name: 'Kem ly Socola', price: 30000, desc: 'Kem ly socola đen đậm vị, béo ngậy.', category: 'kem', imageUrl: 'menu/kem ly socola.jpg', featured: false },
    { id: 6, name: 'Kem que Dừa', price: 15000, desc: 'Kem que vị dừa tươi, mát lạnh.', category: 'kem', imageUrl: 'menu/kem que dừa.jpg', featured: true },
    { id: 7, name: 'Kem que Khoai môn', price: 15000, desc: 'Kem que khoai môn thơm bùi, màu tím đẹp.', category: 'kem', imageUrl: 'menu/kem khoai mon.jpg', featured: false },
    { id: 8, name: 'Đá bào Trà xanh', price: 20000, desc: 'Đá bào trà xanh thượng hạng, giải nhiệt.', category: 'da-bao', imageUrl: 'menu/da-bao traxanh.jpg', featured: true },
    { id: 9, name: 'Đá bào Dâu tây', price: 20000, desc: 'Đá bào dâu tây chua ngọt, mát lạnh.', category: 'da-bao', imageUrl: 'menu/da-bao dâu.jpg', featured: false },
    { id: 10, name: 'Kem ốc quế Mix Berry', price: 28000, desc: 'Kem ốc quế mix berry chua ngọt tự nhiên.', category: 'kem', imageUrl: 'menu/Kem ốc quế Mix Berry.jpg', featured: true },
    { id: 11, name: 'Kem ly Cookie Cream', price: 35000, desc: 'Kem ly với cookie giòn và kem vani béo.', category: 'kem', imageUrl: 'menu/Kem ly Cookie Cream.jpg', featured: false },
    { id: 12, name: 'Kem que Socola Hạnh nhân', price: 18000, desc: 'Kem que socola phủ hạnh nhân giòn.', category: 'kem', imageUrl: 'menu/Kem que Socola Hạnh nhân.jpg', featured: false },
    { id: 13, name: 'Đá bào Matcha Đặc biệt', price: 40000, desc: 'Đá bào matcha cao cấp, thơm mịn.', category: 'da-bao', imageUrl: 'menu/Đá bào Matcha Đặc biệt.jpg', featured: true },
    { id: 14, name: 'Kem ốc quế Caramel', price: 27000, desc: 'Kem ốc quế caramel mặn ngọt, hấp dẫn.', category: 'kem', imageUrl: 'menu/Kem ốc quế Caramel.jpg', featured: false },
    { id: 15, name: 'Kem ly Bạc hà Socola', price: 32000, desc: 'Kem ly bạc hà socola mát lạnh, sảng khoái.', category: 'kem', imageUrl: 'menu/Kem ly Bạc hà Socola.jpg', featured: false },
    { id: 16, name: 'milo dầm', price: 32000, desc: 'milo đậm đà, ngọt ngào mát lạnh.', category: 'da-bao', imageUrl: 'menu/milo dam.jpg', featured: false },
    { id: 17, name: 'Kem tầng', price: 32000, desc: 'Kem tầng mát lạnh, thú vị.', category: 'kem', imageUrl: 'menu/kem tầng.jpg', featured: false },
   { id: 18, name: 'Đá bào đậu đỏ',price: 35000, desc: ' Đá bào mịn kết hợp đậu đỏ ninh mềm, rưới sữa đặc béo thơm, mang đến vị ngọt thanh và mát lạnh.', category: 'da-bao', imageUrl: 'menu/da-bao daudo.jpg', featured: false },
   { id: 19, name: 'kem sầu riêng', price: 28000, desc: ' Kem mịn béo, thơm đậm vị sầu riêng tự nhiên, tan ngay trong miệng với vị ngọt dịu và hương thơm đặc trưng.', category: 'kem', imageUrl: 'menu/Kem sầu riêng.jpg', featured: false },
   { id: 20, name: 'kem hộp dâu', price: 35000, desc: 'kem mịn béo, vị dâu chua chua ngọt ngọt.', category: 'kem', imageUrl: 'menu/kem hộp dâu.jpg', featured: false },
    { id: 21, name: 'kem hộp dừa', price: 35000, desc: 'kem mịn béo, vị dừa thơm ngọt.', category: 'kem', imageUrl: 'menu/kem hộp dừa.jpg', featured: false },
    { id: 22, name: 'kem hộp khoai môn', price: 35000, desc: 'kem mịn béo, bùi bùi.', category: 'kem', imageUrl: 'menu/kem hộp khoai môn.jpg', featured: false },
    { id: 23, name: 'kem hộp trân châu', price: 35000, desc: 'kem mịn béo, bùi bùi.', category: 'kem', imageUrl: 'menu/kem hộp trân châu.jpg', featured: false },
    { id: 23, name: 'kem mochi đậu xanh', price: 40000, desc: 'kem mềm dẻo ngọt, .', category: 'kem', imageUrl: 'menu/mochi đậu xanh.webp', featured: false },
    { id: 24, name: 'kem mochi khoai môn', price: 40000, desc: 'kem mềm dẻo ngọt, .', category: 'kem', imageUrl: 'menu/mochi khoaimon.webp', featured: false },
    { id: 25, name: 'Đá bào kiwi', price: 25000, desc: 'mát lạnh cho mùa hè, .', category: 'da-bao', imageUrl: 'menu/da-bao kiwi.jpg', featured: false },
];


const TEAM = [
    { id: 1, name: 'Hoàng Thị Gia Nhi', role: 'nhân viên tư vấn', avatarUrl: 'avt/boan.jpg', bio: 'Người sáng lập KemBào với niềm đam mê ẩm thực mát lạnh.' },
    { id: 2, name: 'Lê Thị Khánh Hiền', role: 'chủ cửa hàng', avatarUrl: 'avt/truongbo.jpg', bio: 'Chuyên gia pha chế với hơn 10 năm kinh nghiệm trong ngành kem.' },
];

// ============================================================
// STATE
// ============================================================

let state = {
    currentPage: 'home',
    cart: [], // { productId, quantity }
    currentUser: null, // email
    users: JSON.parse(localStorage.getItem('kembao_users')) || [],
    selectedProductId: null,
    currentPageProducts: 1,
    pageSize: 8,
    searchQuery: '',
    sortBy: 'default',
};

// ============================================================
// DOM REFS
// ============================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const mainContent = $('#mainContent');
const pages = {
    home: $('#page-home'),
    products: $('#page-products'),
    detail: $('#page-detail'),
    cart: $('#page-cart'),
    checkout: $('#page-checkout'),
    account: $('#page-account'),
    login: $('#page-login'),
};
const logo = $('#logo');
const navLinks = $$('nav ul li a');
const cartBadge = $('#cartBadge');
const userGreeting = $('#userGreeting');
const loginBtn = $('#loginBtn');
const logoutBtn = $('#logoutBtn');
const menuToggle = $('#menuToggle');
const navUl = document.querySelector('nav ul');

const featuredGrid = $('#featuredGrid');
const productGrid = $('#productGrid');
const pagination = $('#pagination');
const searchInput = $('#searchInput');
const sortSelect = $('#sortSelect');

const detailContent = $('#detailContent');
const backFromDetail = $('#backFromDetail');

const cartContent = $('#cartContent');
const backFromCheckout = $('#backFromCheckout');
const checkoutContent = $('#checkoutContent');

const accountContent = $('#accountContent');

const loginBox = $('#loginBox');
const registerBox = $('#registerBox');
const loginForm = $('#loginForm');
const registerForm = $('#registerForm');
const switchToRegister = $('#switchToRegister');
const switchToLogin = $('#switchToLogin');
const loginError = $('#loginError');
const registerError = $('#registerError');

const teamGrid = $('#teamGrid');
const footerTeam = $('#footerTeam');

const memberModal = $('#memberModal');
const memberModalBody = $('#memberModalBody');
const memberModalClose = $('#memberModalClose');
const avatarModal = $('#avatarModal');
const avatarPreview = $('#avatarPreview');
const avatarUrlInput = $('#avatarUrlInput');
const saveAvatarBtn = $('#saveAvatarBtn');
const avatarModalClose = $('#avatarModalClose');
const avatarError = $('#avatarError');

// ============================================================
// UTILITY
// ============================================================

function formatCurrency(v) {
    return v.toLocaleString('vi-VN') + 'đ';
}

function generateId() {
    return Date.now() + Math.random().toString(36).slice(2);
}

function showPage(pageName) {
    Object.keys(pages).forEach(key => {
        pages[key].classList.toggle('active', key === pageName);
    });
    state.currentPage = pageName;
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageName);
    });
    navUl.classList.remove('open');
}

function getProduct(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getCartTotal() {
    return state.cart.reduce((sum, item) => {
        const p = getProduct(item.productId);
        return sum + (p ? p.price * item.quantity : 0);
    }, 0);
}

function getCartItemCount() {
    return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function saveUsers() {
    localStorage.setItem('kembao_users', JSON.stringify(state.users));
}

function saveCart() {
    localStorage.setItem('kembao_cart', JSON.stringify(state.cart));
}

function loadCart() {
    const data = localStorage.getItem('kembao_cart');
    if (data) state.cart = JSON.parse(data);
}

function getCurrentUser() {
    if (!state.currentUser) return null;
    return state.users.find(u => u.email === state.currentUser) || null;
}

// ============================================================
// RENDER FUNCTIONS (CÓ ẢNH)
// ============================================================

function renderFeatured() {
    const featured = PRODUCTS.filter(p => p.featured);
    featuredGrid.innerHTML = featured.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-img"><img src="${p.imageUrl}" alt="${p.name}" /></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price">${formatCurrency(p.price)}</div>
                <div class="desc">${p.desc}</div>
                <button class="btn-add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
            </div>
        </div>
    `).join('');
}

function renderTeam() {
    const html = TEAM.map(m => `
        <div class="team-member" data-id="${m.id}">
            <img src="${m.avatarUrl}" alt="${m.name}" class="avatar" />
            <h4>${m.name}</h4>
            <div class="role">${m.role}</div>
        </div>
    `).join('');
    teamGrid.innerHTML = html;
    footerTeam.innerHTML = TEAM.map(m => `<li data-id="${m.id}">${m.name} - ${m.role}</li>`).join('');
}

function renderProducts() {
    const query = state.searchQuery.toLowerCase().trim();
    let filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.category.includes(query)
    );

    switch (state.sortBy) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
        default: break;
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / state.pageSize);
    let page = state.currentPageProducts;
    if (page > totalPages) page = totalPages || 1;
    if (page < 1) page = 1;
    state.currentPageProducts = page;

    const start = (page - 1) * state.pageSize;
    const end = Math.min(start + state.pageSize, total);
    const pageItems = filtered.slice(start, end);

    if (total === 0) {
        productGrid.innerHTML = `<div class="cart-empty" style="grid-column:1/-1;"><i class="fas fa-search"></i><p>Không tìm thấy sản phẩm nào.</p></div>`;
    } else {
        productGrid.innerHTML = pageItems.map(p => `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img"><img src="${p.imageUrl}" alt="${p.name}" /></div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="price">${formatCurrency(p.price)}</div>
                    <div class="desc">${p.desc}</div>
                    <button class="btn-add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>
        `).join('');
    }

    let pagHtml = '';
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            pagHtml += `<button class="${i === page ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
    }
    pagination.innerHTML = pagHtml;
}

function renderDetail(productId) {
    const p = getProduct(productId);
    if (!p) {
        detailContent.innerHTML = '<p>Sản phẩm không tồn tại.</p>';
        return;
    }
    const related = PRODUCTS.filter(item => item.id !== p.id && item.category === p.category).slice(0, 4);
    detailContent.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-image"><img src="${p.imageUrl}" alt="${p.name}" /></div>
            <div class="detail-info">
                <h2>${p.name}</h2>
                <div class="price">${formatCurrency(p.price)}</div>
                <div class="desc">${p.desc}</div>
                <button class="btn btn-primary btn-add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
            </div>
        </div>
        ${related.length ? `
        <div class="related-products">
            <h3>Sản phẩm liên quan</h3>
            <div class="related-grid">
                ${related.map(r => `
                    <div class="product-card" data-id="${r.id}">
                        <div class="product-img"><img src="${r.imageUrl}" alt="${r.name}" /></div>
                        <div class="product-info">
                            <h4>${r.name}</h4>
                            <div class="price">${formatCurrency(r.price)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
    `;
}

function renderCart() {
    if (state.cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng của bạn đang trống.</p>
                <a href="products#                " data-page="products" class="btn btn-primary" style="margin-top:16px;">Mua sắm ngay</a>
            </div>
        `;
        return;
    }

    let html = `<div class="cart-items">`;
    let subtotal = 0;
    state.cart.forEach((item, index) => {
        const p = getProduct(item.productId);
        if (!p) return;
        const total = p.price * item.quantity;
        subtotal += total;
        html += `
            <div class="cart-item" data-index="${index}">
                <div class="item-img"><img src="${p.imageUrl}" alt="${p.name}" /></div>
                <div class="item-info">
                    <h4>${p.name}</h4>
                    <div class="price">${formatCurrency(p.price)}</div>
                </div>
                <div class="qty-control">
                    <button class="qty-dec" data-index="${index}">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-inc" data-index="${index}">+</button>
                </div>
                <div class="item-total">${formatCurrency(total)}</div>
                <button class="btn-remove" data-index="${index}" title="Xóa"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    });
    const vat = Math.round(subtotal * 0.05);
    const total = subtotal + vat;
    html += `</div>
        <div class="cart-summary">
            <div class="summary-row"><span>Tạm tính</span><span>${formatCurrency(subtotal)}</span></div>
            <div class="summary-row"><span>VAT (5%)</span><span>${formatCurrency(vat)}</span></div>
            <div class="summary-row total"><span>Tổng thanh toán</span><span>${formatCurrency(total)}</span></div>
            <button class="btn btn-success btn-block" id="checkoutBtn" style="margin-top:20px;"><i class="fas fa-credit-card"></i> Tiến hành thanh toán</button>
        </div>
    `;
    cartContent.innerHTML = html;
    updateCartBadge();
}

function renderCheckout() {
    if (state.cart.length === 0) {
        checkoutContent.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Giỏ hàng trống, không thể thanh toán.</p></div>`;
        return;
    }
    const subtotal = getCartTotal();
    const vat = Math.round(subtotal * 0.05);
    const total = subtotal + vat;
    const user = getCurrentUser();
    checkoutContent.innerHTML = `
        <div class="checkout-form">
            <div class="form-group">
                <label>Họ tên</label>
                <input type="text" id="checkoutName" value="${user ? user.name : ''}" placeholder="Họ tên" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="checkoutEmail" value="${user ? user.email : ''}" placeholder="Email" />
            </div>
            <div class="form-group">
                <label>Địa chỉ giao hàng</label>
                <input type="text" id="checkoutAddress" value="${user ? user.address || '' : ''}" placeholder="Số nhà, đường, thành phố" />
            </div>
            <div class="form-group">
                <label>Ghi chú (tùy chọn)</label>
                <textarea id="checkoutNote" rows="3" placeholder="Yêu cầu đặc biệt..."></textarea>
            </div>
            <div style="margin:16px 0; padding:12px 0; border-top:1px solid #f0e0db;">
                <div style="display:flex;justify-content:space-between;"><span>Tạm tính</span><span>${formatCurrency(subtotal)}</span></div>
                <div style="display:flex;justify-content:space-between;"><span>VAT (5%)</span><span>${formatCurrency(vat)}</span></div>
                <div style="display:flex;justify-content:space-between;font-size:22px;font-weight:700;color:#e8829a;margin-top:8px;padding-top:12px;border-top:2px solid #f5e8e4;">
                    <span>Tổng thanh toán</span><span>${formatCurrency(total)}</span>
                </div>
            </div>
            <button class="btn btn-success btn-block" id="confirmCheckoutBtn"><i class="fas fa-check-circle"></i> Xác nhận thanh toán</button>
        </div>
    `;
}

function renderAccount() {
    const user = getCurrentUser();
    if (!user) {
        accountContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-user-lock"></i>
                <p>Vui lòng đăng nhập để xem thông tin tài khoản.</p>
                <a href="#" data-page="login" class="btn btn-primary" style="margin-top:16px;">Đăng nhập</a>
            </div>
        `;
        return;
    }
    const avatar = user.avatar || 'https://i.pravatar.cc/150?img=5';
    accountContent.innerHTML = `
        <div class="account-card">
            <img src="${avatar}" alt="Avatar" class="account-avatar" id="accountAvatar" />
            <p style="color:#7a6a67;font-size:14px;cursor:pointer;margin-top:4px;" id="changeAvatarBtn"><i class="fas fa-camera"></i> Đổi ảnh đại diện</p>
            <h3>${user.name}</h3>
            <div class="account-email">${user.email}</div>
            <div class="account-info">
                <div class="info-row"><span class="label">Ngày sinh</span><span class="value">${user.dob || 'Chưa cập nhật'}</span></div>
                <div class="info-row"><span class="label">Địa chỉ</span><span class="value">${user.address || 'Chưa cập nhật'}</span></div>
                <div class="info-row"><span class="label">Ngày tham gia</span><span class="value">${new Date(user.createdAt).toLocaleDateString('vi-VN')}</span></div>
            </div>
        </div>
    `;
}

function updateCartBadge() {
    const count = getCartItemCount();
    cartBadge.textContent = count;
}

function updateUserUI() {
    const user = getCurrentUser();
    if (user) {
        userGreeting.textContent = `👋 ${user.name}`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        userGreeting.textContent = '';
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
}

// ============================================================
// EVENT HANDLERS (giữ nguyên logic, chỉ thay đổi render)
// ============================================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page === 'login') {
            if (getCurrentUser()) {
                showPage('account');
                renderAccount();
                return;
            }
        }
        if (page === 'account' && !getCurrentUser()) {
            showPage('login');
            return;
        }
        showPage(page);
        if (page === 'products') renderProducts();
        if (page === 'cart') renderCart();
        if (page === 'account') renderAccount();
        if (page === 'home') {
            renderFeatured();
            renderTeam();
        }
    });
});

logo.addEventListener('click', () => {
    showPage('home');
    renderFeatured();
    renderTeam();
});

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
});

switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
    loginError.textContent = '';
});
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
    registerError.textContent = '';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#loginEmail').value.trim();
    const password = $('#loginPassword').value.trim();
    const user = state.users.find(u => u.email === email && u.password === password);
    if (!user) {
        loginError.textContent = 'Email hoặc mật khẩu không đúng.';
        return;
    }
    state.currentUser = email;
    loginError.textContent = '';
    $('#loginEmail').value = '';
    $('#loginPassword').value = '';
    updateUserUI();
    showPage('home');
    renderFeatured();
    renderTeam();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#regName').value.trim();
    const email = $('#regEmail').value.trim();
    const password = $('#regPassword').value.trim();
    const dob = $('#regDob').value;
    const address = $('#regAddress').value.trim();

    if (password.length < 6) {
        registerError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
        return;
    }
    if (state.users.find(u => u.email === email)) {
        registerError.textContent = 'Email này đã được đăng ký.';
        return;
    }

    const newUser = {
        email,
        name,
        password,
        dob,
        address,
        avatar: 'https://i.pravatar.cc/150?img=5',
        createdAt: Date.now(),
    };
    state.users.push(newUser);
    saveUsers();
    registerError.textContent = '';
    $('#regName').value = '';
    $('#regEmail').value = '';
    $('#regPassword').value = '';
    $('#regDob').value = '';
    $('#regAddress').value = '';
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    state.currentUser = null;
    updateUserUI();
    showPage('home');
    renderFeatured();
    renderTeam();
});

document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card && !e.target.closest('.btn-add-cart')) {
        const id = parseInt(card.dataset.id);
        if (id) {
            state.selectedProductId = id;
            showPage('detail');
            renderDetail(id);
        }
    }
});

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-cart');
    if (btn) {
        const id = parseInt(btn.dataset.id);
        if (id) {
            const existing = state.cart.find(item => item.productId === id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cart.push({ productId: id, quantity: 1 });
            }
            saveCart();
            updateCartBadge();
            if (state.currentPage === 'detail') renderDetail(id);
            if (state.currentPage === 'cart') renderCart();
            btn.textContent = '✅ Đã thêm';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
            }, 800);
        }
    }
});

document.addEventListener('click', (e) => {
    const target = e.target;
    const index = target.dataset.index;
    if (index === undefined) return;

    const item = state.cart[parseInt(index)];
    if (!item) return;

    if (target.classList.contains('qty-inc')) {
        item.quantity += 1;
        saveCart();
        renderCart();
    } else if (target.classList.contains('qty-dec')) {
        if (item.quantity === 1) {
            if (confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                state.cart.splice(parseInt(index), 1);
                saveCart();
                renderCart();
            }
        } else {
            item.quantity -= 1;
            saveCart();
            renderCart();
        }
    } else if (target.classList.contains('btn-remove') || target.closest('.btn-remove')) {
        const btn = target.closest('.btn-remove');
        const idx = parseInt(btn.dataset.index);
        if (confirm('Xóa sản phẩm này khỏi giỏ hàng?')) {
            state.cart.splice(idx, 1);
            saveCart();
            renderCart();
        }
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'checkoutBtn') {
        if (state.cart.length === 0) return;
        showPage('checkout');
        renderCheckout();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'confirmCheckoutBtn') {
        const name = $('#checkoutName').value.trim();
        const email = $('#checkoutEmail').value.trim();
        const address = $('#checkoutAddress').value.trim();
        if (!name || !email || !address) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        alert(`🎉 Cảm ơn ${name}! Đơn hàng của bạn đã được đặt thành công.\nTổng thanh toán: ${formatCurrency(getCartTotal() + Math.round(getCartTotal()*0.05))}`);
        state.cart = [];
        saveCart();
        updateCartBadge();
        showPage('home');
        renderFeatured();
        renderTeam();
    }
});

backFromDetail.addEventListener('click', () => {
    showPage('products');
    renderProducts();
});

backFromCheckout.addEventListener('click', () => {
    showPage('cart');
    renderCart();
});

searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    state.currentPageProducts = 1;
    renderProducts();
});

sortSelect.addEventListener('change', () => {
    state.sortBy = sortSelect.value;
    state.currentPageProducts = 1;
    renderProducts();
});

document.addEventListener('click', (e) => {
    const btn = e.target.closest('#pagination button');
    if (btn) {
        const page = parseInt(btn.dataset.page);
        if (page) {
            state.currentPageProducts = page;
            renderProducts();
        }
    }
});

document.addEventListener('click', (e) => {
    const memberEl = e.target.closest('.team-member, #footerTeam li');
    if (memberEl) {
        const id = parseInt(memberEl.dataset.id);
        if (id) {
            const m = TEAM.find(t => t.id === id);
            if (m) {
                memberModalBody.innerHTML = `
                    <div style="text-align:center;">
                        <img src="${m.avatarUrl}" alt="${m.name}" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #f7a1b5;margin-bottom:12px;" />
                        <h3 style="font-size:24px;margin:12px 0 4px;">${m.name}</h3>
                        <p style="color:#e8829a;font-weight:600;font-size:16px;">${m.role}</p>
                        <p style="color:#5a4a47;margin-top:12px;font-size:15px;">${m.bio}</p>
                    </div>
                `;
                memberModal.classList.add('show');
            }
        }
    }
});

memberModalClose.addEventListener('click', () => {
    memberModal.classList.remove('show');
});
memberModal.addEventListener('click', (e) => {
    if (e.target === memberModal) memberModal.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'changeAvatarBtn' || e.target.closest('#changeAvatarBtn')) {
        const user = getCurrentUser();
        if (!user) return;
        avatarPreview.src = user.avatar || 'https://i.pravatar.cc/150?img=5';
        avatarUrlInput.value = '';
        avatarError.textContent = '';
        avatarModal.classList.add('show');
    }
});

saveAvatarBtn.addEventListener('click', () => {
    const url = avatarUrlInput.value.trim();
    if (!url) {
        avatarError.textContent = 'Vui lòng nhập URL ảnh.';
        return;
    }
    const user = getCurrentUser();
    if (!user) return;
    user.avatar = url;
    saveUsers();
    avatarModal.classList.remove('show');
    renderAccount();
    updateUserUI();
});

avatarModalClose.addEventListener('click', () => {
    avatarModal.classList.remove('show');
});
avatarModal.addEventListener('click', (e) => {
    if (e.target === avatarModal) avatarModal.classList.remove('show');
});

// ============================================================
// INIT
// ============================================================

function init() {
    loadCart();
    const savedUser = localStorage.getItem('kembao_current_user');
    if (savedUser) {
        const user = state.users.find(u => u.email === savedUser);
        if (user) {
            state.currentUser = savedUser;
        }
    }

    updateUserUI();
    updateCartBadge();
    showPage('home');
    renderFeatured();
    renderTeam();
    renderProducts();

    const origSaveUsers = saveUsers;
    saveUsers = function() {
        origSaveUsers();
        if (state.currentUser) {
            localStorage.setItem('kembao_current_user', state.currentUser);
        } else {
            localStorage.removeItem('kembao_current_user');
        }
    };
    const origUpdateUserUI = updateUserUI;
    updateUserUI = function() {
        origUpdateUserUI();
        if (state.currentUser) {
            localStorage.setItem('kembao_current_user', state.currentUser);
        } else {
            localStorage.removeItem('kembao_current_user');
        }
    };
    saveUsers();
}

const originalSaveUsers = saveUsers;
saveUsers = function() {
    originalSaveUsers();
    if (state.currentUser) {
        localStorage.setItem('kembao_current_user', state.currentUser);
    } else {
        localStorage.removeItem('kembao_current_user');
    }
};

init();