# 🦖 Dino Game - Chrome Dinosaur Style

A fun 2D endless runner game inspired by Chrome's offline dinosaur game. Built with Next.js, TypeScript, and Canvas API. Installable as a Progressive Web App (PWA) with offline support!

## ✨ Features

- 🎮 **Chrome-style Gameplay** - Jump over cacti and birds
- 📱 **Fully Responsive** - Works on desktop and mobile
- 💾 **Offline Support** - Play anytime with Service Worker caching
- 📲 **Installable PWA** - Install on your device like a native app
- 🎯 **Score Tracking** - High score saved in localStorage
- ⌨️ **Multiple Controls** - Keyboard (Space) or Touch to play

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended) or 16.14.2+ (minimum)
- npm, yarn, pnpm, or bun

### Installation

1. **Navigate to the project folder:**

```bash
cd dino-game
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to play the game!

## 🎮 How to Play

- **Desktop:** Press `SPACE` or `↑ Arrow` to jump
- **Mobile:** Tap anywhere on the screen to jump
- **Goal:** Avoid obstacles (cacti and birds) to score points
- **Game Over:** Press `SPACE` or tap to restart

## 🏗️ Build for Production

```bash
npm run build
npm start
```

Or export as static files:

```bash
npm run build
```

The static files will be in the `out` folder.

## 📲 Installing as PWA

1. Open the game in a supported browser (Chrome, Edge, Safari)
2. Look for the install prompt or click the install button
3. Follow the browser's installation instructions
4. Launch the game from your home screen or applications folder

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Game Engine:** HTML5 Canvas API
- **PWA:** Service Worker + Web App Manifest
- **State Management:** React Hooks

## 📁 Project Structure

```
dino-game/
├── app/
│   ├── components/
│   │   ├── DinoGame.tsx      # Main game component
│   │   ├── InstallPrompt.tsx # PWA install prompt
│   │   └── RegisterSW.tsx    # Service Worker registration
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # App layout with PWA config
│   └── globals.css            # Global styles
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service Worker
│   └── icon-*.svg             # App icons
└── next.config.ts             # Next.js configuration
```

## 🌐 Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Set the root directory to `dino-game`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tannerpace/T-Mobble/tree/main/dino-game)

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

See the [LICENSE](../LICENSE) file in the root directory.

## 🎯 Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Power-ups and collectibles
- [ ] Sound effects and music
- [ ] Leaderboard with backend
- [ ] Different themes/skins
- [ ] Multiplayer mode

---

Built with ❤️ using Next.js and React
