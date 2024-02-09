const features = [
    {
        title: "Customizable Profiles",
        description: "Personalize your profile with a bio and profile picture to showcase your unique writing style..",
        image: "../../../public/assets/features/undraw_sign_up_n6im.svg",
    },
    {
        title: "Story Drafts",
        description: "Work on your stories at your own pace with the ability to save drafts and pick up where you left off",
        image: "../../../public/assets/features/undraw_wait_in_line_o2aq.svg",
    },
    {
        title: "Collaborative Storytelling",
        description: "Team up with fellow writers to co-create captivating stories togethe",
        image: "../../../public/assets/features/undraw_coffee_with_friends_3cbj.svg",
    },
    {
        title: "Writing Challenges",
        description: "Participate in writing challenges and prompts to spark your creativity and receive community feedback",
        image: "../../../public/assets/features/undraw_learning_sketching_nd4f.svg",
    },
    {
        title: "Author Insights",
        description: "Gain valuable insights into your stories' performance with analytics on views, likes, and comments",
        image: "../../../public/assets/features/undraw_diary_re_4jpc.svg",
    },
    {
        title: "Story Recommendations",
        description: "Discover new stories tailored to your interests with personalized recommendations based on your reading history",
        image: "../../../public/assets/features/undraw_counting_stars_re_smvv.svg",
    }
]

const Features = () => {
    return (
      <div className="flex justify-center items-center mt-8 mb-12">
        <div className="w-[85vw] bg-gradient-to-br from-first/90 to-first/40 rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-second text-3xl font-bold mb-6">What You{`'`}ll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-12">
            {features.map((feature)=>{
                return(
                    <div key={feature.title} className="hover:scale-95 flex flex-col items-center p-4 bg-second rounded-xl shadow-xl">
                        <img src={feature.image} alt="Feature 1" className="h-44 p-6" />
                        <h3 className="text-xl text-first/80 text-center font-medium mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                )
            })}
           
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  