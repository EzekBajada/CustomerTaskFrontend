export class Customer
{
    constructor (
        ID: number,
        FullName: string,
        Position: string,
        /* Index of the enum set in the backend
        0 - Malta
        1 - England
        2 - Italy
        3 - Greece
        */
        Country: number,
        Activity: boolean
    ) {};
}