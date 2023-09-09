import { Form, Button, FormLabel } from "react-bootstrap"

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.controlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}></Form.Control>
        </Form.Group>
        <Button variant="outline-info">Submit</Button>
    </Form>
  )
}

export default ReviewForm