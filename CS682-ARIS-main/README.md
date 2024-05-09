# Project 5: Augmented Reality Assistant for Astronauts

**Code Documentation:** [ARIS-Beacon, LMCC_frontEnd, SensorData](https://github.com/Pravallikakirani/CS682-ARIS)

## Problem Statement
Design and implement innovative user interface solutions for advanced spacesuit systems and mission control consoles, enhancing the efficiency and safety of extravehicular activities (EVAs) on Mars. 
Developing intuitive software interfaces for head-mounted displays (HMDs) and Local Mission Control Consoles (LMCCs). The project aims to support NASA's Artemis missions by enabling increased autonomy for astronauts, reducing communication delays, and optimizing the execution of complex tasks during Mars exploration missions.

## Introduction
We've developed a User Interface for the Microsoft Hololense 2 that aims at assisting the user/astronaut to traverse through the challenging Extra Vehicular Space walks whilst providing critical biometrics and suit information and aims to aid the astronat's ability to perform various tasks with ease.

**Hololense 2 Implementation :** [Google Drive Link](https://drive.google.com/file/d/1xPKFtks9xE9g1aMP5fWEGNC-l_SsCOZ9/view?usp=sharing)

## Sensors
In our project, we have used a temperature sensor to monitor the user's body temperature by setting up a Raspberry Pi server.

### Steps:How the sensors work
1. Hardware Connections:
Connect VDD on MCP3008 to Raspberry Pi 3.3V (Pin 1 or Pin 17).
Connect VREF on MCP3008 to Raspberry Pi 3.3V (same as VDD).
Connect AGND on MCP3008 to Raspberry Pi GND (Pin 6, Pin 9, Pin 14, Pin 20, or Pin 25).
Connect CLK on MCP3008 to Raspberry Pi SCLK (GPIO 11, Pin 23).
Connect DOUT on MCP3008 to Raspberry Pi MISO (GPIO 9, Pin 21).
Connect DIN on MCP3008 to Raspberry Pi MOSI (GPIO 10, Pin 19).
Connect CS/SHDN on MCP3008 to Raspberry Pi CE0 (GPIO 8, Pin 24).
Connect DGND on MCP3008 to Raspberry Pi GND.
2. Use Raspberry Pi Configuration tool or raspi-config to enable the SPI interface on your Raspberry Pi.
3. Install the necessary Python libraries for MCP3008. For example, you can use Adafruit's MCP3008 library.
4. Set up the Rpi Server from - `Rpi_server.py`
5. Import the py script into your Rpi Environment - `temperature.py`
6. After collecting the various sensor data, use the Telemetery Server (TSS) that NASA will provide and set it up with unity so that the data can be sent directly on the hololense.

## LMCC :
Primary Role and Function:
The LMCC serves as a ground-based command center for managing EVAs, primarily on Martian terrain.
It functions as the central hub for communication, data analysis, and operational control between astronauts and various mission assets like the Rover.
User Interface Design and Development:
College students participating in the NASA SUITS challenge are tasked with designing and implementing the user interface (UI) for the LMCC.
The UI design focuses on intuitiveness, efficiency, and the ability to handle complex data streams and control commands for EVA operations.

### Steps:How LMCC Works
The LMCC acts like a server and communicates with HMD. 
1. Task List: View and manage tasks for the LMCC project.
2. Astronaut Details: Monitor the status of astronauts, including oxygen levels, pressure, and power.
3. Google Maps:Visualize the scientific assets (Rover, HoloLens) location on Google Maps with draggable markers.
4. Open the `home.html` file in your preferred web browser. Explore the task list, astronauts details, and the Google Maps section. 
5. Use the `Add Task`section to add new tasks to the task list. 
6. Implementation of realsense camera feed.
i.  We have worked on Intel Realsense D435i camera feed. 
ii. Hardware Setup: Ensure the RealSense camera is properly connected to your computer. Use a compatible USB port for optimal performance.
iii. After setting up the RealSense camera run the code `Real_sense.py`. 
iv. We can see 2 camera pop-ups. (one is your regular camera and other is your colored image).

## HMD- Hololense 2
The Head-Mounted Display (HMD) is a critical component of the NASA SUITS project, designed to augment the extravehicular activity (EVA) experience for astronauts on Mars. This wearable device will display various types of information directly in the astronaut's field of vision, utilizing augmented reality (AR) technology.

### Steps: How to Setup the Hololense for Future Development
1. Install Unity.
2. Install Microsoft Mixed Reality Toolkit.
3. Install Microsoft Visual Studio
4. Import project `ARIS-Beacon` from https://github.com/Pravallikakirani/CS682-ARIS (Zip File)
and unzip thefiles.
5. Open project in Unity and select Visual Studio Version compatible with the project.
6. Make changes by adding game-objects and attach their C# scripts for functionality or edit existing scripts presentin folder `Assets/scripts`. All the C# scripts are properly documented with comments and functionality for your understanding
7. In Unity go to File
8. Build Settings
9. Select Platform- i.Universal Windows Platform
ii.  Architecture- ARM 64-bit
iii.  Build Type D3D Project
iv.  Target SDK= LAtest Installed
v.  Platform Version - Latest
vi. Visual Studio version- LAtest
vii. Build and run on- remote Device
viii. Build Config- Release
10. Then Build the project in a folder, It will create a VS solution - ARIS-Beacon.sln
11. In the main tab select Release, ARM64 and Remote Machine
12. Meanwhile- Setup your Hololens with school credentials and calibrate it for the end-user.
13. Go to Debug Settings - Debugging- Machine name
14. In machine Name - enter the IP Address of the Hololens by asking it “Whats my IP address”
Type the Machinename as that IP address.
15. Debug- Start Debugging- If your code debugs successfully, It will start up on the Hololens and you can interact with the project


