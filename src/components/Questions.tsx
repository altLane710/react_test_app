import { Box, Button, Typography } from "@mui/material";

import {
  QuestionTypes,
  isLongAnswer,
  isMultipleQuestion,
  isRadioQuestion,
  isShortAnswer,
} from "../common/types";

import { useTest } from "../common/TestProvider";
import RadioQuestion from "./QuestionTypes/RadioQuestion";
import MultipleQuestion from "./QuestionTypes/MultipleQuestion";
import ShortAnswer from "./QuestionTypes/ShortAnswer";
import LongAnswer from "./QuestionTypes/LongAnswer";

const Questions = () => {
  const { questions, currentStep, saveAnswer } = useTest();

  const question: QuestionTypes = questions[currentStep - 1];

  return (
    <Box margin="2rem 0">
      <Typography
        sx={{ fontSize: "1.5rem" }}
      >{`Вопрос №${currentStep}`}</Typography>

      {isRadioQuestion(question) && (
        <RadioQuestion
          value={question.value}
          description={question.description}
          options={question.options}
          onChange={(value) => saveAnswer(value)}
        />
      )}

      {isMultipleQuestion(question) && (
        <MultipleQuestion
          value={question.value}
          description={question.description}
          options={question.options}
          onChange={(value) => saveAnswer(value)}
        />
      )}

      {isShortAnswer(question) && (
        <ShortAnswer
          value={question.value}
          description={question.description}
          onChange={(value) => saveAnswer(value)}
        />
      )}

      {isLongAnswer(question) && (
        <LongAnswer
          value={question.value}
          description={question.description}
          onChange={(value) => saveAnswer(value)}
        />
      )}

      <Button type="submit" variant="contained" color="primary">
        Ответить
      </Button>
    </Box>
  );
};

export default Questions;
