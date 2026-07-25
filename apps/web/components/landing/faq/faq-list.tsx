import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { FAQ_CONTENT } from "./constant";

export function FAQList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {FAQ_CONTENT.faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`item-${index}`}
        >
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="text-base leading-7 text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}