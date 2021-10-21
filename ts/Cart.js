"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        var checkIn = this._items.find(function (elem) { return elem.id === item.id; });
        if (!checkIn) {
            this._items.push(item);
        }
        if (checkIn && checkIn.count === true) {
            checkIn.amount += 1;
        }
    };
    Object.defineProperty(Cart.prototype, "getAll", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.price = function () {
        return this._items.reduce(function (acc, prev) { return (acc += prev.price); }, 0);
    };
    Cart.prototype.discountPrice = function (discount) {
        return ((this._items.reduce(function (acc, prev) { return (acc += prev.price); }, 0) * discount) /
            100);
    };
    Cart.prototype.totalSum = function (discount) {
        var rate = this.discountPrice(discount);
        return this.price() - rate;
    };
    Cart.prototype.deleteItemById = function (id) {
        var index = this._items.findIndex(function (el) { return el.id === id; });
        var deleteItem = this._items[index];
        if (deleteItem.count && deleteItem.amount > 1) {
            deleteItem.amount -= 1;
        }
        else {
            this._items.splice(index, 1);
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map