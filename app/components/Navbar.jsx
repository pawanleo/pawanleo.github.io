// app/components/FloatingNavbar.jsx
export default function FloatingNavbar() {
    const handleNavClick = (event, sectionId) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <nav className="md:mt-8 fixed top-0 left-0 w-full z-30 flex mt-4 justify-center items-center select-none">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#writings"
              onClick={(e) => handleNavClick(e, 'writings')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Writings
            </a>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
              Chat
            </button>
          </div>
        </div>
      </nav>
    );
  }