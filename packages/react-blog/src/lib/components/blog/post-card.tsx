import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/react-ui';
import { Small } from '@/react-typography';
import { IMdxDocMeta } from '@/react-mdx';

interface IPostCardProps extends IMdxDocMeta {
  onClick: (slug: string) => void;
}

export const PostCard = ({
  slug,
  coverImage,
  date,
  title,
  subtitle,
  tags,
  onClick,
}: IPostCardProps) => {
  return (
    <Card
      className="max-w-2xl mx-auto cursor-pointer"
      onClick={() => onClick(slug)}
    >
      <CardContent className="m-0 p-0">
        <img
          className="object-cover object-center rounded-t w-full h-60 "
          alt="post cover image"
          src={coverImage}
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
        <CardTitle>{title}</CardTitle>
        <Small>{date}</Small>
        <CardDescription className="!mt-3">{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
