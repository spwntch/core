
import { Linkedin } from 'lucide-react';
import { useBrand } from '../../providers';
import { H3 } from '@/react-components';

export const Social = () => {
  const { social } = useBrand();
  return (
    <div>
      <H3>Follow Us</H3>
      <ul className="flex space-x-4 text-sm leading-relaxed">
        {social?.linkedin && (
          <li>
            <a
              href={`${social?.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
              {/* <LinkedinIcon showText={showText} size={size} /> */}
            </a>
          </li>
        )}
        {/* {social?.youtube && (
          <li>
            <a href={`${social?.youtube}`} target="_blank" rel="noopener noreferrer">
            
              <Youtube className="w-6 h-6" />
            </a>
          </li>
        )}
        {social?.facebook && (
          <li>
            <a href={`${social?.facebook}`} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </a>
          </li>
        )} */}
      </ul>
    </div>
  );
};
