import React from "react";
import "./App.css";
import InputDropdown from "./components/InputDropdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./theme";
import Menu from "./components/Menu";
import { AddAlarm } from "@mui/icons-material";

function App() {
  const theme = createTheme(MyTheme);
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
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                placement="left"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              />

              <Menu
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                placement="left"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              />
            </div>
          </div>
          <div className="holder">
            <div className="box flex-row">
              <Menu
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                placement="bottom"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              />

              <Menu
                mode="secondary"
                startIcon={<AddAlarm />}
                width={3}
                placement="bottom"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
