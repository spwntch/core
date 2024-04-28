// import { parseMdxFileBuffer } from '../utils/parse-mdx-file-buffer';
// import { IAttributableImage, IPageSectionContent } from '@/next-shared-ui';

import { IAttributableImage, IPageSectionContent } from '@/react-components';
import { PropsWithChildren } from 'react';
import { PostHeader } from './post-header';

interface IPostProps {
  backTo?: { label?: string; path: string };
  //   buffer: Buffer;
  image: IAttributableImage;
  header: IPageSectionContent;
}

export const Post = ({
  backTo,
  // //   buffer,
  image,
  header,
}: IPostProps & PropsWithChildren) => {
  //   const doc = await parseMdxFileBuffer(buffer);
  //   if (!doc) return notFound();

  //   const { toc, content, meta } = doc;

  //   console.log(toc);

  //   const header: IPageSectionContent = {
  //     heading: meta.title,
  //     subHeading: meta.subtitle,
  //     // tags: meta.tags,
  //   };

  return (
    <div className="flex">
      <div className="flex flex-col mx-2 md:mx-auto max-w-6xl">
        <div>
          <PostHeader backTo={backTo} image={image} header={header} />
        </div>
        <div className="px-2">
          Post Content
          {/* <post className="max-w-none py-8 relative isolate prose text-foreground prose-headings:text-foreground">
            {content}
          </post> */}
        </div>
      </div>
      <div>
        Post TOC
        {/* <PostToc toc={toc} /> */}
      </div>
    </div>
  );
};
