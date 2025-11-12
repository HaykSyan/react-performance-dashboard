// import { AppRouter } from "@/app/router";
import { Outlet } from "react-router-dom";
import Header from "@/shared/components/layout/Header";
import Sidebar from "@/shared/components/layout/Sidebar";

function App() {
  return (
    <div className="flex gap-8 h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1 gap-6">
        <Header />
        <main className="p-4 overflow-auto bg-white rounded-2xl shadow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
