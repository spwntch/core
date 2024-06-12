import React, { forwardRef, PropsWithChildren } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';
import { H3 } from '@/react-typography';
import styles from './contact.module.css';

export interface IContactProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Contact = forwardRef<HTMLDivElement, IContactProps>(
  ({ className, ...props }, ref) => {
    const { contact } = useBrand();

    return (
      <div className={`${styles.container} ${className}`} ref={ref} {...props}>
        <H3 className={styles.title}>Contact</H3>
        <ul className={styles.list}>
          <li>
            <Globe className={styles.icon} />
            <a
              href={`https://${contact?.website}`}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact?.website}
            </a>
          </li>
          <li>
            <Mail className={styles.icon} />
            <a href={`mailto:${contact?.mail}`} className={styles.link}>
              {contact?.mail}
            </a>
          </li>
          <li>
            <Phone className={styles.icon} />
            {contact?.phone}
          </li>
        </ul>
      </div>
    );
  }
);

Contact.displayName = 'Contact';

export default Contact;
