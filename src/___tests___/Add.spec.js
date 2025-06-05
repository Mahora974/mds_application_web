import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Add from "@/pages/Add.vue";
import router from "@/router";

describe("Add", ()=>{
    it("renders proprely", ()=>{
        const wrapper = mount(Add);
        expect(wrapper.text()).toContain("Ajouter un produit");
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
                    id: 21,
                    title: label,
                    price,
                    category,
                    image: img,
                    description
                }),
            })
        );
        const wrapper = mount(Add, {
            global: {
                plugins: [router],
            }
        });

        await wrapper.find('input[id=label]').setValue(label);
        await wrapper.find('input[type=number]').setValue(price);
        await wrapper.find('input[id=category]').setValue(category);

        await wrapper.find('button').trigger('click')
        await wrapper.find('input').setValue(img);

        await wrapper.find('textarea').setValue(description);

        // Check if data if still there when changing pages
        await wrapper.find('#previous').trigger('click')
        const label2 = wrapper.find('input[id=label]');
        expect(label2.element.value).toBe(label);
        
        await wrapper.find('button').trigger('click')
        const description2 = wrapper.find('textarea');
        expect(description2.element.value).toBe(description);

        await wrapper.find('#add').trigger('click');
        await wrapper.find('form').trigger('submit.prevent');
        await wrapper.vm.$nextTick(); 

        expect(wrapper.emitted('submit')).toBeTruthy();
        expect(wrapper.emitted('submit')[0][0]).toMatchObject({
            id: 21,
            title: label,
            price,
            description,
            image: img,
            category
        })
    })
})