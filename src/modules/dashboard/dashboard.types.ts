// NOTE: this is just for your reference
// All types, interfaces, enums related to dashboard
// remove below code when doing actual development

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	role: string;
}

export interface IBulkUserResponse {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}

export interface ICreateUserRequestBody {
	firstName: string;
	lastName: string;
	age: number;
}
