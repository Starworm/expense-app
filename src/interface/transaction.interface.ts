export default interface TransactionInterface {
    /** list of transactions */
    transactions: {
        /** transaction's id */
        id: number;
        /** transaction's label */
        label: string;
        /** transaction's date */
        date: any;
        /** transaction's amount (positive for income, negative for expenditure) */
        amount: number;
        /** transaction's category (= category's id)*/
        category: number;
    }[]
}
