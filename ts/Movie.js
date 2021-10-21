"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie = /** @class */ (function () {
    function Movie(id, name, isIMAX, original_name, jear, state, slogan, style, timing, price, img) {
        this.id = id;
        this.name = name;
        this.isIMAX = isIMAX;
        this.original_name = original_name;
        this.jear = jear;
        this.state = state;
        this.slogan = slogan;
        this.style = style;
        this.timing = timing;
        this.price = price;
        this.img = img;
        this.count = false;
        this.amount = 1;
    }
    return Movie;
}());
exports.default = Movie;
//# sourceMappingURL=Movie.js.map