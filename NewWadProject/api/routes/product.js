const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();
const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, file, callback) =>{
//         callback(null, "../../ecommerce/public/uploads/");

//     },
//     filename: (req, file, callback) =>{
//         callback(null, file.originalname);
//     }
// });

// const upload = multer({storage});

//new multer
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: "public/images",
//         filename: (req, file, callback) => {
         
//             console.log(req.file,111);
//             callback(null, path.extname(file.originalname));
//         },
//     }),
//     fileFilter: (_, file, callback) => {
//         console.log(file,222);
//         if (
//             file.mimetype === "image/jpeg" ||
//             file.mimetype === "image/png" ||
//             file.mimetype === "image/jpg"
//         ) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not an image"));
//         }
//     },
// });

// //new create product
// router.post("/",  async(req, res) => {
//     const {title,desc,categories,img,price,quantity} = req.body;
//     console.log(req.file,333);
//     console.log(req.body.title);
    
//     try{
//         const newProduct = new Product({
            
//             title,
//             desc,
//             categories,
//             img: "bianca",
//             price: Number(price),
//             quantity: Number(quantity)
            
//         });
//         console.log(req.file,444);
//         const savedProduct = await newProduct.save();
//         console.log(req.file,555);
//         res.status(200).json(savedProduct);
//     }catch(err){
//         res.status(500).json(err);
//     }
// });

//create product
//only admin can create product
// router.post("/", verifyTokenAndAdmin, async (req,res) =>{
//     const newProduct = new Product(req.body);

//     try{
//         const savedProduct = await newProduct.save();
//         res.status(200).json(savedProduct);

//     }catch(err){
//         res.status(500).json(err);
//     }

// });

//new create product
router.post("/", async(req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        desc: req.body.desc,
        categories: req.body.categories,
        img: req.body.img,
        price: req.body.price,
        quantity: req.body.quantity
        
    });
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

//update product
//only admin can update products
router.put("/:id", async (req,res)=>{
   
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },
        {new: true}
        );
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
    
});

//delete product
//only admin can delete products
//verifyTokenAndAdmin, 
router.delete("/:id", async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted successfully!");

    }catch(err){
        res.status(500).json(err);
    }
});

//get product
router.get("/find/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err);
    }
});

//get all products
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        
        if(qNew){
            products = await Product.find().sort({ createdAt: -1}).limit(5);
        }else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        }else {
            products = await Product.find();

        }
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;