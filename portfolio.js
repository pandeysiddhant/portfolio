import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">
          Siddhant Pandey
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-xl mb-6">
          Data Engineer | Azure Databricks | Apache Spark | CI/CD Automation
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex gap-4">
          <a href="https://www.linkedin.com/in/spandey1234" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="mailto:pandeysiddhant85@gmail.com"><FaEnvelope size={30} /></a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-6" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Data Engineer experienced in designing and developing scalable data solutions on Microsoft Azure.
          Expertise in building pipelines using Azure Databricks, Azure Data Factory, and Apache Spark. Skilled in Python,
          Scala, and SQL with a strong foundation in big data analytics, data warehousing, and CI/CD automation.
          Passionate about leveraging Generative AI and automation tools to enhance productivity.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16 px-6" id="skills">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          {["Python", "PySpark", "Scala", "SQL", "Apache Spark", "Jenkins", "Terraform", "Azure Databricks", "ADF", "Unity Catalog", "Delta Lake", "Event Hubs"].map(skill => (
            <div key={skill} className="p-4 bg-white shadow rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto py-16 px-6" id="experience">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Data Engineer – Tata Consultancy Services</h3>
            <p className="text-gray-500">June 2022 – Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developed and optimized scalable data pipelines using Azure Databricks and ADF.</li>
              <li>Implemented Delta Live Tables for real-time data processing, reducing processing time by 35%.</li>
              <li>Applied Spark optimizations reducing compute costs by 25%.</li>
              <li>Automated deployments via Jenkins CI/CD pipelines integrated with Git.</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Intern – Tata Consultancy Services</h3>
            <p className="text-gray-500">Feb 2022 – May 2022</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developed CI/CD pipelines for Spring Boot application deployment on Azure App Service.</li>
              <li>Automated cloud infrastructure provisioning with Terraform.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 max-w-5xl mx-auto py-16 px-6" id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">ADF Resource Management via Databricks</h3>
            <p className="text-gray-600">Automated Azure Data Factory resource management using Databricks notebooks and REST APIs, removing UI dependency and enabling faster deployments.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Real-time Weather Data Pipeline</h3>
            <p className="text-gray-600">Designed ETL pipeline using Open Weather APIs and Databricks for structured storage and continuous streaming updates.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-5xl mx-auto py-16 px-6" id="certifications">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 text-center space-y-1">
          <li>Databricks Certified: Data Engineer Associate</li>
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
          <li>Microsoft Certified: Azure Data Fundamentals (DP-900)</li>
          <li>Microsoft Certified: Azure Data Engineer Associate (DP-203)</li>
          <li>Certified Data Science Training Program – Internshala</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Email me at <a href="mailto:pandeysiddhant85@gmail.com" className="text-indigo-600 hover:underline">pandeysiddhant85@gmail.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/spandey1234" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="mailto:pandeysiddhant85@gmail.com"><FaEnvelope size={30} /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Siddhant Pandey. All rights reserved.
      </footer>
    </div>
  );
}
