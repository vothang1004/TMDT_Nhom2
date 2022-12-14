package tmdt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tmdt.model.Bill;
import tmdt.repository.BillRepository;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class BillController {
	
	@Autowired
	BillRepository billRepository;
	
	@GetMapping("/bill")
	public ResponseEntity<List<Bill>> getAllBill() {
		try {
			List<Bill> bills = billRepository.findAll();
			if(bills.isEmpty()) {
				return new ResponseEntity<List<Bill>>(bills, HttpStatus.NO_CONTENT);
			}else {
				return new ResponseEntity<List<Bill>>(bills, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
