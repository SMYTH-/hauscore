import type { Block } from "payload"

import { buttonRowBlock } from "./buttonRow/config"
import { ctaBandBlock } from "./ctaBand/config"
import { faqAccordionBlock } from "./faqAccordion/config"
import { featureStepsBlock } from "./featureSteps/config"
import { heroBlock } from "./hero/config"
import { richTextBlock } from "./richText/config"
import { statsRowBlock } from "./statsRow/config"
import { trainerGridBlock } from "./trainerGrid/config"

/** Composed marketing blocks nested inside every `container.content`. */
export const contentBlocks: Block[] = [
	heroBlock,
	richTextBlock,
	buttonRowBlock,
	statsRowBlock,
	featureStepsBlock,
	trainerGridBlock,
	faqAccordionBlock,
	ctaBandBlock,
]
