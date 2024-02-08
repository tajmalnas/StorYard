import '../styles/Header.css'
const Header = () => {
  return (
    <div className='max-w-[100vw]'>
        <div className="flex flex-col py-4 space-y-6 md:h-128 md:py-16 md:flex-row md:items-center ">
        <div className="flex flex-col items-center justify-center w-full md:flex-row md:w-2/3">
            <div className="max-w-xl px-8">
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">The Best Story Reading and Writing Platform</h1>
                <p className="mt-4 text-gray-600 mb-4 dark:text-gray-300">Welcome to Storyard: Where imagination meets storytelling. Explore, create, and share your tales with our vibrant community. Join us on a journey through boundless creativity and let the world know your stories.</p>
                <div className="mt-6">
                    <button className="block px-3 py-2 font-semibold text-center transition-colors duration-200 border-green-400 border-2 transform bg-first rounded-md md:inline hover:scale-95 hover:bg-first/90 text-black">Click To Begin Your Journey On StorYard</button>
                </div>
            </div>
        </div>
        
        <div className="relative flex items-center justify-end w-full h-96 md:w-1/3">
            <img className="object-cover w-full h-full max-w-md animate-up-down rounded-md" src="../../public/assets/_0869f2aa-e127-4e66-92d2-e9affcc08cac-removebg.png" alt="apple watch photo"/>
        </div>
    </div>
    </div>
  )
}

export default Header