export default interface CategoryInterface {
    /** list of categories */
    categories: {
        /** category's id */
        id: number;
        /** category's name */
        label: string;
    }[]
}
