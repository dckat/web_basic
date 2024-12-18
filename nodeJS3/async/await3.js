async function process() {
    const result = await new Promise((success) => {
        setTimeout(() => success("내가 반환되는 값"), 1000);
    });
    console.log(result);
} 


process();