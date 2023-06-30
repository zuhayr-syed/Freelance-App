import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState, useEffect } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [spec, setSpec] = useState("");
  const [req, setReq] = useState("");

  const [start, setStart] = useState(null);
  const [due, setDue] = useState(null);

  const [payType, setPayType] = useState("");
  const [payAmount, setPayAmount] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [payErr, setPayErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [fieldsEmpty, setfieldsEmpty] = useState(true);

  useEffect(() => {
    if (
      title &&
      desc &&
      spec &&
      start &&
      due &&
      payType &&
      payAmount &&
      email
    ) {
      setfieldsEmpty(false);
    } else {
      setfieldsEmpty(true);
    }
  }, [title, desc, spec, start, due, payType, payAmount, email]);

  useEffect(() => {
    let isNum = /^\d+$/.test(payAmount);
    if (payAmount.length === 0) {
      setPayErr(false);
    } else {
      setPayErr(!isNum);
    }
  }, [payAmount]);

  useEffect(() => {
    let isNum = /^\d+$/.test(phone);
    if (phone.length === 0) {
      setPhoneErr(false);
    } else {
      setPhoneErr(!isNum);
    }
  }, [phone]);

  const submitForm = async () => {
    console.log("title: ", title);
    console.log("desc: ", desc);
    console.log("spec: ", spec);
    console.log("req: ", req);
    console.log("start: ", start);
    console.log("due: ", due);
    console.log("payType: ", payType);
    console.log("payAmount: ", payAmount);
    console.log("email: ", email);
    console.log("phone: ", phone);
    setTitle("");
    setDesc("");
    setSpec("");
    setReq("");
    setStart(null);
    setDue(null);
    setPayType("");
    setPayAmount("");
    setEmail("");
    setPhone("");
    setPayErr("");
    setPhoneErr("");
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Post Title"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Project Description"
            fullWidth
            variant="standard"
            multiline
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="product-specifications"
            name="product-specifications"
            label="Project Specifications"
            fullWidth
            variant="standard"
            multiline
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="special-requests"
            name="special-requests"
            label="Special Requests"
            fullWidth
            variant="standard"
            multiline
            value={req}
            onChange={(e) => setReq(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Project Start Date"
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              value={start}
              onChange={(newValue) => setStart(newValue.format("MM-DD-YYYY"))}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Project Due Date"
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              value={due}
              onChange={(newValue) => setDue(newValue.format("MM-DD-YYYY"))}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="pay-type">Pay Type</InputLabel>
            <Select
              labelId="pay-type-label"
              id="pay-type"
              label="Pay Type"
              value={payType}
              onChange={(e) => setPayType(e.target.value)}
            >
              <MenuItem value={"One Time"}>One Time</MenuItem>
              <MenuItem value={"Hourly"}>Hourly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              error={payErr}
              helperText={payErr ? "Input can only contain numbers" : ""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={phoneErr}
            helperText={phoneErr ? "Input can only contain numbers" : ""}
            id="phone-number"
            name="phone-number"
            label="Phone Number"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            onClick={submitForm}
            disabled={payErr | phoneErr | fieldsEmpty}
          >
            Create Post
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
