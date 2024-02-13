import FollowerButton from "../../components/FollowerButton"
import LatestViewBooks from "./LatestViewBooks"

const ProfilePage = () => {

  return (
    <div className="min-h-screen h-full">
        <div className="flex flex-col justify-center md:mt-5 items-center h-full">
            <div className="absolute bg-first/30 shadow-glow-first rounded-full min-h-56 w-56">
            </div>
            <div className="flex flex-col justify-start mt-24 mb-8 bg-[#010409]/70 backdrop-blur-lg rounded-3xl items-center min-h-dvh w-[85vw]">
                <div className="bg-second w-48 h-48 rounded-full -top-20 absolute flex justify-center items-center">
                    <img src = "https://pbs.twimg.com/profile_images/1723398974181392384/6GeSSOf8_400x400.jpg" alt="profile" className="rounded-full shadow-black shadow-lg w-40 h-40"/>
                </div>
                <FollowerButton/>
                <div className="flex justify-center items-center gap-y-4 flex-row gap-x-4 mb-8 flex-wrap">
                  <div>
                    <h1 className="text-lg font-normal text-first text-center">Latest Read</h1>
                    <div className="min-h-64 m-2 rounded-md shadow-md shadow-second md:w-[28rem] w-[75vw] bg-second">
                      <LatestViewBooks/>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-normal text-first text-center">My Favourites</h1>
                    <div className="min-h-64 m-2 rounded-md shadow-md shadow-second md:w-[28rem] w-[75vw] bg-second">
                      <LatestViewBooks/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage