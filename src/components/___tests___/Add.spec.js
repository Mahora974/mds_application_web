import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Add from "@/components/Add.vue";

describe("Add", ()=>{
    it("renders proprely", ()=>{
        const wrapper = mount(Add);
        expect(wrapper.text()).toContain("Ajouter un produit");
    })

    test('fill completly the form', async () => {
        const wrapper = mount(Add);

        const label = wrapper.find('input[id=label]');
        await label.setValue("Titre");

        const price = await wrapper.find('input[type=number]');
        await price.setValue(5.00);

        const category = wrapper.find('input[id=category]');
        await category.setValue("Catégorie");

        expect(label.element.value).toBe("Titre");
        expect(price.element.value).toBe("5");
        expect(category.element.value).toBe("Catégorie");

        await wrapper.find('button').trigger('click')

        const img = wrapper.find('input');
        await img.setValue("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg");

        const description = wrapper.find('textarea');
        await description.setValue('Une jolie description');

        expect(img.element.value).toBe("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")
        expect(description.element.value).toBe('Une jolie description');

        
        await wrapper.find('#add button').trigger('click')
    })
})