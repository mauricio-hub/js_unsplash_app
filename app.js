const input = document.querySelector('input')
const form = document.querySelector('form')

const contenedor = document.getElementById("container");

form.addEventListener("submit",(e)=>{
	e.preventDefault()
	removeOldImages();
	const  key= "Euz8G7EpRZlZPrJrAew6XGYVtas8FHYP6Q9StZiD8Rw"
	const search= input.value 
	axios.get(`http://api.unsplash.com/search/photos/?client_id=${key}&query=${search}`
		)
		.then((response)=>{
			
			generateTags(response.data.results)
		})
		.catch((error)=>{
			console.log(error)
		})
})

const removeOldImages = ()=>{
	const images = document.querySelectorAll('a')
	images.forEach((image)=> {
		image.remove();
	});

}


const generateTags = (data) =>{
	const images = data;

	images.forEach((image)=> {
		
		const aTag = document.createElement('a')
		
		aTag.href = image.links.html
		aTag.target = "_blank"

	

		const imgTag = document.createElement('img')


		imgTag.src = image.urls.regular;
		imgTag.alt = image.alt_description;

		


		aTag.appendChild(imgTag)
		
		 contenedor.appendChild(aTag);
		 
		

	});

}








