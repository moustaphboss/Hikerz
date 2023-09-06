package com.hikerzapi.hikerz;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HikeRepository extends MongoRepository<Hike, ObjectId> {
    Optional<Hike> findHikeByHikeId(String hikeId);
}
