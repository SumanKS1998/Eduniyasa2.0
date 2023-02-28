import { Grid, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonComponent = () => {
  return (
    <Grid container spacing={3}>
      {[
        ...Array(6)
          .fill("")
          .map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <Stack
                  component={Paper}
                  width="100%"
                  gap={1}
                  elevation={2}
                  borderRadius={3}
                >
                  <Stack p={2}>
                    <Skeleton height={40} animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton height={100} animation="wave" />
                    <Skeleton height={40} animation="wave" />
                  </Stack>
                </Stack>
              </Grid>
            );
          }),
      ]}
    </Grid>
  );
};

export default SkeletonComponent;
