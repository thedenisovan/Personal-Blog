export default function CallToAction() {
  return (
    <div className='text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl'>
      <h3 className='text-3xl font-bold mb-4'>Let's Connect!</h3>
      <p className='text-blue-100 2xl:text-lg mb-6! max-w-2xl mx-auto! mt-4!'>
        I'm always excited to connect with fellow developers, designers, and
        tech enthusiasts. Feel free to reach out if you want to collaborate or
        just chat!
      </p>
      <div className='flex items-center justify-center gap-4'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/dainis-dilevka-961a332b4/'
          className='px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg'
        >
          My LinkedIn
        </a>

        <a
          href='https://github.com/thedenisovan?tab=overview&from=2025-08-01&to=2025-08-12'
          target='_blank'
          className='px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors'
        >
          View my work
        </a>
      </div>
    </div>
  );
}
