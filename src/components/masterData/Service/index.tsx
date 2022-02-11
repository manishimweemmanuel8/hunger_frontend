import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface MainProps {
  posts: any;
  title: string;
}

export default function Services(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post: any) => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </Grid>
  );
}
