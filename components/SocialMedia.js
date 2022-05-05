import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { grey } from "@mui/material/colors";

const Container = "m-2 p-5 ";
const Icon_Color = grey[500];

const SocialMedia = () => {
  return (
    <div className={Container}>
      <a href="mailto:mdosseh@yahoo.fr">
        <IconButton
          style={{ color: Icon_Color }}
          // fontSize="small"
          aria-label="email"
          component="span"
        >
          <EmailIcon style={{ fontSize: 20 }} />
        </IconButton>
      </a>

      <a
        href="https://www.linkedin.com/in/efoedosseh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          style={{ color: Icon_Color }}
          aria-label="linkedin"
          component="span"
        >
          <LinkedInIcon style={{ fontSize: 20 }} />
        </IconButton>
      </a>

      <a
        href="https://twitter.com/EfoeDosseh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          style={{ color: Icon_Color }}
          aria-label="twitter"
          component="span"
        >
          <TwitterIcon style={{ fontSize: 20 }} />
        </IconButton>
      </a>

      {/* <a
        href="https://github.com/EfoeDosseh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          style={{ color: Icon_Color }}
          aria-label="github"
          component="span"
        >
          <GitHubIcon style={{ fontSize: 20 }} />
        </IconButton>
      </a> */}
    </div>
  );
};

export default SocialMedia;
