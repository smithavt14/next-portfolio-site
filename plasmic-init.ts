import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sNrqjkd9YvaAbsMDk4ZryQ",  // ID of a project you are using
      token: "bBautIbAcW8pbnYOUwA2lK7wCvO9w8OVXkkLr6ZRiFJA7a0sOIQsKTTwXWPDCzajif7svUU2DRSD5iFQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})