package com.lntnxt.assignment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lntnxt.assignment.dao.ProductDAO;
import com.lntnxt.assignment.entity.Product;
import com.lntnxt.assignment.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDAO productDAO;

	@Override
	public List<Product> getAllProducts() {
		return productDAO.getAllProducts();
	}

	@Override
	public boolean addProduct(Product product) {
		return productDAO.addProduct(product);
	}

	@Override
	public Product getProductById(String id) {
		return productDAO.getProductById(id);
	}

	@Override
	public boolean deleteProduct(String id) {
		return productDAO.deleteProduct(id);
	}

	@Override
	public boolean updateProduct(Product product) {
		return productDAO.updateProduct(product);
	}

}
