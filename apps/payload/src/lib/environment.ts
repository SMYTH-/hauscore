export function isProductionEnvironment(): boolean {
	const name = process.env.RAILWAY_ENVIRONMENT_NAME
	return !name || name === "production"
}
