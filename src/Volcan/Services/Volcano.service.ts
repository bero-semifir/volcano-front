import http from "../../config/axios.config";
import { Volcano } from "../Models/Volcano";

class VolcanoService {

    getVolcanoes(){
        return http.get<Volcano[]>('/volcanoes');
    }

}

export default Object.freeze(new VolcanoService());
