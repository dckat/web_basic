async function process(a, b) {
    const result = await new Promise((success) => {
        let sum = a + b;
        success(sum);
    });
    console.log(result);
}

process(100, 200);