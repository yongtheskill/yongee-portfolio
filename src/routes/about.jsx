import { createFileRoute } from '@tanstack/react-router';

function About() {
  return (
    <main
      style={{ background: 'radial-gradient(circle at 0% 0%, #4d5bce22, transparent)' }}
      className='min-h-full'>
      <div className='container mx-auto pt-12 md:pt-20 px-6 md:px-10 pb-12'>
        <img src='/me.webp' className='w-36 h-36 rounded-full' alt='Photo of me' />
        <h1 className='text-3xl font-bold text-white pt-5'>
          Hey,
          <br className='block md:hidden' />
          I'm Yong Ee
        </h1>
        <div className='pt-2'>
          I'm from Singapore{' '}
          <img
            src='/sg.svg'
            alt='Singapore Flag'
            className='inline-block h-5 mb-1 rounded-sm overflow-clip'
          />
          .
          <br />
          I love problem-solving and building solutions!
          <br />
          I believe in the power of software to change the world.
          <br />
          I'm currently working on{' '}
          <a
            href='https://chips.chat/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-orange-400'>
            chips.chat
          </a>
          .
          <br />
          When I'm not working, I'm making music and doing photography.
        </div>
        <h1 className='text-3xl font-bold text-white pt-12'>What I Can Do</h1>
        <div className='pt-1'>
          My expertise lies in TypeScript, Python, ReactJS, VueJS and C++.
          <br />
          I'm experienced in full-stack development, AI, game development, embedded development and
          project management.
          <br />
          Althought I have my favourites, I love learning, and am always open to using the best tool
          for the job.
        </div>
        <h1 className='text-3xl font-bold text-white pt-16'>What I Have Done</h1>
        <div className='pt-2'>
          <span className='text-slate-200'>chips.chat</span>
          <br />
          Since 2025
          <br />
          Founded a pay-per-use LLM app. Currently leading an amazing team of 4 to bring
          state-of-the-art AI to everyone
        </div>
        <div className='pt-7'>
          <span className='text-slate-200'>WEDDLL</span>
          <br />
          2025
          <br />
          System design, costing models and prototyping for a IoT &amp; blockchain based
          traceability startup.
        </div>
        <div className='pt-7'>
          <span className='text-slate-200'>National University of Singapore</span>
          <br />
          Since 2024
          <br />
          Studying Computer Science
        </div>
        <div className='pt-7'>
          <span className='text-slate-200'>Phluid Worldwide</span>
          <br />
          2022 - 2025
          <br />
          Working on the AI behind the company's products.
          <br />
          Led the team to build the company's mobile application.
        </div>
        <div className='pt-7'>
          <span className='text-slate-200'>Freelance full-stack developer</span>
          <br />
          Since 2019
          <br />
          Led teams to complete multiple projects, including:
          <br />
          - Educational web games used in schools
          <br />
          - Database system for Non-Profit Organisations
          <br />- Learning management system for the Singapore Government
        </div>
        <div className='pt-8'>
          <span className='text-slate-200'>DSO National Laboratories</span>
          <br />
          2020–2021
          <br />
          Built an AI-enabled drone capable of locating casualties in disaster scenarios and
          delivering aid to them.
        </div>
        <div className='pt-8'>
          <span className='text-slate-200'>LiveStudios Photography</span>
          <br />
          2019
          <br />
          Built the company's website and its accompanying backend.
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute('/about')({
  component: About,
});
