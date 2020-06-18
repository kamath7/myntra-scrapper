const puppeteer = require('puppeteer');
const getMeThePrice = async (url) => {
  try {
    const browser = await puppeteer.launch({headless:false,args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    });
    await page.goto(url);
    const body = await page.evaluate(() => {
        return document.querySelector('.pdp-price').textContent;
    });
    const price = await parseInt(body.split('Rs.')[1]);
    //onsole.log(parseInt(body.split('Rs.')[1]));
    await browser.close();
    return price;
  } catch (error) {
    console.log(error);
  }
};



module.exports ={ getMeThePrice};

/* 
https://www.myntra.com/jeans/pepe-jeans/pepe-jeans-women-black-lara-lola-regular-fit-mid-rise-clean-look-stretchable-jeans/11280352/buy

https://www.myntra.com/jeans/only/only-women-black-skinny-fit-mid-rise-low-distress-stretchable-cropped-jeans/10973332/buy
*/

/* 
IIFE Implementation

// (
//     async() =>{
//         try{
//             const browser = await puppeteer.launch();
//             const page = await browser.newPage();
//             await page.goto('https://www.myntra.com/jeans/only/only-women-black-skinny-fit-mid-rise-low-distress-stretchable-cropped-jeans/10973332/buy')
//             const body = await page.evaluate(()=>{
//                 return document.querySelector('.pdp-price').textContent;
//             });
//             console.log(body);
//             await browser.close();
//         }
//         catch(e){
//             console.log(`Error : ${e}`);
//         }
//     }
// )();

*/