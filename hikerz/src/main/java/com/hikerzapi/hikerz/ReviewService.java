package com.hikerzapi.hikerz;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    public Review createReview(String reviewBody, ObjectId id) {
        Review review = new Review(reviewBody);

        return review;
    }
}
