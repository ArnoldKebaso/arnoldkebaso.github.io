/*  src/data/projects.js  */

/* ─── image imports ───  (adjust the relative path if this file lives elsewhere) */
import floodImg     from '/assets/flood.jpg';
import mentorImg    from '/assets/mentor.jpg';
import doctorImg    from '/assets/doctor.jpg';
import laundryImg   from '/assets/laundry.jpg';

/* ─── project list ─── */
export const projects = [
  {
    title: 'Flood Monitoring & Alert System',
    blurb: 'Live map + SMS & email alerts; incident-check time ↓50 %',
    img: floodImg,                              // ← use variable
    repo: 'https://github.com/ArnoldKebaso/Disaster_monitoring_and_alert_system',
    live: 'https://flood-monitoring-and-alert-system.netlify.app/',
  },
  {
    title: 'NguvuConnect Mentorship',
    blurb: 'AI-driven mentor matching for Kenyan youth',
    img: mentorImg,
    repo: 'https://github.com/ArnoldKebaso/Nguvu-Connect',
  },
  {
    title: 'Clinic Management System',
    blurb: 'WPF desktop app • 18 modules • MVVM pattern',
    img: doctorImg,
    repo: 'https://github.com/ArnoldKebaso/meditech-healthcare-system',
  },
  {
    title: 'Leesoft Laundry App',
    blurb: 'Java Servlets + M-Pesa STK Push payments',
    img: laundryImg,
    repo: 'https://github.com/ArnoldKebaso/LaundryWebApp_with_Mpesa_STK_Push',
  },
];
