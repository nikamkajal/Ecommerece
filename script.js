document.addEventListener('DOMContentLoaded',function(){
    async  function fetchproducts(url){
        let data =await fetch(url);
        let response = await data.json();
        console.log(response);

    };

    fetchproducts('https://api.escuelajs.co/api/v1/products');
});