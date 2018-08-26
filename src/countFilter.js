export default function countFilter(arr, value) {
	return arr.filter((item) => item.length > value)
}