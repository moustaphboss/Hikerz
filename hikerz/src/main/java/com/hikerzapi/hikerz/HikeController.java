package com.hikerzapi.hikerz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hikes")
public class HikeController {
    @Autowired
    private HikeService hikeService;
    @GetMapping
    public ResponseEntity<List<Hike>> getAllHikes() {
        return new ResponseEntity<List<Hike>>(hikeService.allHikes(), HttpStatus.OK);
    }
}
