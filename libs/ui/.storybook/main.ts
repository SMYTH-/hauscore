import { createRequire } from "node:module"
import { dirname, join } from "node:path"
import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"

const require = createRequire(import.meta.url)

export default {
	stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	logLevel: "error",
	addons: [getAbsolutePath("@storybook/addon-docs")],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	viteFinal: async (config) => {
		config.plugins = config.plugins || []
		config.plugins.push(tailwindcss())
		config.optimizeDeps = config.optimizeDeps ?? {}
		config.resolve = config.resolve ?? {}
		config.resolve.dedupe = [...(config.resolve.dedupe ?? []), "react", "react-dom"]
		return config
	},
} satisfies StorybookConfig

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")))
}
