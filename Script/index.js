const API_URL="https://emojihub.yurace.pro/api/all"
// Fetching data from API

async function fetchData(){
    try{
        let res=await fetch(API_URL);
        let data= await res.json();
            if(res.status==200)  
                constructCard(data);
            else
                alert(`${res.status} - ${res.statusText}`);
       }
    catch(error){
            console.error(error)
        }
}

// Constructing Cards
function constructCard(data){
  let div=document.getElementById("content");
  
  div.innerHTML = `<div class="row">
  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/smilies.jpg" class="card-img-top"id="img" alt="smileys and people">
      <div class="card-body">
        <h5 class="card-title">Smileys and People</h5>
        <button class="btn btn-warning"><a class=" decor " href="../HTML/smilieys.html">View More</a></button>
      </div>
    </div>
  </div>

  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/animal.png" class="card-img-top"id="img" alt="Animals & Nature">
      <div class="card-body">
        <h5 class="card-title">Animals & Nature</h5>
        
      <button class="btn btn-warning">  <a href="../HTML/animales.html"  class="decor">View More</a></button>
      </div>
    </div>
  </div>
  <div class="col col-md-3 col-sm-2">
    <div class="card" >
      <img src="./Css/Asset/food.jpg" class="card-img-top" id="img" alt="Food & Drink">
      <div class="card-body">
        <h5 class="card-title">Food & Drink</h5>
        
     <button  class="btn btn-warning">   <a href="../HTML/food.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>
  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/travel.jpg" class="card-img-top" id="img" alt="Travel & Places">
      <div class="card-body">
        <h5 class="card-title">Travel & Places</h5>
        
       <button  class="btn btn-warning"><a href="../HTML/travel.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>
 </div><br>
 <!-- creating 2nd row -->
 <div class="row">
  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/acitivites.jpg" class="card-img-top"id="img" alt="Activities">
      <div class="card-body">
        <h5 class="card-title">Activities</h5>
      <button  class="btn btn-warning" ><a href="../HTML/activities.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>

  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/objects.jpg" class="card-img-top"id="img" alt="Objects">
      <div class="card-body">
        <h5 class="card-title">Objects</h5>
        
      <button  class="btn btn-warning">  <a href="../HTML/object.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>
  <div class="col col-md-3 col-sm-2">
    <div class="card" >
      <img src="./Css/Asset/symbols.png" class="card-img-top"id="img"alt="Symbols">
      <div class="card-body">
        <h5 class="card-title">Symbols</h5>
        
       <button  class="btn btn-warning"> <a href="../HTML/symbols.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>
  <div class="col col-md-3 col-sm-2">
    <div class="card">
      <img src="./Css/Asset/flags.jpg" class="card-img-top" id="img" alt="Flags">
      <div class="card-body">
        <h5 class="card-title">Flags</h5>
       <button  class="btn btn-warning"> <a href="../HTML/flag.html" class="decor">View More</a></button>
      </div>
    </div>
  </div>
 </div>`
  
}

fetchData()