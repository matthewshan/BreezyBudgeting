export default class BudgetModel {
    constructor(name, monthly) {
        this.name = name;
        this.monthly = monthly;
        this.spent = 0;
        //TODO: Tracking of spent this month
    }
}