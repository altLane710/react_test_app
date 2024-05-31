import {
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function RadioQuestion(props: {
  value: string;
  description: string;
  options: { value: string; name: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <FormGroup sx={{ margin: "1rem 0" }}>
      <Typography paragraph>{props.description}</Typography>
      <RadioGroup
        value={props.value}
        onChange={(_e, value) => props.onChange(value)}
        sx={{ margin: "1rem 0" }}
      >
        {props.options.map((o: { value: string; name: string }) => (
          <FormControlLabel
            key={`${o.value}${o.name}`}
            value={o.value}
            control={<Radio />}
            label={o.name}
          />
        ))}
      </RadioGroup>
      <FormGroup />
    </FormGroup>
  );
}

export default RadioQuestion;
