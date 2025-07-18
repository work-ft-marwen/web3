import { useState } from "react";
import { Menu, X } from "lucide-react";
// 1. MODIFICATION : Importer votre nouveau logo
import aibotLogo from "../assets/aibot-logo.png"; 

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* 2. MODIFICATION : Remplacer l'ancienne image par la nouvelle */}
            <img className="h-10 w-10 mr-2 rounded-full" src={aibotLogo} alt="AIBot Logo" />
            
            {/* 3. MODIFICATION : Changer le texte à côté du logo */}
            <span className="text-xl tracking-tight">AIBots</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Workflow</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <a href="#">Features</a>
              </li>
              <li className="py-4">
                <a href="#">Workflow</a>
              </li>
              <li className="py-4">
                <a href="#">Pricing</a>
              </li>
              <li className="py-4">
                <a href="#">Testimonials</a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
