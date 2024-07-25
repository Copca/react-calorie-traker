export type ICategory = {
	id: number;
	name: string;
};

export type IActivity = {
	category: number;
	name: string;
	calories: number;
};
