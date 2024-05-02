import { IAttributableImage, IPageSectionContent } from '../../types';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui';

interface GridCardProps {
  image: IAttributableImage;
  content: IPageSectionContent;
  onClick: () => void;
}

export const GridCard = ({ image, content, onClick }: GridCardProps) => {
  const { heading, subHeading, tags } = content;
  return (
    <Card
      className="max-w-2xl mx-auto cursor-pointer !p-0"
      onClick={() => onClick()}
    >
      <CardContent className="m-0 p-0">
        <img
          className="object-cover object-center rounded-t w-full h-60 "
          alt={image.alt || heading}
          src={image.src}
        />
      </CardContent>
      <CardHeader>
        {tags?.length && (
          <ul className="hidden md:flex gap-3 mb-3 ">
            {tags.map((category, index) => (
              <li key={index}>
                <Badge>{category}</Badge>
              </li>
            ))}
          </ul>
        )}
        <CardTitle>{heading}</CardTitle>
        {/* <Small>{date}</Small> */}
        <CardDescription className="!mt-3">{subHeading}</CardDescription>
      </CardHeader>
    </Card>
  );
};
