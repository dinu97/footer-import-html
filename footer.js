const footer = document.getElementById('footer1Id')
fetch('/footer.html') 
.then(res=>res.text())
.then(data =>{
    footer.innerHTML=data
   const parser = new DOMParser()
   const doc = parser.parseFromString(data, 'text/html')
   eval(doc.querySelector('script').textContent)


})
// const footer2 = document.getElementById('footer2Id')
// fetch('/footer2.html') 
// .then(res=>res.text())
// .then(data =>{
//     footer2.innerHTML=data
//    const parser = new DOMParser()
//    const doc = parser.parseFromString(data, 'text/html')
//    eval(doc.querySelector('script').textContent)


// })
