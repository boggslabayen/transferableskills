import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const projectCards = [
  {
    id: 1,
    image: "/project_assets/Airbnb.png",
    projectTitle: "Staff Experience Designer",
    projectDescription: "Airbnb",
    projectBlurb:
      "The Staff Experience Designer role with Airbnb is centered around design leadership, innovation, and strategic partnerships.",
    link: "/wendy",
  },
  {
    id: 2,
    image: "/project_assets/Disney.png",
    projectTitle: "Product Design Lead",
    projectDescription: "Walt Disney",
    projectBlurb:
      "Lead Product Designer role with The Walt Disney Company is for someone experienced in leading and executing digital product design strategies that impact employees across the entire company. ",
    link: "/boggs",
  },
];

function createProjectCards(projectCards: {
  projectBlurb: ReactNode;
  id: Key | null | undefined;
  link: any;
  image: string | StaticImport;
  projectTitle:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  projectDescription:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <div
      key={projectCards.id}
      className="rounded-lg shadow-md hover:border-solid hover:border-4 hover:border-red-300 mb-4"
    >
      <Link href={`/works/${projectCards.link}`}>
        <div>
          <Image
            src={projectCards.image}
            alt={"project-image"}
            width={600}
            height={200}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold pb-1">
            {projectCards.projectTitle}
          </h3>
          <p className="text-md font-normal pb-2">
            {projectCards.projectDescription}
          </p>
          <p className="text-md font-normal pb-2">
            {projectCards.projectBlurb}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function JobCards() {
  return (
    <div className="max-w-max md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mx-auto">
      {projectCards.map(createProjectCards)}
    </div>
  );
}
