import React from 'react';
import SyllabusCard from './SyllabusCard';

const syllabusData = [
  {
    moduleNumber: 1,
    title: "Sensor/Actuator Integration",
    content: "Learn about digital and analog I/O sensors, PWM, DC motors, servo motors, and communication protocols like I2C, SPI, and UART sensors.",
    projects: [
      "IoT AC Energy Meter with ESP32 & HMI Display",
      "ESP32 control 4-channel relay module with IR"
    ]
  },
  {
    moduleNumber: 2,
    title: "Communication Protocols",
    content: "Explore various communication protocols including Zigbee, Bluetooth, LoRaWAN, WiFi, HTTP, MQTT, web server, and cloud computing.",
    projects: [
      "AD8495 K-Type Thermocouple ESP32 Web Server",
      "ESP32 as access point and server"
    ]
  },
  {
    moduleNumber: 3,
    title: "App-Based Projects",
    content: "Develop mobile applications using platforms like Blynk, MIT App Inventor, and QI Creator.",
    projects: [
      "Mobile app for IR based robot",
      "Mobile app for Home automation"
    ]
  },
  {
    moduleNumber: 4,
    title: "Robotic & Autonomous Vehicle Projects",
    content: "Build advanced robotic and autonomous vehicle projects incorporating machine learning and AI.",
    projects: [
      "Autonomous vehicle with ML and AI",
      "Surveillance car"
    ]
  }
];

const Syllabus = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Course Syllabus</h2>
      <div className="space-y-4">
        {syllabusData.map((module) => (
          <SyllabusCard
            key={module.moduleNumber}
            moduleNumber={module.moduleNumber}
            title={module.title}
            content={module.content}
            projects={module.projects}
          />
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
