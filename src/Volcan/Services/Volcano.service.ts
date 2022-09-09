import http from "../../config/axios.config";
import { Volcano } from "../Models/Volcano";

class VolcanoService {

    getVolcanoes(){
        return http.get<Volcano[]>('/volcanoes');
    }

    getVolcanoById(id: string){
        return http.get(`/volcanoes/${id}`);
    }

}

export default Object.freeze(new VolcanoService());
