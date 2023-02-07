import {post} from "./api";
import {Empire} from "../types/Empire";

function postOdds(empire: Empire) {
    return post<number>("", empire);
}

export default postOdds;
