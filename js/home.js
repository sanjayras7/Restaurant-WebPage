// ===========================
// Home Component (Converted from TypeScript)
// ===========================

/**
 * HomeComponent - Handles home page functionality
 * Converted from Angular TypeScript component to vanilla JavaScript
 */
class HomeComponent {
    constructor() {
        this.initializeComponent();
    }

    /**
     * Initialize the home component
     */
    initializeComponent() {
        console.log('🏠 Home Component initialized');
        this.enhanceOrderButton();
        this.addScrollAnimations();
    }

    /**
     * Enhance the "Order Now" button functionality
     */
    enhanceOrderButton() {
        const orderButtons = document.querySelectorAll('.btn-primary, button[onclick*="menu"]');
        orderButtons.forEach(button => {
            // Don't override if it's already a login button
            if (!button.textContent.includes('Login') && !button.textContent.includes('Message')) {
                button.addEventListener('click', (e) => {
                    // Only prevent default if it's an order button
                    if (button.textContent.includes('Order')) {
                        e.preventDefault();
                        this.scrollToMenu();
                    }
                });
            }
        });
    }

    /**
     * Smooth scroll to menu section
     */
    scrollToMenu() {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Add scroll animations to elements
     */
    addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// ===========================
// Initialize HomeComponent when DOM is ready
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const homeComponent = new HomeComponent();
});
