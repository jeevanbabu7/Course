import React from 'react';
import SyllabusCard from '../components/SyllabusCard';

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

const SyllabusPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Course Syllabus</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive IoT and Embedded Systems curriculum is designed to provide you with hands-on experience and practical skills through four specialized modules.
          </p>
        </div>
        
        <div className="space-y-6">
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
        
        <div className="mt-12 text-center">
          <a 
            href="https://drive.google.com/file/d/112WrCukPRbl3_zwXTTJF2OIJ5IUcIoOo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Download Complete Syllabus
          </a>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
