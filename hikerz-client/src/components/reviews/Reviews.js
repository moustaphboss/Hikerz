import { useEffect, useRef } from "react"
import api from '../../api/axiosConfig'
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ReviewForm from "../reviewForm/ReviewForm"

const Reviews = ({getHikeData, hike, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const hikeId = params.hikeId;

    useEffect(() => {
      getHikeData(hikeId);
    }, [])
    
    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            const response = await api.post("/api/reviews", {reviewBody: rev.value, hikeId: hikeId});

            const updateReview = [...reviews, {body:rev.value}];

            rev.value = "";
            setReviews(updateReview);
        } catch (err) {
            console.log(err);
        }

        
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col><img src={hike?.mainImage} alt=""/></Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col><ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review about this hike!"/></Col>
                            </Row>
                            <Row>
                                <Col><hr/></Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col><hr/></Col>
            </Row>
        </Container>
    )
}

export default Reviews