const Words = require('../models/model');

module.exports = {
    getWords: async (req, res) => {
        try{
            const wordList = await Words.find();
            console.log(wordList);
            res.json(wordList);
        }catch(err){
            console.log(err)
        }
    },
    createWord: async (req, res)=>{
        try{
            await Words.create({english: req.body.english, french: req.body.french, category: req.body.category })
            console.log('word has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}