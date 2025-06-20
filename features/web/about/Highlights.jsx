import { highlights, Image } from "./";

const Highlights = () => {
  return (
    <div>
      <section className="font-siliguri bg-primary py-10">
        <div className="container px-3 mx-auto">
          {highlights?.map((params, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14 "
            >
              <div
                className={`col-span-1 ${
                  idx % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
                  {params?.title}
                </h3>
                <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
                  {params?.desc}
                </p>
                {params?.items && (
                  <ul className="list-disc list-inside text-[#605f62] mb-8 space-y-2">
                    {params?.items.map((item, idx) => (
                      <li key={idx} className="leading-normal md:leading-7 font-medium text-justify">
                        <strong>{item?.title}</strong> {item?.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                className={`col-span-1 my-auto hidden md:block ${
                  idx % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={params?.img}
                  alt={params?.title}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md "
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Highlights;
