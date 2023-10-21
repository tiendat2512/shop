const Product = require("../Models/ProductModel")

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, rating } = newProduct
        try {
            const checkName = await Product.findOne({
                name: name
            })
            if (checkName !== null) {
                resolve({
                    status: "OK",
                    message: "the product name is already"
                })
            }
            const createdProduct = await Product.create({
                name,
                image,
                type,
                rating
            })
            if (createdProduct) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdProduct
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const getAllProduct = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.Product.count()
            const allProduct = await Product.Product.find().limit(limit).skip(page * limit)
            resolve({
                status: "OK",
                message: "GET ALL PRODUCT SUCCESS",
                data: allProduct,
                total: totalProduct,
                currentPage: (page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    createProduct,
    getAllProduct
}