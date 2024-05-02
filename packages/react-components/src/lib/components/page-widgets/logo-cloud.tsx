export interface LogoCloudProps {
  logos: { src: string; alt?: string }[];
}

export const LogoCloud = ({ logos }: LogoCloudProps) => {
  return (
    <div className="mx-auto bg-primary py-12 px-8  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      {logos.map((logo, index) => (
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  );
};

export default LogoCloud;
