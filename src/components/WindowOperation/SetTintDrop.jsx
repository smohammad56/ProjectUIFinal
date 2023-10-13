import Form from 'react-bootstrap/Form';

function SetTintDrop(props) {
  return (
    <Form.Select aria-label="Default select example" onChange={(e) => props.settintOp(e.target.value)}>
      <option>Select your Tint Type</option>
      <option value="fullTint">Full Tint</option>
      <option value="upperTint">Upper Tint</option>
      <option value="lowerTint">Lower Tint</option>
      <option value="noTint">No Tint</option>
    </Form.Select>
  );
}

export default SetTintDrop;