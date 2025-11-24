// Type definitions
interface NavElements {
  hamburger: HTMLElement;
  navMenu: HTMLElement;
  navLinks: NodeListOf<HTMLElement>;
}

interface ScrollState {
  lastScroll: number;
  ticking: boolean;
}

// Mobile Navigation Toggle
const initMobileNav = (): void => {
  const hamburger = document.querySelector<HTMLElement>('.hamburger');
  const navMenu = document.querySelector<HTMLElement>('.nav-menu');
  const navLinks = document.querySelectorAll<HTMLElement>('.nav-link');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = hamburger.querySelectorAll<HTMLElement>('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link: HTMLElement) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = hamburger.querySelectorAll<HTMLElement>('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
};

// Smooth scrolling for navigation links
const initSmoothScroll = (): void => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor: HTMLAnchorElement) => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Consolidated scroll event handler for better performance
const initScrollHandlers = (): void => {
  const navbar = document.querySelector<HTMLElement>('.navbar');
  const hero = document.querySelector<HTMLElement>('.hero');
  const sections = document.querySelectorAll<HTMLElement>('section');
  const navLinks = document.querySelectorAll<HTMLElement>('.nav-link');

  if (!navbar) return;

  const scrollState: ScrollState = {
    lastScroll: 0,
    ticking: false
  };

  const handleScroll = (): void => {
    const currentScroll = window.pageYOffset;

    // Navbar shadow effect
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    // Parallax effect for hero section
    if (hero) {
      const parallax = currentScroll * 0.5;
      hero.style.transform = `translateY(${parallax}px)`;
    }

    // Active navigation state
    let current = '';
    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop;
      if (currentScroll >= sectionTop - 100) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link: HTMLElement) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    scrollState.lastScroll = currentScroll;
    scrollState.ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollState.ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
      });
      scrollState.ticking = true;
    }
  });
};

// Intersection Observer for fade-in animations
const initIntersectionObservers = (): void => {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');

        // Animate skill bars when they come into view
        if (entry.target.classList.contains('skill-bars')) {
          animateSkillBars();
        }
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll<HTMLElement>('section');
  sections.forEach((section: HTMLElement) => {
    observer.observe(section);
  });

  // Observe skill cards
  const skillCards = document.querySelectorAll<HTMLElement>('.skill-card');
  skillCards.forEach((card: HTMLElement, index: number) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe project cards
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
  projectCards.forEach((card: HTMLElement, index: number) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe skill bars section
  const skillBarsSection = document.querySelector<HTMLElement>('.skill-bars');
  if (skillBarsSection) {
    observer.observe(skillBarsSection);
  }
};

// Animate skill bars
let skillBarsAnimated = false;

const animateSkillBars = (): void => {
  if (skillBarsAnimated) return;

  const skillBars = document.querySelectorAll<HTMLElement>('.skill-bar-fill');
  skillBars.forEach((bar: HTMLElement) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      if (width) {
        bar.style.width = width + '%';
      }
    }, 100);
  });

  skillBarsAnimated = true;
};

// Form submission handler
const initContactForm = (): void => {
  const contactForm = document.querySelector<HTMLFormElement>('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const button = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!button) return;

    const originalText = button.textContent || '';

    // Show loading state
    button.textContent = 'Sending...';
    button.disabled = true;

    // Simulate form submission (in a real app, you'd send this to a server)
    setTimeout(() => {
      button.textContent = '✓ Message Sent!';
      button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';

      // Reset form
      contactForm.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = '';
      }, 3000);
    }, 1000);
  });
};

// Simple fade-in effect for hero title
const initHeroAnimation = (): void => {
  const heroTitle = document.querySelector<HTMLElement>('.hero-title');
  if (!heroTitle) return;

  heroTitle.style.opacity = '0';
  heroTitle.style.transform = 'translateY(20px)';
  heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  setTimeout(() => {
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 300);
};

// Add smooth reveal animation to elements
const initRevealAnimations = (): void => {
  const revealElements = document.querySelectorAll<HTMLElement>('.skill-card, .project-card, .about-text');
  const revealObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((element: HTMLElement) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
  });
};

// Console welcome message
const showWelcomeMessage = (): void => {
  console.log('%c Welcome to my Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px;');
  console.log('%c Feel free to explore the code! 🚀', 'color: #667eea; font-size: 14px;');
};

// Initialize all functionality when DOM is ready
const init = (): void => {
  initMobileNav();
  initSmoothScroll();
  initScrollHandlers();
  initIntersectionObservers();
  initContactForm();
  initHeroAnimation();
  initRevealAnimations();
  showWelcomeMessage();
};

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
