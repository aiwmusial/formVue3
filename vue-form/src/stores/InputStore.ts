import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

interface InputField {
  id: string, 
  inputValue: string, 
  charCount: number, 
  vowelCount: number,
  highlight?: boolean
}

export const useInputStore = defineStore('inputStore', {
  state: () => ({
    inputs: [
      {id: uuidv4(), inputValue: "", charCount: 0, vowelCount: 0},
      {id: uuidv4(), inputValue: "", charCount: 0, vowelCount: 0},
      {id: uuidv4(), inputValue: "", charCount: 0, vowelCount: 0},
    ] as InputField[],
    searchText: "",
  }),
  getters: {
    filteredFields(state): InputField[] {
      if(!state.searchText) return state.inputs;
      const lowerCaseSearchText = state.searchText.toLowerCase();
      return state.inputs.map(input => ({
        ...input,
        highlight: input.inputValue.toLowerCase().includes(lowerCaseSearchText)
      }))
    }

  },
  actions: {
    addField() {
      if(this.inputs.length < 10) {
        const newField = {
                            id: uuidv4(), 
                            inputValue: "",
                            charCount: 0,
                            vowelCount: 0
                          };
        this.inputs.push(newField);
      }
    },
    removeField(id:string) {
      if(this.inputs.length >1) {
        this.inputs = this.inputs.filter(input => input.id !== id);
      }
    },
    updateField(id:string, value:string) {
      const field = this.inputs.find(input => input.id === id);
      if(field) {
        field.inputValue = value;
        field.charCount = value.length;
        field.vowelCount = (value.match(/[aeiou]/gi) || []).length;
      }
    },
    updateSearchText(value: string) {
      this.searchText = value;
    }
  }
})
