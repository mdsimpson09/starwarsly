/**
 * This file contains the action creator for resetting the application state and clearing all exploration data.
 */
import { RESET_ALL } from "./types";


function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }