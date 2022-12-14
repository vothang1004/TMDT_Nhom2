package tmdt.model;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bills")
public class Bill {
	@Id
	private String id;
	private double price;
	private String product_id;
	private Timestamp order_date;
	public Bill() {
		super();
	}
	public Bill(String id, double price, String product_id, Timestamp order_date) {
		super();
		this.id = id;
		this.price = price;
		this.product_id = product_id;
		this.order_date = order_date;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getProduct_id() {
		return product_id;
	}
	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}
	public Timestamp getOrder_date() {
		return order_date;
	}
	public void setOrder_date(Timestamp order_date) {
		this.order_date = order_date;
	}
	

}
