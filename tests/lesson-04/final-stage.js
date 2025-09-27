function findPairsDivisibleBy17() {
    let count = 0
    for (let i = 1; i <= 100; i++) {
        for (let k = i + 1; k <= 100; k++) {
            let sum = i + k;
            if (sum % 17 === 0) {
                console.log(`(${i}, ${k}) = ${sum}`);
                count += 1;
            }
        }
    }
    console.log(`\nTong cong: ${count} cap`);
}

// Test
findPairsDivisibleBy17();