const API_URL="https://emojihub.yurace.pro/api/all"

// Fetching data from API

async function getData(){
    try{
        let res=await fetch(API_URL);
        let data= await res.json();

            if(res.status==200)  
                displayData(data);
            else
                alert(`${res.status} - ${res.statusText}`);
    }
    catch(error){
            console.error(error)
        }
      
}

// Function used to display the data

function displayData(data){
    let content=document.getElementById("content")
    let heading=document.createElement("h1");
    heading.setAttribute("id","heading");
    heading.innerText="Travel & Places"
    contnet.append(heading);
    let line=document.createElement("hr");
    contnet.append(line);
    let inside=document.createElement("div");
    inside.setAttribute("class","design");
data.forEach((e)=>{
    
    let div=document.createElement('div');
    div.setAttribute("class","align");
 
  if(e.category=='travel and places')
  {     
    
    div.innerHTML = 
    `<div>${e.htmlCode}<div><br>`
    inside.append(div)
    
    
  }

})
content.append(inside)
}

getData()