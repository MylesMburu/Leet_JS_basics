var addTwoPromises = async function (promise1, promise2) {
    const [res1, res2] = await Promise.all([promise1,promise2]);

    return res1+res2;
}