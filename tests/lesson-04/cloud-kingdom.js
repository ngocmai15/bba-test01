let playerName = "Mario";
let currentLives = 3;
const coinLv1 = 25;
const coinLv2 = 30;
const coinLv3 = 45;

// Tính giá trị trung bình coin của 3 level và in ra console
const totalCoin = coinLv1 + coinLv2 + coinLv3;
const averageCoin = totalCoin / 3;
console.log(`Gia tri trung binh coin cua 3 level la ${averageCoin}`);

// In ra số coin dư khi chia cho 3
console.log(`So coin du khi chia cho 3 la ${totalCoin % 3}`);