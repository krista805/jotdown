import { defineStore } from "pinia"

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        },
        {
          id: "id2",
          content: "This is a shorter note",
        },
        {
          id: "id3",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur alias, quidem placeat repellendus libero, magnam quibusdam amet, reiciendis animi eos molestiae est soluta cupiditate obcaecati eligendi. Expedita beatae incidunt possimus?",
        },
      ],
    }
  },
})
