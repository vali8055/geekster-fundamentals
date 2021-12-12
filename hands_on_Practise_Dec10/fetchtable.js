let a =fetch('https://reqres.in/api/user');

let b = a.then(function(response){
   return response.json();
});

b.then(function(x){
    console.log(x);
    let output=x.data;
    for(let i=0; i<output.length; i++)
    {
        let id=output[i].id;
        let name=output[i].name;
        let year=output[i].year;
        let color=output[i].color;
        let table=document.querySelector('table');
        let tableRow=document.createElement('tr');

        tableRow.innerHTML='<td>'+ id +'</td>' + '<td>'+name+'</td>'+ '<td>'+year +'</td>'+ '<td>'+color+'</td>';
        table.appendChild(tableRow);

    }

});