import {SEND_EMAIL_BLAST} from "./communication.service-routes"
import { Blast } from "./communicationInterface";
import {authorized} from "../axios"

const baseURL = import.meta.env.VITE_USER_SERVICE_URL;

export const useCommunicationService = () => {
    const sendBlast = (payload: Blast) => {
        return authorized.post(SEND_EMAIL_BLAST, payload, { baseURL });
      };
      return {
        sendBlast
      }
}
