package com.hikerzapi.hikerz;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "hikes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hike {
    @Id
    private ObjectId id;
    private String hikeId;
    private String title;
    private String publishDate;
    private String videoLink;
    private List<String> types;
    private String country;
    private String mainImage;
    private List<String> extraImages;
    @DocumentReference
    private List<Review> reviewIds;
}
