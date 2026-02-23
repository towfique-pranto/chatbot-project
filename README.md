# Chatbot Project

A modern, responsive chatbot application built with React, TypeScript, and Vite. This project demonstrates real-time interaction, persistent chat history, and basic automated responses.

This is a basic chatbot that can:
- Toss a coin
- Roll a dice
- Tell today's date

This project is part of a React course by [SuperSimpleDev](https://github.com/SuperSimpleDev).


[**Live Demo**](https://towfique-pranto.github.io/chatbot-project/)

---

## Features

- **Real-time Interaction**: Instant messaging with a responsive chatbot.
- **Persistent Storage**: Uses `localStorage` to keep your chat history even after refresh.
- **Smart Responses**: Integrated with `supersimpledev` chatbot logic for dynamic replies.
- **Responsive Design**: Clean and modern UI that works across devices.
- **Timestamps**: Every message is tracked with accurate timestamps using `dayjs`.
- **Customized Icon**: Unique robot favicon and application title that reflects the current message count.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Date Handling**: [dayjs](https://day.js.org/)
- **Logic Library**: `supersimpledev`

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/towfique-pranto/chatbot-project.git
   cd chatbot-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

This project is configured for easy deployment to GitHub Pages.

To deploy your own version:
```bash
npm run deploy
```
This will run the build process and push the `dist` folder to the `gh-pages` branch using the `gh-pages` package.

