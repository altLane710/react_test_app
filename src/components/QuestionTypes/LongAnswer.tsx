import { FormGroup, TextField, Typography } from "@mui/material";

function LongAnswer(props: {
  value: string;
  description: string;
  onChange: (value: string) => void;
}) {
  return (
    <FormGroup sx={{ margin: "1rem 0" }}>
      <Typography paragraph>{props.description}</Typography>
      <TextField
        multiline
        minRows={10}
        label="Ответ: "
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </FormGroup>
  );
}

export default LongAnswer;
