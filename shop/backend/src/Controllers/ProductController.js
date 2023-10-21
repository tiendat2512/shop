const ProductServices = require('../Services/ProductServices')

const createProduct = async (req, res) => {
    const { name, image, type, rating } = req.body
    try {
        if (!name || !image || !type || !rating) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductServices.createProduct(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const { limit, page } = req.query
        const response = await ProductServices.getAllProduct(Number(limit) || 8, Number(page) || 0);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct
}