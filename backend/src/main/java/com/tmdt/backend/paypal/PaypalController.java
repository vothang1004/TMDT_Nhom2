package com.tmdt.backend.paypal;

import com.tmdt.backend.service.UserProductService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class PaypalController {

	@Autowired
	PaypalService service;
	@Autowired
	UserProductService userProductService;


//	public static final String SUCCESS_URL = "pay/success";
// 	public static final String SUCCESS_URL1 = "order1/{id_user}/{id_product}";
 	public static final String SUCCESS_URL = "order";

	public static final String CANCEL_URL = "pay/cancel";

	@GetMapping("/")
	public String home() {
		System.out.println("hung");
		return "home";
	}
	public boolean checkPrice(String id_user,String id_product,double orderPrice){
		double standardPrice = userProductService.getScoreBonus(id_user,id_product);
				if(standardPrice!=orderPrice){
					return false;
				}
				return true;
	}
	//@ModelAttribute("order")
	@PostMapping("/pay")
	public String payment(@ModelAttribute("order") OrderNew order) {
		try {
			if(!checkPrice( order.getIdUser(), order.getIdProduct(), order.getPrice())){
				return " price not correct";
			}
			Payment payment = service.createPayment(order.getPrice(), order.getCurrency(), order.getMethod(),
					order.getIntent(), order.getDescription(), "http://localhost:8080/" + CANCEL_URL,
					"http://localhost:8080/" + SUCCESS_URL+"/"+order.getIdUser()+"/"+order.getIdProduct());
			for(Links link:payment.getLinks()) {
				if(link.getRel().equals("approval_url")) {
					return "redirect:"+link.getHref();
				}
			}
			
		} catch (PayPalRESTException e) {
		
			e.printStackTrace();
		}
		return "redirect:/";
	}

	 @GetMapping(value = CANCEL_URL)
	    public String cancelPay() {
	        return "cancel";
	    }
		//@ModelAttribute("order") OrderNew order,
//		@GetMapping(value = SUCCESS_URL1)
//	    public String successPay(@PathVariable("id_user")String idUser,@PathVariable("id_product")String idProduct,@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
//	        try {
//	            Payment payment = service.executePayment(paymentId, payerId);
//	            System.out.println(payment.toJSON());
//					System.out.println("ID USER: "+idUser);
//				System.out.println();
//				System.out.println();
//	            if (payment.getState().equals("approved")) {
//	                return "order1/"+idUser+"/"+idProduct;
////					return "success";
//	            }
//	        } catch (PayPalRESTException e) {
//	         System.out.println(e.getMessage());
//	        }
//	        return "redirect:/";
//	    }

}
