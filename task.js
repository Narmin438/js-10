// let arr = ["Aynur", "Nuray","Kamil"];
// arr[1] = "Classified";
// console.log(arr);



// let arr = ["New Hope", "Emprie strikes back","Return of the Jdi"];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Episode ${i+4}: ${arr[i]} `);
// }



// let a = ["Kamil", "Kamal","Kamran"];
// a.unshift("Aynur");
// a.pop();
// console.log(a);



//Task-1 => 1ci usul
let nums = "32,31,34,36,31"
nums = nums.replaceAll(",",";")
console.log(nums);

//=> 2ci usul
let nums1 = "32,31,34,36,31"
let s = ""
for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === ",") {
        s += ";"
    } else {
        s += nums1[i]
    }
}
console.log(s);

//=> 3cu usul
let nums2 = "32,31,34,36,31"
let a = nums2.replace(/,/g, ";");
console.log(a);


//Task-2
let arr2 = [1,2,3,4,5,6,7,8,9,10]
let [first,second, ...rest] = arr2
console.log(first);
console.log(second);
console.log(rest);


//Task-3

let arr = [1,2,3,4,5,6,7,8,9,10]
let m = Math.max(...arr)
console.log(m);


//Task-4

let arr1 = [1,2,3,4,5]
let k = arr1.slice()
for (let i = 0; i < arr1.length; i++) {
    arr1[i] *= 2  
}
console.log(arr1);
