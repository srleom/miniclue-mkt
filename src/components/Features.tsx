"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, MessageSquareText, Text, Upload } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";

export default function Features() {
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const imageMap = {
    "item-1": {
      image: "/assets/upload.png",
      alt: "Upload lectures",
    },
    "item-2": {
      image: "/assets/explanation.png",
      alt: "Explanation",
    },
    "item-3": {
      image: "/assets/summary.png",
      alt: "Summary",
    },
    "item-4": {
      image: "/assets/chat.png",
      alt: "Chat",
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <h2 className="mx-auto mb-4 max-w-3xl text-4xl font-medium sm:text-5xl">
          Study less, learn more
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-10 sm:text-lg">
          MiniClue saves you time and helps you understand your lectures better.
        </h3>
      </div>
      <div className="flex flex-col items-stretch gap-x-10 gap-y-5 lg:flex-row">
        <Accordion
          type="single"
          value={activeItem}
          onValueChange={(value) => setActiveItem(value as ImageKey)}
          className="w-full space-y-4 lg:w-1/2"
        >
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger>
              <div className="flex items-center gap-4 text-base">
                <Upload size={20} />
                Upload PDF lecture
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Upload your PDF lecture, and MiniClue will analyse and process it
              in seconds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              <div className="flex items-center gap-4 text-base">
                <BookOpen size={20} />
                Learn with slide-by-slide explanations
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Get clear, slide-by-slide explanations for your lecture. Whenever
              something on a slide is unclear, simply check the detailed
              explanation to understand it better.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              <div className="flex items-center gap-4 text-base">
                <Text size={20} />
                Get a clear summary
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              When you&apos;re done going through the lecture, review a clear
              summary of the entire lecture to solidify your understanding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              <div className="flex items-center gap-4 text-base">
                <MessageSquareText size={20} />
                <div className="flex flex-col items-start gap-2 gap-y-2 sm:flex-row sm:items-center">
                  Chat with your lecture
                  <span className="text-muted-foreground align-bottom text-xs">
                    (coming soon)
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              If you have any questions along the way, simply highlight the text
              and chat with it to get instant, personalized explanations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="relative h-full overflow-hidden rounded-lg lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activeItem}-id`}
              src={imageMap[activeItem].image}
              alt={imageMap[activeItem].alt}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
