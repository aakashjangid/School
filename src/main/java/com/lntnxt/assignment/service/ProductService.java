package com.lntnxt.assignment.service;

import java.util.List;

import com.lntnxt.assignment.entity.Product;

public interface ProductService {

	public List<Product> getAllProducts();

	public boolean addProduct(Product product);

	public Product getProductById(String id);

	public boolean deleteProduct(String id);

	public boolean updateProduct(Product product);

}
