import Buyable from './Buyable';

export default class Cart{
    private _items:Buyable[] = [];
   
    add(item:Buyable):void{
       
        this._items.push(item);
    }
  
    getAll():Buyable[]{
        return[...this._items];
    }
    
    getTotalPrice():number {
        return this._items.reduce((acc, item) => acc + Number(item.price), 0);

    }
    getDiscountlPrice(percent:number):number {
        return this.getTotalPrice() - this.getTotalPrice() * percent / 100;

    }
    deleteItems(id:number):void {
this._items.filter((item) => item.id !== id);

    }
}