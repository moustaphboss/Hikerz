package com.hikerzapi.hikerz;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HikeService {
    @Autowired
    private HikeRepository hikeRepository;
    public List<Hike> allHikes() {
        return hikeRepository.findAll();
    }

    public Optional<Hike> singleHike(ObjectId id) {
        return hikeRepository.findById(id);
    }
}
