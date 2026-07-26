import { ChevronDown } from "lucide-react";

import { FAQ_CONTENT } from "./constant";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function FAQList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto max-w-4xl space-y-5"
    >
      {FAQ_CONTENT.questions.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`item-${index}`}
          className="group overflow-hidden rounded-3xl border border-border/60 bg-background/70 shadow-sm backdrop-blur transition-all duration-300 hover:border-violet-300/40 hover:shadow-lg"
        >
          <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold hover:no-underline">
            <div className="flex flex-1 items-center justify-between">
              <span>{item.question}</span>

              <div className="ml-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 text-white">
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-8 pb-6 text-base leading-8 text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}