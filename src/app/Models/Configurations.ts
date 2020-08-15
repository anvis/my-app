import { ROUTER_CONFIGURATION } from '@angular/router';
import { transcode } from 'buffer';

export class configuration
{
    GetTransactionTypes()
    {  
        return this.transTypes;
    }

    GetSegements()
    {  
        return this.categories;
    }

    GetPriceRanges()
    {  
        return this.priceRange;
    }





    transTypes : DropDownModel[] = [
        {
             id : 1,
             name : 'buy'
       },
        {
            id : 2,
         name : 'sell'
        }
     ];

     categories : DropDownModel[] = [
        {
             id : 1,
             name : 'Large Cap'
       },
        {
            id : 2,
         name : 'Mid Cap'
        },
        {
            id : 3,
         name : 'Small Cap'
        }
     ];
    

     priceRange : DropDownModel[] = [
        {
             id : 1,
             name : '0 - 100'
       },
        {
            id : 2,
         name : '100-250'
        },
        {
            id : 3,
         name : '250-500'
        },
        {
            id : 4,
         name : '500-1000'
        }
        ,
        {
            id : 5,
         name : '1000-1500'
        },        
        {
            id : 6,
         name : '1500-2000'
        },
        {
            id : 7,
         name : '100-500'
        }
     ];
    
}

//export class TransactionType
//{
  //  id:number;
  //  name: string;
//}

export class DropDownModel {        
    id: number;
    name: string;
  }