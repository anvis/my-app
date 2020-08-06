import {TestBed} from '@angular/core/testing'
import { TestRequest, HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { TransactionService} from '../Services/Transaction.Service';
import { Transactions} from '../Models/Transactions';
// import {} 

describe('Testing Transations', () => {
let _transactionService : TransactionService;
let _httpTestingController : HttpTestingController;

let transactions : Transactions[]  = [
    {
        "id": 1,
        "stockId": 1,
        "quantity": 20,
        "price": 234,
        "transactionType": "s  "
    },   
    
    {
        "id": 8,
        "stockId": 1,
        "quantity": 200,
        "price": 250,
        "transactionType": "s  "
    }
];


    beforeEach(() => 
    {
TestBed.configureTestingModule(
    {
        imports: [HttpClientTestingModule],
        providers:[TransactionService]
    });
    _transactionService = TestBed.get(TransactionService);
    _httpTestingController = TestBed.get(HttpTestingController);   

    }),

    it('get all transactions', () => 
    {
        _transactionService.getAll().
        subscribe( (data : Transactions[]) => { expect(data.length).toBe(2) });
            
         let trans : TestRequest = _httpTestingController.expectOne('https://localhost:44388/api/Transactions/Transactions');
        expect(trans.request.method).toEqual("GET");
        trans.flush(transactions);  
    }
    ),
it('', () =>
{


}),

afterEach(()=>
{
    _httpTestingController.verify();
})

})