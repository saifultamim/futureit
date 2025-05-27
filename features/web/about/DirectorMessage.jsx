import {directorMessage,Image} from './'

const DirectorMessage = () => {
    return (
        <div>
            <section className="font-siliguri py-10 lg:mt-9">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="col-span-1 self-center">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
             {directorMessage.title}
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8  text-justify">
           {directorMessage.desc}
            </p>
          </div>

          <div className="col-span-1">
            <Image
              src={directorMessage.img}
              alt="Managing Director"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default DirectorMessage;