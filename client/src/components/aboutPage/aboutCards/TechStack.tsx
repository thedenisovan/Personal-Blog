import svgObject from '../../../utils/svgObject';

export default function TechStack() {
  return (
    <div className='hover:shadow-xl transition-all group dark:text-gray-200 dark:border-slate-700 dark:bg-slate-800 border-slate-300 border rounded-2xl p-8 shadow-sm'>
      <header className='flex items-center gap-3 mb-6!'>
        <div className='group-hover:scale-120 transition-transform duration-300 dark:bg-pink-900/60 bg-purple-100 rounded-lg flex items-center justify-center w-12 h-12 '>
          <img width={30} src={svgObject.code} alt='heart svg' />
        </div>
        <h3 className=' text-xl font-bold text-gray-900 dark:text-white'>
          Tech Stack
        </h3>
      </header>
      <div className='flex flex-wrap gap-3'>
        {/* Programming Languages */}
        <StackItem tech='TypeScript' />

        {/* Backend */}
        <StackItem tech='Node.js' />
        <StackItem tech='Express.js' />
        <StackItem tech='REST APIs' />

        {/* Database */}
        <StackItem tech='PostgreSQL' />

        {/* Styling & UI */}
        <StackItem tech='Tailwind CSS' />
        {/* Frameworks & Libraries */}
        <StackItem tech='React' />

        {/* Version Control */}
        <StackItem tech='Git' />
        {/* Build Tools & Workflow */}
        <StackItem tech='Vite' />
      </div>
    </div>
  );
}

function StackItem({ tech }: { tech: string }) {
  return (
    <div>
      <span className='px-3 py-1.5 hover:cursor-default bg-gradient-to-r from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors'>
        {tech}
      </span>
    </div>
  );
}
