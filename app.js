// ==========================================
// IBRA DAHABIA - INTERACTIVE FUNCTIONALITY
// ==========================================

// Translations Database
const translations = {
    fr: {
        // Meta & Title
        title: "Ibra Dahabia | L'Excellence de la Broderie à Meknès",

        // Brand
        brandName: "Ibra Dahabia",
        brandSubtitle: "الإبرة الذهبية",

        // Navigation
        navHome: "Accueil",
        navGallery: "Galerie",
        navAbout: "À propos",
        navContact: "Contact",

        // Hero Section
        heroTitle: "L'Excellence de la Broderie à Meknès",
        heroSubtitle: "Découvrez l'art ancestral de la broderie marocaine, fait main avec passion",
        heroButton: "Découvrir nos créations",

        // Gallery Section
        galleryTitle: "Notre Galerie",
        gallerySubtitle: "Explorez notre collection de broderies artisanales",
        filterAll: "Tout",
        filterTarz: "Tarz Fassi",
        filterCroix: "Point de Croix",
        filterFloral: "Motifs Floraux",

        // Gallery Items
        itemTarzFassi1: "Tarz Fassi Traditionnel",
        itemTarzFassi1Desc: "Broderie marron sur tissu beige",
        itemTarzFassi2: "Tarz Fassi Élégant",
        itemTarzFassi2Desc: "Motifs géométriques raffinés",
        itemCroix1: "Point de Croix Étoilé",
        itemCroix1Desc: "Vert et jaune harmonieux",
        itemCroix2: "Point de Croix Délicat",
        itemCroix2Desc: "Travail minutieux",
        itemFloral1: "Fleurs Écarlates",
        itemFloral1Desc: "Rouge vibrant et élégant",
        itemFloral2: "Jardin Violet",
        itemFloral2Desc: "Nuances de pourpre",

        // About Section
        aboutTitle: "L'Art de l'Aiguille d'Or",
        aboutText: `<p>Bienvenue à <strong>Ibra Dahabia</strong>, la coopérative artisanale qui perpétue la tradition séculaire de la broderie marocaine à Meknès.</p>
                   <p>Chaque pièce est le fruit d'un travail manuel méticuleux, où chaque fil est posé avec passion et précision. Nos artisanes maîtrisent l'art ancestral du Tarz Fassi, du Point de Croix et des motifs floraux qui font la renommée de l'artisanat marocain.</p>
                   <p>Plus qu'une simple broderie, c'est un héritage culturel que nous transmettons à travers chaque création, combinant authenticité traditionnelle et raffinement contemporain.</p>`,
        featureHandmade: "100% Fait Main",
        featureQuality: "Qualité Premium",
        featureTradition: "Tradition Authentique",

        // Contact Section
        contactTitle: "Contactez-nous",
        contactSubtitle: "Nous sommes à votre écoute",
        contactAddress: "Adresse",
        contactEmail: "Email",
        contactHours: "Horaires",
        contactHoursText: "Lundi - Samedi: 9h - 18h",

        // Footer
        footerTagline: "L'excellence de la broderie marocaine",
        footerRights: "Tous droits réservés."
    },

    ar: {
        // Meta & Title
        title: "إبرة الذهبية | التميز في التطريز بمكناس",

        // Brand
        brandName: "إبرة الذهبية",
        brandSubtitle: "Ibra Dahabia",

        // Navigation
        navHome: "الرئيسية",
        navGallery: "المعرض",
        navAbout: "من نحن",
        navContact: "اتصل بنا",

        // Hero Section
        heroTitle: "التميز في التطريز بمكناس",
        heroSubtitle: "اكتشف فن التطريز المغربي التقليدي، مصنوع يدوياً بشغف",
        heroButton: "اكتشف إبداعاتنا",

        // Gallery Section
        galleryTitle: "معرضنا",
        gallerySubtitle: "استكشف مجموعتنا من التطريز الحرفي",
        filterAll: "الكل",
        filterTarz: "طرز فاسي",
        filterCroix: "غرزة الصليب",
        filterFloral: "نقوش زهرية",

        // Gallery Items
        itemTarzFassi1: "طرز فاسي تقليدي",
        itemTarzFassi1Desc: "تطريز بني على قماش بيج",
        itemTarzFassi2: "طرز فاسي أنيق",
        itemTarzFassi2Desc: "أنماط هندسية راقية",
        itemCroix1: "غرزة الصليب النجمية",
        itemCroix1Desc: "أخضر وأصفر متناسقان",
        itemCroix2: "غرزة الصليب الدقيقة",
        itemCroix2Desc: "عمل دقيق",
        itemFloral1: "زهور قرمزية",
        itemFloral1Desc: "أحمر نابض بالحياة وأنيق",
        itemFloral2: "حديقة بنفسجية",
        itemFloral2Desc: "درجات البنفسجي",

        // About Section
        aboutTitle: "فن الإبرة الذهبية",
        aboutText: `<p>مرحباً بكم في <strong>إبرة الذهبية</strong>، التعاونية الحرفية التي تواصل تقليد التطريز المغربي العريق في مكناس.</p>
                   <p>كل قطعة هي ثمرة عمل يدوي دقيق، حيث يتم وضع كل خيط بشغف ودقة. تتقن حرفياتنا الفن التقليدي للطرز الفاسي وغرزة الصليب والأنماط الزهرية التي تشتهر بها الحرف اليدوية المغربية.</p>
                   <p>أكثر من مجرد تطريز، إنه إرث ثقافي ننقله من خلال كل إبداع، يجمع بين الأصالة التقليدية والرقي المعاصر.</p>`,
        featureHandmade: "100٪ يدوي الصنع",
        featureQuality: "جودة عالية",
        featureTradition: "تقليد أصيل",

        // Contact Section
        contactTitle: "اتصل بنا",
        contactSubtitle: "نحن في خدمتكم",
        contactAddress: "العنوان",
        contactEmail: "البريد الإلكتروني",
        contactHours: "أوقات العمل",
        contactHoursText: "الإثنين - السبت: 9 صباحاً - 6 مساءً",

        // Footer
        footerTagline: "التميز في التطريز المغربي",
        footerRights: "جميع الحقوق محفوظة."
    },

    en: {
        // Meta & Title
        title: "Ibra Dahabia | Excellence in Embroidery in Meknes",

        // Brand
        brandName: "Ibra Dahabia",
        brandSubtitle: "The Golden Needle",

        // Navigation
        navHome: "Home",
        navGallery: "Gallery",
        navAbout: "About",
        navContact: "Contact",

        // Hero Section
        heroTitle: "Excellence in Embroidery in Meknes",
        heroSubtitle: "Discover the ancestral art of Moroccan embroidery, handmade with passion",
        heroButton: "Discover our creations",

        // Gallery Section
        galleryTitle: "Our Gallery",
        gallerySubtitle: "Explore our collection of artisanal embroideries",
        filterAll: "All",
        filterTarz: "Tarz Fassi",
        filterCroix: "Cross Stitch",
        filterFloral: "Floral Patterns",

        // Gallery Items
        itemTarzFassi1: "Traditional Tarz Fassi",
        itemTarzFassi1Desc: "Brown embroidery on beige fabric",
        itemTarzFassi2: "Elegant Tarz Fassi",
        itemTarzFassi2Desc: "Refined geometric patterns",
        itemCroix1: "Star Cross Stitch",
        itemCroix1Desc: "Harmonious green and yellow",
        itemCroix2: "Delicate Cross Stitch",
        itemCroix2Desc: "Meticulous work",
        itemFloral1: "Scarlet Flowers",
        itemFloral1Desc: "Vibrant and elegant red",
        itemFloral2: "Violet Garden",
        itemFloral2Desc: "Shades of purple",

        // About Section
        aboutTitle: "The Art of the Golden Needle",
        aboutText: `<p>Welcome to <strong>Ibra Dahabia</strong>, the artisan cooperative that perpetuates the centuries-old tradition of Moroccan embroidery in Meknes.</p>
                   <p>Each piece is the result of meticulous manual work, where each thread is laid with passion and precision. Our artisans master the ancestral art of Tarz Fassi, Cross Stitch and floral patterns that make Moroccan craftsmanship famous.</p>
                   <p>More than just embroidery, it is a cultural heritage that we transmit through each creation, combining traditional authenticity and contemporary refinement.</p>`,
        featureHandmade: "100% Handmade",
        featureQuality: "Premium Quality",
        featureTradition: "Authentic Tradition",

        // Contact Section
        contactTitle: "Contact Us",
        contactSubtitle: "We are here for you",
        contactAddress: "Address",
        contactEmail: "Email",
        contactHours: "Hours",
        contactHoursText: "Monday - Saturday: 9am - 6pm",

        // Footer
        footerTagline: "Excellence in Moroccan embroidery",
        footerRights: "All rights reserved."
    }
};

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================

let currentLanguage = 'fr';

// Change Language Function
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else if (element.classList.contains('about-description')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang-btn="${lang}"]`).classList.add('active');

    // Save preference
    localStorage.setItem('ibraDahabiaLang', lang);

    // Smooth transition effect
    document.body.style.opacity = '0.95';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

// Load saved language or detect browser language
function initLanguage() {
    const savedLang = localStorage.getItem('ibraDahabiaLang');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            changeLanguage(browserLang);
            const navMenu = document.getElementById('navMenu');

            navToggle?.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close menu on link click
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Sticky Header on Scroll
            const header = document.getElementById('header');
            let lastScroll = 0;

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {
                    header.style.boxShadow = '0 4px 30px rgba(62, 39, 35, 0.15)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.boxShadow = '0 2px 20px rgba(62, 39, 35, 0.1)';
                    header.style.padding = '1rem 0';
                }

                lastScroll = currentScroll;
            });

            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // ==========================================
            // GALLERY FILTERS
            // ==========================================

            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');

            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button
                    filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filter = btn.getAttribute('data-filter');

                    // Filter items with animation
                    galleryItems.forEach((item, index) => {
                        const category = item.getAttribute('data-category');

                        if (filter === 'all' || category === filter) {
                            setTimeout(() => {
                                item.style.display = 'block';
                                item.style.animation = 'fadeInUp 0.5s ease forwards';
                            }, index * 50);
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // ==========================================
            // LIGHTBOX GALLERY
            // ==========================================

            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');
            let currentImageIndex = 0;

            // Gallery images data
            const galleryImages = Array.from(galleryItems).map(item => {
                const img = item.querySelector('img');
                const title = item.querySelector('.gallery-overlay h3');
                return {
                    src: img.src,
                    alt: img.alt,
                    title: title ? title.textContent : ''
                };
            });

            // Open Lightbox
            function openLightbox(index) {
                currentImageIndex = index;
                updateLightboxImage();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Close Lightbox
            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Navigate Lightbox
            function navigateLightbox(direction) {
                currentImageIndex += direction;

                // Loop around
                if (currentImageIndex < 0) {
                    currentImageIndex = galleryImages.length - 1;
                } else if (currentImageIndex >= galleryImages.length) {
                    currentImageIndex = 0;
                }

                updateLightboxImage();
            }

            // Update Lightbox Image
            function updateLightboxImage() {
                const image = galleryImages[currentImageIndex];
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightboxCaption.textContent = image.title;

                // Fade animation
                lightboxImage.style.opacity = '0';
                setTimeout(() => {
                    lightboxImage.style.opacity = '1';
                }, 100);
            }

            // Keyboard Navigation
            document.addEventListener('keydown', (e) => {
                if (lightbox.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        closeLightbox();
                    } else if (e.key === 'ArrowLeft') {
                        navigateLightbox(-1);
                    } else if (e.key === 'ArrowRight') {
                        navigateLightbox(1);
                    }
                }
            });

            // Click outside to close
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // ==========================================
            // SCROLL ANIMATIONS
            // ==========================================

            // Intersection Observer for fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe gallery items
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });

            // Observe feature items
            document.querySelectorAll('.feature-item').forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });

            console.log('%cBienvenue sur notre site artisanal!', 'color: #5D4037; font-size: 14px;');
        });

        // ==========================================
        // PERFORMANCE OPTIMIZATION
        // ==========================================

        // Lazy load images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }

        // Smooth scroll polyfill check
        if (!('scrollBehavior' in document.documentElement.style)) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js';
            document.body.appendChild(script);
        }
