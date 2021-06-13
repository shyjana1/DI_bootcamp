
const showData = async () => {
  try{
  let search = document.getElementById('title').value

    let data = await fetch(`http://localhost:8000/search?q=${search}`)
    let result = await data.json()
    createImages (result);
  } catch (err) {
    console.log(err)
  }
  
}

  
  const createImages = (arr) => {
      let root = document.getElementById('root');
      root.innerHTML = "";
      console.log(arr);
      arr.forEach((item, x) => {
        console.log(item);
          let img = document.createElement('img')
          img.setAttribute('src', item.i.imageUrl)
          let title = document.createElement('text')
          title.setAttribute('title', item.i.l)
          img.classList.add('img_height')
          root.appendChild(img)
      })
  
  }
  