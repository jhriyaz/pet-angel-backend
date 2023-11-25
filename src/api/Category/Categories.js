const Category = require("../../models/Category/Categories")


let CategoriesGet=async(req, res)=>{
  
    let result=await Category.find()
  
    res.send(result)
}
module.exports=CategoriesGet