import Image from "next/image";
import Link from "next/link";
import JobPosting2 from "@/app/ui/components/jobPosting2";

export default function Wendy() {
  return (
    <main>
      {/* Header Image */}
      <div className="max-w-screen-xl mx-auto md:py-8 py-2 md:px-32 ">
        <div className="pb-4 hover:text-orange-600">
          <Link href="/">
            <p className="font-semibold text-lg">Back to Home</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Image
            src="/project_assets/AirbnbBanner.png"
            alt="HC app on phone"
            width={200}
            height={120}
          />

          {/* Title */}
          <div className="pl-8">
            <h3 className="font-bold md:text-3xl text-xl">
              Staff Experience Designer
            </h3>
            <p>Airbnb</p>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}

      <div className="max-w-screen-xl mx-auto md:py-8 md:px-32">
        <ul className="flex">
          <Link href="#qualified">
            <li className="m-2 hover:text-red-400 hover:font-bold">
              Why Am I Qualified
            </li>
          </Link>

          <Link href="#testimonial">
            <li className="m-2  hover:text-red-400 hover:font-bold">
              Testimonial
            </li>
          </Link>

          <Link href="#posting">
            <li className="m-2  hover:text-red-400 hover:font-bold">
              Job Posting
            </li>
          </Link>
        </ul>
      </div>

      {/* Why am I Qualified */}
      <div
        className="max-w-screen-xl mx-auto md:py-8 py-2 md:px-32"
        id="qualified"
      >
        <div className="pb-8">
          <h3 className="font-bold pb-4">Why I am Qualified (Wendy's Post)</h3>
          <p className="leading-loose text-justify pb-4">
            With 15 years of experience in product design, I am well-prepared to
            lead design initiatives at the Walt Disney Company. My journey has
            been marked by a deep commitment to the principles of effective
            design, continually guiding teams to understand its true impact. I
            am dedicated to fostering growth, refining processes, and inspiring
            excellence. This commitment has helped me lead efficiently and drive
            high-quality results across diverse industries, aligning closely
            with Disney's standards of leadership and innovation.
          </p>

          <p className="leading-loose text-justify pb-4">
            My work is rooted in a user-centered approach, as I am genuinely
            motivated by understanding and addressing the needs of the people I
            design for. Empathy is at the core of my process, enabling me to
            develop solutions that resonate with users on a deeper level. This
            people-first mindset, combined with a collaborative approach, has
            allowed me to successfully engage and motivate diverse,
            multidisciplinary teams, creating an inclusive environment that
            fosters creativity.
          </p>

          <p className="leading-loose text-justify pb-4">
            I am passionate about leading design thinking sessions and believe
            that innovative solutions can arise from anyone on the team. I
            actively seek diverse perspectives, and my extensive experience
            collaborating across countries and cultures has equipped me to
            deliver outstanding results that reflect a wide range of insights
            and approaches.
          </p>

          <p className="leading-loose text-justify pb-4">
            Balancing empathy with analytical thinking, I ground my design
            decisions in both intuition and data-driven insights. This dual
            approach ensures that my solutions are not only meaningful but also
            highly effective. My adaptability and commitment to continuous
            learning allow me to draw on new experiences, refine processes, and
            keep my skills aligned with industry trends.
          </p>

          <p className="leading-loose text-justify pb-4">
            A natural storyteller, I communicate ideas clearly, inspiring others
            and fostering collaboration. This ability to articulate vision and
            strategy effectively makes me a highly qualified candidate to lead
            product design at Disney, where exceptional storytelling and
            user-centered innovation are essential.
          </p>
        </div>
      </div>

      {/* Testimonials */}

      <div
        className="max-w-screen-xl mx-auto md:py-16 md:px-32 bg-red-400"
        id="testimonial"
      >
        <div className="flex items-center">
          <Image
            src="/project_assets/boggs.png"
            alt={"project-image"}
            width={60}
            height={60}
          />
          <h3 className="font-bold text-xl pl-4 text-white">
            Boggs' Testimonial
          </h3>
        </div>
        <p className=" mt-4 leading-10 text-white">
          I am pleased to recommend Wendy for the Staff Experience Designer role
          at Airbnb. Wendy’s background as a project manager has provided her
          with versatile skills in building strong relationships and fostering
          meaningful connections with a diverse range of people, including
          clients and colleagues. She adapts quickly to new environments and
          handles challenges with resilience, as shown when she joined our class
          a few weeks late and seamlessly integrated on her first day. Her
          ability to collaborate with various teams and stakeholders is a
          valuable asset, enabling her to engage effectively across disciplines.
          In addition to her relationship-building skills, Wendy is a strategic
          thinker with a creative vision and an investigative approach to
          problem-solving. Her journalism experience has enhanced her ability to
          ask insightful questions and to approach challenges with empathy,
          equipping her to develop thoughtful, user-centered solutions. Wendy’s
          natural storytelling ability also makes her an influential
          communicator, allowing her to share ideas persuasively and inspire
          others. These skills, combined with her confidence in making sound
          decisions and her strong sense of accountability, make Wendy an
          exceptional candidate for Airbnb. She brings a unique blend of
          adaptability, empathy, and strategic insight that will enable her to
          create meaningful staff experiences and contribute positively to the
          team.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto md:py-8 md:px-32" id="posting">
        <h3 className="text-xl font-bold">Job Post</h3>
        <JobPosting2 />
      </div>
    </main>
  );
}
