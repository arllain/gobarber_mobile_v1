import axios from 'axios';

/*
 baseURL  configuration

 for android emulator: baseURL: 'http://10.0.2.2:3333',
 for usb: baseURL: 'your netowork ip:3333',
 */
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
