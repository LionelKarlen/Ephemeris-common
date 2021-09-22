import { ArchiveCache } from './archive_cache';
import { Engagement } from './engagement';
export interface Archive {
	year: number,
	sunlab: ArchiveCache,
	regular: ArchiveCache,
	engagements: Engagement,
}