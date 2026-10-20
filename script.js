// Initialize Lucide Icons
if (window.lucide) {
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    // Refresh Lucide Icons on load
    if (window.lucide) {
        lucide.createIcons();
    }

    // =========================================================================
    // 1. Mobile Drawer Navigation Toggle
    // =========================================================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-social-chip');

    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            const icon = mobileMenuToggle.querySelector('svg, i');
            if (icon && window.lucide) {
                mobileMenuToggle.innerHTML = isOpen 
                    ? '<i data-lucide="x"></i>' 
                    : '<i data-lucide="menu"></i>';
                lucide.createIcons();
            }
        });

        // Close drawer when any mobile link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                if (mobileMenuToggle) {
                    mobileMenuToggle.innerHTML = '<i data-lucide="menu"></i>';
                    if (window.lucide) lucide.createIcons();
                }
            });
        });

        // Close drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('open') && 
                !mobileDrawer.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                mobileDrawer.classList.remove('open');
                mobileMenuToggle.innerHTML = '<i data-lucide="menu"></i>';
                if (window.lucide) lucide.createIcons();
            }
        });
    }

    // =========================================================================
    // 2. Smooth Scroll for "Sobre Mim" and Hero Brand
    // =========================================================================
    document.querySelectorAll('a[href="#hero"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // =========================================================================
    // 3. Projects Horizontal Carousel (Sphere "OMG UK" Peek Preview)
    // =========================================================================
    const carouselTrack = document.getElementById('projectsCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const currentCounter = document.getElementById('carouselCurrent');
    const totalCounter = document.getElementById('carouselTotal');
    const dots = document.querySelectorAll('.carousel-dot');
    const cards = document.querySelectorAll('.case-study-card-carousel');

    if (carouselTrack && cards.length > 0) {
        if (totalCounter) {
            totalCounter.textContent = String(cards.length).padStart(2, '0');
        }

        const getCardWidthWithGap = () => {
            if (cards.length === 0) return 300;
            const firstCard = cards[0];
            const nextCard = cards[1];
            if (nextCard) {
                return nextCard.offsetLeft - firstCard.offsetLeft;
            }
            return firstCard.offsetWidth + 24;
        };

        const updateActiveCardState = () => {
            const scrollLeft = carouselTrack.scrollLeft;
            const step = getCardWidthWithGap();
            const activeIndex = Math.min(
                cards.length - 1, 
                Math.max(0, Math.round(scrollLeft / step))
            );

            // Update counter
            if (currentCounter) {
                currentCounter.textContent = String(activeIndex + 1).padStart(2, '0');
            }

            // Update dots
            dots.forEach((dot, idx) => {
                if (idx === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        // Scroll Next
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const step = getCardWidthWithGap();
                carouselTrack.scrollBy({ left: step, behavior: 'smooth' });
            });
        }

        // Scroll Prev
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const step = getCardWidthWithGap();
                carouselTrack.scrollBy({ left: -step, behavior: 'smooth' });
            });
        }

        // Dot click navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const step = getCardWidthWithGap();
                carouselTrack.scrollTo({
                    left: step * index,
                    behavior: 'smooth'
                });
            });
        });

        // Listen for scroll on track to update active dot & counter
        let scrollTimeout;
        carouselTrack.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateActiveCardState, 60);
        });
    }

    // =========================================================================
    // 4. Tech Category Filter (Sphere "Industries" inspired)
    // =========================================================================
    const filterButtons = document.querySelectorAll('.filter-pill');
    const techCards = document.querySelectorAll('.tech-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            techCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const categories = category.split(' ');

                if (filterValue === 'all' || category === filterValue || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // =========================================================================
    // 5. Interactive Spotlight & Subtle 3D Tilt for Carousel Cards
    // =========================================================================
    const tiltCards = document.querySelectorAll('.case-study-card-carousel');

    const handleMouseMove = (e) => {
        if (window.innerWidth <= 768) return; // Disable on small touchscreens
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2.5;
        const rotateY = ((x - centerX) / centerX) * 2.5;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    };

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    // =========================================================================
    // 6. Navigation Scroll Active Indicator & Glass Effect
    // =========================================================================
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const glassNav = document.querySelector('.glass-nav');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        // Navbar blur and shadow intensification on scroll
        if (glassNav) {
            if (scrollY > 50) {
                glassNav.style.background = 'rgba(10, 10, 15, 0.95)';
                glassNav.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.7)';
            } else {
                glassNav.style.background = 'rgba(12, 12, 18, 0.85)';
                glassNav.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
            }
        }

        // Active section highlight
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 160;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // =========================================================================
    // 7. Reveal Animations for elements
    // =========================================================================
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.case-study-card-carousel, .tech-card, .timeline-item-sphere').forEach(el => {
        observer.observe(el);
    });
});
