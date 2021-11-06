import { EngagementType } from "./engagement_type";
import { uuid } from "./uuid";
import { VisitorType } from "./visitor_type";

export interface Engagement {
	date: Date,
	user_id: uuid,
	engagement_type: EngagementType,
	visitor_type: VisitorType,
	visitor_number: number,
	unable: uuid[],
}