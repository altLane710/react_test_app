import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

function MultipleQuestion(props: {
  value: string[];
  description: string;
  options: { name: string; checked: boolean }[];
  onChange: (value: string[]) => void;
}) {
  return (
    <FormGroup sx={{ margin: "1rem 0" }}>
      <Typography paragraph>{props.description}</Typography>
      {props.options.map((o) => (
        <FormControlLabel
          key={o.name}
          control={
            <Checkbox
              checked={props.value.includes(o.name)}
              onChange={(e, checked) =>
                checked
                  ? props.onChange([...props.value, o.name])
                  : props.onChange(props.value.filter((e) => e !== o.name))
              }
            />
          }
          label={o.name}
        />
      ))}
    </FormGroup>
  );
}

export default MultipleQuestion;
