import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { label: 'hello!', to: '/' },
    { label: 'about-me', to: '/about' },
    { label: 'projects', to: '/projects' },
  ];

  const mobileLinks = [
    { label: 'hello!', to: '/' },
    { label: 'about-me', to: '/about' },
    { label: 'projects', to: '/projects' },
    { label: 'contact-me', to: '/contact' },
  ];

  return (
    <div className='h-dvh w-dvw p-2 sm:p-4 md:p-6 lg:px-9 lg:py-8'>
      <div className='bg-slate-900 w-full h-full rounded-2xl overflow-hidden border-slate-800 border text-slate-400 flex flex-col justify-between'>
        <header className='w-full'>
          <nav className='h-[3.5rem] md:h-12 border-slate-800 border-b flex items-stretch justify-between'>
            <div className='flex'>
              <Link
                to='/'
                className='px-8 text-lg md:text-base lg:pr-36 lg:border-slate-800 lg:border-r flex items-center rounded-tl-2xl hover:bg-slate-800 hover:text-slate-200 transition-colors'>
                Yong Ee
              </Link>
              <div className='flex-1 items-stretch hidden lg:flex'>
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className='px-8 border-slate-800 border-r flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors'
                    activeProps={{
                      className: 'border-b-2 border-b-orange-600 text-slate-200',
                    }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className='hidden lg:flex'>
              <Link
                to='/contact'
                className='px-8 border-slate-800 border-l flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors'
                activeProps={{
                  className: 'border-b-2 border-b-orange-600 text-slate-200',
                }}>
                contact-me
              </Link>
            </div>
            <div className='block border-l border-slate-800 lg:hidden'>
              <button
                className='px-5 flex items-center h-full text-slate-400'
                onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars size={23} />
              </button>
            </div>
          </nav>
        </header>

        <div className='relative flex-1 overflow-hidden'>
          <div className='overflow-y-auto max-h-full h-full min-h-full'>
            <Outlet />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-slate-900 transition-all ${
              menuOpen ? 'scale-y-100 translate-y-0' : 'scale-y-0 translate-y-[-50%]'
            }`}>
            <h1 className='text-xl text-white font-semibold px-10 py-5 border-b border-slate-800'>
              Menu
            </h1>
            {mobileLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className='px-10 py-3 border-slate-800 border-b flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors'
                activeProps={{
                  className: 'border-l-2 border-l-orange-600 text-slate-200',
                }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <footer className='w-full h-12 border-slate-800 border-t flex items-stretch'>
          <div className='flex items-center px-6 border-r border-slate-800'>find me at:</div>
          <a
            href='https://www.linkedin.com/in/yongee/'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center px-4 border-r border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors'>
            <FaLinkedin size={23} />
          </a>
          <a
            href='https://github.com/yongtheskill'
            aria-label='GitHub'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center px-4 border-r border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors'>
            <FaGithub size={23} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: App,
});
