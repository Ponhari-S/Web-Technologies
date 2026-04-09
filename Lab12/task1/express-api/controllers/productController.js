let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 }
];

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
};

exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ message: "Product not found" });

    products[index] = { ...products[index], ...req.body };
    res.status(200).json(products[index]);
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);
    res.status(200).json({ message: `Product ${id} deleted successfully` });
};