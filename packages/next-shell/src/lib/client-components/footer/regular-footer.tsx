import { About } from "./about";

export const RegularFooter = () => {
  return (
    <footer className="relative isolate bg-spwn-white text-spwn-grey-dark  pt-12 pb-3  ">
      {/* {divider && (
        <Image
          src={divider}
          alt="divider"
          width={640}
          height={34}
          className="mx-auto mb-12"
        />
      )} */}
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <About />
          {/* <Contact /> */}
          {/* <Social /> */}
        </div>
        <hr />
        {/* <Legal /> */}
      </div>
    </footer>
  );
};
