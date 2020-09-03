var banners = ["https://m.media-amazon.com/images/I/515rjH7yikL.jpg", "https://www.record.com.br/wp-content/uploads/2020/08/8598-600x892.jpeg"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 4000);