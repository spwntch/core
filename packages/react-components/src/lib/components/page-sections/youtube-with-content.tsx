import { IPageSectionContent } from '../../types';
import { YoutubePlayer } from '../media';
import { H2 } from '../typography';

interface YoutubeWithContentProps {
  youtube: {
    id: string;
    placeholder: string;
  };
  content: IPageSectionContent;
}

export const YoutubeWithContent = ({
  youtube: video,
  content,
}: YoutubeWithContentProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 ">
      <YoutubePlayer {...video} />
      <div>
        <H2>{content.heading}</H2>
      </div>
    </div>
  );
};
