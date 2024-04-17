'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  H1,
} from '@spwntch/components';

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center text-5xl text-primary p-8">
      {/* <Logo className="w-fit mb-16" /> */}
      <H1 className="mb-4">You're all set! 🚀</H1>

      <Card className="mt-8 ">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Follow these instructions to get the most out of your new Spawntech
            workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-base">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Adding your bramd and styles</AccordionTrigger>
              <AccordionContent>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, laudantium. Adipisci corporis non obcaecati nulla
                blanditiis, saepe tenetur, placeat ipsum, reiciendis vel
                pariatur laboriosam quia. Quam doloremque eligendi cumque sint.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Learn what's available</AccordionTrigger>
              <AccordionContent>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, laudantium. Adipisci corporis non obcaecati nulla
                blanditiis, saepe tenetur, placeat ipsum, reiciendis vel
                pariatur laboriosam quia. Quam doloremque eligendi cumque sint.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Customising Spawntech Components
              </AccordionTrigger>
              <AccordionContent>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, laudantium. Adipisci corporis non obcaecati nulla
                blanditiis, saepe tenetur, placeat ipsum, reiciendis vel
                pariatur laboriosam quia. Quam doloremque eligendi cumque sint.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};
