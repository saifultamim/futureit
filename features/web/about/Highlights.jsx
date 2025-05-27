import {highlights,Image} from './'

const Highlights = () => {
    return (
        <div>
             {/* Facilities */}
    <section className="font-siliguri bg-primary py-10">
      <div className="container px-3 mx-auto">
        {/* ============================== */}
       {
        highlights?.map((params,idx)=>(
  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14 ">
    {/* text section */}
          <div className={`col-span-1 ${idx % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              {params?.title}
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
             {params?.desc}
            </p>
            {
                params?.items && <ul className="list-disc list-inside text-[#605f62] mb-8 space-y-2">
                    {
                        params?.items.map((item,idx)=>(
                             <li className="leading-normal md:leading-7 font-medium text-justify">
                <strong>{item?.title}</strong> {item?.desc}
              </li>
                        ))
                    }
            </ul>
            }
            
          </div>
          {/* image section */}
          <div className={`col-span-1 hidden md:block ${idx % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
            <Image
              src={params?.img}
              alt={params?.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md "
            />
          </div>
        </div> 
        ))
   
       }
       {/* ============================== */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14">
          <div className="col-span-1">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              Career Opportunities
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
              In addition to providing top-notch training, Future IT & Language
              Training Institute is committed to assisting students in achieving
              their career goals. Our career services department offers a range
              of resources and support to help students succeed in the job
              market, including:
            </p>
            <ul className="list-disc list-inside text-[#605f62] mb-8 space-y-2">
              <li className="leading-normal md:leading-7 font-medium text-justify">
                <strong>Resume Writing Workshops:</strong> Guidance on crafting
                professional resumes that highlight skills and accomplishments.
              </li>
              <li className="leading-normal md:leading-7 font-medium text-justify">
                <strong> Interview Preparation:</strong> Mock interviews and
                coaching to help students develop strong interview skills and
                confidence.
              </li>
              <li className="leading-normal md:leading-7 font-medium text-justify">
                <strong> Job Placement Assistance:</strong> Networking
                opportunities, job fairs, and connections with employers seeking
                qualified candidates.
              </li>
              <li className="leading-normal md:leading-7 font-medium text-justify">
                <strong>Alumni Network:</strong> Access an extensive alumni
                network for mentorship and professional development
                opportunities.
              </li>
            </ul>
          </div>
          <div className="col-span-1 hidden md:block">
            <Image
              src="/images/tech/Career.jpg"
              alt="Career Opportunities"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14">
          <div className="col-span-1">
            <Image
              src="/images/tech/corporate-training.webp"
              alt="Corporate Training"
              width={500}
              height={500}
              className="rounded-lg shadow-md hidden md:block"
            />
          </div>
          <div className="col-span-1">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              Corporate Training
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
              Future IT Language Training Institute also offers customized
              training solutions for corporate clients looking to upskill their
              workforce. Our corporate training programs are tailored to each
              organization's specific needs and objectives and cover a wide
              range of topics, such as IT skills enhancement, language
              proficiency, and professional development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14">
          <div className="col-span-1">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              Accreditation and Affiliations
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
              Future IT Language Training Institute is proud to be accredited by
              E-cab (E-commerce association of Bangladesh), ensuring that our
              courses meet the highest standards of quality and excellence. We
              are also affiliated with leading industry organizations and
              professional associations, enabling us to stay abreast of the
              latest trends and developments in IT and language education.
            </p>
          </div>
          <div className="col-span-1 hidden md:block">
            <Image
              src="/images/tech/accreditation.jpg"
              alt="Accreditation"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4 md:mb-14">
          <div className="col-span-1 hidden md:block">
            <Image
              src="/images/tech/community-engagement.jpg"
              alt="Community Engagement"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="col-span-1">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              Community Engagement
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
              As a socially responsible organization, Future IT Language
              Training Institute is committed to giving back to the community.
              We actively participate in various outreach initiatives, such as
              offering scholarships to deserving students, organizing free
              workshops and seminars, and partnering with local organizations to
              promote education and skill development in underprivileged
              communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="col-span-1">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              Completion
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
              Future IT Language Training Institute is more than just a place to
              acquire knowledge; it's a hub of learning, innovation, and
              professional growth. Whether you want to enhance your technical
              skills in information technology or broaden your linguistic
              horizons through language learning, we have the resources,
              expertise, and passion to help you succeed. Join us on a journey
              of discovery and transformation as we pave the way for a brighter
              future together.
            </p>
          </div>
          <div className="col-span-1 self-center hidden md:block">
            <Image
              src="/images/logo.png"
              alt="Testimonials"
              width={500}
              height={500}
              className="rounded-lg w-96 mx-auto"
            />
          </div>
        </div> */}
      </div>
    </section>
        </div>
    );
};

export default Highlights;