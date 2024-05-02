import { IPageSection } from '../../types';
import { GridCard } from './grid-card';

type Props = {
  cards: IPageSection[];
  onClickCard: (card: IPageSection, index: number) => void;
};

export const CardGrid = ({ cards, onClickCard }: Props) => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
      {cards.map((card, index) => (
        <GridCard
          key={index}
          {...card}
          onClick={() => onClickCard(card, index)}
        />
      ))}
    </div>
  );
};
