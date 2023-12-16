const ProductService = require("../services/product-service");
const UserAuth = require("../middleware/auth_jwt");
const upload = require("../middleware/upload")





module.exports = (app) => {
    const service = new ProductService();
      
    // Create Product
    app.post("/", UserAuth, async (request, response, next) => {
        const {
            sku,
            product_name,
            upc_number,
            description,
            category,
            unit,
            price,
            stock_quantity,
            dimensions,
            weight,
            tax,
            image,
        } = request.body;

        const { data } = await service.CreateProduct({
            sku,
            product_name,
            upc_number,
            description,
            category,
            unit,
            price,
            stock_quantity,
            dimensions,
            weight,
            tax,
            image,
        });
        response.status(200).json({
            success: true,
            user: data,
        });
    });

    // Get Information Product by Id
    app.get("/:id", UserAuth, async (request, response) => {
        const productId = request.params.id;
        try {
            const { data } = await service.GetProductDescription(productId);
            return response.status(200).json({
                success: true,
                data: data,
            });
        } catch (error) {
            return response.status(404).json({ error });
        }
    });

    // Get all Information Product

    app.get("/get/all", UserAuth, async (request, response) => {
        try {
            const { data } = await service.GetAllProducts();
            return response.status(200).json({
                success: true,
                data: data,
            });
        } catch (error) {
            return response.status(500).json({ error: "Internal Server Error" });
        }
    });

    // Patch Product
    app.patch("/:id", UserAuth, async (request, response) => {
        const productId = request.params.id;

        const { data } = await service.UpdateProductById(productId);

        if (!data) {
            return response.status(404).json({
                success: false,
                error: "Product not found",
            });
        }

        return response.status(200).json({
            success: true,
            message: "Product was updated successfully",
            data: data,
        });
    });
    // Put Product

    app.put("/:id", UserAuth, async (request, response) => {
        const productId = request.params.id;

        const updateData = request.body;

        const { data } = await service.UpdatedProductAll(
            { _id: productId },
            updateData,
            { new: true }
        );

        if (!data) {
            return response.status(404).json({
                success: false,
                error: "Product not found",
            });
        }
        return response.status(200).json({
            success: true,
            message: "Product was updated successfully",
            data: data,
        });
    });


    // Delete Product
    app.delete("/:id", UserAuth, async (request, response) => {

        const productId = request.params.id;

        const { data } = await service.DeleteProduct(
            { _id: productId }
        );

        if (!data) {
            return response.status(404).json({
                success: false,
                error: "Product not found",
            });
        }
        return response.status(200).json({
            success: true,
            message: "Product was deleted successfully",
        });
    });
    
  // Uploade Image
  app.post("/upload/image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: "No file uploaded" });
    }
    const file = req.file
    res.send({
      message: "Uploaded",
      id: file.id,
      name: file.filename,
      contentType: file.contentType,
    })
  })
  

    
  app.post('/category',UserAuth,async(request,response,next)=>{

    const {category_name, description, active, parent_category}  = request.body;

    const {data}  =await service.AddNewCategory({category_name, description, active, parent_category})

    return response.status(200).json({
        success:true,
        data: data
    });
  });

    // Category
    app.get("/:category", async (request, response, next) => {
        const category = request.params.category;

        try {
            const { data } = await service.GetProductsByCategory(category);

            return response.status(200).json({
                success: true,
                user: data,
            });
        } catch (error) {
            return response.status(404).json({
                error,
            });
        }
    });

};
