
import Image from "next/image";

export default function HomeEventSection() {
  const events = [
    {id:1,img:'/images/events/event.png'},
     {id:2,img:'/images/events/event1.png'},
      {id:3,img:'/images/events/event2.png'},
  ]
  return (
    <section className="py-10">
      <div className="container w-11/12 lg:px-6 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-siliguri">ইভেন্ট এবং কার্যকলাপ</h2>
          <p className="text-base text-gray-600 font-siliguri">
            আমাদের ফটো গ্যালারিতে দেখে আসুন আমাদের ইভেন্টস ও অর্জন সমূহ
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {events?.map((event) => (
            <div key={event?.id} className="w-full h-auto">
              <Image
                src={event?.img}
                width={300}
                height={300}
                alt="event"
                className="h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
