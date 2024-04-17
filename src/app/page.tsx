import { Home as HomeIcon, Library, Search } from 'lucide-react'

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
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
          <a href=''>
            Playlist Rock
          </a>
          <a href=''>
            Playlist Samba
          </a>
          <a href=''>
            Playlist Sertanejo
          </a>
          <a href=''>
            Playlist Modão
          </a>
          <a href=''>
            Playlist Raul Seixas
          </a>
          </nav>
        </aside>
      <main className="flex-1 p-6">
        main
      </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
