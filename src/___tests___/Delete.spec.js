import { describe, it, expect, test } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";
import Home from "@/pages/Home.vue";
import router from "@/router";

describe("Delete", ()=>{
    it("renders proprely", async ()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([
                    {
                        id: 1,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                    {
                        id: 2,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                    {
                        id: 3,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                ]),
            })
        );
        await router.push('/');
        await router.isReady();
        const wrapper = mount(Home, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        const deletebtn = wrapper.find('#delete1');
        expect(deletebtn.exists()).toBe(true);
        deletebtn.trigger("click");
        await flushPromises();

        const popup = wrapper.find('#delete-popup');
        expect(popup.exists()).toBe(true);
        const cancel = wrapper.find('#cancel');
        expect(cancel.exists()).toBe(true);
        cancel.trigger("click");
        await flushPromises();
        const popupAfter = wrapper.find('#delete-popup');
        expect(popupAfter.exists()).toBe(false);

    })

    test('Delete an element', async ()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([
                    {
                        id: 1,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                    {
                        id: 2,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                    {
                        id: 3,
                        title: "label",
                        price : 5,
                        category : "izg",
                        image: "iyfik",
                        description: "jozeg"
                    },
                ]),
            })
        );
        await router.push('/');
        await router.isReady();
        const wrapper = mount(Home, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        const deletebtn = wrapper.find('#delete1');
        expect(deletebtn.exists()).toBe(true);
        deletebtn.trigger("click");
        await flushPromises();

        const popup = wrapper.find('#delete-popup');
        expect(popup.exists()).toBe(true);
        
        const confirm = wrapper.find('#delete');
        expect(confirm.exists()).toBe(true);
        confirm.trigger("click");
        
        await flushPromises();
        const popupAfter = wrapper.find('#delete-popup');
        expect(popupAfter.exists()).toBe(false);

        const alert = wrapper.find('#alert-border-3')
        expect(alert.exists()).toBe(true);
    })
})