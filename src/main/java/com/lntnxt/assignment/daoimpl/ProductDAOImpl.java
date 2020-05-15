package com.lntnxt.assignment.daoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lntnxt.assignment.dao.ProductDAO;
import com.lntnxt.assignment.entity.Product;
import com.lntnxt.assignment.rowmapper.ProductMapper;

@Repository
public class ProductDAOImpl implements ProductDAO {

	@Autowired
	JdbcTemplate jdbc;

	@Override
	public List<Product> getAllProducts() {
		String sql = "SELECT * FROM products";
		return jdbc.query(sql, new ProductMapper());
	}

	@Override
	public boolean addProduct(Product product) {
		String sql = "INSERT INTO products(name, description) VALUES(?,?)";
		jdbc.update(sql, product.getName(), product.getDescription());
		return true;
	}

	@Override
	public Product getProductById(String id) {
		String sql = "SELECT * FROM products WHERE product_id=?";
		return jdbc.queryForObject(sql, new Object[] { id }, new ProductMapper());
	}

	@Override
	public boolean deleteProduct(String id) {
		String sql = "DELETE FROM products WHERE product_id=?";
		jdbc.update(sql, id);
		return true;
	}

	@Override
	public boolean updateProduct(Product product) {
		String sql = "UPDATE products SET name=?, description=? WHERE product_id=?";
		jdbc.update(sql, product.getName(), product.getDescription(), product.getProductId());
		return true;
	}

}
