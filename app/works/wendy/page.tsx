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
          <h3 className="font-bold pb-4 text-xl">
            Why I am Qualified (Wendy's Post)
          </h3>

          <p className="leading-loose text-justify pb-4">
            I am qualified for the Staff Experience Designer role with Airbnb
            for the following reasons:
          </p>

          <p className="leading-loose text-justify pb-4">
            <span className="font-bold">COMMUNICATION skill:</span> Having been
            educated and worked as an investigative journalist, I am used to
            communicating with people with various backgrounds. I am capable of
            keeping conversations comfortable and meaningful. This will help me
            build strong relationships with both my colleagues, stakeholders,
            and clients.
          </p>

          <p className="leading-loose text-justify pb-4">
            <span className="font-bold">
              WORK-SCOPING and PROBLEM-SOLVING skill:
            </span>{" "}
            I am experienced as a project manager for various kinds of projects
            including audio/video production, exhibition curation, and magazine
            publication. I was able to understand the responsibility and working
            methods of each member within the team, and also able to manage
            their workflow within the timeline of the project. Whenever there
            was a blocker, I was always active, negotiating and finding the best
            possible solution for the problem.
          </p>

          <p className="leading-loose text-justify pb-4">
            <span className="font-bold">STORYTELLING skill:</span> I have
            expertise in storytelling and I know perfectly well how to convey my
            message in a clear and powerful way. This will be of great help when
            I present my idea to others as I am able to make complex concepts
            easier for my audiences to understand and digest.
          </p>

          <p className="leading-loose text-justify pb-4">
            <span className="font-bold">COLLABORATING skill:</span> Throughout
            my previous working experiences, I was highly involved in
            collaborative working and I was comfortable in that setting. I enjoy
            working closely with people with different backgrounds and of
            various expertise. It is a pleasure for me to see how ideas collide
            and become new, creative insights.
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
