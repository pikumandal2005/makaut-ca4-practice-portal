# 🎓 MAKAUT CA4 Practice Portal

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A comprehensive MCQ practice platform for MAKAUT University students**

[Live Demo](https://pikumandal2005.github.io/makaut-ca4-practice-portal) • [Report Bug](https://github.com/pikumandal2005/makaut-ca4-practice-portal/issues) • [Request Feature](https://github.com/pikumandal2005/makaut-ca4-practice-portal/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Subjects](#-available-subjects)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

The **MAKAUT CA4 Practice Portal** is a modern, interactive web application designed to help engineering students prepare for their CA4 exams. With a beautiful UI, comprehensive question banks, and real-time feedback, students can practice and master concepts across multiple engineering disciplines.

### ✨ What's New in v2.0

- 🎨 **Modern UI/UX**: Completely redesigned interface with gradient backgrounds and smooth animations
- 🎯 **Enhanced Sidebar**: Beautiful About section with skills, stats, and social links
- 📱 **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- 🎭 **Smooth Animations**: Engaging transitions and hover effects throughout
- 🔄 **Better Navigation**: Improved breadcrumb navigation and back buttons
- 🎨 **Professional Styling**: Glassmorphism effects and modern card designs

---

## 🚀 Features

### Core Features

- ✅ **Multiple Engineering Departments**
  - B.Tech Electrical Engineering (EE)
  - B.Tech Food Technology
  - B.Tech Civil Engineering
  - B.Tech Computer Science & Engineering (CSE)
  - B.Tech Mechanical Engineering (ME)

- 📚 **Subject-wise Practice Modules**
  - Organized by semester and subject
  - Individual module practice or combined practice mode

- ⏱️ **Real-time Timer & Score Tracking**
  - Live timer to simulate exam conditions
  - Instant score calculation

- 🎯 **Question Navigation Palette**
  - Visual overview of all questions
  - Color-coded status indicators:
    - 🟦 Current Question
    - 🟩 Answered
    - 🟨 Marked for Review
    - ⬜ Not Answered

- 📝 **Review Answers After Quiz**
  - Detailed answer explanations
  - Performance analysis

- 🔖 **Mark for Review Feature**
  - Flag difficult questions
  - Easy navigation to marked questions

### UI/UX Features

- 🌈 **Gradient Backgrounds**: Beautiful color schemes throughout the app
- 🎭 **Smooth Animations**: Fade-in, slide-up, and hover effects
- 💫 **Interactive Cards**: Engaging card designs with hover states
- 📊 **Visual Statistics**: Eye-catching stats display
- 🎨 **Professional Icons**: Font Awesome icon integration
- 🔄 **Fluid Transitions**: Smooth state changes and navigation

---

## 🛠️ Tech Stack

### Frontend

- **React.js** (v19.2.0) - UI library
- **Bootstrap** (v5.3.8) - CSS framework
- **CSS3** - Custom styling with gradients and animations
- **Font Awesome** (v6.5.1) - Icon library
- **Google Fonts** - Inter & Poppins typography

### Development Tools

- **React Scripts** (v5.0.1) - Build tools
- **Testing Library** - Unit testing
- **gh-pages** - Deployment

---

## 🎯 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pikumandal2005/makaut-ca4-practice-portal.git
cd makaut-ca4-practice-portal
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
makaut-ca4-practice-portal/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── assets/             # Static assets
│
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx        # Landing/selection screen
│   │   ├── StartScreen.css        # StartScreen styles
│   │   ├── ModuleScreen.jsx       # Module selection
│   │   ├── Question.jsx           # Question display
│   │   ├── QuestionPalette.jsx    # Question navigator
│   │   ├── Sidebar.jsx            # About section sidebar
│   │   └── EndScreen.jsx          # Results screen
│   │
│   ├── data/
│   │   ├── subjects.js            # Department & subject config
│   │   └── [Department]/
│   │       └── [Semester]/
│   │           └── *-questions.js # Question banks
│   │
│   ├── assets/                    # Images & media
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── index.js                   # Entry point
│
├── package.json
└── README.md
```

---

## 📚 Available Subjects

### B.Tech Electrical Engineering - 3rd Semester

- Analog Electronics
- Biology
- Electric Circuit Theory
- Electromagnetic Field Theory (EMFT)
- Engineering Mechanics
- Indian Constitution
- Numerical Methods

### B.Tech Food Technology - 3rd Semester

- Biology for Engineers
- Chemistry 2
- Chemistry of Food
- Engineering Thermodynamics
- Food Microbiology
- Unit Operation 1

### More Departments Coming Soon!

- Civil Engineering
- Computer Science & Engineering
- Mechanical Engineering

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**

```bash
npm install gh-pages --save-dev
```

2. **Update package.json**

Make sure your `package.json` has:

```json
{
  "homepage": "https://your-username.github.io/makaut-ca4-practice-portal",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**

```bash
npm run deploy
```

Your app will be live at the URL specified in the `homepage` field!

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Adding New Questions

To add questions for a new subject:

1. Create a new file in `src/data/[Department]/[Semester]/`
2. Follow the existing question format:

```javascript
const questions = [
  {
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A"
  }
];

export default questions;
```

3. Update `src/data/subjects.js` to include your new subject

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Piku Mandal**

- 📧 Email: [www.pikumandal@gmail.com](mailto:www.pikumandal@gmail.com)
- 💼 LinkedIn: [piku-mandal-237a66388](https://www.linkedin.com/in/piku-mandal-237a66388/)
- 🐙 GitHub: [@pikumandal2005](https://github.com/pikumandal2005)
- 🌐 Portfolio: [pikumandal2005.github.io/Portfolio-Web](https://pikumandal2005.github.io/Portfolio-Web/)
- 📸 Instagram: [@its_piku_mandal](https://www.instagram.com/its_piku_mandal/)

---

## 🙏 Acknowledgments

- Thanks to all students using this portal for exam preparation
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Built with [Create React App](https://create-react-app.dev/)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Piku Mandal**

</div>