import Image from "next/image";
import Link from "next/link";

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
        <Image
          src="/project_assets/DisneyBanner.png"
          alt="HC app on phone"
          width={1000}
          height={500}
        />
      </div>

      {/* Title */}
      <div className="py-8 max-w-screen-lg mx-auto px-8">
        <h3 className="font-bold md:text-3xl text-xl">Lead Product Designer</h3>
        <p>The Walt Disney Company</p>
      </div>

      {/* Overview */}
      <div className="md:flex max-w-screen-lg px-8 mx-auto justify-between pb-8">
        <div className="md:w-3/4 pb-8">
          <h3 className="font-bold pb-4">Why I am Qualified</h3>
          <p className="leading-loose text-justify">
            With 15 years of experience in product design, I have honed a range
            of transferable skills that are crucial for a Product Design Lead
            role. My extensive background has equipped me with a comprehensive
            understanding of the design process, from ideation to execution,
            allowing me to consistently deliver impactful and user-centric
            products. Over the years, I’ve developed an aptitude for user
            research, which enables me to understand and anticipate customer
            needs. This insight has been invaluable in creating designs that
            enhance user satisfaction while meeting business objectives.
            Collaboration and leadership are among the core skills I bring to
            this role. Working across multidisciplinary teams has taught me how
            to bridge the gap between design and development, ensuring seamless
            integration of feedback and ideas from stakeholders. I prioritize
            open communication and foster a collaborative environment where each
            team member feels valued. My experience as a leader has also given
            me the ability to mentor and develop junior designers, guiding them
            to produce high-quality work while encouraging their growth in the
            field. In addition, my strong project management skills have been
            instrumental in handling complex projects with tight deadlines. I am
            adept at prioritizing tasks, managing resources, and adapting to
            challenges, which has helped me maintain a high standard of work
            while meeting critical timelines. This combination of design
            expertise, leadership, and project management makes me well-prepared
            to lead product design initiatives, ensuring alignment with both
            user needs and business goals.
          </p>
        </div>
        <div>
          <h3 className="font-bold pb-4">Qualifications</h3>
          <ul className="list-disc list-inside leading-loose">
            <li>Qualification 1</li>
            <li>Qualification 2</li>
            <li>Design Manager</li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}

      <div className="md: max-w-screen-lg px-8 mx-auto justify-between py-8 border-2 rounded-md">
        <div className="flex items-center">
          <Image
            src="/project_assets/wendy.png"
            alt={"project-image"}
            width={60}
            height={60}
          />
          <h3 className="font-bold text-xl pl-4">Wendy’s Testimonial</h3>
        </div>
        <p className=" mt-4 leading-10">
          I wholeheartedly recommend Wendy as a standout candidate for the Staff
          Experience Designer position at Airbnb. Wendy brings an exceptional
          ability to build genuine, emotional connections with individuals,
          ensuring each interaction feels meaningful. She has a natural ease in
          creating a positive impact within communities and excels at
          understanding diverse perspectives, which allows her to curate
          experiences that are both inclusive and personalized. With a proven
          track record of strategic thinking, Wendy blends creative vision with
          high-level decision-making to tackle complex challenges. She
          consistently demonstrates accountability and is dedicated to
          delivering top-quality results in every project she undertakes. Her
          skill in problem-solving is matched by her capacity to think
          critically and adaptively, which ensures that her solutions are
          innovative yet practical for Airbnb&apos;s fast-paced environment.
          Wendy’s leadership qualities are also noteworthy. As a natural-born
          leader, she not only motivates her team but also fosters strong,
          trusting relationships with her colleagues. Her ability to connect
          with people and nurture productive working dynamics is second nature,
          making her an ideal candidate to drive a collaborative and supportive
          culture at Airbnb. I have no doubt that Wendy’s unique blend of
          interpersonal, strategic, and creative skills will allow her to thrive
          in shaping an exceptional staff experience at Airbnb.
        </p>
      </div>
    </main>
  );
}
