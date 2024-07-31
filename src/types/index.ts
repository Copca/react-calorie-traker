export type ICategory = {
	id: number;
	name: string;
};

export type IActivity = {
	id: string;
	category: number;
	name: string;
	calories: number;
};
