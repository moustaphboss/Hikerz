package com.hikerzapi.hikerz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String hikeId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Hike.class)
            .matching(Criteria.where("hikeId").is(hikeId))
            .apply(new Update().push("reviewIds").value(review))
            .first();

        return review;
    }
}
