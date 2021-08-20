export const Location = (locObj) => {
	return`<section class="fish-card">
				<div><img class="fish-image" src="images/${locObj.image}" /></div>
				<h3 class="fish-name">${locObj.name}</h3>
        	</section>`
}