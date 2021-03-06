import axios from 'axios'

const api = axios.create({
     baseURL: "http://localhost:3333"
   // baseURL: "http://10.0.2.2:3333"
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da maquina
 * Android com Emulador: localhost:3333 (fazer proxy com Emulador:$ adb reverse tcp:3333 tcp:3333)  
 * _USED_ -> Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */