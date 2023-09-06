package com.hikerzapi.hikerz;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HikeRepository extends MongoRepository<Hike, ObjectId> {
}
