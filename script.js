
        lucide.createIcons();

        const revealOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    if (entry.target.classList.contains('projects-grid')) {
                        const cards = entry.target.querySelectorAll('.project-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => card.classList.add('active'), index * 200);
                        });
                        revealObserver.unobserve(entry.target);
                    } else {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                }
            });
        }, revealOptions);

        document.querySelectorAll('.timeline-item-wrapper, .projects-grid, .cta-section').forEach(el => {
            revealObserver.observe(el);
        });

        const progressLine = document.getElementById('timeline-progress-v');
        const timelineBody = document.querySelector('.timeline-body');

        const updateTimelineProgress = () => {
            if (!progressLine || !timelineBody) return;

            const rect = timelineBody.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            const startScroll = rect.top - (viewHeight / 2);
            const totalHeight = rect.height;
            
            let progress = 0;
            if (startScroll < 0) {
                progress = Math.min(Math.max((Math.abs(startScroll) / totalHeight) * 100, 0), 100);
                progressLine.style.height = `${progress}%`;
            }
        };

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = e => {
        const { currentTarget: target } = e;
        target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    for(const card of document.querySelectorAll(".project-card")) {
        card.addEventListener('mousemove', handleOnMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    }

        window.addEventListener('scroll', updateTimelineProgress);
        window.addEventListener('resize', updateTimelineProgress);
        updateTimelineProgress(); // Initial check

