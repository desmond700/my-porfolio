<script setup lang="ts">
    import { computed, nextTick, ref } from "vue";
    import { MenuDown } from "mdue";
    import { ProjectFilter } from "../../types";
    
    const props = defineProps<{
        filter: ProjectFilter
    }>();

    const emit = defineEmits(["on-filter-change"]);

    const toggleDropdown    = ref(false);
    const currentFilter     = computed(() => props.filter);
    const filterListElement = ref<HTMLElement>();

    
    const toggleFilterList = (isOpen: boolean) => {

        if (filterListElement.value === undefined) return;

        if (isOpen) {
            toggleDropdown.value = true;

            console.log("filterListElement: ", filterListElement)
            nextTick(() => {

                filterListElement.value?.focus();
                filterListElement.value?.click();
            });
        }
        else {
            // toggleDropdown.value = false;
            filterListElement.value.blur();
        }
    }

    const onSelectFilter = (filter: ProjectFilter) => {
        emit("on-filter-change", filter);
        toggleDropdown.value = false;
    }
</script>

<template>
    <div id="filter-container">
        <p id="label">Filter</p>
        <div id="filter-dropdown">
            <div 
                id="dropdown-toggle" 
                @click="toggleFilterList(!toggleDropdown)">
                <p id="label">
                    {{currentFilter}}
                </p>
                <MenuDown id="arrow-icon" />
            </div>
            <div 
                ref="filterListElement"
                v-show="toggleDropdown"
                tabindex="-1"
                @focus="toggleDropdown = true"
                @blur="toggleDropdown = false"
                id="dropdown-content">
                <button
                    class="filter-item" 
                    :class="{active: currentFilter === filter}"
                    v-for="(filter, index) in Object.values(ProjectFilter)"
                    @click="onSelectFilter(filter)"
                    :key="index">
                    <span id="label">{{filter}}</span>
                </button>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #filter-container {
        position: relative;
        display: flex;
        align-items: center;
        height: 28px;
        
        #label {
            margin: 0 10px;
            font-size: 0.9em;
            color: var(--primary-color);
        }

        #filter-dropdown {
            position: relative;
            flex-grow: 1;
            height: 100%;
            width: 150px;

            #dropdown-toggle {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                flex-grow: 1;
                border: 2px solid var(--primary-color);
                cursor: pointer;

                #label {
                    font-size: 0.8em;
                    font-weight: 700;
                    color: var(--primary-color);
                }

                #arrow-icon {
                    margin-left: 5px;
                    font-size: 1.1em;
                    color: var(--primary-color);
                }
            }

            #dropdown-content {
                position: absolute;
                top: 30px;
                left: 0;
                right: 0;
                border: 2px solid var(--primary-color);

                &:focus {
                    outline: 0;
                }

                .active {
                    background-color: var(--secondary-color);

                    #label {
                        color: #fff;
                    }
                }

                .active {
                    background-color: var(--primary-color) !important;
                }

                .filter-item {
                    display: flex;
                    width: 100%;
                    padding: 5px 0;
                    border: none;
                    background-color: #fff;
                    cursor: pointer;

                    &:not(:first-child) {
                        border-top: 1px solid var(--secondary-color);
                    }

                    &:hover {
                       background-color: var(--secondary-color);
                       
                       #label {
                           color: #fff;
                        }
                    }

                    #label {
                        font-size: 0.9em;
                    }
                }
            }
        }
    }
    
</style>