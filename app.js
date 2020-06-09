const express = require('express');
const moment = require('moment');

const {getMeThePrice} = require('./getMeThePrice');

const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.status(200).send({
        message: 'Welcome to the API'
    });
});
app.get('/prices',async (req,res)=>{
    const price1 = await getMeThePrice(`https://www.myntra.com/jeans/pepe-jeans/pepe-jeans-women-black-lara-lola-regular-fit-mid-rise-clean-look-stretchable-jeans/11280352/buy`);
    const price2 = await getMeThePrice(`https://www.myntra.com/jeans/only/only-women-black-skinny-fit-mid-rise-low-distress-stretchable-cropped-jeans/10973332/buy`);
    await res.status(200).send({
        loraJeansCost: price1,
        blackSkinnyJeansCost: price2
    });
});

app.listen(port,()=>{
    console.log(`Running on ${port}`);
});
// getMeThePrice(`https://www.myntra.com/sweaters/promod/promod-women-black--white-self-design-detail-sweater/11462206/buy`).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(`Error ${err}`);
// });