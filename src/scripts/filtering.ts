import type { ToolsOrServices } from "@/models/toolsOrServices";

export function getToolsOrServicesByCategory(category: string, data: ToolsOrServices [] ){
	return data.filter((item:ToolsOrServices) => item.category === category);
};