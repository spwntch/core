import { Small } from '@/react-components';
import { useBrand } from '../../providers';

export const Tagline = () => {
  const { tagline } = useBrand();

  return <Small>{tagline}</Small>;
};
