const bring_data=async(search_name)=>{
    const bring_data=await fetch(`https://openapi.programming-hero.com/api/phones?search=${search_name}`);
    const con_json=await bring_data.json();
    show_data(con_json.data)
}
// show the data 
function show_data(bring){
    const bring_container=document.getElementById('container_all_data')
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

}

function search_your_phone(){
    const find_search=document.getElementById('input')
    const man=find_search.value;
    bring_data(man)
}