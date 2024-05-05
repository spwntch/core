import { H3 } from '../typography';

export interface LogoCloudProps {
  title?: string;
  logos: { src: string; alt?: string }[];
}

export const LogoCloud = ({ title, logos }: LogoCloudProps) => {
  if (!logos?.length) return null;
  return (
    <div className="mx-auto bg-primary ">
      {title && <H3 className="text-primary-foreground text-center pt-4">{title}</H3>}
      <div className="py-8 px-8  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {logos.map((logo, index) => (
          <img
            key={logo.src}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
