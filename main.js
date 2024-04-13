
/**
 * 
 */
async function showComments(){
    await(fetch('https://dummyjson.com/products'))
    .then(res => res.json())
    .then(json => {
        createTarget(json)
    })
}         
/**
 * @description: is used to create each target in the webpage
 * @param {*} obj 
 */
function createTarget(obj){
    const products = obj.products;
    const description = document.querySelector(".description")
    const descriptionList = document.createElement("ul")
    for(const product of products){
        const comments = document.createElement("li")
        comments.textContent = `${product.description}`
        descriptionList.appendChild(comments);
    }
    description.appendChild(descriptionList)


/*  Description: con esto se puede printear en la pagina lo obtenido desde el json en la web 

    const products = obj.products;
    const description = document.querySelector(".description")
    const descriptionList = document.createElement("ul")
    for(const product of products){
        const comments = document.createElement("li")
        comments.textContent = `${product.description}`
        descriptionList.appendChild(comments);
    }
    description.appendChild(descriptionList) */
}
showComments();