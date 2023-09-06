package com.hikerzapi.hikerz;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hikes")
public class HikeController {
    @Autowired
    private HikeService hikeService;
    @GetMapping
    public ResponseEntity<List<Hike>> getAllHikes() {
        return new ResponseEntity<List<Hike>>(hikeService.allHikes(), HttpStatus.OK);
    }

    @GetMapping("/{hikeId}")
    public ResponseEntity<Optional<Hike>> getHike(@PathVariable String hikeId) {
        return new ResponseEntity<Optional<Hike>>(hikeService.singleHike(hikeId), HttpStatus.OK);
    }
}
