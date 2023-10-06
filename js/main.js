import './html2canvas.min.js'



document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href
    const barcodeImg = document.querySelector('.body-barcode-image img')
    if (currentUrl.includes('data')) {
        const urlArr = currentUrl.split('data=')
        const urlStr = urlArr[urlArr.length - 1]
        barcodeImg.src = `https://barcode.tec-it.com/barcode.ashx?code=EAN13&data=${urlStr}`
    }
})

// document.addEventListener('readystatechange', () => {
//
//     if (document.readyState === 'complete') {
//         html2canvas(document.querySelector('.result-barcode-image'))
//             .then(canvas => {
//                 const canvasFile = canvas.toDataURL()
//                 console.log(canvasFile)
//                 document.querySelector('meta[property="og:image"]').setAttribute('content', canvas.toDataURL())
//             })
//     }
// })
//


