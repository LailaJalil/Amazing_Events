 console.log(data)
 let events = data.events
let container= document.getElementById("cardcontainer")
let container2= document.getElementById("container-card-2")

for(let i=0; i<events.length; i++){
    
    let div=document.getElementById("container-card-2")
    
     div.innerHTML +=
`
<div id="card" class="card rounded-4 p-0 pb-5" style="width: 15rem;" >
<img src="${events[i].image}" alt="${events[i].name}" class="rounded-top"  />
<div class="card-body">
<h2 class="card-title">${events[i].name}</h2>
<p class="card-text"> ${events[i].date}</p>
<p class="card-text"> ${events[i].description}</p>
<table class="table-light">
<tr >
<th class="pe-2"> Category:</th>
<td class="card-text  ps-2">  ${events[i].category}</td>
</tr>
<tr>
<th class="pe-2"> Place:</th>
<td class="card-text ps-2"> ${events[i].place}</td>
</tr>
<tr>
<th class="pe-2"> Capacity:</th>
<td class="card-text ps-2"> ${events[i].capacity}</td>
</tr>
<tr>
<th class="pe-2"> Assistance:</th>
<td class="card-text  ps-2"> ${events[i].assistance}</td>
</tr>
<tr>
<th class="pe-2"> Price:</th>
<td class="card-text  ps-2"> $ ${events[i].price}</td>
</tr>



`

}
container.appendChild("cardcontainer")

