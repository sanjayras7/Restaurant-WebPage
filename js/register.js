// ===========================
// Register Component (Converted from TypeScript)
// ===========================

/**
 * RegisterComponent - Handles user registration functionality
 * Converted from Angular TypeScript component to vanilla JavaScript
 */
class RegisterComponent {
    constructor() {
        this.initializeEventListeners();
        this.addNotificationStyles();
    }

    /**
     * Initialize all event listeners
     */
    initializeEventListeners() {
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', (event) => this.handleSubmit(event));
        }

        // Add real-time validation
        const inputs = ['firstName', 'lastName', 'userName', 'password', 'email'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('blur', () => this.validateField(inputId));
                input.addEventListener('input', () => this.clearError(inputId));
            }
        });
    }

    /**
     * Handle form submission
     * @param {Event} event - Form submit event
     */
    handleSubmit(event) {
        event.preventDefault();

        let isValid = true;

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const userName = document.getElementById('userName').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validate all fields
        if (firstName === '') {
            this.showError('firstNameError');
            isValid = false;
        } else {
            this.hideError('firstNameError');
        }

        if (lastName === '') {
            this.showError('lastNameError');
            isValid = false;
        } else {
            this.hideError('lastNameError');
        }

        if (userName === '') {
            this.showError('userNameError');
            isValid = false;
        } else {
            this.hideError('userNameError');
        }

        if (password === '') {
            this.showError('passwordError');
            isValid = false;
        } else if (password.length < 6) {
            const passwordError = document.getElementById('passwordError');
            passwordError.textContent = 'Password must be at least 6 characters';
            this.showError('passwordError');
            isValid = false;
        } else {
            this.hideError('passwordError');
        }

        if (email === '') {
            this.showError('emailError');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showError('emailError');
            isValid = false;
        } else {
            this.hideError('emailError');
        }

        // If form is valid, submit
        if (isValid) {
            this.submitForm({ firstName, lastName, userName, password, email });
        }
    }

    /**
     * Validate individual field
     * @param {string} fieldId - ID of the field to validate
     */
    validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();
        const errorId = `${fieldId}Error`;

        if (value === '') {
            this.showError(errorId);
        } else if (fieldId === 'email' && !this.isValidEmail(value)) {
            this.showError(errorId);
        } else if (fieldId === 'password' && value.length < 6) {
            const errorElement = document.getElementById(errorId);
            errorElement.textContent = 'Password must be at least 6 characters';
            this.showError(errorId);
        } else {
            this.hideError(errorId);
        }
    }

    /**
     * Clear error when user starts typing
     * @param {string} fieldId - ID of the field
     */
    clearError(fieldId) {
        const errorId = `${fieldId}Error`;
        this.hideError(errorId);
    }

    /**
     * Show error message
     * @param {string} errorId - ID of the error element
     */
    showError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    }

    /**
     * Hide error message
     * @param {string} errorId - ID of the error element
     */
    hideError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} - True if valid email
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Submit the form
     * @param {Object} formData - Form data object
     */
    submitForm(formData) {
        console.log('Form submitted successfully:', formData);

        // Show success notification
        this.showNotification('Account created successfully! Redirecting to login...', 'success');

        // In production, this would make an API call to create the account
        // For now, redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
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
// Initialize RegisterComponent when DOM is ready
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const registerComponent = new RegisterComponent();
    console.log('✅ Register Component initialized');
});
