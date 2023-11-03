import React from "react";
import appData from "@data/app.json";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Input, TextField } from "@mui/material";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

const style = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    backgroundImage: "url('img/bgSection.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
  },
  content: {
    display: "grid",
    gap: 4,
    p: 4,
  },

  img: {
    // width: "300px",
    height: "100%",
  },

  closeButton: {
    position: "absolute",
    top: "0",
    right: 0,
    color: "white",
    fontWeight: 900,
    fontSize: 25,
  },
};

export default function BasicModal({ isOpen = false }) {
  const [open, setOpen] = React.useState(false);
  const [state, handleSubmit] = useForm(appData.settings.formspreeID);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function makeToast(msg, type = "success") {
    return toast(msg, { type: type });
  }

  React.useEffect(() => {
    !open && setTimeout(() => handleOpen(true), 6000);
  }, []);

  React.useEffect(() => {
    if (state.succeeded) {
      var expires = new Date();
      expires.setDate(expires.getDate() + 14);

      makeToast("Thanks we will send the pdf soon!");
      handleClose();

      setCookie("marketingEmail", "true", { expires });
    }
  }, [state.succeeded]);

  React.useEffect(() => {
    if (state.errors) {
      makeToast("try again later", "error");
      handleClose();
    }
  }, [state.errors]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.wrapper} className="modal-wrapper">
          <Button onClick={handleClose} sx={style.closeButton}>
            X
          </Button>
          <Box sx={style.img} className="modal-img">
            <img
              src={
                "/img/marketing/tiktok-reel-strategy.png"
                // "https://iluisdaniel.com/wp-content/uploads/2018/10/the-lean-startup.jpg"
              }
              alt="business book"
              style={{ objectFit: "contain", borderRadius: "20px" }}
              width={"100%"}
              //   height={"400"}
            />
          </Box>
          <Box sx={style.content} className="modal-content">
            <Typography fontWeight="bold" variant="h3">
              The TikTok + Reels Video Format Guide for
              <span
                style={{
                  background: "#ffa726",
                  color: "white",
                  padding: "0 5px",
                  borderRadius: "10px",
                }}
              >
                FREE
              </span>
              .
            </Typography>
            <ul>
              <li>
                ✅ Learn Three elements that will instantly make your videos
                more engaging for audiences to watch
              </li>
              <li>✅ Storytelling & Challenges</li>
              <li>✅ Getting more followers in short period </li>
              <li>✅ Get exclusive giveawayas(surprise) </li>
            </ul>
            <Grid
              gridTemplateRows={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Input type="email" placeholder="Your Email Address" /> */}
            </Grid>

            <form
              // action="https://formspree.io/f/xwkdynnw"
              // method="post"
              onSubmit={handleSubmit}
            >
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                <ValidationError
                  prefix="Email"
                  field="marketing_email"
                  errors={state.errors}
                />
                <TextField
                  name="marketing_email"
                  label="Your Email Address"
                  color="warning"

                  // focused
                />
                <Button
                  type="submit"
                  disabled={state.submitting}
                  style={{ backgroundColor: "#000d1d", margin: "0 5px" }}
                  color="warning"
                >
                  Get PDF
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        {/* <Button onClick={handleClose}>X</Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

        {/* <Grid sx={style} columns={3} direction={"column"}>
          <Box>Hello--</Box>
          <Box>Hello</Box>
        </Grid> */}
      </Modal>
    </div>
  );
}
