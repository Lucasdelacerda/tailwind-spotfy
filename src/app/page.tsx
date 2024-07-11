import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipForward, SkipBackIcon, RepeatIcon, Mic2, LayoutListIcon, Laptop2, Volume, Maximize2, Plus, Globe, Instagram, InstagramIcon, TwitchIcon, FacebookIcon, LucideTwitch, Twitter } from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <aside className="w-max h-screen bg-zinc-950 p-2">

          <nav className=' flex flex-col items-left gap-5 bg-zinc-900 p-5 rounded-md w-80'>


            <a href="" className='flex items-center gap-3 text-1x1  font-semibold text-zinc-400 white-hover'><HomeIcon /> Início</a>
            <a href="" className='flex items-center gap-3 text-1x1  font-semibold text-zinc-400  white-hover'><Search /> Procurar</a>
          </nav>
          <nav className='flex flex-col items-left gap-5 bg-zinc-900 p-2 pr-0 rounded-md mt-2 h-full w-80'>
            <a href="" className='flex items-center gap-3 text-1x1  font-semibold text-zinc-400 ml-3 mt-3 white-hover '><Library />A tua Biblioteca <span className='ml-auto'> < Plus /> </span> </a>
            <ul className=' scroll-container gap-3 flex flex-col overflow-x-auto  h-[140px]' >
              <li className='flex flex-col gap-3 bg-zinc-800 p-4 rounded-md w-[100%]'>
                <strong className='font-semibold text-3x1 text-zinc-200 biblioteca'>Cria tua primeira playlist</strong>
                <p className='text-xs text-zinc-200'>É fácil, nós ajudamos</p>
                <a href="" className='rounded-full bg-white text-black p-2  pl-4 pr-4 font-bold mt-1 text-sm w-max escala' >Criar playlist</a>
              </li>
              <li className='flex flex-col gap-3 bg-zinc-800 p-4 rounded-md w-[100%]'>
                <strong className='font-semibold text-3x1 text-zinc-200 '>Podcast para seguires</strong>
                <p className='text-xs text-zinc-200'>Vamos atualizar-te sobre novos episódios</p>
                <a href="" className='rounded-full bg-white text-black p-2  pl-4 pr-4 font-bold mt-1 text-sm w-max escala' >Procurar podcasts</a>
              </li>
            </ul>
            <div className='flex flex-wrap gap-3 p-4'>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Legal</a>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Segurança e Centro de privacidade</a>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Politica de privacidade</a>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Cookies</a>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Sobre anúncios</a>
              <a href="" className='text-zinc-400  text-xs biblioteca'>Acessibilidade</a>

              <a href="" className='text-zinc-400  text-xs biblioteca'>Cookies</a>
            </div>
            <span className=' flex flex-row rounded-full  gap-1 border-2 border-white text-white p-1 ml-4  pl-4 pr-4 font-bold mt-1 text-sm w-max escala'><Globe />Português</span>
          </nav>
        </aside>

        <main className="flex-1  bg-zinc-900   mt-2 rounded-md mx-auto mx-auto scroll-container overflow-x-auto h-screen pb-60">

          <div className="flex items-center gap-4  bg-zinc-900 p-4 sticky   top-0 w-full z-10">

            <button className='  rounded-full bg-black/40 p-1'><ChevronLeft /></button>
            <button className='  rounded-full bg-black/40 p-1'><ChevronRight /></button>
            <a href="" className=' font-semibold text-zinc-400 ml-auto text-sm hover:text-white'>Registra-te</a>
            <a href="" className='bg-white text-black font-semibold  p-3 pl-6 pr-6 rounded-full text-sm escala'>Iniciar sessão</a>


          </div>
          <div className='flex p-4 justify-between items-center '>
            <h1 className="font-semibold text-2xl   biblioteca">Artistas Populares</h1>
            <span className=" text-sm font-semibold text-zinc-300  mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row  mt-4 p-4 justify-between ">
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='flex flex-col justify-center  group gap-1 relative hover: p-2 rounded-md'>
              <Image src="/500x500.jpg" className='rounded-full ' width={154} height={154} alt="capa do album" />
              <strong className='text-zinc-300'>Zé Neto & Cristiano</strong>
              <span className='text-sm text-zinc-400'>Artista</span>
              <button className='w-12 h-12 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>

          </div>
          <div className='flex p-4 justify-between items-center'>
            <h1 className="font-semibold text-2xl mt-10  biblioteca">Albuns populares</h1>
            <span className=" text-sm font-semibold text-zinc-300 mt-10 mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row gap-4 mt-4 p-4 justify-between">
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <div className='flex p-4 justify-between items-center'>
            <h1 className="font-semibold text-2xl   biblioteca">Rádio popular</h1>
            <span className=" text-sm font-semibold text-zinc-300  mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row gap-4 mt-4 p-4 justify-between">
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <div className='flex p-4 justify-between items-center'>
            <h1 className="font-semibold text-2xl  biblioteca">Episódios populares</h1>
            <span className=" text-sm font-semibold text-zinc-300 mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row gap-4 mt-4 p-4 justify-between">
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <div className='flex p-4 justify-between items-center'>
            <h1 className="font-semibold text-2xl   biblioteca">Tops em destaque</h1>
            <span className=" text-sm font-semibold text-zinc-300  mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row gap-4 mt-4 p-4 justify-between">
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <div className='flex p-4 justify-between items-center'>
            <h1 className="font-semibold text-2xl  biblioteca">Playlist do spotify</h1>
            <span className=" text-sm font-semibold text-zinc-300 mostrar-tudo">Mostrar tudo</span>

          </div>
          <div className="flex flex-row gap-4 mt-4 p-4 justify-between">
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className=' rounded-md p-2 flex  group flex-col gap-2 items-left  jutify-center relative'>
              <Image src="/album.png" className="rounded" width={130} height={130} alt="capa do album" />
              <strong className='text-zinc-300 font-normal w-10'>Melting</strong>
              <span className='text-sm text-zinc-400 w-10'>Mamamoo</span>
              <button className='w-10 h-10 flex items-center justify-center play-button pl-1 rounded-full bg-green-400 text-black absolute right-0 invisible bottom-12 group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <ul className='grid grid-cols-5 gap-4 p-4 mt-10'>
            <li className='flex flex-col gap-3 text-sm '>
              <strong className='text-white font-semibold'>Empresa</strong>
              <h3 className='text-zinc-400 biblioteca'>Sobre</h3>
              <h3 className='text-zinc-400 biblioteca'>Empregos</h3>
              <h3 className='text-zinc-400 biblioteca'>For the Record</h3>
            </li>
            <li className='flex flex-col gap-3 text-sm '>
              <strong className='text-white font-semibold'>Comunidades</strong>
              <h3 className='text-zinc-400 biblioteca'>Para Artistas</h3>
              <h3 className='text-zinc-400 biblioteca'>Desenvolvedores</h3>
              <h3 className='text-zinc-400 biblioteca'>Publicidade</h3>
              <h3 className='text-zinc-400 biblioteca'>Investidores</h3>
              <h3 className='text-zinc-400 biblioteca'>Fornecedores</h3>
            </li>
            <li className='flex flex-col gap-3 text-sm '>
              <strong className='text-white font-semibold'>Links Úteis</strong>
              <h3 className='text-zinc-400 biblioteca'>Suporte</h3>
              <h3 className='text-zinc-400 biblioteca'>Aplicativo móvel gratis</h3>

            </li>
            <li className='flex flex-col gap-3 text-sm '>
              <strong className='text-white font-semibold'>Planos Spotify</strong>
              <h3 className='text-zinc-400 biblioteca'>Premium Individual</h3>
              <h3 className='text-zinc-400 biblioteca'>Premium Duo</h3>
              <h3 className='text-zinc-400 biblioteca'>Premium Familia</h3>
              <h3 className='text-zinc-400 biblioteca'>Premium Universitário</h3>
              <h3 className='text-zinc-400 biblioteca'>Spotify Free</h3>
            </li>
            <li className='flex  gap-3 text-sm'>
              <a href="" className=' bg-zinc-800 rounded-full flex justify-center items-center w-10 h-10 hover:bg-zinc-500'>

                <InstagramIcon size={20} />
              </a>
              <a href="" className=' bg-zinc-800 rounded-full flex justify-center items-center w-10 h-10 hover:bg-zinc-500'>

                <Twitter size={20} />
              </a>
              <a href="" className=' bg-zinc-800 rounded-full flex justify-center items-center w-10 h-10 hover:bg-zinc-500'>

                <FacebookIcon size={20} />
              </a>
            </li>
          </ul>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700  px-6 flex items-center justify-between fixed bottom-0 w-full p-3">
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
