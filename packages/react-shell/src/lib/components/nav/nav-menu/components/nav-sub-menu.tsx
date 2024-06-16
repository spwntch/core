import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@spwntch/ui';
import { INavLink, INavMenu } from '../../nav-provider/nav-provider';
import { NavSubMenuLink } from './nav-sub-menu-link';
import styles from './nav-sub-menu.module.css';

interface INavSubMenuProps extends INavMenu {
  onLinkTo: (href: string) => void;
}

export const NavSubMenu = ({ label, children, onLinkTo }: INavSubMenuProps) => {
  const pickMenuItem = (item: INavMenu) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <NavSubMenuLink
        key={(item as INavLink).href}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <Accordion
      type="single"
      collapsible
      className={styles['accordion-container']}
    >
      <AccordionItem value="item-1" className={styles['accordion-item']}>
        <AccordionTrigger className={styles['accordion-trigger']}>
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className={styles['accordion-content']}>
            {children?.map((item) => pickMenuItem(item))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
