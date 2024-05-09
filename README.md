# Project-ARIS
A collection of programs for sensor data processing, machine learning, GPS integration, and hub-to-hub communication in a distributed system.
# Project README

This README is a guide for navigating the many folders and files in this repository. Start at the top and work your way down the list. Importantly, read the NASA SUITS mission description to understand the concepts and intentions of the design. Here is our video: https://youtu.be/8anOoq1N8Tc?feature=shared. Here is the previous team's video: https://youtu.be/KLRMTx8ZErM?feature=shared.

1. **Project-ARIS-main**:
   - Created by the 2022-2023 team: Maryam Aminu Mukhtar, Oussama Ourich, Felice Gabardi, Kalvin Fonseca
   - Their report and code is provided, as well as system diagrams, PCB designs, etc.
   - Focus on Hub1 and Hub2 Pi codes - start with the sh files: Hub1.sh and Hub2.sh. These files execute the necessary Python scripts that allows for the sensor hubs to communicate, as well as initiating the machine learning.
   - Study the ML folder: ML.py and AR_Assistant.py scripts specifically, as well as their data sets.
   - There is server communication! Figure out how each sensor hubs communicate.
   
2. **CS682-ARIS-main**:
   - Created by CS graduate team of 2023: Parth Akre, Karthik Mukka, Pravallika Venkata
   - ARIS-Beacon is the Unity code for the HoloLens
   - LMCC_frontEnd is a template for a central control console for the system
   
3. **SunFounder_PiCar-V**:
   - SunFounder code to run the rover. We utilized the remote_control folder to make the rover move via a server
   - Your new rover will probably have updated code that actually works (we couldn't get the camera running)
   
4. **PCB**:
   - We started to design a PCB to replace the sensor hubs. This could be future work for your team.
  

-*Sal Baez (CE) Co-Team Lead, 
Fisseha Tegegne (EE) Co-Team Lead,
John Scovell (EE) Junior Member
/Team 4*
