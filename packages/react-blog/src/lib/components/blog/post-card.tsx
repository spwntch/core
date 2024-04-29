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
      <CardContent className="m-0 p-0">
        <img
          className="object-cover rounded-t w-full h-60 "
          alt="hero"
          src={coverImage.src}
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
