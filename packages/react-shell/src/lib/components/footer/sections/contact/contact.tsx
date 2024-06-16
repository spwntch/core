import { H3 } from '@spwntch/typography';
import { cn } from '@spwntch/ui';
import { Globe, Mail, Phone } from 'lucide-react';
import React, { forwardRef, PropsWithChildren } from 'react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';

export interface IContactProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Contact = forwardRef<HTMLDivElement, IContactProps>(
  ({ className, ...props }, ref) => {
    const { contact } = useBrand();

    return (
      <div className={cn('p-4', className)} ref={ref} {...props}>
        <H3 className="text-2xl font-semibold">Contact</H3>
        <ul className="text-sm leading-relaxed">
          <li>
            <Globe className="inline h-5 w-5 mr-2" />
            <a
              href={`https://${contact?.website}`}
              className="underline hover: text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact?.website}
            </a>
          </li>
          <li>
            <Mail className="inline h-5 w-5 mr-2" />
            <a
              href={`mailto:${contact?.mail}`}
              className="underline hover: text-blue-300"
            >
              {contact?.mail}
            </a>
          </li>
          <li>
            <Phone className="inline h-5 w-5 mr-2" />
            {contact?.phone}
          </li>
        </ul>
      </div>
    );
  }
);

Contact.displayName = 'Contact';

export default Contact;
