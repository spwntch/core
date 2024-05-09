import { H3, Small } from '@/react-components';
import { useBrand } from '../../providers';

export const About = () => {
  const { about } = useBrand();

  return (
    <div>
      <H3>{about?.title || 'About Us'}</H3>
      <div className="">
        {about?.body?.map((paragraph, index) => (
          <Small key={index}>{paragraph}</Small>
        ))}
      </div>
    </div>
  );
};
