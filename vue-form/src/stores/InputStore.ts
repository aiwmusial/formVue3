import { defineStore } from 'pinia'

interface InputField {
  id: Number, 
  inputValue: String, 
  charCount: Number, 
  vowelCount: Number,
  highlight?: Boolean
}

export const useInputStore = defineStore('inputStore', {
  state: () => ({
    inputs: [
      {id: Date.now(), inputValue: "", charCount: 0, vowelCount: 0},
      {id: Date.now(), inputValue: "", charCount: 0, vowelCount: 0},
      {id: Date.now(), inputValue: "", charCount: 0, vowelCount: 0},
    ] as InputField[],
    searchText: "",
  }),
  getters: {
    filteredFields(state): InputField[] {
      if(!state.searchText) return state.inputs;
      return state.inputs.map(input => ({
        ...input,
        highlight: input.inputValue.includes(state.searchText)
      }))
    }

  },
  actions: {
    addField() {
      if(this.inputs.length < 10) {
        const newField = {
                            id: Date.now(), 
                            inputValue: "",
                            charCount: 0,
                            vowelCount: 0
                          };
        this.inputs.push(newField);
      }
    },
    removeField(id:Number) {
      if(this.inputs.length >1) {
        this.inputs = this.inputs.filter(input => input.id !== id);
      }
    },
    updateField(id:Number, value:String) {
      const field = this.inputs.find(input => input.id === id);
      if(field) {
        field.inputValue = value;
        field.charCount = value.length;
        field.vowelCount = (value.match(/[aeiou]/gi) || []).length;
      }
    },
    updateSearchText(value: String) {
      this.searchText = value;
    }
  }
})
