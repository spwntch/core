import { IPageSectionContent } from '../../../types';
import { YoutubePlayer } from '../../media';
import { YoutubeContentPortion } from './youtube-content-portion';

interface YoutubeWithContentProps {
  youtube: {
    id: string;
    thumbnailUrl: string;
  };
  content: IPageSectionContent;
}

export const YoutubeWithContent = ({
  youtube,
  content,
}: YoutubeWithContentProps) => {
  return (
    <div className=" pt-12 md:pt-20 pb-10 mx-auto">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-y-8 lg:gap-y-0  lg:max-w-none lg:grid-cols-2  lg:mx-0 lg:gap-x-8 ">
          <YoutubePlayer {...youtube} />
          <YoutubeContentPortion
            heading={content.heading}
            body={content.body}
          />
        </div>
      </div>
      {/* <AboutStats stats={stats} /> */}
      {/* {children && (
        <div className="mt-6 mb-6 flex items-center justify-center gap-x-6">
          {children}
        </div>
      )} */}
    </div>
  );
};
