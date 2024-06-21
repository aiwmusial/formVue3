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
      {id: 1, inputValue: "Lorem ipsum", charCount: 55, vowelCount: 15},
      {id: 2, inputValue: "Dolor ipsum", charCount: 22, vowelCount: 11},
      {id: 3, inputValue: "Sit ipsum", charCount: 56, vowelCount: 23},
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
