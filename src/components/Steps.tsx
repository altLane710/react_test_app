import { Box } from "@mui/material";
import { useTest } from "../common/TestProvider";
import { useTheme } from "@mui/material/styles";

const Steps = (props: { stepsCount: number }) => {
  const theme = useTheme();
  const { currentStep } = useTest();
  const steps = new Array(props.stepsCount).fill(0).map((_, index) => {
    const getBgColor = () => {
      if (index < currentStep - 1) {
        return "black";
      } else if (index === currentStep - 1) {
        return theme.palette.primary.main;
      }

      return "grey";
    };

    return (
      <Box
        key={index}
        sx={{
          flex: "1 1 0",
          height: "10px",
          backgroundColor: getBgColor(),
        }}
      />
    );
  });

  return (
    <Box display="flex" flexWrap="wrap" gap="10px">
      {steps}
    </Box>
  );
};

export default Steps;
