const { expect, browser, $ } = require('@wdio/globals')
const { wdi5 } = require('wdio-ui5-service')

describe('View Setting Dialog', () => {
    it('the button to open the view setting dialog exists', async () => {
        const oSelector = {
            forceSelect: true,
            selector: {
                controlType: "sap.m.Button",
            }
        }
        const control = await browser.asControl(oSelector)
        await control.press()
        expect(await control.getText()).toEqual("Open View Settings Dialog")
    }),
        it('the decending radio button from the list is selected', async () => {
            const oSelector = {
                forceSelect: true,
                selector: {
                    controlType: "sap.m.RadioButton",
                    ancestor: {
                        controlType: "sap.m.StandardListItem",
                        properties: {
                            title: "Descending"
                        }
                    }
                }
            }
            const control = await browser.asControl(oSelector)
            await control.press()
            expect(await control.getSelected()).toBe(true)
        })
})