package tmdt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tmdt.model.Demo;

public interface DemoRepository extends MongoRepository<Demo, String>{
	
}
