import React, { useState } from "react";
import "./App.css";
import InputDropdown from "./components/InputDropdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./theme";
import Menu from "./components/Menu";
import { AddAlarm } from "@mui/icons-material";
import useStyles from "./App.styles";
import MenuHolder from "./components/MenuHolder";
import { FormControlLabel, Switch } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme(MyTheme(mode));
  const options = [
    { value: "member", label: "member" },
    { value: "admin", label: "admin" },
  ];
  const onAddUser: any = ({
    searchText,
    role,
  }: {
    searchText: string;
    role: string;
  }) => {
    console.log({ searchText, role });
  };
  console.log({ theme });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <FormControlLabel
            label="Toggle Mode"
            control={
              <Switch
                checked={mode === "dark"}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            }
          />
          <div className="container">
            <InputDropdown
              placeholder="clarisse.anne.medallo@pwc.com.ph"
              options={options}
              onAddUser={onAddUser}
            />
          </div>
          <div className="holder">
            <div className="box">
              <Menu
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                placement="left"
                options={["option1", "option2", "option3"]}
                name="option1"
                onClick={(option: string | undefined) => console.log(option)}
              />

              <Menu
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                name="option2"
                placement="left"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              />
            </div>
          </div>
          <div className="holder">
            <MenuHolder />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
