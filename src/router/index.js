import express from "express";
import routerAdmin from "./admin.js";
import routerAuth from "./auth.js";
import routerHome from "./home.js";
import routerProduct from "./product.js";
const router = express.Router()

router.use("/auth", routerAuth);
router.use("/product", routerProduct)
router.use("/home", routerHome)
router.use("/admin", routerAdmin)
// router.get("/", (req,res) => {
//     res.render('index')
// })

export default router;