# React Performance Dashboard

A performance-focused React application demonstrating real-world optimization techniques:
bundle size analysis, render profiling, lazy-loaded UI modules, and efficient state/data
management patterns.

This project is built to be portfolio-ready, showcasing senior-level frontend architecture.

👉 **Live Demo:** [React Performance Dashboard](https://react-performance-dashboard-lovat.vercel.app/)

---

## 🎯 Key Features

| Feature                        | Description                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- |
| **Modular File Structure**     | `/features`, `/shared`, `/app` organization for maintainability and scaling |
| **React Query**                | Smart caching, request deduplication, stale-time control                    |
| **Bundle Optimization**        | Vite manualChunks + dynamic imports + shared vendor segmentation            |
| **Lazy Loaded Charts**         | Large visualization components load on demand, not blocking UI              |
| **Lightweight charts**         | Lightweight charts via `@visx/xychart`.                                     |
| **Render Count Profiler**      | Custom `useRenderCount` hook to visualize unnecessary re-renders            |
| **Performance Analytics Page** | Live latency sampling + charts to observe UI behavior                       |
| **Bundle Analyzer View**       | `analyse.html` integrated to inspect production chunks                      |

---

## 🗂 Folder Structure

```css
src/
├── app/          # App-level providers and router
│ ├── router/
│ └── providers/
├── features/     # Domain-based UI modules
│ ├── dashboard/
│ ├── performance/
│ ├── reports/
│ ├── users/
├── shared/       # Reusable UI + hooks + utilities
│ ├── components/
│ ├── hooks/
│ └── utils/
```

---

## 🚀 Tech Stack

- **React + TypeScript**
- **Vite**
- **React Query**
- **React Router**
- **TailwindCSS**
- **Recharts (lazy-loaded)**
- **Bundle Analyzer (rollup-plugin-visualizer)**

---

## 🧩 Performance Highlights

- Initial bundle under **150KB gzip**
- Core dependencies isolated into independent chunks
- Route-level lazy loading + deferred rendering for smooth UX

---

## 📦 Installation

```bash
# clone
git clone https://github.com/HaykSyan/react-performance-dashboard.git

cd react-performance-dashboard

# install deps
pnpm install
# or
npm install
# or
yarn install

# start dev
pnpm dev
# or
npm run dev
# or
yarn run dev
```

---

## 🏗 Build & Analyze

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### To open bundle analysis report:

```pgsql
open ./analyse.html
```

## 📊 Analyzer Screenshot

_(Generated via `vite-plugin-visualizer`)_  
Displays chunk composition and dependency size.

---

## 📉 Performance Strategies Used

- Manual `manualChunks` split: vendor, router, query, charts

- Code-splitting critical UI with `React.lazy` + `Suspense`

- Moving large chart libraries into separate async chunks

- Using `React.memo` + `useCallback` to prevent unnecessary re-renders

- `useDeferredValue` to avoid re-render storms during input filtering

- React Query caching & stale-time configuration to reduce network churn

---

## 🧪 Example Highlight: Render Count Debugging

```tsx
export function RenderCounterBadge() {
  const count = useRenderCount();
  return (
    <span className="px-2 py-1 text-xs bg-gray-800 text-white rounded">
      Renders: {count}
    </span>
  );
}
```

---

## 📌 Future Enhancements (Roadmap)

- Add React Query prefetching on route transitions

- Add virtualized tables for 10k+ record datasets

## 👨‍💻 Author

### Hayk Sargsyan

Frontend Engineer | React • Next.js • TypeScript

> _This project is built to showcase deep performance and architectural understanding in modern React applications._

## License

MIT © 2025 Hayk Sargsyan
