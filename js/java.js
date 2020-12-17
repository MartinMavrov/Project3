




jQuery(document).ready(function($){


  
  
  
  
  
    const request = axios.get('https://csc225.mockable.io/consoles');//axios.form method
    //console.log(request). data from third party;
    
   
   
    $('#loading-animation').toggleClass('d-none');
    $('#description').html('');

    request.then(function(response)
    {
      $('#loading-animation').toggleClass('d-none');
        const products = response.data;
     $('.container').html("<h1>Click on a product for more details</h1>")
        const productsHtml = products.map(function(em)
        {
         
        const {id, name,image} = em;
        return `

        <div class="products">
      
        
        <div data-id="${id}" class="media my-2  ml-2">
        <div>

        
        <h5 class="name ml-3 animate__animated animate__rollIn"><i>${id}.${name}</i></h5>
        
        <p><img class=" products" src="${image}" alt="Photo of ${name}"><p>
        
        
        </div>
        </div>

`;

    }).join('');

    $('#products').html(productsHtml);


    });
  
   
       

    

    
   $('#products').on('click','.media', function()
   {
    
      const id = $(this).attr('data-id');
      

      const productsUrl = `https://csc225.mockable.io/consoles/${id}`;
     


      $('#loading-animation').toggleClass('d-none');
      $('#description').html('');

     
      axios.get(productsUrl).then(function(response)
      {
        $('#loading-animation').toggleClass('d-none');

          const{id, releaseYear, name,price,country,image}=response.data;
          $('#description').html(

            `
            

            <div class="card mt-5 ml-3 animate__animated animate__flip" style="width: 18rem;">
            
  <img src="${image}"  class="card-img-top" alt="Photo of ${name}">
  <div class="card-body ">

  <h6 class="card-text">Product: ${name}</h6>
  <h6 class="card-text">Released Year: ${releaseYear}</h6>
  <h6 class="card-text">Country of origin: ${country}</h6>
   <h6 class="card-text text-danger">Price: ${price} $</h6>
   
</div>
            
            </div>
            `
          );
      }).catch(function(error){

        alert('error!!!');
      });
   });
    
    



    
});