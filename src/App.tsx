import React from "react";
import "./App.css";
import InputDropdown from "./components/InputDropdown";
import StyledSkeleton from "./components/Skeleton";
import Tags from "./components/Tags";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <InputDropdown placeholder="invite user" />
          {/* <h4>static Tags</h4>
        <Tags variant="primary-light" value="Label" />
        <Tags variant="secondary-light" value="Label" />
        <Tags variant="tertiary-light" value="Label" />
        <Tags variant="warning-light" value="Label" />
        <Tags variant="default-light" value="Label" />

        <div className="App">
          <Tags variant="primary" value="Label" />
          <Tags variant="secondary" value="Label" />
          <Tags variant="tertiary" value="Label" />
          <Tags variant="warning" value="Label" />
          <Tags variant="default" value="Label" />
        </div>
        <div className="App">
          <Tags variant="primary" disabled value="Label" />
          <Tags variant="secondary" disabled value="Label" />
          <Tags variant="tertiary" disabled value="Label" />
          <Tags variant="warning" disabled value="Label" />
          <Tags variant="default" disabled value="Label" />
        </div>

        <h4>removable Tags</h4>
        <Tags variant="primary-light" isRemovable value="Label" />
        <Tags variant="secondary-light" isRemovable value="Label" />
        <Tags variant="tertiary-light" isRemovable value="Label" />
        <Tags variant="warning-light" isRemovable value="Label" />
        <Tags variant="default-light" isRemovable value="Label" />

        <div className="App">
          <Tags variant="primary" isRemovable value="Label" />
          <Tags variant="secondary" isRemovable value="Label" />
          <Tags variant="tertiary" isRemovable value="Label" />
          <Tags variant="warning" isRemovable value="Label" />
          <Tags variant="default" isRemovable value="Label" />
        </div>
        <div className="App">
          <Tags variant="primary" isRemovable disabled value="Label" />
          <Tags variant="secondary" isRemovable disabled value="Label" />
          <Tags variant="tertiary" isRemovable disabled value="Label" />
          <Tags variant="warning" isRemovable disabled value="Label" />
          <Tags variant="default" isRemovable disabled value="Label" />
        </div>
        <div className="App">
          <h4>hover/enabled</h4>

          <Tags variant="success" isRemovable value="Label" />
          <Tags variant="success" isRemovable disabled value="Label" />
          <Tags variant="success" value="Label" />
        </div>
        <div className="App">
          <h4>skeleton</h4>

          <StyledSkeleton type="tags" />
        </div> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
