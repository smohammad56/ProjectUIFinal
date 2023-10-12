import Form from 'react-bootstrap/Form';

function SetTintDrop(props) {
  return (
    <Form.Select aria-label="Default select example" onChange={(e) => props.settintOp(e.target.value)}>
      <option>Select your Tint Type</option>
      <option value="1">Full Tint</option>
      <option value="2">Upper Tint</option>
      <option value="3">Lower Tint</option>
      <option value="4">No Tint</option>
    </Form.Select>
  );
}

export default SetTintDrop;