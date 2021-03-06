import { uuid } from "./uuid";
import { VisitorType } from "./visitor_type";

export interface ArchiveCache {
  engagements: number;
  engagements_per_user: Map<uuid, number>;
  total_visitors: number;
  visitors_per_type: Map<VisitorType, number>;
}
