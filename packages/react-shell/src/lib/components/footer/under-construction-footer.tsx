'use client';
import { Linkedin } from 'lucide-react';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { H3 } from '@/react-typography';
import { Legal } from './sections/legal/legal';

export const UnderConstructionFooter = () => {
  return (
    <footer className="relative isolate bg-spwn-white text-spwn-grey-dark  pt-12 pb-3  ">
      {/* {divider && (
        <Image
          src={divider}
          alt="divider"
          width={640}
          height={34}
          className="mx-auto mb-12"
        />
      )} */}
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <About />
          <Contact />
          <div>
            <H3>Under Contruction</H3>
            <div className="flex gap-16">
              <img
                width={100}
                height={25}
                alt="powered by spawntech"
                src="/images/powered-by-spawntech-primary.webp"
                className="dark:hidden"
              />
              <img
                width={100}
                height={25}
                alt="powered by spawntech"
                src="/images/powered-by-spawntech-dark.webp"
                className="hidden dark:block"
              />
              <a
                href="https://www.linkedin.com/company/spawntech-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <Legal override={{ companyName: 'Spawntech', copyrightYear: '2024' }} />
      </div>
    </footer>
  );
};
