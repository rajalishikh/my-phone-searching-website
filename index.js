// bring the data using api 
const bring_data=async(search_name)=>{
    const bring_data=await fetch(`https://openapi.programming-hero.com/api/phones?search=${search_name}`);
    const con_json=await bring_data.json();
    show_data(con_json.data)
}
// show the data 
function show_data(bring){
  console.log(bring.length)
  const bring_data=document.getElementById('show_all');
  // set the condition when total data is more then 12 add hidden and remobe hidden
  if(bring.length > 12){
    bring_data.classList.remove('hidden')
  }
  else{
    bring_data.classList.add('hidden')
  }
  // limit the data 
  bring=bring.slice(0,12)
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
    <p>$ 999</p>
    <div class="card-actions">
      <button class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>
`
        
        bring_container.appendChild(structure)
        
    }
    add_loader(false)
    

}

// search your phone 
function search_your_phone(){
   add_loader(true)

    const find_search=document.getElementById('input')
    const man=find_search.value;
    bring_data(man)
}

const add_loader= (is_loading) => {
  const loader_part=document.getElementById('loader_part')
  if(is_loading){
    loader_part.classList.remove('hidden')
  }
  else{
    loader_part.classList.add('hidden')

  }

}

