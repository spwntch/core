import { IPageSectionContent } from '../../types';
import { YoutubePlayer } from '../media';
import { H2 } from '../typography';

interface YoutubeWithContentProps {
  video: {
    youtubeId: string;
    placeholderImage: string;
  };
  content: IPageSectionContent;
}

export const YoutubeWithContent = ({
  video,
  content,
}: YoutubeWithContentProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 ">
      <YoutubePlayer {...video} />
      <div>
        <H2>
          {content.heading}
        </H2>
      </div>
    </div>
  );
};
