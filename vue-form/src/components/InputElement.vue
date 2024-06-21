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
    <div>
        <input
            type="text"
            v-model="searchText"
            placeholder="Search"
            :class="{ 'bg-highlight-green': searchMatches }" 
            class="p-2 m-2 border rounded-lg border-item-navy sm:w-1/2 bg-bg-light text-item-navy"
        />    

        <form @submit.prevent>            
            <div
                v-for="input in filteredFields"
                :key="input.id" 
                class="flex flex-col items-center justify-center w-2/3 mb-2 space-y-2 border-2 rounded-lg sm:space-x-2 sm:space-y-0 border-significant-red"
            >
                <div class="flex justify-between w-full sm:flex-row">            
                    <input 
                        type="text" 
                        v-model="input.inputValue"
                        @input="event => updateField(input.id, event.target.value)"
                        :class="{ 'bg-highlight-green': input.highlight }"
                        class="p-2 m-2 border rounded-lg border-item-navy sm:w-1/2 bg-bg-light text-item-navy"
                    >
                    <button 
                        type="button"
                        @click="() => removeField(input.id)"
                    >
                        <i class="fas fa-trash text-significant-red"></i>
                    </button>
                </div>
                <span class="ml-2 text-s text-item-navy">Vowel Count: {{ input.vowelCount }}</span>
            </div>
            <button
                type="button"
                @click="addField"
                :disabled="inputs.length >= 10"
            >
                Add Field
            </button>
        </form>
    </div>

</template>
