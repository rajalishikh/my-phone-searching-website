const bring_data=async()=>{
    const bring_data=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
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
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `
        
        bring_container.appendChild(structure)
        
    }

}

bring_data()