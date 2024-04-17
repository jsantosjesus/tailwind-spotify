import { ChevronLeft, ChevronRight, Home as HomeIcon, Library, Play, Search } from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist Rock
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist Samba
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist Sertanejo
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist Modão
            </a>
            <a href=''>
              Playlist Raul Seixas
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='w-6 h-6 rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='w-6 h-6 rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-6'>
            <a href='#' className='bg-white/10 rounded flex items-center group gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/disco-1.webp"
                width={80}
                height={80}
                alt="Image of disc" />
                <strong>Disco 1</strong>
                <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                  <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/disco-2.webp"
                width={100}
                height={80}
                alt="Image of disc" />
                <strong>Disco 2</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/disco-3.jpg"
                width={80}
                height={80}
                alt="Image of disc" />
                <strong>Disco 3</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/disco-4.jpg"
                width={80}
                height={80}
                alt="Image of disc" />
                <strong>Disco 4</strong>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/disco-5.webp"
                width={80}
                height={80}
                alt="Image of disc" />
                <strong>Disco 5</strong>
                <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                  <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/disco-6.jpg"
                width={80}
                height={80}
                alt="Image of disc" />
                <strong>Disco 6</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
