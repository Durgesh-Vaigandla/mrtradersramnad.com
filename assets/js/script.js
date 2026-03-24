document.addEventListener('DOMContentLoaded', () => {

    // Note: Navbar menu toggle and active scroll highlighting are handled inside the <site-navbar> component.

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Animated Counters ---
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const speed = 100; // Lower is faster

                const updateCount = () => {
                    const count = +counter.innerText.replace('+', '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                updateCount();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // --- Dynamic Open/Closed Status ---
    function updateStatus() {
        const dot = document.getElementById('statusDot');
        const text = document.getElementById('statusText');
        if (!dot || !text) return;

        // Current time (simulating local time for Ramanathapuram)
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour + minute / 60;

        const openTime = 8.5; // 8:30 AM
        const closeTime = 21.0; // 9:00 PM

        if (currentTime >= openTime && currentTime < closeTime) {
            dot.className = 'w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#2ecc71] transition-all duration-500';
            text.innerText = 'Open Now';
            text.className = 'text-green-600 font-bold uppercase tracking-wider';
        } else {
            dot.className = 'w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#e74c3c] transition-all duration-500';
            text.innerText = 'Closed Now';
            text.className = 'text-red-600 font-bold uppercase tracking-wider';
        }
    }
    updateStatus();
    setInterval(updateStatus, 60000);

    // --- Smooth Scroll for Links (if not handled by component) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Colour Collection Logic ---
    const colours = [
        { id: 1, name: "Regal Maroon", hex: "#800000", tags: ["trending", "dark", "interior"] },
        { id: 2, name: "Crimson Tide", hex: "#DC143C", tags: ["trending", "dark", "exterior"] },
        { id: 3, name: "Pearl White", hex: "#FDFDFD", tags: ["light", "interior"] },
        { id: 4, name: "Ivory Silk", hex: "#FFFFF0", tags: ["light", "interior"] },
        { id: 5, name: "Royal Gold", hex: "#FFD700", tags: ["trending", "interior"] },
        { id: 6, name: "Midnight Blue", hex: "#191970", tags: ["dark", "exterior"] },
        { id: 7, name: "Sky Breeze", hex: "#87CEEB", tags: ["light", "interior"] },
        { id: 8, name: "Forest Green", hex: "#228B22", tags: ["dark", "exterior"] },
        { id: 9, name: "Sandy Shore", hex: "#F4A460", tags: ["light", "exterior"] },
        { id: 10, name: "Terracotta", hex: "#E2725B", tags: ["trending", "exterior"] },
        { id: 11, name: "Soft Lilac", hex: "#E6E6FA", tags: ["light", "interior"] },
        { id: 12, name: "Slate Grey", hex: "#708090", tags: ["dark", "exterior"] },
        { id: 13, name: "Ocean Teal", hex: "#008080", tags: ["trending", "interior"] },
        { id: 14, name: "Warm Honey", hex: "#FFB000", tags: ["trending", "interior"] },
        { id: 15, name: "Cool Mint", hex: "#F5FFFA", tags: ["light", "interior"] },
        { id: 16, name: "Charcoal", hex: "#36454F", tags: ["dark", "exterior"] },
        { id: 17, name: "Dusty Rose", hex: "#DCAE96", tags: ["light", "interior"] },
        { id: 18, name: "Azure Mist", hex: "#F0FFFF", tags: ["light", "interior"] },
        { id: 19, name: "Burgundy", hex: "#800020", tags: ["dark", "interior"] },
        { id: 20, name: "Ochre Earth", hex: "#CC7722", tags: ["trending", "exterior"] },
        { id: 21, name: "Olive Grove", hex: "#808000", tags: ["dark", "exterior"] },
        { id: 22, name: "Beige Bliss", hex: "#F5F5DC", tags: ["light", "interior"] },
        { id: 23, name: "Plum Deep", hex: "#673147", tags: ["dark", "interior"] },
        { id: 24, name: "Coral Spark", hex: "#FF7F50", tags: ["trending", "interior"] },
        { id: 25, name: "Mist Grey", hex: "#DCDCDC", tags: ["light", "interior"] },
        { id: 26, name: "Deep Navy", hex: "#000080", tags: ["dark", "exterior"] },
        { id: 27, name: "Apricot", hex: "#FBCEB1", tags: ["light", "interior"] },
        { id: 28, name: "Sage", hex: "#BCB88A", tags: ["light", "exterior"] },
        { id: 29, name: "Espresso", hex: "#3E2723", tags: ["dark", "interior"] },
        { id: 30, name: "Turquoise", hex: "#40E0D0", tags: ["trending", "interior"] },
        { id: 31, name: "Garnet Red", hex: "#730800", tags: ["dark", "interior"] },
        { id: 32, name: "Salmon", hex: "#FA8072", tags: ["trending", "interior"] },
        { id: 33, name: "Lavender", hex: "#967BB6", tags: ["light", "interior"] },
        { id: 34, name: "Pine", hex: "#01796F", tags: ["dark", "exterior"] },
        { id: 35, name: "Cream", hex: "#FFFDD0", tags: ["light", "interior"] },
        { id: 36, name: "Saffron", hex: "#F4C430", tags: ["trending", "interior"] },
        { id: 37, name: "Mauve", hex: "#E0B0FF", tags: ["light", "interior"] },
        { id: 38, name: "Rust", hex: "#B7410E", tags: ["dark", "exterior"] },
        { id: 39, name: "Vanilla", hex: "#F3E5AB", tags: ["light", "interior"] },
        { id: 40, name: "Cobalt", hex: "#0047AB", tags: ["trending", "exterior"] },
    ];

    let userPalette = [];
    const colourGrid = document.getElementById('colourGrid');
    const colourSearch = document.getElementById('colourSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const paletteList = document.getElementById('paletteList');
    const clearPaletteBtn = document.getElementById('clearPalette');
    const modal = document.getElementById('colourModal');
    const modalContent = modal ? modal.querySelector('div') : null;
    const closeModal = document.querySelector('.close-modal');
    let activeColour = null;

    // Render Colour Grid
    function renderColours(filter = 'all', search = '') {
        if (!colourGrid) return;
        colourGrid.innerHTML = '';
        const filteredColours = colours.filter(c => {
            const matchesFilter = filter === 'all' || c.tags.includes(filter);
            const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        filteredColours.forEach(c => {
            const card = document.createElement('div');
            card.className = 'group cursor-pointer';
            card.innerHTML = `
                <div class="swatch-chip aspect-square rounded-2xl mb-4 transition-transform duration-500 group-hover:-translate-y-2 border-[6px] border-white shadow-lg overflow-hidden" 
                     style="background-color: ${c.hex}"></div>
                <div class="flex justify-between items-start group">
                    <div>
                        <h4 class="font-bold text-on-background group-hover:text-maroon transition-colors text-sm">${c.name}</h4>
                        <p class="text-[10px] text-secondary font-mono tracking-widest opacity-60">${c.hex}</p>
                    </div>
                    <span class="material-symbols-outlined text-[#dcc0bf] hover:text-maroon transition-colors text-lg" 
                          style="font-variation-settings: 'FILL' ${userPalette.find(p => p.id === c.id) ? '1' : '0'};">
                        favorite
                    </span>
                </div>
            `;
            card.addEventListener('click', () => openModal(c));
            colourGrid.appendChild(card);
        });
    }

    // Modal Logic
    function openModal(colour) {
        activeColour = colour;
        document.getElementById('modalPreview').style.backgroundColor = colour.hex;
        document.getElementById('modalName').innerText = colour.name;
        document.getElementById('modalHex').innerText = colour.hex;
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.querySelector('div').classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeColourModal() {
        if (!modal) return;
        const modalDiv = modal.querySelector('div');
        if (modalDiv) modalDiv.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = 'auto';
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeColourModal);
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeColourModal();
            }
        });
    }

    // Palette Management
    function updatePaletteUI() {
        if (!paletteList) return;
        paletteList.innerHTML = '';

        // Update Counter
        const counter = document.getElementById('paletteCount');
        if (counter) counter.innerText = userPalette.length;

        if (userPalette.length === 0) {
            paletteList.innerHTML = '<p class="text-secondary/50 text-center py-10 font-medium italic">No colors selected yet.</p>';
            return;
        }

        userPalette.forEach((c, index) => {
            const item = document.createElement('div');
            item.className = 'flex items-center space-x-4 p-4 bg-white/40 group rounded-xl transition-all hover:bg-white animate-[slideIn_0.3s_ease-out] shadow-sm hover:shadow';
            item.innerHTML = `
                <div class="w-12 h-12 rounded-lg flex-shrink-0 shadow-sm border border-white/50" style="background-color: ${c.hex}"></div>
                <div class="flex-grow">
                    <p class="font-bold text-xs text-on-background">${c.name}</p>
                    <p class="text-[9px] text-maroon font-mono uppercase tracking-widest">${c.hex}</p>
                </div>
                <button class="material-symbols-outlined text-[#dcc0bf] hover:text-red-600 transition-all opacity-0 group-hover:opacity-100 p-1" onclick="removeFromPalette(${index})">
                    close
                </button>
            `;
            paletteList.appendChild(item);
        });
        
        // Re-render grid to update heart icons
        renderColours(document.querySelector('.filter-btn.active-filter')?.dataset.filter || 'all', colourSearch.value);
    }

    window.addToPalette = (colour) => {
        if (!userPalette.find(c => c.id === colour.id)) {
            userPalette.push(colour);
            updatePaletteUI();
            savePalette();
        }
    };

    window.removeFromPalette = (index) => {
        userPalette.splice(index, 1);
        updatePaletteUI();
        savePalette();
    };

    if (clearPaletteBtn) {
        clearPaletteBtn.addEventListener('click', () => {
            userPalette = [];
            updatePaletteUI();
            savePalette();
        });
    }

    const addToPaletteModalBtn = document.getElementById('addToPaletteModal');
    if (addToPaletteModalBtn) {
        addToPaletteModalBtn.addEventListener('click', () => {
            if (activeColour) {
                addToPalette(activeColour);
                closeColourModal();
            }
        });
    }

    // --- Export Logic ---
    const downloadPaletteBtn = document.getElementById('downloadPalette');
    const pdfLogo = document.getElementById('pdfLogo');

    if (pdfLogo) {
        pdfLogo.src = 'assets/images/logo.png';
    }

    function prepareTemplate() {
        const template = document.getElementById('pdfTemplate');
        const grid = document.getElementById('pdfPaletteGrid');
        const dateSpan = document.getElementById('pdfDate');

        dateSpan.innerText = new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        grid.innerHTML = '';
        userPalette.forEach(c => {
            const item = document.createElement('div');
            item.className = 'flex items-center gap-6 p-6 border border-gray-100 rounded-xl bg-white shadow-sm';
            item.innerHTML = `
                <div class="w-20 h-20 rounded-lg border border-gray-200" style="background-color: ${c.hex}; -webkit-print-color-adjust: exact;"></div>
                <div>
                    <h4 class="text-lg font-bold text-gray-900 mb-1">${c.name}</h4>
                    <p class="text-maroon-800 font-mono font-bold tracking-wider">${c.hex}</p>
                </div>
            `;
            grid.appendChild(item);
        });

        return template;
    }

    if (downloadPaletteBtn) {
        downloadPaletteBtn.addEventListener('click', () => {
            if (userPalette.length === 0) {
                alert('Your palette is empty! Add some colours first.');
                return;
            }
            prepareTemplate();
            window.print();
        });
    }

    // Filtering and Search Logic
    if (colourSearch) {
        colourSearch.addEventListener('input', (e) => {
            const activeFilterElement = document.querySelector('.filter-btn.active-filter') || document.querySelector('.filter-btn.active');
            const activeFilter = activeFilterElement ? activeFilterElement.dataset.filter : 'all';
            renderColours(activeFilter, e.target.value);
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Handle both old and new layouts
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'active-filter');
                    const indicator = b.querySelector('.indicator');
                    if (indicator) {
                        indicator.className = 'indicator w-2 h-2 rounded-full bg-outline-variant';
                    }
                });
                
                btn.classList.add(btn.dataset.filter === 'all' ? 'active' : 'active-filter');
                if (btn.classList.contains('active-filter')) {
                    btn.classList.add('active-filter');
                    const indicator = btn.querySelector('.indicator');
                    if (indicator) {
                        indicator.className = 'indicator w-2 h-2 rounded-full bg-primary-container';
                    }
                }
                
                renderColours(btn.dataset.filter, colourSearch ? colourSearch.value : '');
            });
        });
    }

    function savePalette() {
        localStorage.setItem('mrtraders_palette', JSON.stringify(userPalette));
    }

    function loadPalette() {
        const saved = localStorage.getItem('mrtraders_palette');
        if (saved) {
            userPalette = JSON.parse(saved);
            updatePaletteUI();
        }
    }

    loadPalette();
    renderColours();
});
