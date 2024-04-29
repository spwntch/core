import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Small,
} from '@/react-components';
import { IPost } from '../../types';

type IPostCardProps = IPost;

export const PostCard = ({
  coverImage,
  title,
  subtitle,
  meta,
}: IPostCardProps) => {
  const { categories } = meta;
  return (
    <Card>
      <CardContent className="m-0 p-0 h-60">
        <img
          className="object-cover object-center rounded-t h-60 "
          alt="hero"
          src={coverImage.src}
          width={720}
          height={600}
        />
      </CardContent>
      <CardHeader>
        <ul className="flex gap-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Small>{category}</Small>
            </li>
          ))}
        </ul>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
