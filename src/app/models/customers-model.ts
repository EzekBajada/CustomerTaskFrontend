export class Customer
{
    public ID: number;
    public FullName: string;
    public Position: string;
    public Country: number;
    public Activity: boolean;
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
    ) 
    {
       this.ID = ID;
       this.FullName = FullName;
       this.Position = Position;
       this.Country = Country;
       this.Activity = Activity;  
    };
}