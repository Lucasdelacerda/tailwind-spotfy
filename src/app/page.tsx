import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipForward, SkipBackIcon, RepeatIcon, Mic2, LayoutListIcon, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <aside className="w-72 bg-zinc-950 p-6">

          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-200 '><Search /> Search</a>
            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-200 '><HomeIcon /> Home</a>
            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-200 '><Library />Your Library</a>
          </nav>
          <nav className='mt-6  pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot hits Brasil  </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk  </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist  </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist  </a>

          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className='  rounded-full bg-black/40 p-1'><ChevronLeft /></button>
            <button className='  rounded-full bg-black/40 p-1'><ChevronRight /></button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/1 0 transition-colors'>
              <Image src="/album.png" width={104} height={104} alt="capa do album" />
              <strong>Melting</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-2 xl mt-10">Made for Lucas de Lacerda</h1>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href='#' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.png" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Melting</strong>
              <span className='text-sm text-zinc-400'>Mamamoo,Foo fighters</span>

            </a>
            <a href='#' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.png" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Melting</strong>
              <span className='text-sm text-zinc-400'>Mamamoo,Foo fighters</span>

            </a>
            <a href='#' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.png" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Melting</strong>
              <span className='text-sm text-zinc-400'>Mamamoo,Foo fighters</span>

            </a>
            <a href='#' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.png" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Melting</strong>
              <span className='text-sm text-zinc-400'>Mamamoo,Foo fighters</span>

            </a>
            <a href='#' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.png" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Melting</strong>
              <span className='text-sm text-zinc-400'>Mamamoo,Foo fighters</span>

            </a>

          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700  px-6 flex items-center justify-between position-fixed bottom-0 w-full p-3">
        <div className='flex items-center gap-3'>
          <Image src="/album.png" className="w-full" width={56} height={56} alt="capa do album" />
          <div className='flex flex-col '>
            <strong className="font-normal">Melting</strong>
            <span className="text-xs text-zinc-400">Mamamoo</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBackIcon size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto '>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <RepeatIcon size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:34</span>
            <div className='h-1 w-96 rounded-full bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2 :14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutListIcon size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 w-24 rounded-full bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
