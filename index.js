// bring the data using api 
const bring_data=async(search_name,show_all)=>{
    const bring_data=await fetch(`https://openapi.programming-hero.com/api/phones?search=${search_name}`);
    const con_json=await bring_data.json();
    show_data(con_json.data,show_all)
}

// show the data 
function show_data(bring,show_all){
  console.log(bring.length)
  const bring_data=document.getElementById('show_all');
  // set the condition when total data is more then 12 add hidden and remobe hidden
  if(bring.length > 12 && !show_all){
    bring_data.classList.remove('hidden')
  }
  else{
    bring_data.classList.add('hidden')
  }
  // limit the data 
  console.log(show_all)
  // show all data 
  if(!show_all){
    bring=bring.slice(0,12)

  }
  
    const bring_container=document.getElementById('container_all_data');
    // refresh the  data section 
    bring_container.textContent='';
    // show the data 
    for(let data of bring){
        console.log(data)
        

        const structure=document.createElement('div')
        structure.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${data.image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${data.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    
    
    }
    <div class="card-actions">
      <button onclick="show_details('${data.slug}')" class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>
`
        
        bring_container.appendChild(structure)
        
    }
    add_loader(false)
    

}

// search your phone 
function search_your_phone(show_all_data){
   add_loader(true)

    const find_search=document.getElementById('input')
    
    const man=find_search.value.toLowerCase();
    if(man ==='samsung' || man ==='apple' || man === 'watch'){

          bring_data(man,show_all_data)
    }
    else{
      alert('Search the right name')
    }
    
    
   
    
}

// SHOW ALL DATA 

const show_all=()=>{
  search_your_phone(true)
}

// show details 
const show_details=async(id)=>{
  const bring_show_details=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const json_format=await bring_show_details.json();
  details2(json_format.data)

}

// show details part 2 

function details2(details){
  console.log(details)
  my_modal_5.showModal()
  const find_box=document.getElementById('modal_box');
 
  find_box.innerHTML=`
  <img src=${details.image} alt="" srcset="">
  <h3 class="text-lg font-bold">${details.slug}</h3>
  
            <p class="py-4"><span class="text-lg font-bold">Name</span> ${details.name}</p>
            <p class="py-4"><span class="text-lg font-bold">Storage</span> ${details.mainFeatures?.
              storage}</p>
            <p class="py-4"><span class="text-lg font-bold">DisplaySize:</span> ${details.mainFeatures?.displaySize}</p>
            <p class="py-4"><span class="text-lg font-bold">ReleaseDate:</span> ${details.releaseDate || 'No data'}</p>
            <p> <span class="text-lg font-bold">Price:</span>$999 </p>
            
            <ul>
            <span class="text-lg font-bold">Sensors:</span>
            <li>${details.mainFeatures?.sensors[0] || 'No Data' }</li>
            <li>${details.mainFeatures?.sensors[1] || 'No Data'}</li>
            <li>${details.mainFeatures?.sensors[2] || 'No Data' }</li>
            <li>${details.mainFeatures?.sensors[3] || 'No Data'}</li>
            <li>${details.mainFeatures?.sensors[4] || 'No Data'}</li>
            <li>${details.mainFeatures?.sensors[5] || 'No Data'}</li>
            </ul>
            
          
            
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
  `
  


}

// add loader 
const add_loader= (is_loading) => {
  const loader_part=document.getElementById('loader_part')
  if(is_loading){
    loader_part.classList.remove('hidden')
  }
  else{
    loader_part.classList.add('hidden')

  }

}


