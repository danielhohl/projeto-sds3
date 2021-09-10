package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private String sellerNAme;
	private Double sum;
	
	public SaleSumDTO() {
		
	}
	
	public SaleSumDTO(Seller seller, Double sum) {
		this.sellerNAme = seller.getName();
		this.sum = sum;
	}

	public String getSellerNAme() {
		return sellerNAme;
	}

	public void setSellerNAme(String sellerNAme) {
		this.sellerNAme = sellerNAme;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
}
