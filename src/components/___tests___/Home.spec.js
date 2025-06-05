import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home", ()=>{
    it("renders proprely", ()=>{
        const wrapper = mount(Home);
        expect(wrapper.text()).toContain("Répertoire des produits");
    })
})