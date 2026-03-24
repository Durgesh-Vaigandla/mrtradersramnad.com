class SiteNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="fixed top-0 left-0 w-full z-[1000] transition-all duration-300">
            <!-- Top Utility Bar -->
            <div class="hidden lg:block bg-[#410007] text-white py-2 px-12 text-[11px] font-bold tracking-widest relative z-[1001]">
                <div class="container mx-auto flex justify-between items-center h-8">
                    <div class="flex gap-10">
                        <a href="tel:+919940839999" class="flex items-center gap-2.5 hover:text-outline-variant transition-colors">
                            <i class="fas fa-phone-alt opacity-70 scale-90"></i>
                            <span>+91 99408 39999</span>
                        </a>
                        <a href="mailto:mrtradersrmd@gmail.com" class="flex items-center gap-2.5 hover:text-outline-variant transition-colors uppercase tracking-[0.2em]">
                            <i class="fas fa-envelope opacity-70 scale-90"></i>
                            <span>mrtradersrmd@gmail.com</span>
                        </a>
                    </div>
                    <div class="flex gap-6 items-center">
                        <div class="flex items-center gap-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/5">
                            <button onclick="translatePage('en')" class="hover:opacity-60 transition-opacity uppercase text-[9px] tracking-widest flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> English
                            </button>
                            <span class="w-px h-3 bg-white/20"></span>
                            <button onclick="translatePage('ta')" class="hover:opacity-60 transition-opacity uppercase text-[9px] tracking-widest flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span> தமிழ்
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Navbar -->
            <div class="bg-[#fcf9f5]/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(65,0,7,0.06)] border-b border-maroon/5">
                <div class="container mx-auto px-4 md:px-6">
                    <nav class="flex justify-between items-center h-20">
                        <div class="flex items-center gap-3">
                            <img src="assets/images/logo.png" alt="MR TRADERS Logo" class="h-10 w-auto object-contain">
                            <div class="flex flex-col">
                                <h2 class="m-0 text-lg md:text-xl font-bold tracking-tighter text-[#630d16] font-headline uppercase italic leading-none">MR TRADERS</h2>
                                <span class="text-[7px] md:text-[8px] font-bold text-maroon opacity-60 tracking-[0.3em] uppercase hidden sm:block">Since 1994</span>
                            </div>
                        </div>
                        
                        <ul class="hidden xl:flex items-center gap-8 text-gray-700 font-bold uppercase tracking-widest text-[10px]" id="navLinks">
                            <li><a href="index.html" class="hover:text-maroon transition-all py-4">Home</a></li>
                            <li><a href="about.html" class="hover:text-maroon transition-all py-4">About Us</a></li>
                            <li><a href="services.html" class="hover:text-maroon transition-all py-4 block">Services</a></li>
                            <li><a href="palette.html" class="hover:text-maroon transition-all py-4">Colour Palette</a></li>
                            <li><a href="products.html" class="hover:text-maroon transition-all py-4">Products</a></li>
                            <li><a href="contact.html" class="hover:text-maroon transition-all py-4">Contact Us</a></li>
                        </ul>

                        <div class="hidden xl:block">
                            <a href="contact.html" class="bg-maroon text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-primary-container transition-all hover:scale-105 active:scale-95 inline-block">Get a Free Quote</a>
                        </div>
                        
                        <button class="xl:hidden flex flex-col gap-1.5 cursor-pointer p-2" id="hamburger" aria-label="Menu">
                            <span class="w-7 h-0.5 bg-maroon transition-all duration-300"></span>
                            <span class="w-7 h-0.5 bg-maroon transition-all duration-300"></span>
                            <span class="w-7 h-0.5 bg-maroon transition-all duration-300"></span>
                        </button>
                    </nav>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobileMenu" class="xl:hidden hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-2xl overflow-hidden transition-all duration-300">
                    <ul class="flex flex-col p-8 gap-4 text-gray-700 font-bold text-xs uppercase tracking-widest text-center">
                        <li><a href="index.html" class="block hover:text-maroon py-3">Home</a></li>
                        <li><a href="about.html" class="block hover:text-maroon py-3">About Us</a></li>
                        <li><a href="services.html" class="block hover:text-maroon py-3">Services</a></li>
                        <li><a href="palette.html" class="block hover:text-maroon py-3">Colour Palette</a></li>
                        <li><a href="products.html" class="block hover:text-maroon py-3">Products</a></li>
                        <li><a href="contact.html" class="block hover:text-maroon py-3">Contact Us</a></li>
                        <li class="pt-4"><a href="contact.html" class="block bg-maroon text-white py-4 rounded-xl shadow-lg font-bold">Get a Free Quote</a></li>
                    </ul>
                </div>
            </div>
        </header>
        `;

        this.initMenu();
        this.initActiveLinks();
    }

    initMenu() {
        const hamburger = this.querySelector('#hamburger');
        const mobileMenu = this.querySelector('#mobileMenu');
        const spans = hamburger.querySelectorAll('span');

        hamburger.addEventListener('click', () => {
            const isExpanded = !mobileMenu.classList.contains('hidden');
            
            if (isExpanded) {
                mobileMenu.classList.add('hidden');
                spans[0].classList.remove('rotate-45', 'translate-y-2');
                spans[1].classList.remove('opacity-0');
                spans[2].classList.remove('-rotate-45', '-translate-y-2');
            } else {
                mobileMenu.classList.remove('hidden');
                spans[0].classList.add('rotate-45', 'translate-y-2');
                spans[1].classList.add('opacity-0');
                spans[2].classList.add('-rotate-45', '-translate-y-2');
            }
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                spans[0].classList.remove('rotate-45', 'translate-y-2');
                spans[1].classList.remove('opacity-0');
                spans[2].classList.remove('-rotate-45', '-translate-y-2');
            });
        });
    }

    initActiveLinks() {
        const navLinks = this.querySelectorAll('ul li a');
        const currentPath = window.location.pathname;
        const page = currentPath.split("/").pop() || "index.html";

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === page || (page === "" && href === "index.html")) {
                link.classList.add('text-maroon-700', 'font-bold');
                if (link.closest('ul').classList.contains('hidden')) {
                   // Mobile menu link
                   link.classList.add('text-maroon-600');
                } else {
                   link.classList.add('text-maroon-700');
                }
            } else {
                link.classList.remove('text-maroon-700', 'font-bold', 'text-maroon-600');
            }
        });

        // Still keep scroll spy for sections on the landing page if on index.html
        if (page === "index.html" || page === "") {
            const sections = document.querySelectorAll('section[id]');
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#' + current || (current === 'home' && href === 'index.html')) {
                         link.classList.add('text-maroon-700', 'font-bold');
                    }
                });
            });
        }
    }
}

class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-[#630d16] text-[#fcf9f5] pt-16 pb-8 font-body">
            <div class="container mx-auto px-4 md:px-8 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <!-- Brand & Quote -->
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <img src="assets/images/logo.png" alt="MR TRADERS Logo" class="h-14 w-auto object-contain brightness-0 invert">
                            <h2 class="text-3xl font-headline tracking-tighter uppercase italic text-white">MR TRADERS</h2>
                        </div>
                        <p class="text-sm leading-relaxed opacity-80 max-w-xs">
                            Elevating surfaces through heritage artistry and modern precision since 1994. 
                            The Curated Atelier for architectural finishes.
                        </p>
                    </div>

                    <!-- Services -->
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-70">Services</h3>
                        <ul class="flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase">
                            <li><a href="services.html" class="hover:opacity-60 transition-opacity">Expert Services</a></li>
                            <li><a href="products.html" class="hover:opacity-60 transition-opacity">Product Catalog</a></li>
                            <li><a href="palette.html" class="hover:opacity-60 transition-opacity">Color Palette</a></li>
                            <li><a href="contact.html" class="hover:opacity-60 transition-opacity">Consultation</a></li>
                        </ul>
                    </div>

                    <!-- Atelier -->
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-70">Atelier</h3>
                        <ul class="flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase">
                            <li><a href="palette.html" class="hover:opacity-60 transition-opacity">Our Palette</a></li>
                            <li><a href="projects.html" class="hover:opacity-60 transition-opacity">Recent Projects</a></li>
                            <li><a href="careers.html" class="hover:opacity-60 transition-opacity">Careers</a></li>
                            <li><a href="privacy-policy.html" class="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-70">Contact</h3>
                        <div class="flex flex-col gap-4 text-xs font-semibold tracking-widest lowercase">
                            <p class="flex items-center gap-3">
                                <i class="fas fa-envelope text-white/50 lowercase"></i>
                                <a href="mailto:mrtradersrmd@gmail.com" class="hover:opacity-60 transition-opacity">mrtradersrmd@gmail.com</a>
                            </p>
                            <p class="flex items-center gap-3">
                                <i class="fas fa-phone text-white/50 uppercase"></i>
                                <a href="tel:9940839999" class="hover:opacity-60 transition-opacity uppercase">99408 39999</a>
                            </p>
                            <p class="flex items-center gap-3 normal-case font-normal opacity-80 leading-relaxed">
                                <i class="fas fa-map-marker-alt text-white/50 mr-1"></i>
                                Railway Feeder Road, Ramanathapuram
                            </p>
                            
                            <div class="flex gap-6 mt-4 text-lg items-center">
                                <a href="#" class="hover:opacity-60 transition-opacity">
                                    <i class="fas fa-globe"></i>
                                </a>
                                <a href="#" class="hover:opacity-60 transition-opacity">
                                    <i class="fas fa-paint-brush"></i>
                                </a>
                                <a href="#" class="hover:opacity-60 transition-opacity">
                                    <i class="fas fa-palette"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-10 border-t border-white/10 text-center">
                    <p class="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
                        &copy; 2024 MR TRADERS. THE CURATED ATELIER.
                    </p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
