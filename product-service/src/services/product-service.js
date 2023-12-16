const { ProductRepository } = require("../models/");
const { ProductModel } = require("../models/collections");
const { FormateData } = require("../utils");
const { APIError } = require('../utils/app-error');

class ProductService {
    constructor() {
        this.repository = new ProductRepository();
    }

    async CreateProduct(productInputs){

        const productResult = await this.repository.CreateProduct(productInputs)
        return FormateData(productResult);
    }

    async  GetAllProducts() {
        const allProducts = await this.repository.Products();
        return FormateData(allProducts);
    }

    async GetProductDescription(productId){
        
        const product = await this.repository.FindById(productId);
        return FormateData(product)
    }

    async GetProductsByCategory(category_name){

        const products = await this.repository.FindByCategory(category_name);
        return FormateData(products)

    }

    async UpdateProductById(productId) {
        const updatedProduct = await this.repository.FindByIdAndUpdate(productId);
        return FormateData(updatedProduct)
    }

    async UpdatedProductAll(productId,updateData) {
        const updatedProduct = await this.repository.FindByIdAndReplace(productId,updateData);
        return FormateData(updatedProduct)
    }



    async DeleteProduct(productId) {
        const deleteProducts = await this.repository.DeleteProduct(productId)
        return FormateData(deleteProducts)
    }


    async AddNewCategory(categoryInputs) {
        const {category_name, description, active, parent_category} = categoryInputs;

        const categoryResult = await this.repository.CreateCategory({category_name, description, active, parent_category})
        
        return FormateData(categoryResult)
    
    }

    async UpdateProductById(categoryId) {
        const updatedCategory = await this.repository.FindByIdAndUpdate(categoryId);
        return FormateData(updatedCategory)
    }

    

}  
module.exports = ProductService;