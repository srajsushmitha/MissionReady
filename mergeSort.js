// Function to merge two sorted parts of array 
function merge(array, left, middle, right) { 
	
	// Length of both sorted sub arrays 
	let l1 = middle - left + 1; 
	let l2 = right - middle; 
	// Create new subarrays 
	let arr1 = new Array(l1); 
	let arr2 = new Array(l2); 
	
	// Assign values in subarrays 
	for (let i = 0; i < l1; ++i) { 
		arr1[i] = array[left + i]; 
	} 
	for (let i = 0; i < l2; ++i) { 
		arr2[i] = array[middle + 1 + i]; 
	} 

	// To travesrse and modify main array 
	let i = 0, 
		j = 0, 
		k = left; 
		
	// Assign the smaller value for sorted output 
	while (i < l1 && j < l2) { 
		if (arr1[i] < arr2[j]) { 
			array[k] = arr1[i]; 
			++i; 
		} else { 
			array[k] = arr2[j]; 
			j++; 
		} 
		k++; 
	} 
	// Update the remaining elements 
	while (i < l1) { 
		array[k] = arr1[i]; 
		i++; 
		k++; 
	} 
	while (j < l2) { 
		array[k] = arr1[j]; 
		j++; 
		k++; 
	} 
} 

// Function to implement merger sort in javaScript 
function mergeSort(array, left, right) { 
	if (left >= right) { 
		return; 
	} 
	
	// Middle index to create subarray halves 
	let middle = left + parseInt((right - left) / 2); 
	
	// Apply mergeSort to both the halves 
	mergeSort(array, left, middle); 
	mergeSort(array, middle + 1, right); 
	
	// Merge both sorted parts 
	merge(array, left, middle, right); 
} 

// Input array 
const array = [ 38, 27, 43, 10] 

// Display input array 
console.log("Original array: " + array); 

// Apply merge sort function 
mergeSort(array, 0, array.length - 1); 

// Display output 
console.log("After sorting: " + array);
