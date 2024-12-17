let name = "에너자이자";
let totalPrice = 5000;
let discountPrice = 4700;
let onePrice = 2350;
let arriveDate = "내일(수)도착 보장";
let rate = 50;
let stackMoney = 188;

let product = {
    name,
    totalPrice,
    discountPrice,
    onePrice,
    arriveDate,
    rate,
    stackMoney,
    discount: function() {
        console.log(`${this.name}는 할인 중입니다.
            총 가격: ${this.totalPrice}원 → 할인 가격: ${this.discountPrice}원`);
    },
    displayInfo() {
        console.log("name>> " + this.name);
        console.log("total_price>> " + this.totalPrice);
        console.log("discount_price>> " + this.discountPrice);
        console.log("one_price>> " + this.onePrice);
        console.log("arrive_date>> " + this.arriveDate);
        console.log("rate>> " + this.rate);
        console.log("stack_money>> " + this.stackMoney);
    }
}

product.discount();
product.displayInfo();