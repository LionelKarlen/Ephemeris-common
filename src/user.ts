import { uuid } from './uuid';
export interface User {
	name: string,
	email: string,
	password: string,
	id?: uuid,
	deficit: number,
}