// ===========================
// Login Component (Converted from TypeScript)
// ===========================

/**
 * LoginComponent - Handles user login functionality
 * Converted from Angular TypeScript component to vanilla JavaScript
 */
class LoginComponent {
    constructor() {
        this.initializeEventListeners();
        this.addNotificationStyles();
    }

    /**
     * Initialize all event listeners
     */
    initializeEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (event) => this.handleSubmit(event));
        }
    }

    /**
     * Handle form submission
     * @param {Event} event - Form submit event
     */
    handleSubmit(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate inputs
        if (!username || !password) {
            this.showNotification('Please enter both username and password', 'error');
            return;
        }

        // Log credentials (in production, this would make an API call)
        console.log('Login attempt:', { username, password: '***' });

        // Simulate login success
        this.showNotification('Login successful! Redirecting...', 'success');

        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    /**
     * Show notification message
     * @param {string} message - Notification text
     * @param {string} type - Notification type (success, error, info)
     */
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;

        // Set styles
        const bgColors = {
            success: '#28a745',
            error: '#dc3545',
            info: '#007bff'
        };

        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${bgColors[type] || bgColors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-family: 'Poppins', sans-serif;
        `;

        const closeBtn = notification.querySelector('button');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    /**
     * Add notification animation styles to the document
     */
    addNotificationStyles() {
        if (document.getElementById('notification-styles')) return;

        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================
// Initialize LoginComponent when DOM is ready
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const loginComponent = new LoginComponent();
    console.log('✅ Login Component initialized');
});
