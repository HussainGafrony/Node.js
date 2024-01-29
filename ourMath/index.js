/* 
avg function
inputs :num[] ..nums
- sum all nums
- divide sum on nums.length
- return result

*/

export const avg = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    // console.log('result', result);
    return result /= nums.length;
}

/*
sets union
inputs : 2 arrays ..first_array  .. second_array
steps : 
- copy first_array elements to the result
- copy from second _array to the result all elements that is not included in the first_array
- return result
*/

export const unionTwoSets = (first, second) => {
    let result = [];
    for (let i = 0; i < first.length; i++) {
        result.push(first[i]);
    }
    for (let i = 0; i < second.length; i++) {
        if (!result.includes(second[i])) {
            result.push(second[i]);
        }
    }
    return result;
}

/* 
sets intersection
inputs: 2 array .. first_set  .. second_set
steps : 
for each item in first_set
- if the item includes in the second set then push it the result

*/


export const intersection = (first_set, second_set) => {
    let result = [];
    for (let i = 0; i < first_set.length; i++) {
        if (second_set.includes(first_set[i])) {
            result.push(first_set[i])
        }
    }

    return result;
}

/*
max
inputs: ..nums
steps:
- temp variable max = the smallest number value
- for each item in nums
  - if item > max then max = item
return max
*/

export const max = (...nums) => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        nums[i] > max ? max = nums[i] : ''
    }
    return max;
}


/*
min
inputs: ..nums
steps:
- temp variable min = the smallest number value
- for each item in nums
  - if item < min then min = item
return max
*/

export const findMin = (...nums) => {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        nums[i] < min ? min = nums[i] : ''
    }
    return min;

}







