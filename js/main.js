import html2canvas from 'html2canvas'

document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href
    const barcodeImg = document.querySelector('.body-barcode-image img')
    if (currentUrl.includes('data')) {
        const urlArr = currentUrl.split('data=')
        const urlStr = urlArr[urlArr.length - 1]
        barcodeImg.src = `https://barcode.tec-it.com/barcode.ashx?code=EAN13&data=${urlStr}`
        html2canvas(document.querySelector('.result-barcode-image'))
            .then(canvas => {
                document.body.appendChild(canvas)
            })
    }
})
