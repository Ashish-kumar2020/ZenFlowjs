# 🌊 ZenFlow JS — Productivity Suite

![Version](https://img.shields.io/badge/version-1.0.0-indigo)
![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-Vanilla%20JS%20|%20Tailwind-orange)

**ZenFlow JS** is a high-performance, framework-free productivity dashboard designed for developers. It combines aesthetic glassmorphism design with a robust modular architecture built entirely in pure Vanilla JavaScript.

---

## ✨ Features

### 🔐 Secure-ish Auth Flow
*   **Persistent Accounts:** Real-world simulated user database stored in `localStorage`.
*   **Multi-Step Verification:** Modern Login/Signup flow followed by a mandatory **OTP Verification** step (Security simulation).
*   **User Persistence:** Sessions are maintained across browser refreshes.

### ✅ Task Management (Week 1)
*   **CRUD Operations:** Seamlessly add, toggle, and delete tasks.
*   **Visual Progress:** Real-time counters showing pending vs. completed work.
*   **State Persistence:** Every task is indexed by User ID for multi-user privacy.

### 📝 Strategic Notebook (Week 2)
*   **Dynamic Modals:** A focused writing environment for long-form thoughts.
*   **Live Previews:** Note cards with truncated content for quick browsing.
*   **Auto-Timestamps:** Track exactly when your ideas were last refined.

### 🚀 Flow Engine / Pomodoro (Week 3)
*   **Circular Progress:** Custom SVG-based visual countdown.
*   **Dual Phases:** Switch between "Deep Work" (25m) and "Rest" (5m).
*   **Interactive Controls:** Play, pause, and reset functionality.

### 🎨 Premium UI/UX (Week 4)
*   **Glassmorphism:** Frosted glass panels using Tailwind's backdrop-filter.
*   **Dark Mode:** Deep slate theme with persistence.
*   **Modular Architecture:** Refactored into clean ES6 modules for scalability.

---

## 🛠️ Technical Topics Covered

Building this project requires mastering the "Hard Parts" of JavaScript:

| Topic | Implementation in ZenFlow |
| :--- | :--- |
| **State Management** | Custom `Store` class using the **Observer Pattern** for reactive UI. |
| **ES6 Modules** | Clean separation of concerns (Storage, Renderer, Views, Components). |
| **DOM Manipulation** | Template literals and high-performance injection via a central `renderer`. |
| **Event Delegation** | Efficient event handling for dynamically generated elements. |
| **Hash Routing** | Single-page application (SPA) navigation using `window.location.hash`. |
| **Persistence** | Abstracted `storage.js` wrapper for the Web Storage API. |
| **Asynchronous JS** | `setInterval` logic and simulated network delays. |

---

## 📂 Project Structure

```text
ZenFlow-JS/
├── index.html          # Entry point & Tailwind config
├── index.tsx           # Application Bootstrapper & Router
├── store.js            # Global State (Observer Pattern)
├── storage.js          # LocalStorage Wrapper
├── renderer.js         # UI Orchestrator
├── components/         # Global UI Elements
│   ├── Header.js
│   ├── Sidebar.js
│   └── Widgets.js
└── views/              # Page-specific logic
    ├── AuthView.js     # Login/Signup/OTP logic
    ├── DashboardView.js# Layout wrapper
    ├── TasksView.js    # Todo logic
    ├── NotesView.js    # Notebook logic
    └── TimerView.js    # Pomodoro logic
```

---

## 🚀 Getting Started

Since this project uses **ES6 Modules**, it must be served through a web server to avoid CORS/Protocol errors.

### Option A: VS Code (Recommended)
1. Install the **Live Server** extension.
2. Right-click `index.html` -> **Open with Live Server**.

### Option B: Node.js
```bash
npx serve .
```

### Option C: Python
```bash
python -m http.server 8000
```

---

## 💡 Developer Notes
*   **OTP Hint:** During the verification step, use the code `1234`.
*   **Styling:** Custom "Glass" panels are achieved via `backdrop-filter: blur(10px)`.
*   **Performance:** The app uses a single-direction data flow. State updates trigger notifications, which trigger the renderer.

---

*Built with ❤️ and Pure JavaScript.*
