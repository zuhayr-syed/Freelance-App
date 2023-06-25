import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import PostForm from "./PostForm";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    name: {
      order: 2,
    },
    family_name: {
      order: 3,
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
  },
};

const CreatePost = () => {
  return (
    <Authenticator formFields={formFields}>
      {/* {({ signOut, user }) => ( */}
      {/* // <main>
        //   <h1>Hello {user.username}</h1>
        //   <button onClick={signOut}>Sign out</button>
        // </main> */}
      <div className="create">
        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Create A Post!
            </Typography>
            <PostForm />
          </Paper>
        </Container>
      </div>
      {/* )} */}
    </Authenticator>
  );
};

export default CreatePost;
