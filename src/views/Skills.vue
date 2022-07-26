<script lang="ts">
export default {
  name: "SkillsItem",
};
</script>
<script setup lang="ts">
import SkillGroup from "../components/skills/SkillGroup.vue";
import SkillGroupItem from "../components/skills/SkillGroupItem.vue";
import skillsJson from "../assets/projects_data/sklls_data.json";
import type { SkillDataRecord } from "@/types";

const skillsData = skillsJson as SkillDataRecord;
</script>

<template>
  <div id="skills-page">
    <p id="skills-label">My Skills Level in Languages and Frameworks</p>

    <skill-group
      v-for="(property, key) in Object.keys(skillsData)"
      :label="property"
      :key="key"
    >
      <skill-group-item
        v-for="(skill, key) in skillsData[property]"
        :label="skill.name"
        :percentage="skill.knowledge"
        :image-src="skill.imageName"
        :key="key"
      />
    </skill-group>
  </div>
</template>

<style lang="scss" scoped>
#skills-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 80%;
  margin: 50px 30px 0 30px;

  #skills-label {
    margin: 20px 0;
    text-align: left;
    font-size: 2.2em;
    font-weight: bold;
    color: var(--secondary-color);
  }
}
</style>
