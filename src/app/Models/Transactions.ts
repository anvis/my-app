export class Transactions
{
    id? : number;
    stockId : number;
    stockName? : string;
    quantity : number;
    price : number;
    transactionType : string;
    TransactionTypeList?:[] 
}

//export class TransactionType
//{
//    id:number;
//    name: string;
//}

export class PostTransactions
{
    stockId : number;    
    quantity : number;
    price : number;
    transactionType : string;

}