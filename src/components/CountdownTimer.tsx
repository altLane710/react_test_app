import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTest } from "../common/TestProvider";
import dayjs from "dayjs";

const CountdownTimer = () => {
  const { timeStart, testDuration, endTest } = useTest();
  const [timeRemaining, setTimeRemaining] = useState(
    testDuration - dayjs(new Date()).diff(timeStart, "seconds")
  );

  useEffect(() => {
    if (timeRemaining <= 0) {
      endTest();
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining((seconds) => seconds - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        padding: "8px 4px",
        width: "100px",
        borderRadius: "8px",
      }}
    >
      <Typography alignSelf="center">
        {`${Math.floor(timeRemaining / 60)}`.padStart(2, "0")}:
        {`${timeRemaining % 60}`.padStart(2, "0")}
      </Typography>
    </Box>
  );
};

export default CountdownTimer;
