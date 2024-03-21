import React, { useState } from 'react';
import './Product.css';


let initialProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 9990.99, stockQuantity: 50 },
  { id: 2, name: 'Backpack', category: 'Accessories', price: 699.99, stockQuantity: 55 },
  { id: 3, name: 'T-shirt', category: 'Clothing', price: 200.99, stockQuantity: 100 },
  { id: 4, name: 'Jeans', category: 'Fashion', price: 400.99, stockQuantity: 200 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 1600.99, stockQuantity: 105 },
  { id: 6, name: 'Bookshelf', category: 'Furniture', price: 2900.99, stockQuantity: 106 },
  { id: 7, name: 'Coffee Maker', category: 'Appliances', price: 160.99, stockQuantity: 200 },
  { id: 8, name: 'Indoor Plants', category: 'Decor', price: 19.99, stockQuantity: 515 },
  { id: 9, name: 'Fitness Tracker', category: 'Equipment', price: 25.99, stockQuantity: 150 },
  { id: 10, name: 'Yoga Mat', category: 'Sports', price: 198.99, stockQuantity: 290 },
  { id: 11, name: 'Board Game', category: 'Games', price: 154.99, stockQuantity: 150 },
  { id: 12, name: 'Movie Tickets', category: 'Entertainment', price: 200.99, stockQuantity: 300 },
];

function Product() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
  const [showInputFields, setShowInputFields] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleAddProduct = () => {
    // Ensure all fields are filled before adding the product
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stockQuantity) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    setShowInputFields(false); // Hide input fields after adding a product
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (product) => {
    setEditProductId(product.id);
    setNewProduct({ ...product });
    setShowInputFields(true); // Show input fields when editing a product
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProductId ? { ...newProduct } : product
    );
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    setEditProductId(null);
    setShowInputFields(false); // Hide input fields after updating a product
  };

  return (
    <div className="container">
      <h2 className="product-heading">Product List</h2>
     
      <div className="add-product">
        <h2 className="add-product-heading">Add New Product</h2>
        {showInputFields && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Stock Quantity"
              value={newProduct.stockQuantity}
              onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
              className="input-field"
            />
          </>
        )}
        <button type="button" onClick={() => setShowInputFields(true)} className="add-button">Add Product</button>
        {showInputFields && <button onClick={handleAddProduct} className="add-button-save">Save</button>}
      </div>


      <div className="product-table">
        <div className="product-header">
          <div className="product-cell">Product Name</div>
          <div className="product-cell">Category</div>
          <div className="product-cell">Price</div>
          <div className="product-cell">Stock Quantity</div>
          <div className="product-cell">Actions</div>
        </div>
        {products.map(product => (
          <div key={product.id} className="product-row">
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              ) : (
                product.name
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
              ) : (
                product.category
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              ) : (
                product.price
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.stockQuantity}
                  onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
                />
              ) : (
                product.stockQuantity
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <button className="save" onClick={handleUpdateProduct}>Save</button>
              ) : (
                <button  className='product-button' onClick={() => handleEditProduct(product)}>Edit</button>
              )}
              <button className='delete-button' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
