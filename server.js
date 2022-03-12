
module.exports = () => {
    const data = {
        products: [],
    }

    for(let i = 0; i < 100; i++) {
        data.products.push({
            id: i + 1,
            price: i * 100,
            title: `Camiseta ${i + 1}`,
        })
    }

    return data;
}