
interface PageSectionBodyProps {
  heading: string;
  body?: string[];
}

export const YoutubeContentPortion = ({
  heading,
  body,
}: PageSectionBodyProps) => {
  return (
    <div className="">
      <h2 className="text-primary text-3xl font-bold tracking-tight text-spwn-primary md:text-4xl lg:relative lg:top-8 xl: xl:top-0">
        {heading}
      </h2>
      <div className="mt-6 text-lg text-spwn-black lg:relative lg:-left-[480px] lg:top-24 lg:w-[960px] lg:h-48  xl:left-0 xl:top-0 xl:w-fit xl:h-auto ">
        {body?.map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
