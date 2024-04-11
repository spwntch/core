import { Globe, Mail, Phone } from 'lucide-react';
import { useBrand } from '../../providers';
import { H3 } from '@/react-components';

export const Contact = () => {
  const { contact } = useBrand();

  return (
    <div>
      <H3 className="text-2xl font-semibold">Contact</H3>
      <ul className="text-sm leading-relaxed">
        <li>
          <Globe className="inline h-4 w-4 mr-2" />
          <a
            href={`https://${contact?.website}`}
            className="underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact?.website}
          </a>
        </li>
        <li>
          <Mail className="inline h-4 w-4 mr-2" />
          <a
            href={`mailto:${contact?.mail}`}
            className="underline hover:text-blue-300"
          >
            {contact?.mail}
          </a>
        </li>
        <li>
          <Phone className="inline h-4 w-4 mr-2" />
          {contact?.phone}
        </li>
      </ul>
    </div>
  );
};
