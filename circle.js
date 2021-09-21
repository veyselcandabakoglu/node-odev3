const pi = 3.14;

const circleArea = (r) => {
    let area = pi * r * r;
    console.log("Dairenin Alanı: ", area);
};

const circleCircumference = (r) => {
    let circle = 2 * pi * r;
    console.log("Dairenin Çevresi: ", circle);
};

module.exports = {
    circleArea,
    circleCircumference
};