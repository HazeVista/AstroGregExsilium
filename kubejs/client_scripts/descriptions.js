ItemEvents.tooltip(event => {
    
    //#region tooltip design guide
    /*
    *   
    *   Reference this spreadsheet for information on formatting text color and style in Minecraft:
    *   https://docs.google.com/spreadsheets/d/1Wb28oe5-VFauhTez_u2o7bBstofGxM35DeMtv6cvrQY/edit?usp=sharing
    *      
    *   Adding a space between your code and text will create a space on the tooltip. Use that knowledge accordingly.
    *   §o§7 is the default light gray code I personally use for most tooltips.
    * 
    */
    //#endregion

    
    
    //#region multiblocks
    /*
    *   Multiblock Tooltip Builder
    *   how to use:
    *    
    *       multiTooltip(event, 'multiblock_id', [
    *           {text: '§o§7Brief witty line!'},            You can add one or multiple lines like this, defaults to line 1
    *           {text: '§o§7Some important description.'}   A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       multiTooltip(event, 'multiblock_id', [
    *           {line: 4, text: '§o§7Brief witty line!'}    This will add your tooltip to a specific line. In this example, line 4
    *       ])                                              You can continue this with more lines as well
    * 
    */

    //multiblock tooltip builder
    function multiTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, Text.of(tooltip.text))
                } else {
                    text.add(Text.of(tooltip.text))
                }
            })
        })
    }
    
    //add tooltips below
    multiTooltip(event, 'gtceu:greenhouse', [
        { text: '§o§7Electric Garden!' }
    ])

    multiTooltip(event, 'gtceu:conservatory', [
        { text: '§o§7Electric Plantation!' },
        { text: '§o§7Can parallelize with Parallel Control Hatches' }
    ])

    multiTooltip(event, 'gtceu:aether_engine', [
        { line: 3, text: 'Converts §3Æther§r into EU' }
    ])
    //#endregion


    
    //#region singleblocks
    /*
    *   Singleblock Tooltip Builder
    *   how to use:
    *       
    *   'machine_id': {
    *       'lv,mv,hv,ev': '§o§7Blah blah blah something witty',
    *       'iv,luv,zpm': '§o§7Something witty and cool',
    *       'uv': '§o§7This tooltip has aura'
    *   }
    */
    const singleTooltip = {
        'mana_infuser': {
            'lv,mv,hv,ev': '§o§7Who needs mana pools?',
            'iv,luv,zpm': '§o§7Base Botania is for chumps anyways',
            'uv': '§o§7Mechanized Mana Manipulation Matrix'
        },
        'manafield_simulator': {
            'lv,mv,hv,ev': '§o§7Produces Mana, Allegedly',
            'iv,luv,zpm': '§o§7Miniature Mystical Powerhouse',
            'uv': '§o§7The Arcane, Reduced to Math'
        },
        'culinary_fabricator': {
            'lv,mv,hv,ev': '§o§7Chef in a Box',
            'iv,luv,zpm': '§o§7Robotic Restaurant',
            'uv': '§o§7Sustanance at Scale'
        },
        'beverage_processor': {
            'lv,mv,hv,ev': '§o§7Barista in a Box',
            'iv,luv,zpm': '§o§7Robotic Refreshment',
            'uv': '§o§7Hydration at Scale'
        }
    }

    //tooltip builder
    Object.entries(singleTooltip).forEach(([machine, tierGroups]) => {
        Object.entries(tierGroups).forEach(([tiers, tooltip]) => {
            tiers.split(',').forEach(tier => {
                event.addAdvanced(`gtceu:${tier}_${machine}`, (item, advanced, text) => {
                    text.add(1, Text.of(tooltip));
                })
            })
        })
    })

    //unique
    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.of('§o§7A Great Source of Water!'))
        text.add(2, Text.of('§o§7This machine does not require power to operate.'))
    })
    //#endregion



    //#region items with lore
    /*
    *   Lore Item Tooltip Builder
    *   how to use:
    *   
    *       
    *       loreTooltip(event, 'item_id', [
    *           {text: '§o§7Something interesting!'},       You can add one or multiple lines like this, defaults to line 1
    *           {text: '§o§7An important description.'}     A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       loreTooltip(event, 'item_id', [
    *           {line: 4, text: '§o§7Something interesting!'}    This will add your tooltip to a specific line. In this example, line 4
    *       ])                                                   You can continue this with more lines as well
    * 
    */

    //lore tooltip builder
    function loreTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, Text.of(tooltip.text))
                } else {
                    text.add(Text.of(tooltip.text))
                }
            })
        })
    }

    //add tooltips below
    loreTooltip(event, 'farmersdelight:bacon_sandwich', [
        {text: '§o§7Mmmmm... Tasty!§r§7 - Ubit3y'}
    ])
    //#endregion    



    //#region items with tips
    /*
    *   Item Tips Tooltip Builder
    *   how to use:
    *   
    *       
    *       tipTooltip(event, 'item_id', [
    *           {text: '§o§7A helpful tip'},                You can add one or multiple lines like this, defaults to line 1
    *           {text: '§o§7An important description.'}     A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       tipTooltip(event, 'item_id', [
    *           {line: 4, text: '§o§7A helpful tip'}        This will add your tooltip to a specific line. In this example, line 4
    *       ])                                              You can continue this with more lines as well
    * 
    */
 
    //tips tooltip builder
    function tipTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, Text.of(tooltip.text))
                } else {
                    text.add(Text.of(tooltip.text))
                }
            })
        })
    }

    //add tooltips below

    //#endregion

})