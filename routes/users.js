const express = require("express")
const router = express()

router.get("/", (req, res) => {
    res.send("User list")
})

router.get("/new", (req, res) => {
    res.send("User new form")
}
)
router.post("/", (req, res) =>{
    res.send("Create User")
})

router.get("/")

module.exports = router