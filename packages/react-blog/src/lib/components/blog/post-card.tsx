import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Muted,
  Small,
} from '@/react-components';
import { IMdxDocMeta } from '../../types';

type IPostCardProps = IMdxDocMeta;

export const PostCard = ({
  coverImage,
  date,
  title,
  subtitle,
  tags,
}: IPostCardProps) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="m-0 p-0">
        <img
          className="object-cover object-center rounded-t w-full h-60 "
          alt="post cover image"
          src={coverImage}
        />
      </CardContent>
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <Small>
            <Muted>{date}</Muted>
          </Small>
          {tags?.length && (
            <ul className="flex gap-3">
              {tags.map((category, index) => (
                <li key={index}>
                  <Badge>{category}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
