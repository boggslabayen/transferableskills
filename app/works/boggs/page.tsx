import Image from "next/image";
import Link from "next/link";
import JobPosting from "@/app/ui/components/jobPosting";

export default function Boggs() {
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
            src="/project_assets/DisneyBanner.png"
            alt="HC app on phone"
            width={200}
            height={120}
          />

          {/* Title */}
          <div className="pl-8">
            <h3 className="font-bold md:text-3xl text-xl">
              Lead Product Designer
            </h3>
            <p>The Walt Disney Company</p>
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
            <li className="m-2 m-2 hover:text-red-400 hover:font-bold">
              Testimonial
            </li>
          </Link>

          <Link href="#posting">
            <li className="m-2 m-2 hover:text-red-400 hover:font-bold">
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
          <h3 className="font-bold pb-4 texxt-xl">
            Why I am Qualified (Boggs' Post)
          </h3>
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
            src="/project_assets/wendy.png"
            alt={"project-image"}
            width={60}
            height={60}
          />
          <h3 className="font-bold text-xl pl-4 text-white">
            Wendy’s Testimonial
          </h3>
        </div>
        <p className=" pt-4 leading-10 text-white">
          Boggs is highly-qualified for this job for the following reasons:
        </p>

        <p className=" pt-4 leading-10 text-white">
          An <span className="font-bold">EXPERIENCED professional:</span> Boggs
          has 10+ years of experience working as a professional in the user
          experience design field. He is highly experienced with the process of
          designing products from bringing out the concepts to their final
          launch, and equipped with various industry related skills including
          UX/UI design, user research, strategic planning and prototyping. He is
          also equipped with the software and tools required by the job posting.
        </p>

        <p className=" pt-4 leading-10 text-white">
          A <span className="font-bold">reliable LEADER:</span> Boggs has worked
          as a UX design lead role for more than 5 years. He excels in
          leadership, and also in time management skills. He is able to plan
          tasks ahead, manage workflows for both himself and his team members.
          As a team leader, Boggs is always highly-motivated, reliable, and
          approachable. He would test out the tasks himself before handing over
          to his team members, making sure the tasks are doable for them.
        </p>

        <p className=" pt-4 leading-10 text-white">
          A <span className="font-bold">talented COMMUNICATOR:</span> Boggs
          possesses outstanding communication skills. He acts as the icebreaker
          and saves people around from awkwardness. He is an active listener. He
          always pays full attention when others are speaking, provides positive
          feedbacks, and asks insightful questions, making the conversation
          smooth and meaningful.
        </p>

        <p className=" pt-4 leading-10 text-white">
          A <span className="font-bold">natural STORYTELLER:</span> Boggs has
          immersed himself in storytelling from a young age. He enjoys
          storytelling, and believes in the power of it. He has used it as a
          tool when introducing an idea or product to the team he worked with
          and to his clients, making it easier for them to understand the
          concept.
        </p>

        <p className=" pt-4 leading-10 text-white">
          A <span className="font-bold">passionate PROBLEM-SOLVER:</span> Boggs
          enjoys the process of problem-solving and the sense of achievement he
          gets out of it. He is proactive and would love to test out various
          possibilities in order to find better solution.
        </p>

        <p className=" pt-4 leading-10 text-white">
          Given that Boggs is an experienced professional in the industry and
          his capabilities meet the requirements of the Lead Product Designer
          role posted by Disney, I strongly believe that he should be hired for
          this job.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto md:py-8 md:px-32" id="posting">
        <h3 className="text-xl font-bold">Job Post</h3>
        <JobPosting />
      </div>
    </main>
  );
}
