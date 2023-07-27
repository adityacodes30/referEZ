const express = require('express');
const router = express.Router();

router.get('/' , (req,res)=>
{
    res.status(200).json({message :'youre on signup'})
})

router.post('/' , (req,res)=>
{
    res.status(200).json({message :'youre on signup'})
})


module.exports = router