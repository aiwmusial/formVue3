<script setup lang="ts">
import { computed } from 'vue';
import { useInputStore } from "@/stores/InputStore";

const inputStore = useInputStore();

const searchText = computed({
    get: () => inputStore.searchText,
    set: (value) => inputStore.updateSearchText(value)
});

const filteredFields = computed(() => inputStore.filteredFields);

const searchMatches = computed(() => 
    inputStore.searchText &&
    inputStore.inputs.some(input => input.inputValue.includes(inputStore.searchText))
);

const { inputs, addField, removeField, updateField } = inputStore;

</script>

<template>
    <div class="flex justify-center mt-6">
        <div class="grid w-3/4 max-w-screen-lg px-4 justify-items-stretch">
            <input
                id="searchBar"
                type="text"
                v-model="searchText"
                placeholder="Search"
                :class="{ 'bg-highlight-green': searchMatches }" 
                class="w-5/6 p-3 m-2 border-2 rounded-lg border-item-navy bg-bg-light text-item-navy justify-self-center focus:outline-none focus:ring"
            />    
            <form @submit.prevent class="w-full mt-4">            
                <div
                    v-for="input in filteredFields"
                    :key="input.id" 
                    class="flex flex-col items-center justify-center mb-2 space-y-2 border-2 rounded-lg sm:space-x-2 sm:space-y-0 border-significant-red"
                >
                    <div class="flex justify-between w-full sm:flex-row">            
                        <input
                            :id="input.id" 
                            type="text" 
                            :value="input.inputValue"
                            @input="event => updateField(input.id, event.target.value)"
                            :class="{ 'bg-highlight-green': input.highlight }"
                            class="w-5/6 p-2 m-2 border-2 rounded-lg border-item-navy bg-bg-light text-item-navy focus:outline-none focus:ring"
                        >
                        <button 
                            type="button"
                            @click="removeField(input.id)"
                            class="m-2"
                        >
                            <i class="text-2xl fas fa-trash text-significant-red hover:text-item-navy"></i>
                        </button>
                    </div>
                    <span class="ml-2 text-s text-item-navy">Vowel Count: {{ input.vowelCount }}</span>
                </div>
                <button
                    type="button"
                    @click="addField"
                    :disabled="inputs.length >= 10"
                    class="p-2 mt-2 font-bold border-2 rounded-lg border-item-navy bg-bg-light text-item-navy hover:text-significant-red hover:border-significant-red"
                >
                    <i class="fas fa-plus-circle"></i>
                    Add Field
                </button>
            </form>
        </div>
    </div>
</template>
