function discountCalculator(discount) {
    return function(price) {
        return price-price*(discount/100)
    };
    
}
let ten=discountCalculator(10);
let twenty=discountCalculator(20);
console.log('on 10% discount'+ ten(1200));
console.log('on 20% discount'+ twenty(1200));

