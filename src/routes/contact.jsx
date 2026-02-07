import { createFileRoute } from '@tanstack/react-router';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <main className='flex items-center justify-center h-full'>
      <div>
        <div className='flex items-center'>
          <FaEnvelope size={18} />
          <div className='pl-2'>Email Me</div>
        </div>

        <a href='mailto:yongee2003@gmail.com' className='text-orange-400 underline'>
          yongee2003@gmail.com
        </a>
      </div>
    </main>
  );
}

export const Route = createFileRoute('/contact')({
  component: Contact,
});
