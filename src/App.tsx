import AppRouter from "./routes/Router";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="flex gap-8 h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1 gap-6">
        <Header />
        <main className="p-4 overflow-auto bg-white rounded-3xl shadow">
          <AppRouter />
        </main>
      </div>
    </div>
  );
}

export default App;
