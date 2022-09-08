import React, {useState} from 'react';
import './App.css';
import InputDropdown from './components/InputDropdown';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {MyTheme} from './theme';
import Menu from './components/Menu';
import {AddAlarm} from '@mui/icons-material';
import useStyles from './App.styles';
import MenuHolder from './components/MenuHolder';
import VerticalStepper from './components/Stepper';
import {Questionnaire} from './components/Stepper/types';
import SubmissionConfirmation from './components/Stepper/SubmissionConfirmation';
import Filter from './components/Filter';
function App() {
    const [mode, setMode] = useState('light');
    const theme = createTheme(MyTheme(mode));
    const options = [
        {value: 'member', label: 'member'},
        {value: 'admin', label: 'admin'},
    ];
    const onAddUser: any = ({searchText, role}: {searchText: string; role: string}) => {
        console.log({searchText, role});
    };
    const myQuestionaire: Questionnaire = {
        slug: 'my questionaire',
        uuid: 'my questionaire',
        questions: [
            {
                uuid: 'question1',
                label: 'question1',
                instructions: 'This question is about you',
                type: 'freeForm',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: true,
                    maxLength: 5,
                },
            },
            {
                uuid: 'question2',
                label: 'question2',
                instructions: 'This question is about you',
                type: 'toggle',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: false,
                },
            },

            {
                uuid: 'question3',
                label: 'question3',
                instructions: 'This question is single select',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                type: 'singleSelection',
                options: [
                    {
                        label: 'option1',
                        value: 'option1',
                    },
                    {
                        label: 'option2',
                        value: 'option2',
                    },
                    {
                        label: 'option3',
                        value: 'option3',
                    },
                ],
                validation: {
                    required: true,
                },
            },
            {
                uuid: 'question4',
                label: 'question4',
                instructions: 'This question is multiselect ',
                type: 'multipleSelection',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                options: [
                    {
                        label: 'option1',
                        value: 'option1',
                    },
                    {
                        label: 'option2',
                        value: 'option2',
                    },
                    {
                        label: 'option3',
                        value: 'option3',
                    },
                ],
                validation: {
                    required: true,
                    minItems: 2,
                    maxItems: 3,
                },
            },
            {
                uuid: 'question5',
                label: 'question5',
                instructions: 'This question is about you',
                type: 'freeForm',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: true,
                    maxLength: 5,
                },
            },
            {
                uuid: 'question6',
                label: 'question6',
                instructions: 'This question is about you',
                type: 'freeForm',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: true,
                    maxLength: 5,
                },
            },
            {
                uuid: 'question7',
                label: 'question7',
                instructions: 'This question is about you',
                type: 'freeForm',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: true,
                    maxLength: 5,
                },
            },
            {
                uuid: 'question8',
                label: 'question8',
                instructions: 'This question is about you',
                type: 'freeForm',
                prompt: 'What is your name? How are you doing? Do you have any questions?',
                validation: {
                    required: true,
                    maxLength: 5,
                },
            },
        ],
    };
    const handleFinish = (val: any) => {
        console.log({val});
    };

    const items = [
        {
            categoryId: 'data-source',
            name: 'data source',
            filters: [
                {
                    label: 'crowdstrike fdr',
                    value: '996599d1-2f4c-4bf9-a3c0-f8f4fc0e0d92',
                },
                {
                    label: 'crowdstrike hosts',
                    value: '30ba3d2c-ce43-400f-8c5a-c22bf96c59f9',
                },
            ],
        },
        {
            categoryId: 'connections',
            name: 'connections',
            filters: [
                {
                    label: '(crowdstrike hosts)',
                    value: '621050ba-7818-4d0c-a46f-7edf1c9bf3a0',
                },
                {
                    label: 'crowdstrike-on-prem',
                    value: '4f081a51-03f1-491b-971d-3874b0e28e09',
                },
            ],
        },
    ];
    const onFilterChange = (val: any) => {
        console.log({val});
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <div className="container">
                        {/* <VerticalStepper
              questionnaire={myQuestionaire}
              onFinish={handleFinish}
              submitBtnText='submit another response'
            >
              <SubmissionConfirmation>
                <div style={{ marginBottom: '10px' }}>
                  children will be rendered here
                </div>
              </SubmissionConfirmation>
            </VerticalStepper> */}
                        <Filter onChange={onFilterChange} options={items} />
                        {/* <InputDropdown
              placeholder="clarisse.anne.medallo@pwc.com.ph"
              options={options}
              onAddUser={onAddUser}
            /> */}
                    </div>
                    {/* <div className="holder">
            <div className="box">
              <Menu
                variant="light"
                showEndIcon
                // dropDownWidth={3}
                width={5}
                placement="bottom"
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              >
                label
              </Menu>

              <Menu
                variant="light"
                startIcon={<AddAlarm />}
                showEndIcon
                width={5}
                placement="bottom"
                // dropDownWidth={3}
                options={["option1", "option2", "option3"]}
                onClick={(option: string | undefined) => console.log(option)}
              >
                option 2
              </Menu>
            </div>
          </div>

          <div className="holder">
            <MenuHolder />
          </div> */}
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
