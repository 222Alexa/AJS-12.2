"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, name, author, price, pages) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.pages = pages;
        this.count = false;
        this.amount = 1;
    }
    return Book;
}());
exports.default = Book;
//# sourceMappingURL=Book.js.map