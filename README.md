# 🧩 BoxFit – Real-Time Collaborative Grid Game

**BoxFit** is a real-time, grid-based shape-fitting game inspired by inventory management and Tetris mechanics. It is designed to test your spatial reasoning by dragging and dropping uniquely shaped pieces onto a shared 10×10 board.

Built with **React**, **TypeScript**, and **react-dnd**, this game serves as a foundation for more advanced features like multiplayer sync, scoring, and shape rotation.

---

## 🚀 Live Demo

> ❌ Not deployed yet due to Node.js version compatibility issues on Vercel  
> ✅ Fully functional and tested on local system

---

## 📸 Preview

![BoxFit Screenshot]
![image](https://github.com/user-attachments/assets/fc42bf10-5036-4400-ae8f-2ac1e4c2dc34)

![image](https://github.com/user-attachments/assets/b9f3b791-8731-4af0-a55a-51754b8aee8b)
![image](https://github.com/user-attachments/assets/e493a124-a303-4843-a5ac-91b8f5251fbc)


> *Drop L-shaped items into the shared grid using drag-and-drop.*

---

## 📦 Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | React + TypeScript + Vite     |
| DnD Engine  | `react-dnd` + HTML5 backend   |
| Styling     | Plain CSS (no Tailwind)       |
| State Mgmt  | useState (React local state)  |
| Build Tool  | Vite                          |

---

## ✨ Key Features

- 🧩 10x10 interactive grid layout
- 🖱️ Drag-and-drop shape placement (L-shaped piece)
- 🧠 Matrix-based shape logic
- 🎯 Live cell updates with placement feedback
- 🔄 Easily extendable to multiplayer sync, scoring, and shape rotation

---

## 🛠️ Getting Started – Run Locally

Follow these steps to run the project on your system.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/boxfit-game.git
cd boxfit-game

2️⃣ Install Dependencies
npm install
This will install:

react, react-dom

vite

react-dnd, react-dnd-html5-backend

typescript and development configs

3️⃣ Start Development Server
```bash
npm run dev
You’ll see:

arduino

VITE v4.x.x  ready in 100ms
Local: http://localhost:5173
Open http://localhost:5173 in your browser.
