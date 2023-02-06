const fs = require('fs');

const filename = './models/catalogData.json';
const data = JSON.parse(fs.readFileSync(filename));

// для сохранения данных при create/update/delete, файл перезаписывается, иначе при restarte server все терялось
async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
            if (err == null) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}

// function getAll() {
//     return data;
// }
function getAll(search, fromPrice, toPrice) {
    return data
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}

function getApple(fromPrice, toPrice) {
    return data
        .filter(p => p.productCategory == 'Apple')
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}

function getAsus(fromPrice, toPrice) {
    return data
        .filter(p => p.productCategory == 'Asus')
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}

function getLenovo(fromPrice, toPrice) {
    return data
        .filter(p => p.productCategory == 'Lenovo')
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}

function getMSI(fromPrice, toPrice) {
    return data
        .filter(p => p.productCategory == 'MSI')
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}

function getOthers(fromPrice, toPrice) {
    return data
        .filter(p => p.productCategory == 'Others')
        .filter(p => p.price >= fromPrice && p.price <= toPrice);
}


function getById(id) {
    return data.find(i => i.id == id);
}

async function create(productData) {
    const product = {
        id: createId(),
        name: productData.name,
        display: productData.display,
        processor: productData.processor,
        graphic: productData.graphic,
        ramMemory: productData.ramMemory,
        totalCapacity: productData.totalCapacity,
        operatingSystem: productData.operatingSystem,
        price: Number(productData.price),
        productCategory: productData.productCategory,
        img1: productData.img1,
        img2: productData.img2,
        img3: productData.img3,
        img4: productData.img4,
        img5: productData.img5,
        img6: productData.img6,
        description: productData.description
    };

    const missing = Object.entries(product).filter(([k, v]) => !v);
    console.log(missing);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]}`).join('\n'));
        // throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    data.push(product);
    await persist();
    return product;
}

function createId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}


module.exports = {
    getAll,
    getApple,
    getAsus,
    getLenovo,
    getMSI,
    getOthers,
    getById,
    create
};