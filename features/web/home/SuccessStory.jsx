
import {SuccessStoryCard,displayedSuccessStories} from ".";

const SuccessStory = () => {


  return (
    <>
      <section className="bg-[#FDFCF6] py-10">
        <div className="container w-11/12 lg:px-6 mx-auto">
          <div className="text-center leading-tight mb-8">
            <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">সাফল্যের গল্প</h2>
            <p className="text-[#605F62] font-inter text-base">
              আমাদের দৃঢ়প্রতিজ্ঞ শিক্ষার্থীদের সফলতার গল্প শুনুন ওদের কাছ
              থেকেই।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {displayedSuccessStories &&
              displayedSuccessStories.map((successStory,idx) => (
                <SuccessStoryCard
                  key={idx}
                  successStory={successStory}
                />
              ))}
          </div>

          {displayedSuccessStories?.length > 9 ? (
            <div className="mt-8 flex justify-center items-center">
              <button className="bg-[#EE3373] w-[100px] md:w-[150px] h-[30px] md:h-[44px] flex justify-center items-center rounded-md text-white font-sm font-medium">
                আরো দেখুন
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
export default SuccessStory;