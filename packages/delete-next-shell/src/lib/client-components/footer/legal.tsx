import { P } from '@/react-components';
import { IBrandLegal, useBrand } from '../../providers';

type ILegalProps = {
  override?: IBrandLegal;
};

export const Legal = ({ override }: ILegalProps) => {
  const { legal } = useBrand();

  const data = override || legal;

  return (
    <div className="mt-8 flex justify-between items-center text-xs md:text-sm leading-relaxed">
      <P>
        © {data?.copyrightYear} {data?.companyName}. All Rights Reserved.
      </P>
      <div className="flex gap-4">
        <a href="/privacy" target="_blank">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
