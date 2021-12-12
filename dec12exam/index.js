
      let a=  fetch('http://meme-api.herokuapp.com/gimme')
      let b=a.then(function (response){
          return response.json()
      })
      b.then(function (data){
          fn(data)
      })
      function fn(data){
    let h2=document.getElementById('title')
    h2.innerText=`title: ${data.title}`
    let y=data.url
    console.log(y)
    let x=document.getElementById('imgs')
    x.src=y
    x.style.width="90%"
    x.style.height="80vh"
    console.log(data)
      }