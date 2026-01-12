# Loan Request Application

A simple web application **built with React** for submitting loan requests. Built with Vite for fast development and optimized builds.

## Features

- **Form Validation**: Validates user inputs including name, phone number, age, and salary range
- **Employee Status**: Checkbox to indicate employment status
- **Modal Notifications**: Displays success or error messages via modal dialogs
- **Responsive Design**: Clean, centered form layout with glassmorphism styling

## Technologies Used

- **React 19**: For building the user interface
- **Vite**: For fast development server and optimized builds
- **ESLint**: For code linting and quality assurance

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Loan Request-ReactProject"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Fill in the loan request form with your details:
   - Name (letters only)
   - Phone Number (11 digits)
   - Age (18-100)
   - Employment status
   - Salary range

2. Click submit to send your loan request

3. View validation messages or success confirmation in the modal

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
├── App.css
├── App.jsx
├── index.css
├── InputField.jsx
├── ModalMessage.jsx
├── main.jsx
└── assets/
```
