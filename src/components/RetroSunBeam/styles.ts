import {lightPink} from "../../common/commonColors.ts";

import {RetroSunBeamI} from "./types.ts";

export default {
    beam: ({sizeInPixels = 5}: RetroSunBeamI) => {
        return {
            width: '100%',
            height: `${sizeInPixels}px`,
            backgroundColor: `${lightPink}`
        }
    }
}