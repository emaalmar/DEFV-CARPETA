function timer(n) {
    if (n === 0) {
        console.log("Despegue!");
        return;
    }

    setTimeout(() => {
        timer(n - 1);
    }, 1000)

    console.log(n);
}
timer(5);

function suma(n) {
    if (n === 10) return 0;
    return n + suma(n + 1);
}
console.log(suma(5)); // 55

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

const arrayN = [1,
    [2, 3]
    , [4
        , [5],
        [6,
            [10, 5]
        ]
    ]
];

function sumArr(n, iteracion) {
    let sum = 0;
    for (let item of n) {
        if (Array.isArray(item)) {
            sum += sumArr(item, (iteracion + 1));
        } else {
            sum += item;
        }
    }
    console.log(`subtarea: ${iteracion} ${sum} `);
    return sum;
}

console.log(sumArr(arrayN, 1));

// const arr = [1, 2, 3, 4, 5];
// let left = 0;
// let right = arr.length - 1;

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] != str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome(("OSOa").replaceAll(" ", ""))); // true

function tieneParConSuma(arr, target) {
    left = 0;
    right = arr.length - 1;

    while (left < right) {
        const suma = arr[left] + arr[right];
        if (suma === target) return true;
        if (suma < target) left++;
        else right--;
    }
    return false;
}

const arreglo = [1, 2, 3, 4, 5, 6];

console.log(tieneParConSuma(arreglo, 10));

const str = "ab[c[d]e]f";

function comparaRec(params) {
    
}

function comparaPunt(params) {
    
}


const comparaFlag = (cadena)=> {
    left = 0;
    right = cadena.length - 1;
    let flag = 0;

    while (left < right) {
        if (cadena[left] === "[") return false;
    }

};