import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Symbiantales2021  from '../../Assets/NewsLetter/Symbiantales2021.pdf'
import Symbiantales2022  from '../../Assets/NewsLetter/Symbiantales2022.pdf'

const InformationTechnology = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4 style={{paddingTop:'10px'}}>Imformation Technology</h4>
        <hr type="solid"></hr>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Vission & Mission" value="1" />
                <Tab label="About Us" value="2" />
                <Tab label="Faculty" value="3" />
                <Tab label="curriculum" value="4" />
                <Tab label="News-letter" value="5" />

              </TabList>
            </Box>
            <TabPanel value="1">
              <b>Vision</b>
              <p>Create a sustainable academic environment to produce highly competent computer professionals of the future</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b> To expose students to latest tools and technologies in computing.  </li>
                  <li><b>M2.</b> To foster the professional development of students by   providing excellence education.</li>
                  <li><b>M3.</b> To Adapt rapid advancements in computing by engaging students in the lifelong learning.</li>
                  <li><b>M4.</b> To inculcate sound ethical,moral and social values amongst students for benefit of the society.</li>
                </ul>
              </p>
              <b>Program Educational Objectives (PEOs)</b>
              <p>
                <ul type="none">
                  <li><b> PEO1:</b>Identify, design and solve computing problems by applying  knowledge in Computer engineering.</li>
                  <li><b>PEO2:</b>Promote lifelong learning by integrating academic knowledge and practical applications.</li>
                  <li><b>PEO3:</b>Depict effective team work and practical skills   for holistic development.</li>
                </ul>
              </p>
              <b>Program Specific Outcomes (PSOs)</b>
              <p>
                <ul type="none">
                  <li><b>PSO1:</b>Demonstrate the fundamental knowledge in the areas of Operating system, Web Technology, Microprocessor based system and IOT by applying programming skills and developing applications.</li>
                  <li><b>PSO2: </b>Administer and manage Open source, Networking, Security and Database domains to enhance student growth.</li>
                </ul>
              </p>
    
            </TabPanel>
            <TabPanel value="2">
              <p>The Courses is Three Years Full Time, Un-aided, Non-Sandwich Semester - Pattern having Multipoint Entry & Credit System. The emphasis of the course is on Computer Education at a Technical Level covering Knowledge of Software : Programming Languages, System Analysis and Design, Database, Concepts of Operating System, Hardware : Maintenance & Servicing of Electronic Circuits, PC Architecture, Basics of Computer Technology, Maintenance & Servicing of Computer, Peripheral Devices and Instruments at higher semesters along with basic Science Subjects - Mathematics, Physics, Communication Skill / English – in first and second semester. The Students learn the fundamentals of Computer Maintenance and Servicing leading to become.
              <ul>
                <li>A Service Technician</li>
                <li>Assistant Programmer in Software Industry</li>
                <li>Computer Maintenance Technician</li>
                <li>A Computer Programmer</li>
              </ul>
              </p>
            </TabPanel>

            <TabPanel value="3">
            <table style={{width:'70%'}}>
                <tr>
                  <th>Name of the Staff</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                </tr>
                <tr>
                  <td>Mrs. N.G. Kadukar</td>
                  <td>Vice Principal, Head of Department</td>
                  <td>B.E., M.Tech.</td>
                </tr>
                <tr>
                  <td>Shri A.B. Dongaonkar</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Mrs. S.K. Naik</td>
                  <td>Lecturer</td>
                  <td>B.E., M.Tech.</td>
                </tr>
                <tr>
                  <td>Mrs. R.S. Patwardhan</td>
                  <td>Lecturer</td>
                  <td>B.E., M.Tech.</td>
                </tr>
                <tr>
                  <td>Shri M.R. Solanki</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri P.D. Rathod</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Mrs. A.V. More</td>
                  <td>Lecturer</td>
                  <td>B.E.</td>
                </tr>
                <tr>
                  <td>Mrs. K.V. Bhat</td>
                  <td>Lecturer</td>
                  <td>B.E.</td>
                </tr>
                <tr>
                  <td>Shri Ajinkya Jogale</td>
                  <td>Lecturer</td>
                  <td>M.Sc, B.ED</td>
                </tr>
              </table>
            </TabPanel>

            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">
            <h5>Symbian-Tales 2021</h5>
              <a href={Symbiantales2021}>Click Here</a>
            <p></p>
            <h5>Symbian-Tales 2022</h5>
              <a href={Symbiantales2022}>Click Here</a>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default InformationTechnology