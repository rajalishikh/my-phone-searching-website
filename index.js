const bring_data=async()=>{
    const bring_data=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const con_json=await bring_data.json();
    console.log(con_json.data)
}
bring_data()