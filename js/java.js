


//const employees = [    
  //  {id: 1, name:"Ram", position: "Developer"},
    //{id: 2, name:"Shyam", position: "Project Manager"},
    //{id: 3, name:"John", position: "Tech Lead"},
    //{id:// 4, name:"Bob", position: "Vice President"},
    //{id: 5, name:"Mat", position: "CTO"}
//];




jQuery(document).ready(function($){


    const request = axios.get('https://csc225.mockable.io/consoles');//axios.form method
    //console.log(request). data from third party;

    request.then(function(response)
    {

        const products = response.data;//array of objects

        const productsHtml = products.map(function(em)//loop trough them
        {
        const {id, name,image} = em;//defines 3 variables. for more convinience instead of using em.name etc.. name: employeenName just reassigning the array variable to another variable
        //left  column of the screen
        return `

        <div>
        
        <div data-id="${id}" class="media my-2 hover-background-gray cursor-pointer">
        <div>
        
        
 
  

        
        

        
        <h6 class="name">${id}.${name}</h6>
        
        <p><img class="mr-3" src="${image}" alt="Photo of ${name}"><p>
        
        
        </div>
        </div>

`;

    }).join('');//short way of join all the info from the array

    $('#products').html(productsHtml);
       // console.log(response);

    });
   // console.log('after the request');
    
    // loop over every employee and output name, email, age
       

    

    
   $('#products').on('click','.media', function()//target div employee on click search for a media
   {
    
      const id = $(this).attr('data-id');
      //alert (id);jquery representation of the paragraph above!

      const productsUrl = `https://csc225.mockable.io/consoles/${id}`;
     


      $('#loading-animation').toggleClass('d-none');
      $('#description').html('');

     //don't need the previous axios call!!!
      axios.get(productsUrl).then(function(response)
      {
        $('#loading-animation').toggleClass('d-none');

          const{id, releaseYear, name,price,country,image}=response.data;
          $('#description').html(//right column on the screen. Employee breakdown

            `

            <div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="Photo of ${name}">
  <div class="card-body">
  <h6 class="card-text">${releaseYear}</h6>
            <h6 class="card-text">${name}</h6>
            <h6 class="card-text">${price}$</h6>
            <h6 class="card-text">${country}</h6>
    
</div>
            
            </div>
            `
          );
      }).catch(function(error){

        alert('error!!!')
      });
   });
    
    



    
});