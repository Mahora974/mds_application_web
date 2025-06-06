import { describe, it, expect } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";
import router from "@/router";
import Edit from "@/pages/Edit.vue";

describe("Edit", ()=>{
    it("renders proprely", async ()=>{

        const label = 'Titre';
        const price = 5;
        const category = "Catégorie";
        const img = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
        const description = 'Lorem ipsum dolor sit amet';

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    id: 1,
                    title: label,
                    price,
                    category,
                    image: img,
                    description
                }),
            })
        );
        const wrapper = mount(Edit, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).toContain("Modifier un produit");
        
        const labelInput = wrapper.find('input[id=label]');
        expect(labelInput.element.value).toBe(label);
    })



    test('fill completly the form', async () => {

        const label = 'Titre';
        const price = 5;
        const category = "Catégorie";
        const img = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
        const description = 'Lorem ipsum dolor sit amet';

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    id: 1,
                    title: label,
                    price,
                    category,
                    image: img,
                    description
                }),
            })
        );
        const wrapper = mount(Edit, {
            global: {
                plugins: [router],
            }
        });

        await wrapper.find('input[id=label]').setValue(label);
        await wrapper.find('input[type=float]').setValue(price);
        await wrapper.find('input[id=category]').setValue(category);
        await wrapper.find('input').setValue(img);
        await wrapper.find('textarea').setValue(description);
        await wrapper.find('#edit').trigger('click');
        await wrapper.find('form').trigger('submit.prevent');
        await wrapper.vm.$nextTick(); 

        expect(wrapper.emitted('submit')).toBeTruthy();
        expect(wrapper.emitted('submit')[0][0]).toMatchObject({
            id: 1,
            title: label,
            price,
            description,
            image: img,
            category
        })
    })
})