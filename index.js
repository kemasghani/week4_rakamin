// Fungsi untuk menghasilkan nilai acak antara 1 hingga 50
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk membuat array dengan jumlah index tertentu
function createRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomValue());
    }
    return array;
}

// Fungsi untuk memisahkan array menjadi genap dan ganjil
function separateArray(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }
    return [evenArray, oddArray];
}

// Fungsi untuk menghitung min, max, total, dan rata-rata dari array
function calculateStats(arr) {
    let min = arr[0];
    let max = arr[0];
    let total = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        total += arr[i];
    }

    const average = total / arr.length;

    return [min, max, total, average];
}

// Membuat array dengan 100 nilai acak
const randomArray = createRandomArray(100);

// Memisahkan array menjadi genap dan ganjil
const [evenArray, oddArray] = separateArray(randomArray);

// Menghitung statistik untuk array genap
const [minEven, maxEven, totalEven, averageEven] = calculateStats(evenArray);

// Menghitung statistik untuk array ganjil
const [minOdd, maxOdd, totalOdd, averageOdd] = calculateStats(oddArray);

// Menampilkan hasil
console.log("Array dengan jumlah index 100:");
console.log(randomArray);
console.log("Array genap dengan jumlah index 50:");
console.log(evenArray);
console.log("Array ganjil dengan jumlah index 50:");
console.log(oddArray);
console.log("Min, Max, Total, dan Rata-rata untuk Array Genap:");
console.log("Min: " + minEven);
console.log("Max: " + maxEven);
console.log("Total: " + totalEven);
console.log("Rata-rata: " + averageEven);
console.log("Min, Max, Total, dan Rata-rata untuk Array Ganjil:");
console.log("Min: " + minOdd);
console.log("Max: " + maxOdd);
console.log("Total: " + totalOdd);
console.log("Rata-rata: " + averageOdd);

// Membandingkan hasil
if (minEven > minOdd) {
    console.log("Min lebih besar pada Array Genap");
} else {
    console.log("Min lebih besar pada Array Ganjil");
}

if (maxEven > maxOdd) {
    console.log("Max lebih besar pada Array Genap");
} else {
    console.log("Max lebih besar pada Array Ganjil");
}

if (totalEven === totalOdd) {
    console.log("Total memiliki nilai yang sama antara Array Genap dan Ganjil");
} else if (totalEven > totalOdd) {
    console.log("Total lebih besar pada Array Genap");
} else {
    console.log("Total lebih besar pada Array Ganjil");
}

if (averageEven > averageOdd) {
    console.log("Rata-rata lebih besar pada Array Genap");
} else {
    console.log("Rata-rata lebih besar pada Array Ganjil");
}
