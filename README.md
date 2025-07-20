# Next.js Authentication Flow

A responsive authentication system built with Next.js App Router, TypeScript, and CSS Modules featuring Iranian phone number validation and user session management.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Iranian Phone Validation**: Validates phone numbers in Iranian format (09xxxxxxxxx)
- **Session Management**: Uses localStorage for user data persistence
- **TypeScript Support**: Full type safety throughout the application
- **Modular Components**: Reusable Input and Button components
- **Form Validation**: Real-time validation with error messaging
- **API Integration**: Fetches user data from randomuser.me API
- **Protected Routes**: Dashboard requires authentication
- **Loading States**: Smooth loading indicators during API calls

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- A modern web browser

## 🛠️ Installation

1. **Clone or download the project files**
   \`\`\`bash
   # If using git
   git clone <repository-url>
   cd nextjs-auth-flow
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

## 🏃‍♂️ Running the Application

### Development Mode

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

### Production Build

To create a production build:

\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── auth/
│   │   ├── page.tsx              # Authentication page
│   │   └── page.module.css       # Auth page styles
│   ├── dashboard/
│   │   ├── page.tsx              # Dashboard page
│   │   └── page.module.css       # Dashboard styles
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (redirects)
├── components/
│   ├── Button.tsx                # Reusable button component
│   ├── Button.module.css         # Button styles
│   ├── Input.tsx                 # Reusable input component
│   └── Input.module.css          # Input styles
└── README.md
\`\`\`

## 🔐 How to Use

### 1. Authentication Flow

1. **Navigate to the app**: Open http://localhost:3000
2. **Auto-redirect**: You'll be redirected to `/auth` if not logged in
3. **Enter phone number**: Use any valid Iranian phone number format:
   - Must start with `09`
   - Must be exactly 11 digits
   - Examples: `09123456789`, `09876543210`
4. **Click Login**: The app will fetch user data and redirect to dashboard

### 2. Dashboard Access

- **Automatic redirect**: Successfully authenticated users go to `/dashboard`
- **User information**: Displays fetched user data (name, email, avatar)
- **Logout**: Click the logout button to clear session and return to auth

### 3. Session Management

- **Persistent login**: User data is stored in localStorage
- **Auto-login**: Returning users are automatically redirected to dashboard
- **Session cleanup**: Logout removes all stored data

## 🎯 API Integration

The app integrates with the **randomuser.me** API:

- **Endpoint**: `https://randomuser.me/api/?results=1&nat=us`
- **Purpose**: Fetches random user data for demonstration
- **Data stored**: User name, email, and profile picture
- **Storage**: Data is saved to localStorage as JSON

## 📱 Responsive Breakpoints

The application is fully responsive with the following breakpoints:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px  
- **Desktop**: > 768px

## 🔧 Customization

### Phone Number Validation

To modify the Iranian phone number validation, edit the regex in `/app/auth/page.tsx`:

\`\`\`typescript
const iranianPhoneRegex = /^09\\d{9}$/
\`\`\`

### Styling

- **CSS Modules**: Each component has its own `.module.css` file
- **Global styles**: Modify `app/globals.css` for app-wide changes
- **Component styles**: Edit individual `.module.css` files for specific components

### API Endpoint

To change the API endpoint, modify the fetch URL in `/app/auth/page.tsx`:

\`\`\`typescript
const response = await fetch("https://your-api-endpoint.com/api")
\`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**
   - Ensure all dependencies are installed: `npm install`
   - Check that file paths are correct

2. **localStorage errors**
   - Clear browser localStorage: `localStorage.clear()`
   - Ensure you're running in a browser environment

3. **API fetch failures**
   - Check internet connection
   - Verify the randomuser.me API is accessible
   - Check browser console for CORS errors

4. **Styling issues**
   - Ensure CSS modules are properly imported
   - Check that class names match between CSS and TSX files

### Development Tips

- **Hot reload**: Changes are automatically reflected in development mode
- **TypeScript errors**: Check the terminal for type errors
- **Console logging**: Use browser dev tools to debug issues
- **Network tab**: Monitor API requests in browser dev tools

## 🔒 Security Notes

⚠️ **Important**: This is a frontend-only prototype for demonstration purposes.

- **No real authentication**: Uses mock API data
- **Client-side storage**: localStorage is not secure for production
- **No password protection**: Phone number is only for validation
- **No session expiry**: Sessions persist until manually cleared

For production use, implement:
- Server-side authentication
- Secure session management
- Password protection
- Session expiration
- HTTPS encryption

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding!** 🎉
