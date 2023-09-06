package com.hikerzapi.hikerz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HikeService {
    @Autowired
    private HikeRepository hikeRepository;
    public List<Hike> allHikes() {
        return hikeRepository.findAll();
    }
}
