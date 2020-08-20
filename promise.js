async function waitForFakeLoad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1500);
    })
}

(async() => {
    console.log("Starting from the ground")
    await waitForFakeLoad() // wait for the promise
    console.log("END")
})()