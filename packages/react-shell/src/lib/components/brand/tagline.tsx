import { Small } from '@/react-typography';
import { useBrand } from '../../providers';

export const Tagline = () => {
  const { tagline } = useBrand();

  return <Small>{tagline}</Small>;
};
