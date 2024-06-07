import {
  IContent,
  TextWithClassName,
  ParapgraphsWithClassName,
} from '../../../types';

export const getTitleContentAndClassName = (title: IContent['title']) => {
  const titleContent =
    (title as TextWithClassName)?.content || (title as string);
  const titleClassName = (title as TextWithClassName)?.className || '';
  return { titleContent, titleClassName };
};

export const getSubTitleContentAndClassName = (
  subTitle: IContent['subTitle']
) => {
  const subTitleContent =
    (subTitle as TextWithClassName)?.content || (subTitle as string);
  const subTitleClassName = (subTitle as TextWithClassName)?.className || '';
  return { subTitleContent, subTitleClassName };
};

export const getBodyContentAndClassName = (body: IContent['body']) => {
  const bodyContent =
    (body as ParapgraphsWithClassName)?.content || (body as string[]);
  const bodyClassName = (body as ParapgraphsWithClassName)?.className || '';
  return { bodyContent, bodyClassName };
};

export const getTagsContentAndClassName = (tags: IContent['tags']) => {
  const tagsContent =
    (tags as ParapgraphsWithClassName)?.content || (tags as string[]);
  const tagsClassName = (tags as ParapgraphsWithClassName)?.className || '';
  return { tagsContent, tagsClassName };
};
