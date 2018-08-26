export default function stringFilter(arr, value, registr) {

	if(!registr) value = value.toLowerCase();

	let res = arr.filter((item) => {
		if(!registr) item = item.toLowerCase();
	  return (item.indexOf(value) !== -1);
	})
	
	return res;
}