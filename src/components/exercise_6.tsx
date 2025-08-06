import React, { useState, useRef } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  LinearProgress,
} from "@mui/material";

const ExerciseSix: React.FC = () => {
  const [achillesPosition, setAchillesPosition] = useState<number>(0);
  const [tortoisePosition, setTortoisePosition] = useState<number>(0);
  const [totalDistance, setTotalDistance] = useState<number>(1);
  const tortoiseVelocity = 1;
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  const timerRef = useRef<number | null>(null);

  const simulateParadox = async () => {
    setIsRunning(true);
    let achilles = 0;
    let tortoise = tortoisePosition;

    timerRef.current = window.setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 100);
      const distanceToTortoise = tortoise - achilles;
      achilles += distanceToTortoise / 2;

      tortoise += tortoiseVelocity;

      setAchillesPosition(achilles);
      setTortoisePosition(tortoise);

      if (achilles >= totalDistance || tortoise >= totalDistance) {
        stopSimulation();
      }
    }, 100);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    clearInterval(timerRef.current as number);
  };

  const handleStartStop = () => {
    if (isRunning) {
      stopSimulation();
    } else {
      setAchillesPosition(0);
      setTortoisePosition(tortoisePosition);
      setTimeElapsed(0);
      simulateParadox();
    }
  };

  const getPositionPercentage = (position: number): number => {
    return Math.min((position / totalDistance) * 100, 100);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 3,
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="h6">
        Exercise 6: Zeno's Paradox of Achilles and the Tortoise
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Total Distance (in kilometers)"
        value={totalDistance}
        onChange={(e) => setTotalDistance(parseFloat(e.target.value))}
        sx={{ marginY: 2 }}
        type="number"
        disabled={isRunning}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Tortoise initial position (in kilometers)"
        value={tortoisePosition}
        onChange={(e) => setTortoisePosition(parseFloat(e.target.value))}
        sx={{ marginY: 2 }}
        type="number"
        disabled={isRunning}
      />

      <Button variant="contained" color="primary" onClick={handleStartStop}>
        {isRunning ? "Stop Simulation" : "Start Simulation"}
      </Button>
      <Box
        sx={{
          marginTop: 3,
          border: "1px solid grey",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Box sx={{ position: "relative" }}>
          {/* Achilles Position */}
          <Typography
            variant="body2"
            sx={{
              position: "relative",
              left: `${getPositionPercentage(achillesPosition)}%`,
              bottom: 10,
              transform: "translateX(-50%)",
              width: 40,
              transition: "left 0.1s linear",
              marginTop: 1,
            }}
          >
            Achilles
          </Typography>
          <LinearProgress
            variant="determinate"
            value={getPositionPercentage(achillesPosition)}
            sx={{ height: 10, marginBottom: 2 }}
          />
          <Typography
            variant="body2"
            sx={{
              position: "relative",
              left: `${getPositionPercentage(tortoisePosition)}%`,
              bottom: 10,
              transform: "translateX(-50%)",
              width: 40,
              transition: "left 0.1s linear",
              marginTop: 1,
            }}
          >
            Tortoise
          </Typography>
          <LinearProgress
            variant="determinate"
            value={getPositionPercentage(tortoisePosition)}
            color="secondary"
            sx={{ height: 10 }}
          />
        </Box>

        <Box>
          <Typography variant="body1">
            Achilles Position: {achillesPosition.toFixed(7)} kilometers
          </Typography>
          <Typography variant="body1">
            Tortoise Position: {tortoisePosition.toFixed(7)} kilometers
          </Typography>
          <Typography variant="body1">
            Time Elapsed: {(timeElapsed / 1000).toFixed(1)} seconds
          </Typography>
        </Box>

        {getPositionPercentage(tortoisePosition) === 100 && (
          <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
            Simulation Complete: The paradox continues infinitely!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ExerciseSix;
