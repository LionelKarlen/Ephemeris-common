#### Types
* EngagementType
	* >Wether it is a sunlab or a regular engagement.
* VisitorType
	* >Wether it is a regularly scheduled visit, a school, or a private group
* ArchiveCache
	* >Cached values for the archival statistics
	* Amount of engagements: number
	* Amount of engagements per user: Map<uuid: string, amount: number>[]
	* Amount of total visitors: number
	* Amount of schools: number
	* Amount of private groups: number