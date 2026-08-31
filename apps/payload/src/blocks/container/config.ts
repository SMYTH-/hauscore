import type { Block } from "payload"

import { contentBlocks } from "../contentBlocks"
import {
	sectionBackgroundField,
	sectionGapField,
	sectionLayoutField,
	sectionSpacingField,
	sectionWidthField,
} from "../../fields/section"
import { themeField } from "../../fields/theme"

/**
 * Page section wrapper. Flat field paths for CMS → Section primitive mapping.
 * Defaults favour a transparent band so content blocks own gutters/rhythm.
 */
export const containerBlock: Block = {
	slug: "container",
	interfaceName: "ContainerBlock",
	labels: { singular: "Section", plural: "Sections" },
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "content",
							type: "blocks",
							label: "Blocks",
							blocks: contentBlocks,
							minRows: 0,
						},
					],
				},
				{
					label: "Layout",
					fields: [
						{
							type: "row",
							fields: [
								sectionWidthField("full"),
								sectionLayoutField("none"),
								sectionGapField(),
							],
						},
						{
							name: "bleed",
							type: "checkbox",
							defaultValue: true,
							label: "Bleed (no page gutters)",
						},
						{
							name: "mobileBleed",
							type: "checkbox",
							defaultValue: false,
							label: "Full bleed on mobile",
						},
						sectionSpacingField("spacing"),
						sectionSpacingField("innerSpacing"),
					],
				},
				{
					label: "Appearance",
					fields: [
						themeField(),
						sectionBackgroundField("none"),
						{
							type: "row",
							fields: [
								{
									name: "border",
									type: "select",
									options: ["none", "top", "bottom", "y"],
									defaultValue: "none",
									admin: { width: "50%" },
								},
								{
									name: "borderColor",
									type: "select",
									options: ["default", "subtle"],
									defaultValue: "default",
									admin: { width: "50%" },
								},
							],
						},
					],
				},
			],
		},
	],
}
