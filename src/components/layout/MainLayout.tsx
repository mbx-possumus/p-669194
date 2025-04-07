import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#F3F3F3]">
      <Sidebar />
      <main className="flex-1 flex flex-col ml-0 mr-4 my-4 max-sm:m-4 px-10" >
        <Header />
        <section className="flex gap-[27px] max-md:flex-col min-h-[calc(100vh-220px)]">
          {children}
        </section>
        <Footer />
      </main>
    </div>
  );
};
