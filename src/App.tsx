import React, { useState } from "react";
import "./App.css";
import InputDropdown from "./components/InputDropdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./theme";
import Menu from "./components/Menu";
import { AddAlarm } from "@mui/icons-material";
import useStyles from "./App.styles";
import MenuHolder from "./components/MenuHolder";

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
                variant="light"
                width={3}
                showEndIcon
                dropDownWidth={3}
                placement="bottom"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              >
                label
              </Menu>

              <Menu
                variant="light"
                // startIcon={<AddAlarm />}
                width={3}
                placement="bottom"
                dropDownWidth={3}
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              >
                option 2
              </Menu>
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
