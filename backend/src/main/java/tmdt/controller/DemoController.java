package tmdt.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tmdt.model.Demo;
import tmdt.repository.DemoRepository;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class DemoController {
	@Autowired
	DemoRepository demoRepository;
	
	@GetMapping("/demos")
	public ResponseEntity<List<Demo>> getAllDemo() {
		try {
			List<Demo> list = new ArrayList<>();
			demoRepository.findAll().forEach(list::add);
			if(list.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Demo>>(list, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping("/demos")
	public ResponseEntity<Demo> store(@RequestBody Demo demo) {
		try {
			Demo _demo = demoRepository.save(new Demo(null, demo.getTitle(), demo.getDescription()));
			
			if(_demo != null) {
				return new ResponseEntity<Demo>(_demo, HttpStatus.CREATED);
			}
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
