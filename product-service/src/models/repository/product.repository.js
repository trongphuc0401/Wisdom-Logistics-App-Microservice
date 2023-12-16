const{ProductModel,CategoryModel} = require("../collections");

class ProductRepository {
    async CreateProduct({sku,product_name,upc_number,description,category,unit,price,stock_quantity,dimensions,weight,tax,image}){
       try{
            const product = new ProductModel({
                sku,
                product_name,
                upc_number,
                description,
                category:{
                    category_name:category.category_name,
                    description:category.description,
                    parent_category:category.parent_category,
                },
                unit,
                price,
                stock_quantity,
                dimensions:{
                    length:dimensions.length,
                    width:dimensions.width,
                    height:dimensions.height,
                },
                weight,
                tax,
                image
            })
            const productResult = await product.save();
            return productResult;
       }catch(error) {
        console.error("Error creating product:",error.message);
        throw error
       }
    }


    async CreateCategory({category_name, description, active, parent_category}) {
        try {
            
                const newCategory = new CategoryModel({
                    category_name,
                    description,
                    active,
                    parent_category, 
                });
                const categoryResult = await newCategory.save();
            return categoryResult;

        } catch (err) {
            console.error("Error creating category:", err.message);
            throw err;
        }
    }
    

    async Products(){
        return await ProductModel.find();
    }

    async FindById(productId){
        
        return await ProductModel.findById(productId);
    }

    async FindByCategory(category_name){

        const products = await ProductModel.find(category_name);

        return products;
    }

    async FindByIdAndUpdate(productId,updateData) {
        const products = await ProductModel.findOneAndUpdate({ _id: productId },updateData);
        return products;
    }

    async FindByIdAndReplace(productId,updateData) {
        const products = await ProductModel.findOneAndReplace(productId,updateData);
        return products;
    }

    async DeleteProduct(productId) {
        const products = await ProductModel.deleteOne({_id: productId})
        return products;
    }

    


}
module.exports = ProductRepository;