import { EngagementType } from "./engagement_type";
import { VisitorType } from "./visitor_type";

export interface Engagement {
	date: Date,
	user_id: string,
	engagement_type: EngagementType,
	visitor_type: VisitorType,
	visitor_number: number,
	unable: string[],
}