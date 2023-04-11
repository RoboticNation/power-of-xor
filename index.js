const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

const canvas3 = document.getElementById("key");
const ctx3 = canvas3.getContext("2d");

const canvas4 = document.getElementById("xor");
const ctx4 = canvas4.getContext("2d");

const button = document.getElementById("generate");

const image1 = new Image();
image1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LCKlCx6aDI8-ZQYx9Dr79TJE1u7nYaRptw&usqp=CAU";
image1.crossOrigin = "Anonymous";

const image2 = new Image();
image2.src = "data:image/png;base64,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";
image2.crossOrigin = "Anonymous";

const keyImage = new Image();
keyImage.src = "https://m.media-amazon.com/images/I/11qlG95ExiL._CR0,0,500,500_UX256.png"
// keyImage.src = "data:image/png;base64,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";
keyImage.crossOrigin = "Anonymous";


image1.addEventListener("load", () => {
    ctx1.drawImage(image1, 0, 0);
    image1.style.display = "none";
});

image2.addEventListener("load", () => {
    ctx2.drawImage(image2, 0, 0);
    image2.style.display = "none";
});

keyImage.addEventListener("load", () => {
    ctx3.drawImage(keyImage, 0, 0);
    keyImage.style.display = "none";
});



// GET BIT ARRAYS

function imageToBitArray(ctx) {
    const imageData = ctx.getImageData(0, 0, 256, 256);
    const { data } = imageData;

    for (let i = 0, j = 0; i < data.length; i += 4, j++) {
        if (data[i] == 255) {
            // white 
            data[i + 1] = 255;
            data[i + 2] = 255;
            data[i + 3] = 255;
        } else {
            // black
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 255;
        }
    }
    return imageData;
}

function xorArrays(arr1, arr2) {
    let myImageData = ctx4.createImageData(256, 256);

    for (let i = 0; i < arr1.data.length; i += 4) {
        let bit1 = 0;
        let bit2 = 0;
        if (arr1.data[i] == 255) {
            bit1 = 0;
        } else {
            bit1 = 1;
        }
        if (arr2.data[i] == 255) {
            bit2 = 0;
        } else {
            bit2 = 1;
        }
        let res = bit1 ^ bit2;
        if (res == 1) {
            // black
            myImageData.data[i] = 0;
            myImageData.data[i + 1] = 0;
            myImageData.data[i + 2] = 0;
            myImageData.data[i + 3] = 255;
        } else {
            // white
            myImageData.data[i] = 255;
            myImageData.data[i + 1] = 255;
            myImageData.data[i + 2] = 255;
            myImageData.data[i + 3] = 255;
        }
    }
    return myImageData;
}

button.addEventListener('click', () => {
    // convert each image to black and white
    const img1Arr = imageToBitArray(ctx1);
    const img2Arr = imageToBitArray(ctx2);
    const keyArr = imageToBitArray(ctx3);

    // xor-ing
    const c1 = xorArrays(img1Arr, keyArr);
    const c2 = xorArrays(img2Arr, keyArr);

    // these are the same
    const ciphersXor = xorArrays(c1, c2);
    const plaintextXor = xorArrays(img1Arr, img2Arr);

    console.log(c1);
    console.log(c2);
    console.log(ciphersXor);

    // displaying the xor-ed ciphertexts
    ctx4.putImageData(plaintextXor, 0, 0);
});