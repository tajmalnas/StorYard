const FollowerButton = () => {
  return (
    <div className="flex flex-col mt-32">
        <div className="bg-second md:max-w-96 mb-2 mr-8 ml-8 mt-8 px-4 py-2  rounded-md shadow-md shadow-second">
            <div className="text-3xl flex justify-center items-center gap-2 font-normal text-center text-white mb-2">Taj Malnas <button className="bg-first py-1 px-2 rounded-md font-bold text-base text-second gap-[2px] flex justify-center items-center">
                Follow
            </button></div>
            <p className="text-sm text-gray-300">I am Writer, Creative Thinker and Dreamer I think what I write and I write What I think! </p>
        </div>
        <div className="flex justify-center items-center">
        <div className="max-w-[85vw] m-8 md:gap-x-6 gap-x-2 gap-y-4 flex items-center justify-center flex-row flex-wrap">    
            <button className="bg-second hover:cursor-pointer hover:scale-95 min-w-28 max-w-96 px-4 py-2 rounded-md shadow-sm shadow-second">
                <h3 className="text-md font-normal text-center text-white">0 Stories</h3>
            </button>
            <button className="bg-second hover:cursor-pointer hover:scale-95 max-w-96 px-4 py-2 rounded-md shadow-sm shadow-second">
                <h3 className="text-md font-normal text-center text-white">0 Followers</h3>
            </button>
            <button className="bg-second hover:cursor-pointer hover:scale-95 max-w-96 px-4 py-2 rounded-md shadow-sm shadow-second">
                <h3 className="text-md font-normal text-center text-white">0 Following</h3>
            </button>
        </div>
        </div>
    </div>
  )
}

export default FollowerButton