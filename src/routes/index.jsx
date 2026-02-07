import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

function getGradientStyle(x, y) {
  const xOffset = x * 15 + 10;
  const yOffset = y * 25 + 10;
  return `radial-gradient(circle 90cqmin at ${50 - xOffset}% ${
    50 - yOffset
  }%, #4d5bce66, transparent), radial-gradient(circle 90cqmin at ${50 + xOffset}% ${
    50 + yOffset
  }%, #dc262666, transparent)`;
}

function Home() {
  const [gradientStyle, setGradientStyle] = useState(getGradientStyle(0.5, 0.5));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setGradientStyle(getGradientStyle(x, y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main
      className='h-full flex items-center justify-center bg-slate-900'
      style={{ background: gradientStyle }}>
      <div className='flex'>
        <div className='px-10'>
          <div className='text-white text-base md:text-lg'>Hi! My name is</div>
          <h1 className='text-white text-6xl md:text-8xl font-semibold'>Yong Ee</h1>
          <h2 className='text-blue-400 text-xl md:text-3xl pt-3'>&gt; Software Engineer</h2>
          <div className='pt-5 text-slate-400 text-sm md:text-base'>
            // get to know me at{' '}
            <Link to='/about' className='underline text-orange-400'>
              about-me
            </Link>
          </div>
          <div className='text-slate-400 text-sm md:text-base'>
            // see my past work at{' '}
            <Link to='/projects' className='underline text-orange-400'>
              projects
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export const Route = createFileRoute('/')({
  component: Home,
});
