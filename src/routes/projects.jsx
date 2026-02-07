import { createFileRoute } from '@tanstack/react-router';
import TypescriptIcon from '../icons/TypescriptIcon';
import ReactIcon from '../icons/ReactIcon';
import VuejsIcon from '../icons/VuejsIcon';
import PythonIcon from '../icons/PythonIcon';
import RustIcon from '../icons/RustIcon';
import DjangoIcon from '../icons/DjangoIcon';
import AwsIcon from '../icons/AwsIcon';
import FirebaseIcon from '../icons/FirebaseIcon';
import MariadbIcon from '../icons/MariadbIcon';
import BunIcon from '../icons/BunIcon';
import ConvexIcon from '../icons/ConvexIcon';

function Projects() {
  return (
    <main className='min-h-full'>
      <div className='container mx-auto pt-12 md:pt-16 px-6 md:px-10 pb-12'>
        <h1 className='text-3xl font-bold text-white'>My Projects Include...</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pt-6'>
          {/* chips.chat */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>chips.chat</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/chipschat.webp'
                  alt='chips.chat Website'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  An LLM app that reduces costs by 80% through a pay-per-use model.
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <ReactIcon />
                    ReactJS
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <ConvexIcon />
                    Convex
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phluid Worldwide */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>Phluid Worldwide</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/phluid.webp'
                  alt='Phluid Worldwide Application'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  A mobile app that links domestic helpers with employers through the use of AI.
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <MariadbIcon className='pr-1 mx-1 inline-block invert' />
                    MariaDB
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <BunIcon />
                    Bun
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <VuejsIcon />
                    VueJS
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <FirebaseIcon />
                    Firebase
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <AwsIcon />
                    AWS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HG-DB */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>HG-DB</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/hgdb.webp'
                  alt='HG-DB Database'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  Database software used by non-profit organisations to manage and consolidate their
                  data.
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon className='pr-1 inline-block' />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <RustIcon className='pr-1 mx-1 inline-block invert' />
                    Rust
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <VuejsIcon />
                    VueJS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CGPSDO Training */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>CGPSDO Training</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/cgpsdo.webp'
                  alt='CGPSDO Training website'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  A Learning Management System used by the Singapore Government
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <DjangoIcon className='pr-1 inline-block invert' />
                    Django
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <ReactIcon />
                    ReactJS
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <AwsIcon />
                    AWS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Management System */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>Keys</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/keys.webp'
                  alt='Keys website'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>A system to streamline the management of physical keys.</div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <VuejsIcon />
                    VueJS
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <FirebaseIcon />
                    Firebase
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emotions.ml */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>Emotions.ml</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/emotions.webp'
                  alt='Emotions.ml Website'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  A website that allows users to use AI to analyse emotions in real time. Awarded
                  first place in the YDSP AI Competition 2019
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <PythonIcon className='pr-1 inline-block' />
                    Python
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <ReactIcon />
                    ReactJS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EduPass */}
          <div className='flex flex-col'>
            <h1 className='text-gray-300 font-bold pb-2'>EduPass</h1>
            <div className='flex-1 rounded-3xl overflow-clip border border-slate-800 bg-[#131d35]'>
              <div className='h-52 overflow-hidden border-b border-slate-800'>
                <img
                  className='object-cover object-top w-full h-full'
                  src='/edupass.webp'
                  alt='EduPass Website'
                />
              </div>
              <div className='px-8 py-5'>
                <div className='pb-1'>
                  An all-in-one hardware and software system for managing students. Awarded first
                  place in the Build On, Singapore 2020 Hackathon
                </div>
                <div className='flex flex-wrap'>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <TypescriptIcon className='pr-1 inline-block' />
                    TypeScript
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <RustIcon className='pr-1 mx-1 inline-block invert' />
                    Rust
                  </div>
                  <div className='flex items-center bg-slate-800 px-2 py-1 text-sm inline-block rounded-2xl border border-slate-700 mr-2 mt-2 w-max gap-1'>
                    <VuejsIcon />
                    VueJS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute('/projects')({
  component: Projects,
});
