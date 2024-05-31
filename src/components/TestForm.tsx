import { Box, Button, Typography } from "@mui/material";

import CountdownTimer from "./CountdownTimer";
import Questions from "./Questions";
import Steps from "./Steps";
import { useTest } from "../common/TestProvider";

function TestForm() {
  const { questions, currentStep, beginTest, endTest, nextStep, resetTest } =
    useTest();
  const numberOfSteps = questions.length;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (currentStep <= questions.length) {
      nextStep();
    } else {
      endTest();
    }
  };

  return (
    <form
      className="TestForm"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        maxWidth: 960,
      }}
      onSubmit={handleSubmit}
    >
      {currentStep <= 0 && (
        <Button
          variant="contained"
          sx={{ width: "200px" }}
          onClick={() => beginTest()}
        >
          Начать тест
        </Button>
      )}

      {currentStep > numberOfSteps && (
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography paragraph sx={{ fontSize: "2rem" }}>
            Тест завершен. Хотите пройти еще раз?
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "300px" }}
            onClick={() => resetTest()}
          >
            Начать заново
          </Button>
        </Box>
      )}

      {currentStep > 0 && currentStep <= numberOfSteps && (
        <>
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "1em" }}>
            <Typography sx={{ fontSize: "2rem" }}>Тестирование</Typography>
            <CountdownTimer />
          </Box>
          <Steps stepsCount={numberOfSteps} />
          <Questions />
        </>
      )}
    </form>
  );
}

export default TestForm;
