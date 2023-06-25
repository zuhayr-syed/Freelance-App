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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function PostForm() {
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
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="pay-type">Pay Type</InputLabel>
            <Select labelId="pay-type-label" id="pay-type" label="Pay Type">
              <MenuItem value={10}>one-time</MenuItem>
              <MenuItem value={20}>hourly</MenuItem>
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone-number"
            name="phone-number"
            label="Phone Number"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
