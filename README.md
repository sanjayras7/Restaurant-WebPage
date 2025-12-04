# 🍽️ The Nest Nook Restaurant Website

A modern, responsive Restaurant Website built using **HTML5, CSS3, and JavaScript**. This project showcases a clean UI, structured layout, and interactive components.

## 🚀 Features

✅ **Responsive Design** – Works smoothly on desktop, tablet, and mobile  
✅ **Modern UI** – Clean color palette, gradients, and typography  
✅ **Interactive Navigation** – Smooth scrolling and hamburger menu for mobile  
✅ **Hero Section** – Eye-catching banner with call-to-action  
✅ **Menu Section** – Showcases food items with images, pricing, and cart functionality  
✅ **About Section** – Restaurant information with feature highlights  
✅ **Contact Section** – Contact details and functional contact form  
✅ **Login & Register Pages** – Separate pages with form validation  
✅ **Animations** – Smooth transitions, hover effects, and scroll animations  
✅ **Component-Based JS** – Converted from TypeScript to vanilla JavaScript classes  

## 🛠️ Technologies Used

- **HTML5** – Semantic page structure
- **CSS3** – Modern styling with Flexbox, Grid, animations
- **JavaScript (ES6+)** – Component-based architecture (converted from TypeScript)
- **Google Fonts** – Poppins font family

## 📁 Project Structure

```
Restaurant-WebPage/
│
├── index.html              # Main homepage
├── login.html              # Login page
├── register.html           # Registration page
├── README.md               # Project documentation
│
├── css/                    # Stylesheets
│   ├── style.css          # Main stylesheet
│   ├── login.css          # Login page styles
│   └── register.css       # Register page styles
│
├── js/                     # JavaScript files
│   ├── script.js          # Main script with global functionality
│   ├── home.js            # Home component (converted from TS)
│   ├── login.js           # Login component (converted from TS)
│   └── register.js        # Register component (converted from TS)
│
└── [legacy]/              # Old Angular TypeScript files (archived)
    ├── home/
    ├── login/
    ├── register/
    ├── app.module.ts
    └── app-routing.module.ts
```

## 🎯 How to Run

### Option 1: Direct File Access
Simply open `index.html` in your web browser:
```
file:///path/to/Restaurant-WebPage/index.html
```

### Option 2: Using Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Python HTTP Server
```bash
# Navigate to project directory
cd Restaurant-WebPage

# Start server
python -m http.server 8080

# Open browser and navigate to
http://localhost:8080
```

### Option 4: Using Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8080

# Open browser and navigate to
http://localhost:8080
```

## 📄 Pages

### 1. **Homepage** (`index.html`)
- Navigation bar with smooth scrolling
- Hero section with background image
- Menu section with 6 food items
- About section with features
- Contact form
- Footer

### 2. **Login Page** (`login.html`)
- Username/password form
- Form validation
- Modern glassmorphism design
- Redirect to homepage on success

### 3. **Register Page** (`register.html`)
- Multi-field registration form
- Real-time form validation
- Email format validation
- Password strength checking
- Redirect to login on success

## 🎨 Design Features

- **Color Scheme:** Orange/Gold gradients (#ff6b35, #f7931e)
- **Font:** Poppins (Google Fonts)
- **Animations:** Scroll reveals, hover effects, smooth transitions
- **Glassmorphism:** Modern UI effects on forms
- **Mobile-First:** Fully responsive design

## 💻 JavaScript Components

### Converted from TypeScript to Vanilla JavaScript

All components have been converted from Angular TypeScript to vanilla JavaScript classes:

#### **HomeComponent** (`js/home.js`)
- Handles home page functionality
- Scroll animations
- Enhanced navigation

#### **LoginComponent** (`js/login.js`)
- Form submission handling
- Input validation
- Notification system
- Redirect logic

#### **RegisterComponent** (`js/register.js`)
- Multi-field validation
- Real-time error display
- Email format validation
- Password strength checking

#### **Main Script** (`js/script.js`)
- Mobile menu toggle
- Smooth scrolling
- Contact form handling
- "Add to Cart" functionality
- Scroll reveal animations
- Active navigation highlighting

## 🔧 Customization

### Colors
Edit `css/style.css` and modify the CSS variables:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --dark-color: #2d3142;
  --light-color: #ffffff;
}
```

### Menu Items
Edit the menu section in `index.html` to add/modify food items.

### Contact Information
Update the contact section in `index.html` with your actual details.

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 768px
- **Mobile:** < 480px

## 🎯 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Integrate payment gateway
- [ ] Add reservation system
- [ ] Connect to backend API
- [ ] Add more menu categories
- [ ] Implement user authentication
- [ ] Add order tracking

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

Created as a frontend development practice project.

---

**Note:** This project was originally built with Angular/TypeScript and has been successfully converted to a pure HTML/CSS/JavaScript structure for easier deployment and understanding.
