export const fetchSampleData = () => {
	return window.fetch('http://www.omdbapi.com/?s=die&apikey=1f7892c4')
	.then((res) => res.json())
	.catch(console.log)
}
