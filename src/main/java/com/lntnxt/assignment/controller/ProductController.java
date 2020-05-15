package com.lntnxt.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lntnxt.assignment.entity.Product;
import com.lntnxt.assignment.service.ProductService;

@RestController
@RequestMapping("products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping("/addProduct")
	public boolean addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}

	@GetMapping("/getProductById/{id}")
	public Product getProductById(@PathVariable String id) {
		return productService.getProductById(id);
	}

	@GetMapping("/deleteProduct/{id}")
	public boolean deleteProduct(@PathVariable String id) {
		return productService.deleteProduct(id);
	}

	@PostMapping("/updateProduct")
	public boolean updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}

}
