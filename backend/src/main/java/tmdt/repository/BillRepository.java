package tmdt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tmdt.model.Bill;

public interface BillRepository extends MongoRepository<Bill, String>{

}
